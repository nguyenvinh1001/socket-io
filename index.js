const express = require('express');
const socket = require('socket.io');
const arrayUsers = require('./array/arrayUsers');


const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const port = process.env.PORT || 3000;

app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => res.render('home') );

io.on('connection', socket => {

    
    console.log(`User: ${socket.id} is connecting!`);

    socket.on('create_your_name', data =>{
         //check user is exist or not exist in array
        if(arrayUsers.indexOf(data) >= 0){
            socket.emit('user_is_existeds');
        }else {
            arrayUsers.push(data);
            socket.emit('user_is_created', data);
        }
    }); 

    // socket.on('send_your_message', msg =>{
    //     if(msg === null){
    //         socket.emit('you_miss_massage')
    //     }else {
    //         socket.emit('ok', socket.username + ':' + msg);
    //     }
    // });

    socket.on('disconnect', () => {
        console.log('User:' + ' ' + socket.id + ' ' + 'is leaving this room');
    });
})







server.listen(port , () => console.log(`Go ${port}`));










