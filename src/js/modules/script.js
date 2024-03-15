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

    let itemsMainDiv = '.MultiCarousel'
    let itemsDiv = '.MultiCarousel-inner'
    let itemWidth = ''

    $('.leftLst, .rightLst').click(function () {
      let condition = $(this).hasClass('leftLst')
      if (condition) click(0, this)
      else click(1, this)
    })

    ResCarouselSize()

    $(window).resize(function () {
      ResCarouselSize()
    })

    //this function define the size of the items
    function ResCarouselSize() {
      let incno = 0
      let dataItems = 'data-items'
      let itemClass = '.item'
      let id = 0
      let btnParentSb = ''
      let itemsSplit = ''
      let sampwidth = $(itemsMainDiv).width()
      let bodyWidth = $('body').width()
      $(itemsDiv).each(function () {
        id = id + 1
        let itemNumbers = $(this).find(itemClass).length
        btnParentSb = $(this).parent().attr(dataItems)
        itemsSplit = btnParentSb.split(',')
        $(this)
          .parent()
          .attr('id', 'MultiCarousel' + id)

        if (bodyWidth >= 1200) {
          incno = itemsSplit[3]
          itemWidth = sampwidth / incno
        } else if (bodyWidth >= 992) {
          incno = itemsSplit[2]
          itemWidth = sampwidth / incno
        } else if (bodyWidth >= 768) {
          incno = itemsSplit[1]
          itemWidth = sampwidth / incno
        } else {
          incno = itemsSplit[0]
          itemWidth = sampwidth / incno
        }
        $(this).css({ transform: 'translateX(0px)', width: itemWidth * itemNumbers })
        $(this)
          .find(itemClass)
          .each(function () {
            $(this).outerWidth(itemWidth)
          })

        $('.leftLst').addClass('over')
        $('.rightLst').removeClass('over')
      })
    }

    //this function used to move the items
    function ResCarousel(e, el, s) {
      let leftBtn = '.leftLst'
      let rightBtn = '.rightLst'
      let translateXval = ''
      let divStyle = $(el + ' ' + itemsDiv).css('transform')
      let values = divStyle.match(/-?[\d\.]+/g)
      let xds = Math.abs(values[4])
      if (e == 0) {
        translateXval = parseInt(xds) - parseInt(itemWidth * s)
        $(el + ' ' + rightBtn).removeClass('over')

        if (translateXval <= itemWidth / 2) {
          translateXval = 0
          $(el + ' ' + leftBtn).addClass('over')
        }
      } else if (e == 1) {
        let itemsCondition = $(el).find(itemsDiv).width() - $(el).width()
        translateXval = parseInt(xds) + parseInt(itemWidth * s)
        $(el + ' ' + leftBtn).removeClass('over')

        if (translateXval >= itemsCondition - itemWidth / 2) {
          translateXval = itemsCondition
          $(el + ' ' + rightBtn).addClass('over')
        }
      }
      $(el + ' ' + itemsDiv).css('transform', 'translateX(' + -translateXval + 'px)')
    }

    //It is used to get some elements from btn
    function click(ell, ee) {
      let Parent = '#' + $(ee).parent().attr('id')
      let slide = $(Parent).attr('data-slide')
      ResCarousel(ell, Parent, slide)
    }
  })($)
}
