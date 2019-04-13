// Please don't actually do this in a real app
// this is here to make it easy for us to simulate making HTTP calls in this
// little app that doesn't actually have any server element.
const originalFetch = window.fetch

const sleep = (t = Math.random() * 2000 + 750) =>
  new Promise(resolve => setTimeout(resolve, t))

const fakeResponses = [
  {
    test: url => url === '/api/login',
    handler: async (url, config) => {
      await sleep()
      const body = JSON.parse(config.body)
      if (body.password === 'fail') {
        return {
          status: 400,
          json: () =>
            Promise.reject({errors: ['Incorrect username or password']}),
        }
      } else {
        return {
          status: 200,
          json: () => Promise.resolve({token: btoa(body.username)}),
        }
      }
    },
  },
  // fallback to originalFetch
  {
    test: () => true,
    handler: (...args) => originalFetch(...args),
  },
]

window.fetch = (...args) => {
  const {handler} = fakeResponses.find(({test}) => test(...args))
  return handler(...args)
}
