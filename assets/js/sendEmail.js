function sendMail(contactForm) {
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
}
