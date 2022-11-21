$(document).ready(function() {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 20) {
        $('#toTopBtn').fadeIn();
      } else {
        $('#toTopBtn').fadeOut();
      }
    });
  
    $('#toTopBtn').click(function() {
      $("html, body").animate({
        scrollTop: 0
      }, 300);
      return false;
    });
  });

// see more see less button
function myFunction1() {
  var dots= document.getElementById("dots1");
  var moreText = document.getElementById("demo1");
  var btnText= document.getElementById("mybtn1");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more<i class='fas fa-angle-double-down' style='font-size:19px;color:rgb(223, 238, 10)'></i>"; 
    moreText.style.display = "none";
  }
  else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less<i class='fas fa-angle-double-up'style='font-size:19px;color:rgb(223, 238, 10)'></i>"
    moreText.style.display = "inline";}}

function myFunction2() {
  var dots = document.getElementById("dots2");
  var moreText = document.getElementById("demo2");
  var btnText = document.getElementById("mybtn2");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more<i class='fas fa-angle-double-down' style='font-size:19px;color:rgb(223, 238, 10)'></i>"; 
    moreText.style.display = "none";
  }
  else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less<i class='fas fa-angle-double-up'style='font-size:19px;color:rgb(223, 238, 10)'></i>"
    moreText.style.display = "inline";}}

    function myFunction3() {
      var dots= document.getElementById("dots3");
      var moreText = document.getElementById("demo3");
      var btnText= document.getElementById("mybtn3");
    
      if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more<i class='fas fa-angle-double-down' style='font-size:19px;color:rgb(223, 238, 10)'></i>"; 
        moreText.style.display = "none";
      }
      else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less<i class='fas fa-angle-double-up'style='font-size:19px;color:rgb(223, 238, 10)'></i>"
        moreText.style.display = "inline";}}

            function myFunction4() {
      var dots= document.getElementById("dots4");
      var moreText = document.getElementById("demo4");
      var btnText= document.getElementById("mybtn4");
    
      if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more<i class='fas fa-angle-double-down' style='font-size:19px;color:rgb(223, 238, 10)'></i>"; 
        moreText.style.display = "none";
      }
      else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less<i class='fas fa-angle-double-up'style='font-size:19px;color:rgb(223, 238, 10)'></i>"
        moreText.style.display = "inline";}}


        function menu(){
          document.getElementById('mydrop1').classList.toggle("change")
          document.getElementById('mydrop').classList.toggle("change")
        }