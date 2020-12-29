import emailjs from 'emailjs-com';

export const send = (name, email) => {
    emailjs.send("service_yzn773f", "template_pbv6uu3", { name, email }, "user_JjdLQbx2yaRCwZ4hYPpDb")
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
            console.log('FAILED...', error);
        });
}