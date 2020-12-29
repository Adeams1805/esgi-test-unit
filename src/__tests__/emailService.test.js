import emailjs from 'emailjs-com';

jest.mock('emailjs-com');

test('should send email', () => {
    emailjs.send.mockResolvedValue({
        status: 200,
        text: "test"
    })
    return emailjs.send("service_yzn773f", "template_pbv6uu3", { name: "Test", email: "adeams1805@gmail.com" }, "user_JjdLQbx2yaRCwZ4hYPpDb").then(data => {
      expect(data.text).toBe('test');
    });
});