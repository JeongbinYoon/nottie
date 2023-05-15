import { renderer } from '.'
import { NeactNode } from 'nottie'
import { getByTestId } from '@testing-library/dom'
import { render } from './renderer'
const TEST_ID = 'TEST_ID'
const TEST_DATASET_KEY = 'TEST_DATASET_KEY'
const TEST_DATASET_VALUE = 'TEST_DATASET_VALUE'
const childMock: NeactNode = {
  type: 'li',
  className: ['li'],
}
const mock: NeactNode = {
  type: 'ul',
  className: ['commands'],
  attributes: [
    {
      key: TEST_DATASET_KEY,
      value: TEST_DATASET_VALUE,
    },
  ],
  id: TEST_ID,
  children: [childMock],
}

describe('createElement', () => {
  let screen: HTMLDivElement
  beforeEach(() => {
    screen = document.createElement('div')
    screen.classList.add('wrapper')
    document.body.appendChild(screen)
  })

  afterEach(() => {
    document.body.removeChild(screen)
  })
  it('have been called times 1', () => {
    const mockCreateElement = jest.spyOn(renderer, 'createElement')
    const node = renderer.createElement({
      ...mock,
    })
    expect(mockCreateElement).toHaveBeenCalledTimes(2)
    expect(mockCreateElement).lastCalledWith(childMock)
    expect(node.className).toHaveLength(1)
    expect(node.type).toBe('ul')
    expect(node.target.id).toBe(TEST_ID)
  })
})
