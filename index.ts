import { createEditor } from './src/index'

// import { Extension } from '@tiptap/core'
const BasicAnchor = () => {}
const editor = createEditor({
  element: document.getElementById('editor')!,
  // extensions: [],
})
editor.getText()

/**
 * @nottie/core
 * @nottie/basic-anchor
 *
 */
