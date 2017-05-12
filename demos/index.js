if(self.fetch) {
  // run my fetch request here
  console.log("fetch working")
} else {
  // do something with XMLHttpRequest?
}


var app = new Vue({
  el: '#content',
  data: {
    message: 'Hello Vue!'
  },
  created: function(){
    fetch('webforms/asp-controls-intro.md')
    .then(function(response) {
      if(response.ok) {
        console.log('loaded');
        return response.text();
      } else {
        console.log('not loaded');
      }
    })
    .then(function(text){
      console.log(text);
    })
    .catch(function(err) {
      console.log(err);
    })
  }
})