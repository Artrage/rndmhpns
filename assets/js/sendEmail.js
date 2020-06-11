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