$('#submit').click(function(){
    const name = $('#name').val();
    const email = $('#email').val();
    const contact =$('#contact').val();
    console.log(name + email + contact);
    $('#response').text("Thank you " + name + ". We have received your information. An email has been sent to " + email + " and a text message has been sent to " + contact);
}
);






