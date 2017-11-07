var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var contentSchema = new Schema({ // contentSchema 생성
    name: String,
    url: String,
    Comment: String   
}, { versionKey: false });

module.exports = mongoose.model('content', contentSchema); // contentSchema 명칭을 content 로 정의 후 export

// 아래는 스키마 타입 종류
// String
// Number
// Date
// Buffer
// Boolean
// Mixed
// Objectid
// Array
