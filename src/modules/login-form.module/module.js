
jQuery(document).ready(function($){
 
  $('#login-form').submit(function(){
  	var login_email = $(this).find('input[name="email"]').val();


    fetch('https://app-usa.prokeep.com/api/login-link', {
      method: 'POST',
      body: JSON.stringify({
        email: login_email
      }),
      headers: {
        'Content-Type':'application/json'
      },
    })
    .then((response) => {
      console.log({response});
        if (!response.ok) {
           $('.form-error').fadeIn();
        }
    })
    .then((response) => {
       $('.login-request').css({'opacity':0,'display':'none'});
       $('.login-request-success').css({'opacity':1,'display':'block'});
    })
    .catch((err) => {
      console.log({err});
    });
	});


  $('.login-try').click(function(){
  	$('.login-request-success').css({'opacity':0,'display':'none'});
    $('.login-request').css({'opacity':1,'display':'block'});
  });
});