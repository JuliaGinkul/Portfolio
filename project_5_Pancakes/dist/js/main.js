var header = $('.header'),
	scrollPrev = 0;

$(window).scroll(function() {
	var scrolled = $(window).scrollTop();
 
	if ( scrolled > 100 && scrolled > scrollPrev ) {
		header.addClass('out');
	} else {
		header.removeClass('out');
	}
	scrollPrev = scrolled;
});


$(".burger, .overlay").click(function () {
  $(".burger").toggleClass("clicked");
  $(".overlay").toggleClass("show");
  $("nav").toggleClass("show");
  $("body").toggleClass("overflow");
});


$(".rate-yo").rateYo({
  rating: 4,
  ratedFill: "#333333",
  spacing: "2px",
  starWidth: "10px",
});



/*document.addEventListener('click', function(e) {
  if (!e.target.classList.contains('product-card__add')) return;
 
  alert('Товар добавлен в корзину.');
});*/





$(document).ready(function() {
  $("#lightSlider").lightSlider({
      gallery:true,
      item:1,
      vertical:true,
      verticalHeight:'686px',
      vThumbWidth:70,
      thumbItem:5,
      thumbMargin:'0px',
      slideMargin:0,
      speed: 800,
      responsive : [
        {
          breakpoint:800,
          settings: {
            verticalHeight:'480px',
            vThumbWidth:40,
          }
        }
      ]
  }); 
});






const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const form = document.getElementById('mail');

function validateEmail(value) {
  return EMAIL_REGEXP.test(value);
}

function updateInput() {
  if (validateEmail(form.value)) 
  form.style.borderColor = 'green';
  else form.style.borderColor = 'red';
}

form.addEventListener('input', updateInput);



document.getElementById("close").onclick = function(e) {
  document.getElementById("mail").value = "";
}

function increaseValue() {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('number').value = value;
}
  
function decreaseValue() {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById('number').value = value;
}