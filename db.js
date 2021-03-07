function dbConnect(){
    const mongoose = require('mongoose');
    const url = process.env.DBURL

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
