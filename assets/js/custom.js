function openTarget() {
  var hash = location.hash.substring(1);
  if(hash) var details = document.getElementById(hash);
  if(details && details.tagName.toLowerCase() === 'details') details.open = true;
}
window.addEventListener('hashchange', openTarget);
window.addEventListener('load', openTarget);
openTarget();
