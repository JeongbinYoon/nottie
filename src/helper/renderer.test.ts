import { renderer } from '.'
import { NeactNode } from 'nottie'

const mock: NeactNode = {
  type: 'ul',
  className: ['commands'],
}

describe('createElement', () => {
  let fn
  it('have been called times 1', () => {
    const mockCreateElement = jest.spyOn(renderer, 'createElement')
    renderer.createElement({
      ...mock,
    })
    expect(mockCreateElement).toHaveBeenCalledTimes(1)
  })
})
