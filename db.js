function dbConnect(){
    const mongoose = require('mongoose');
    const url = 'mongodb+srv://gkkaushik:oQb2IJA1t3ytu6Sx@cluster0.s5h8o.mongodb.net/chat_app'

    mongoose.connect(url,{
        userNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true
    })

    const connection = mongoose.connection
    connection.once('open',()=>{
        console.log('Database Connected');

    }).catch((err)=>{
        console.log("connection failed")
    })
}

module.exports = dbConnect;