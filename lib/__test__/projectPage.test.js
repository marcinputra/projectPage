const handlers = require('../handlers')

test('strona domowa się renderuje',() => {
    const req = {}
    const res = { render:  jest.fn() }
    handlers.home(req, res)
    expect(res.render.mock.calls[0][0]).toBe('home')
})

test('funkcja obsługi błędu 404 się renderuje',() => {
    const req = {}
    const res = { render:  jest.fn() }
    handlers.notfound(req, res)
    expect(res.render.mock.calls.length).toBe(1)
    expect(res.render.mock.calls[0][0]).toBe('404')
})

test('funkcja obsługi błędu 500 się renderuje',() => {
    const err = new Error('Jakiś błąd')
    const req = {}
    const res = { render:  jest.fn() }
    const next = jest.fn()
    handlers.serverError(err, req, res, next)
    expect(res.render.mock.calls.length).toBe(1)
    expect(res.render.mock.calls[0][0]).toBe('500')
})

test('strona losowy napis się renderuje',() => {
    const req = {}
    const res = { render:  jest.fn() }
    handlers.randomFortune(req, res)
    expect(res.render.mock.calls.length).toBe(1)
    expect(res.render.mock.calls[0][0]).toBe('random')
    expect(res.render.mock.calls[0][1])
        .toEqual(expect.objectContaining({
            fortune: expect.stringMatching(/\W/),
    }))
})