const scrollFunc = () => {
  // eslint-disable-next-line no-global-assign
  scrollTo = (element) => {
    window.scroll({
      behavior: 'smooth',
      left: 0,
      top: element.offsetTop - 80,
    })
  }

  let queryHeader = document.querySelector('header')
  let queryMain = document.querySelector('main')
  let queryFooter = document.querySelector('footer')
  let queryAbout = document.querySelector('#s-initAbout')

  let btnAbout = document.querySelector('.btn__s-initAbout')
  let scrollBlock = document.querySelector('.s-scessibilityBlock')

  document.getElementById('anchorHeader').addEventListener('click', (e) => {
    e.preventDefault()
    scrollTo(queryHeader)
  })

  document.getElementById('anchorFooter').addEventListener('click', (e) => {
    console.log(e)
    e.preventDefault()
    scrollTo(queryFooter)
  })

  document.getElementById('anchorMain').addEventListener('click', (e) => {
    e.preventDefault()
    scrollTo(queryMain)
  })

  if (btnAbout) {
    btnAbout.addEventListener('click', () => {
      scrollTo(queryAbout)
    })
  }
}

export { scrollFunc }
