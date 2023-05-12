import { NeactNode } from 'nottie'
import { createElement } from '../helper/renderer'

// 커멘트 툴을 그리는 함수 작성
export const insertImageCard: NeactNode = {
  type: 'ul',
  className: ['commands'],
  children: [
    {
      type: 'li',
      className: ['commands-li'],
    },
  ],
}

export const imageCard = createElement(insertImageCard)
