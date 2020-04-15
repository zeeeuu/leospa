(function(){
	 var inputs={
                fname:{rule:/^[a-zA-Z ]{7,60}$/,mess:'Invalid First Name : only alphabets are allowed of minimum 3 characters'},//,
                lname:{rule:/^[a-zA-Z ]{7,60}$/,mess:'Invalid Last Name : only alphabets are allowed of minimum 3 characters'},//,
                mobile:{rule:/^[0-9]{10,10}$/,mess:'Invalid Mobile : only 10 digits are allowed'},//,
                email:{rule:/^([a-z0-9\+_\-]+)(\.[a-z0-9\+_\-]+)*@([a-z0-9\-]+\.)+[a-z]{2,6}$/,mess:'Invalid email : email should be like example@gmail.com'}//,

	          },
	          name=$('#name'),
	          email=$('#email'),
	          phone=$('#phone'),
 	          date=$('#date'),
	          time=$('#time'),
	          message=$('#message'),
	          user_name=$('#user_name'),
	          user_email=$('#user_email'),
	          user_comment=$('#user_comment'),
	          error=$('#error'),
	          user_error=$('#user_error')
	            ;

	             
	 $('#make_appointment').click(function(e){
          
          e.preventDefault();


         if (!inputs.fname.rule.test($(name).val())) {
         	  $('#error').text('Invalid Name');
          }
         else if(!inputs.email.rule.test($(email).val())){
             $('#error').text('Invalid Email');
         }
         else if(!inputs.mobile.rule.test($(phone).val())){
         	 $('#error').text('Invalid Phone');
         } 
         else if($('#date').val()==''){
         	 $('#error').text('Invalid Date');
         }
         else if($('#time').val()==''){
         	  $('#error').text('Invalid Time');
         }
          
         else{
                  $(error).text('Your Appointment Has Been Confirmed.');
                  $(error).css('visibility','visible');
                  setTimeout(function(){
                          $(error).css('visibility','hidden');
                   },3000);
                
         }
 
	 }); 

	 $('#submit_now').click(function(e){
	 	e.preventDefault();

        if (!inputs.fname.rule.test($(user_name).val())) {
         	  $(user_error).text('Invalid Name');
         	   $(user_error).css('visibility','visible');
         }
         else if(!inputs.email.rule.test($(user_email).val())){
             $(user_error).text('Invalid Email');
              $(user_error).css('visibility','visible');
          }
        else if(!/^[0-9A-Za-z ]{10,500}$/.test($(user_comment).val())){
             $(user_error).text('Please Fill Valid Query');
              $(user_error).css('visibility','visible');
         }
        else{

              $(user_error).text('Thanks For Contacting Us.');
              $(user_error).css('visibility','visible');

                  setTimeout(function(){
                          $(user_error).css('visibility','hidden');
                   },3000);
                 
     
         }

	 });

    AOS.init();
  
	 //name, email, service, phone, date, time, message  error
	 //user_name , user_email, user_comment, submit_now user_error

	 //t
}());	