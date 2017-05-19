document.addEventListener("DOMContentLoaded", function(event) { 
  // Customized blockquote types (from compiled markdown)  
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

  // Line numbers for code blocks
  var blocks = document.querySelectorAll('pre>code');
  blocks.forEach(e => e.innerHTML = e.innerHTML.replace(/^/gm,'<span class="number" />'));
});
