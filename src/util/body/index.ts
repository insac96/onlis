export const insertBody = (el: HTMLElement, parent?: any) : void => {
  const rootApp = document.getElementById('_app_') || document.body
  const target = parent ? parent : (rootApp ? rootApp : document.body)
  target.insertBefore(el, target.lastChild)
}

export const removeBody = (el: HTMLElement, parent?: any) : void => {
  const rootApp = document.getElementById('_app_') || document.body
  const target = parent ? parent :  (rootApp ? rootApp : document.body)
  target.removeChild(el);
}

export const attachedRoot = (node: Node) : null | HTMLDocument | ShadowRoot => {
  if (typeof node.getRootNode !== 'function') {
    while (node.parentNode) node = node.parentNode
    if (node !== document) return null
    return document
  }
  const root = node.getRootNode()
  if (root !== document && root.getRootNode({ composed: true }) !== document) return null
  return root as HTMLDocument | ShadowRoot
}