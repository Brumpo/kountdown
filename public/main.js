$(document).ready(()=>{
$('.carousel').carousel();

var countDownDate = new Date("Mar 10, 2018 00:00:25").getTime();
var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countDown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000)
$('#email').on('submit',event=>{
  event.preventDefault()
  let email = $('#user').val()
  $.ajax({
    url: '/emails',
    type: 'POST',
    data:{
      email
    },
    success: function (data) {
      Materialize.toast('Thanks, your email has been added!',6000)
      setTimeout(function () {location.reload()},2000)
    },
    error: function (err){
      Materialize.toast('Whoops, something went wrong',6000)
    }
  })
})
$('#insta').on('click',(event)=>{
  window.location.href = "https://www.instagram.com/klctn/?hl=en"
})
$('#twitter').on('click',(event)=>{
  window.location.href = "https://twitter.com/thekollection"
})
$('#fb').on('click',(event)=>{
  window.location.href = "https://www.facebook.com/TheKollection/?fref=ts"
})

})
