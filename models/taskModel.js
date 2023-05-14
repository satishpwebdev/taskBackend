const mongoose = require('mongoose');

module.exports = mongoose.model('Tasks',{
    taskName:{type:String},
    desc:{type:String},
    remindAt:{type:String},
    isRemind:{type:Boolean}
})
