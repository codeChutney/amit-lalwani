$(function () {
  let name = $('#name'),
      email = $('#email'),
      message = $('#message-ta'),
      form = $('#form'),
      btnSend = $('#btn-send'),
      success;
  let expRegEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  form.on('submit',function (e) {
    e.preventDefault();
    if(name.val()==''){
      success = false;
      name.parent().find('span').text('This field is required.');
      name.parent().find('span').fadeIn();
    }else if(email.val()==''|| !expRegEmail.test(email.val())){
      success = false
      if (email.val()==''){
        email.parent().find('span').text('This field is required.');
      }else {
        email.parent().find('span').text('Please enter a valid email address.');
      }
      email.parent().find('span').fadeIn();
    }else if(message.val()==''){
      success = false
      message.parent().find('span').text('This field is required.');
      message.parent().find('span').fadeIn();
    }else{
      success = true;
    }
    console.log(success+' fin '+message.val());
    $('input,textarea').on('focus',function () {
      let self = $(this);
      self.parent().find('span').fadeOut();
    });
    if(success){
      let data =  $(this).serializeArray(),
          url = $(this).attr('action'),
          method = $(this).attr('method');
      console.log(url);
      $.ajax({
        url: url,
        type: method,
        dataType: 'json',
        data: data
      })
        .done(()=>{
          spop('<h4 class="spop-title">Success</h4>Your message was sent', 'success',
          {
            template  : '3 seconds autoclose',// string required. Without it nothing happens!
              style     : 'error',// success, warning or error
            autoclose : 2000,// miliseconds
            position  : 'top-right',// top-left top-center bottom-left bottom-center bottom-right
            icon      : true,// or false
            group     : false,// string, add a id reference
          });
          btnSend.attr('disabled','true').addClass('disabled').text('sent');
        })
        .fail(()=>{
          spop(
            '<strong>Error, try again!</strong>', 'error',
            {
              template  : '3 seconds autoclose',// string required. Without it nothing happens!
              style     : 'error',// success, warning or error
              autoclose : 2000,// miliseconds
              position  : 'top-right',// top-left top-center bottom-left bottom-center bottom-right
              icon      : true,// or false
              group     : false,// string, add a id reference
            }
          );
        })
        .always(function() {
          SmallPop.close();
        });
    }
  });
});


