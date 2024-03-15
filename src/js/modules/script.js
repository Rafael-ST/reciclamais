import $ from '../../../node_modules/jquery/dist/jquery'
window.jQuery = $
window.$ = $
export const script = () => {
  ;(function ($) {
    //load
    $(window).on('load', function () {
      $('#loader-wrapper').fadeIn()
      $('#loader-wrapper').fadeOut()
    })

    let encodeHrf = encodeURIComponent(window.location.href)
    let encodeUri = encodeURIComponent(document.title)
    let urlTelegram = `https://t.me/share/url?url='+${encodeHrf}+'&text='+${encodeUri}`

    let conteudo = encodeURIComponent(document.title + ' ' + window.location.href)
    $('#btnSocialwhatsapp').attr('href', 'https://api.whatsapp.com/send?text=' + conteudo)
    $('#btnSocialTelegram').attr('href', urlTelegram)

    let locationTotal = location.href
    let urlExtense = location.pathname.substring(location.pathname.lastIndexOf('/') + 1)
    let base_url = window.location.origin
    let host = window.location.host
    let pathArray = window.location.pathname.split('/')
    let queryString = window.location.search
    let urlParams = new URLSearchParams(queryString)
    let escolaridadeParam = urlParams.get('escolaridade')
    console.log(escolaridadeParam)
    console.log(queryString)
    console.log(pathArray)
    console.log(host)
    console.log(base_url)
    console.log('esta é url extense' + ' ' + urlExtense)
    console.log(locationTotal)

    const scrollAnchor = (aid) => {
      let aTag = $("section[id='" + aid + "']")
      $('html,body').animate({ scrollTop: aTag.offset().top - 80 }, 'slow')
    }

    const checkPath = (path) => {
      if (path[1] !== '') {
        $('.nav-about').attr('href', `${base_url}#s-initAbout`)
      } else {
        $('.nav-about').click(function (e) {
          e.preventDefault()
          $(this).addClass('.text-primary')
          $('.nav-home').removeClass('.text-primary')
          scrollAnchor('s-initAbout')
        })
      }
      window.location.pathname.split('/')
    }

    const changeColor = () => {
      if (pathArray[1] == '') {
        $('.nav-home').addClass('text-green-black')
      }
      if (pathArray[1] == 'aluno') {
        $('.nav-aluno').addClass('text-green-black')
      }
      if (pathArray[1] == 'ecoloja') {
        $('.nav-ecoloja').addClass('text-green-black')
      }
      if (pathArray[1] == 'duvidas') {
        $('.nav-duvidas').addClass('text-green-black')
      }
      if(urlExtense == 'ranking') {
        $('.nav-ranking').addClass('text-green-black')
      }
    }

    changeColor()

    checkPath(pathArray)

  })($)
}
