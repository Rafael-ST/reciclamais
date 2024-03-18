import { acessibility } from './contrast'
import { initBootstrap } from './bootstrap'
import { fontSize } from './fontSize'
import { scrollFunc } from './scroll'
import { redirect } from './redirect'
import { mobile } from './mobile'
import { accordionarrowspin } from './accordionarrowspin'
import { areadocondominio } from './areadocondominio'
import { form } from './form'
import { swiperModule } from './swiper'

//vendors
import WOW from'@/js/vendors/wow';
import { script } from './script';

/**
 * Run event after DOM is ready
 * @param {Function} fn Callback function
 */
function ready(fn) {
  // Sanity check
  if (typeof fn !== 'function') return
  // If document is already loaded, run method
  if (document.readyState === 'interactive' || document.readyState === 'complete') return fn()
  // Otherwise, wait until document is loaded
  document.addEventListener('DOMContentLoaded', fn, false)
}

ready(function () {

  let pathArray = window.location.pathname.split('/')
  
  //contrast
  acessibility()

  //font size
  fontSize()

  //scroll
  scrollFunc()

  //redirect
  redirect()

  accordionarrowspin();

  areadocondominio();

  //bootstrap
  initBootstrap({
    tooltip: true,
    popover: true,
    toasts: true,
  });

  new WOW().init({
    offset: 100,      // Define um offset de deslocamento em pixels
    mobile: false     // Desativa animações em dispositivos móveis
  });

  //mobile
  let mw = window.matchMedia('(max-width: 768px)')
  mobile(mw)
  mw.addListener(mobile)
  
  //script
  script()

  //form
  form()

  //swiper
  if (pathArray[1] == '' || pathArray[1] == '#s-about') {
    swiperModule()
  }


})
