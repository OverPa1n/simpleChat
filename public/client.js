const socket = io.connect('http://localhost:3000');

let message = document.getElementById('message');
let name = document.getElementById('name');
let btn = document.getElementById('send');
let output = document.getElementById('output');
let feedback = document.getElementById('feedback');

btn.addEventListener('click', () => {
    socket.emit('chat', {msg:message.value, name: name.value});
    message.value = '';

})

message.addEventListener('keypress', () => {

    socket.emit('typing',name.value);

})

socket.on('chat', data => {
    feedback.innerHTML = '';

    let msg = `<p><strong>${data.name}:</strong>${data.msg}</p>`;
    output.innerHTML += msg;


})

socket.on('whenTyping', data => {
    let msg = `<p>${data} typing right now...</p>`;
    feedback.innerHTML = msg;
})