const mongoose = require('mongoose');
const config = require('config');
mongoose
.connect(`${config.get('MONGODB_URI')}/scatch`)
.then(()=>{
    console.log('connected successfully');
})
.catch(()=>{
    console.log(err);
    
})

module.exports = mongoose.connections;
