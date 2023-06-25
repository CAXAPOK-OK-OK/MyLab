const db = require('../configs/connection');
const schema = new db.Schema({
    userName:{
        type: String,
        required: true,
        trim: true
    },
    modelName:{
        type: String,
        required: true,
        trim: true
    },
    type:{
        type: String,
        required: true,
        trim: true
    },
    object:{
        type: JSON
    },
    description:{
        type: String,
        required: false,
        trim: true
    },
    comments:{
        type: Array
    },
    createDate:{
        type: Date,
        default: Date.now()
    },
    updateDate:{
        type: Date,
        default: Date.now()
    }
    },
    {versionKey: false});
    
    module.exports = db.model('models', schema);