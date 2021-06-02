// testing custom hooks
// 💯 fake component
// http://localhost:3000/counter-hook

import {render, act} from '@testing-library/react'
import useCounter from '../../components/use-counter'

test('exposes the count and increment/decrement functions', () => {
  let result: ReturnType<typeof useCounter>
  function TestComponent() {
    result = useCounter()
    return null
  }
  render(<TestComponent />)
  // @ts-expect-error ts(2454) 🤷‍♂️
  expect(result.count).toBe(0)
  act(() => result.increment())
  // @ts-expect-error ts(2454) 🤷‍♂️
  expect(result.count).toBe(1)
  act(() => result.decrement())
  // @ts-expect-error ts(2454) 🤷‍♂️
  expect(result.count).toBe(0)
})
