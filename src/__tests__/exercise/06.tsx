// mocking Browser APIs and modules
// http://localhost:3000/location

import {render, screen, act} from '@testing-library/react'
import Location from '../../examples/location'

// 🐨 create your fake version of the geolocation API here:
// - call it "mockedGeolocation"
// - it's an object with a property called "getCurrentPosition"
// - getCurrentPosition is a function which you can just set to jest.fn()
// - we'll set the mock implementation of that function in our test below.

// 🐨 In a beforeAll hook (https://jestjs.io/docs/setup-teardown#one-time-setup)
// set the window.navigator.geolocation value to your mockedGeolocation
// 🦺 You're going to get a "ts(2540)" error if you simply try to assign it.
// To avoid this, use Object.defineProperty (https://mdn.io/defineProperty)

// 💰 I'm going to give you this handy utility function
// it allows you to create a promise that you can resolve/reject on demand.
function deferred() {
  let resolve: (value?: unknown) => void, reject: (reason?: unknown) => void
  const promise = new Promise((res, rej) => {
    resolve = res
    reject = rej
  })

  return {promise, resolve, reject}
}
// 💰 Here's an example of how you use this:
// const {promise, resolve, reject} = deferred()
// promise.then(() => {/* do something */})
// // do other setup stuff and assert on the pending state
// resolve()
// await promise
// // assert on the resolved state

test('displays the users current location', async () => {
  // 🐨 create a fakePosition object that has an object called "coords" with latitude and longitude
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/GeolocationPosition
  //
  // 🐨 create a deferred promise here
  //
  // 🐨 Now we need to mock the geolocation's getCurrentPosition function
  // To mock something you need to know its API and simulate that in your mock:
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition
  //
  // here's an example of the API:
  // function success(position) {}
  // function error(error) {}
  // navigator.geolocation.getCurrentPosition(success, error)
  //
  // 🐨 so call mockImplementation on getCurrentPosition
  // 🐨 the first argument of your mock should accept a callback
  // 🐨 you'll call the callback when the deferred promise resolves
  // 💰 promise.then(() => {/* call the callback with the fake position */})
  //
  // 🐨 now that setup is done, render the Location component itself
  //
  // 🐨 verify the loading spinner is showing up
  // 💰 tip: try running screen.debug() to know what the DOM looks like at this point.
  //
  // 🐨 resolve the deferred promise
  // 🐨 wait for the promise to resolve
  // 🐨 verify the loading spinner is no longer in the document
  //    (💰 use queryByLabelText instead of getByLabelText)
  // 🐨 verify the latitude and longitude appear correctly
})

/*
eslint
  no-unused-vars: "off",
  @typescript-eslint/no-unused-vars: "off",
*/
