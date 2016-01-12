// ==UserScript==
// @name       Bierdopje seen episodes fix
// @namespace  http://www.bierdopje.com
// @version    0.02
// @description  Hides seen episodes at the unseen episodes-overview.
// @include    /^http://www\.bierdopje\.com/users?/.*?/shows/episodes/*/
// @require    http://code.jquery.com/jquery-2.1.4.min.js
// @copyright  2016+, Robin Houtevelts
// @run-at     document-start
// ==/UserScript==

if (window.top != window.self)
  return;

$(function(){
  var seen = $('img[id^="seen"][src$="blob-green.png"]');
  $(seen).closest('span.lijstitem').hide();
});