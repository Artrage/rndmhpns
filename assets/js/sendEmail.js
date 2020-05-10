/*function sendMail(contactForm) {
    emailjs.init("user_Iqh4xtz1OZqOEvdEiTLb5");
    emailjs.send("gmail", "test_template", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "from_subject": contactForm.subject.value,
        "from_usermessage": contactForm.usermessage.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}*/

/*var template_params = {
   "from_name": "from_name_value",
   "from_email": "from_email_value",
   "rndm_hpns_request": "rndm_hpns_request_value"
}

var service_id = "default_service";
var template_id = "test_template";
emailjs.send(user_Iqh4xtz1OZqOEvdEiTLb5, test_template, template_params);*/



/*var myform = $("form#myform");
myform.submit(function(event){
	event.preventDefault();

  // Change to your service ID, or keep using the default service
  var service_id = "user_Iqh4xtz1OZqOEvdEiTLb5";
  var template_id = "test_template";

  myform.find("button").text("Sending...");
  emailjs.sendForm(service_id,template_id,myform[0])
  	.then(function(){ 
    	alert("Sent!");
       myform.find("button").text("Send");
    }, function(err) {
       alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
       myform.find("button").text("Send");
    });
  return false;
});*/


var myform = $("form#myform");
myform.submit(function(event){
	event.preventDefault();

  // Change to your service ID, or keep using the default service
  var service_id = "rndm";
  var template_id = "rndm";

  myform.find("button").text("sndng...");
  emailjs.sendForm(service_id,template_id,myform[0])
  	.then(function(){ 
    	alert("snt!");
       myform.find("button").text("snd");
    }, function(err) {
       alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
       myform.find("button").text("Send");
    });
  return false;
});