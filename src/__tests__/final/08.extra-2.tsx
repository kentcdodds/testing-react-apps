// testing custom hooks
// 💯 setup function
// http://localhost:3000/counter-hook

import {render, act} from '@testing-library/react'
import useCounter from '../../components/use-counter'

type UseCounterArgs = Parameters<typeof useCounter>[0]
function setup({initialProps}: {initialProps?: UseCounterArgs} = {}) {
  type ReturnVal = ReturnType<typeof useCounter>
  type Ref = {current: ReturnVal}
  let result: {current: ReturnVal | null} = {current: null}
  function TestComponent(props: UseCounterArgs) {
    result.current = useCounter(props)
    return null
  }
  render(<TestComponent {...initialProps} />)

  return result as Ref
}

test('exposes the count and increment/decrement functions', () => {
  const result = setup()
  expect(result.current.count).toBe(0)
  act(() => result.current.increment())
  expect(result.current.count).toBe(1)
  act(() => result.current.decrement())
  expect(result.current.count).toBe(0)
})

test('allows customization of the initial count', () => {
  const result = setup({initialProps: {initialCount: 3}})
  expect(result.current.count).toBe(3)
})

test('allows customization of the step', () => {
  const result = setup({initialProps: {step: 2}})
  expect(result.current.count).toBe(0)
  act(() => result.current.increment())
  expect(result.current.count).toBe(2)
  act(() => result.current.decrement())
  expect(result.current.count).toBe(0)
})
