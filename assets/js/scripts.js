 
        function sendContact() {
              var valid;	
              valid = validateContact();
              if(valid) {
                  jQuery.ajax({
                      url: "contact_mail.php",
                      data:'userName='+$("#userName").val()+'&userEmail='+
                      $("#userEmail").val()+'&content='+
                      $(content).val(),
                      type: "POST",
                      success:function(data){
                         $("#mail-status").show(); 
                           console.log('test');
                          if(data == 'success'){  
                            $("#mail-status").removeClass("error");
                            $("#mail-status").addClass("done");
                            $("#mail-status").html('Thank You!');  
                          }else{
                            $("#mail-status").removeClass("done");
                            $("#mail-status").addClass("error");
                            $("#mail-status").html(data);
                          }
 
                           
                      },
                      error:function (){}
                  });
              }
          }

          function validateContact() {
              var valid = true;	
              $(".demoInputBox").css('background-color','');
              $(".info").html('');
              if(!$("#userName").val()) {
                  $("#userName-info").html("*");  
                  $("#userName").css('border-bottom','2px solid rgb(255 55 55)');
                  valid = false;
              }else{
                  $("#userName").css('border-bottom','2px solid #FFFFFF');
                  valid = true; 
              }

              

              if(!$("#userEmail").val().match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)) {
                  $("#userEmail-info").html("*");
                  $("#userEmail").css('border-bottom','2px solid rgb(255 55 55)');
                  valid = false;
              }else{
                $("#userEmail").css('border-bottom','2px solid #FFFFFF');
                valid = true; 
              }

              if(!$("#userEmail").val()) {
                $("#userEmail-info").html("*");
                $("#userEmail").css('border-bottom','2px solid rgb(255 55 55)');
                valid = false;
            }else{
              $("#userEmail").css('border-bottom','2px solid #FFFFFF');
              valid = true; 
            }

              

              if(!$("#content").val()) {
                  $("#content-info").html("*");
                  $("textarea#content").css('border','2px solid rgb(255 55 55)');
                  valid = false;
              }else{
                $("#textarea#content").css('border-bottom','2px solid #FFFFFF');
                valid = true; 
              }

               

              return valid;
          }

          function updateCode() {
            var timer = Math.random();
            $("#captchaimage").attr('src', 'includes/captcha.php?t=' + timer);
          }

          $('.btnRefresh').on('click', function(event) {
            event.preventDefault();
            updateCode();
          });
  
          function subscribe() {
                var isSubscribeValid;	
                isSubscribeValid = validateSubscribe();
                if(isSubscribeValid) {
                    jQuery.ajax({
                        url: "subscribe.php",
                        data:'subscriber_email='+$("#subscriber_email").val(),
                        type: "POST",
                        success:function(data){ 
                            if(data=='success'){
                                $("#subscriber_email-info").removeClass("d-flex");
                                $("#subscriber_email-info").hide(); 
                                $("#subscribe-status").show(); 
                                $("#subscribe-status").addClass("done");
                                $("#subscribe-status").html('Thank You!'); 
                                $("#subscriber_email").css('border','2px solid #301464');
                                
                            }else{
                                $("#subscriber_email-info").removeClass("d-flex");
                                $("#subscriber_email-info").hide(); 
                                $("#subscribe-status").show(); 
                                $("#subscribe-status").removeClass("done");
                                $("#subscribe-status").addClass("error");
                                $("#subscribe-status").html(data); 
                                $("#subscriber_email").css('border','2px solid red');
                                
                            }
                              
                        },
                        error:function (){ }
                    });
                }
            }

            function validateSubscribe() {
                var isSubscribeValid = true;	
                  
                if(!$("#subscriber_email").val()) { 
                     
                    $("#subscriber_email-info").addClass("d-flex");
                    $("#subscriber_email-info").html("Please enter your email");  
                    $("#subscriber_email").css('border','2px solid red');
                    isSubscribeValid = false;
                }else{
                  $("#subscriber_email-info").removeClass("d-flex");
                  $("#subscriber_email-info").css('display','none !important');
                  isSubscribeValid = true;
                }
 
                if(isValidEmailAddress($("#subscriber_email").val()) == false){ 
                    $("#subscriber_email-info").addClass("d-flex");
                  $("#subscriber_email-info").html("Please enter a valid email");  
                  $("#subscriber_email").css('border','2px solid red');
                  isSubscribeValid = false;
                }else{
                  $("#subscriber_email-info").removeClass("d-flex");
                  $("#subscriber_email-info").css('display','none !important');
                  isSubscribeValid = true;
                }
 
                return isSubscribeValid;
            }

            function isValidEmailAddress(emailAddress) {
              const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
              return re.test(String(emailAddress).toLowerCase()); 
            }; 