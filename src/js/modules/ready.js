import { acessibility } from './contrast'
import { initBootstrap } from './bootstrap'
import { fontSize } from './fontSize'
import { scrollFunc } from './scroll'
import { redirect } from './redirect'
import { mobile } from './mobile'

//vendors
import WOW from'@/js/vendors/wow';

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
  
  //contrast
  acessibility()

  //font size
  fontSize()

  //scroll
  scrollFunc()

  //redirect
  redirect()

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
})
