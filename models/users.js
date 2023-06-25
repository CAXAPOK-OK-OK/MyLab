const db = require('../configs/connection');
const schema = new db.Schema({
name:{
    type: String,
    required: true,
    trim: true
},
comment:{
    type: String,
    required: true,
    trim: true
},
date:{
    type: Date,
    default: Date.now()
}
},
{versionKey: false});

module.exports = db.model ('users', schema);