export function handleBlockScroll(isOpen: boolean) {
  if (window) {
    const body = document.querySelector('body');
    if (body) {
      if (isOpen) {
        body.classList.add('disable-scroll');
      } else {
        body.classList.remove('disable-scroll');
      }
    }
  }
}
