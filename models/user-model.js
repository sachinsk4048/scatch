const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    fullname : {
        type : String,
        minLength: 3,
        trim:true,
    },
    password : String,
    cart : {
        type : Array,
        default : []
    },
    
    orders:{
        type:Array,
        default:[]
    },
    isadmin : Boolean,
    contact:Number,
    picture : String,
});

// module.exports = mongoose.model('user',userSchema);

module.exports = mongoose.models.user || mongoose.model("user", userSchema);