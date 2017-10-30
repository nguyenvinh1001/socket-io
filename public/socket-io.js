const socket = io('http://localhost:3000');


socket.on('user_is_existeds', () => {
    alert('your name is existed. Please register new name !')
});

socket.on('user_is_created', data => {
    $('#ul-list').append(`<li>${data}</li>`)
});

// socket.on('you_miss_massage', () =>{
//     alert('miss');
// });

// socket.on('ok', msg => {
//     $('#ul-list').append(`<li>${msg}</li>`)
// })


$(document).ready(() => {

    //sign username
    $('#btn-sign').click(() => {
        const data = $('#txt-username').val('');
        socket.emit('create_your_name', data);
    })

    //send message
    // $('#btn-send').click(() =>{
    //     const msg = $('#txt-msgs').val('');
    //     socket.emit('send_your_message', msg);
    // })
})
