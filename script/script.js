const sendBtn = $('.send-message-button');
const inpname = $('.input-name');
const inpmail = $('.input-mail');
const inpmessage = $('.input-message');

sendBtn.click(function() {
    const iname = inpname.val();
    const imail = inpmail.val();
    const imessage = inpmessage.val();
    console.log(`name: ${iname}`);
    console.log(`email: ${imail}`);
    console.log(`message: ${imessage}`);
})

$(function () {
    $('a[href^="#"]').on('click', function (event) {
        event.preventDefault();

        let sc = $(this).attr("href"),
            dn = $(sc).offset().top;

        $('html, body').animate({
            scrollTop: dn
        }, 1000);
    });
});