document.addEventListener("DOMContentLoaded", function(event) { 
  //
  
  var blockquotes = [...document.getElementsByTagName('blockquote')];
  blockquotes.forEach(e => {
    var classname = e.innerText.startsWith('TIP:') ? 'tip'
                  : e.innerText.startsWith('NOTE:') ? 'note'
                  : e.innerText.startsWith('WARNING:') ? 'warning'
                  : e.innerText.startsWith('BETA:') ? 'beta'
                  : '';
    if(classname) {
      e.classList.add(classname);
      e.innerHTML = e.innerHTML.replace(classname.toUpperCase() + ':', '');
    }
  });
});
