const mongoose = require('mongoose');

mongoose
.connect('mongodb+srv://root:root@sachin.08ycelm.mongodb.net/scatch')
.then(()=>{
    console.log('connected successfully');
})
.catch(()=>{
    console.log(err);
    
})

module.exports = mongoose.connections;
