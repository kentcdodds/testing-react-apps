// none of these tests should actually invoke fetch
beforeEach(() => {
  window.fetch = jest.fn((...args) => {
    console.warn('window.fetch is not mocked for this call', ...args)
    return Promise.reject(new Error('This must be mocked!'))
  })
})
