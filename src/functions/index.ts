export const $ = (selector: string) => document.querySelector(selector)

export function toggleAside() {
  $('#menu')?.classList.toggle('opened')
}
