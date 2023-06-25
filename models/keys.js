const db = require('../configs/connection');
const schema = new db.Schema({
userName:{
    type: String,
    required: true,
    trim: true
},
userKey:{
    type: String,
    required: true,
    trim: true
}
},
{versionKey: false});

module.exports = db.model ('key', schema);