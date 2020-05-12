// testing custom hooks
// 💯 testing a hook via an example
// http://localhost:3000/undo

import React from 'react'
import {render, screen, fireEvent} from '@testing-library/react'
import UseUndoExample from '../../examples/undo'

test('allows you to undo and redo', () => {
  render(<UseUndoExample />)

  const present = screen.getByText(/present/i)
  const past = screen.getByText(/past/i)
  const future = screen.getByText(/future/i)
  const input = screen.getByLabelText(/new value/i)
  const submit = screen.getByRole('button', {name: /submit/i})
  const undo = screen.getByText(/undo/i)
  const redo = screen.getByText(/redo/i)

  // assert initial state
  expect(undo).toBeDisabled()
  expect(redo).toBeDisabled()
  expect(past).toHaveTextContent(`Past:`)
  expect(present).toHaveTextContent(`Present: one`)
  expect(future).toHaveTextContent(`Future:`)

  // add second value
  input.value = 'two'
  fireEvent.click(submit)
  // assert new state
  expect(undo).not.toBeDisabled()
  expect(redo).toBeDisabled()
  expect(past).toHaveTextContent(`Past: one`)
  expect(present).toHaveTextContent(`Present: two`)
  expect(future).toHaveTextContent(`Future:`)

  // add third value
  input.value = 'three'
  fireEvent.click(submit)
  // assert new state
  expect(undo).not.toBeDisabled()
  expect(redo).toBeDisabled()
  expect(past).toHaveTextContent(`Past: one, two`)
  expect(present).toHaveTextContent(`Present: three`)
  expect(future).toHaveTextContent(`Future:`)

  // undo
  fireEvent.click(undo)
  // assert "undone" state
  expect(undo).not.toBeDisabled()
  expect(redo).not.toBeDisabled()
  expect(past).toHaveTextContent(`Past: one`)
  expect(present).toHaveTextContent(`Present: two`)
  expect(future).toHaveTextContent(`Future: three`)

  // undo again
  fireEvent.click(undo)
  // assert "double-undone" state
  expect(undo).toBeDisabled()
  expect(redo).not.toBeDisabled()
  expect(past).toHaveTextContent(`Past:`)
  expect(present).toHaveTextContent(`Present: one`)
  expect(future).toHaveTextContent(`Future: two, three`)

  // redo
  fireEvent.click(redo)
  // assert undo + undo + redo state
  expect(undo).not.toBeDisabled()
  expect(redo).not.toBeDisabled()
  expect(past).toHaveTextContent(`Past: one`)
  expect(present).toHaveTextContent(`Present: two`)
  expect(future).toHaveTextContent(`Future: three`)

  // add fourth value
  input.value = 'four'
  fireEvent.click(submit)
  // assert final state (note the lack of "third")
  expect(undo).not.toBeDisabled()
  expect(redo).toBeDisabled()
  expect(past).toHaveTextContent(`Past: one, two`)
  expect(present).toHaveTextContent(`Present: four`)
  expect(future).toHaveTextContent(`Future:`)
})
