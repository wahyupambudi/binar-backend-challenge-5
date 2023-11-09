const base = require('../controller/controller.js')
const mockRequest = (body = {}) => ({body})
const mockResponse = () => {
  const res = {}
  res.json = jest.fn().mockReturnValue(res)
  res.status = jest.fn().mockReturnValue(res)
  return res
}

describe('testing for base controller', () => {
  test(`calling hello world`, done => {
    const req = mockRequest()
    const res = mockResponse()
    base.HelloWorld(req, res)
    expect(res.status).toBeCalledWith(200)
    expect(res.json).toBeCalledWith({
      status: true,
      message: "Hello World"
    })
    done()
  })
})


describe('test add calculator function', () => {
  test(`success`, done => {
    const req = mockRequest({x: 10, y: 10})
    const res = mockResponse()
    const expected = req.body.x + req.body.y
    base.AddCalculator(req, res)
    expect(res.status).toBeCalledWith(200)
    expect(res.json).toBeCalledWith({
      status: true,
      message: "success",
      data: {
        x: req.body.x,
        y: req.body.y,
        result: expected
      }
    })
    done()
  })
})