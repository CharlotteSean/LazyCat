var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test');
var db = mongoose.connection;

function insert() {
  var TestSchema = new mongoose.Schema({
      name : {type:String},
      age : {type:Number,default:0},
      email : {type:String},
      time : {type:Date,default:Date.now}
  });
  var TestModel = db.model("article",TestSchema); //'test'相当于collection
  var TestEntity = new TestModel({
      name:'helloworld',
      age:28,
      emial:'helloworld@qq.com'
  });
  TestEntity.save(function(err,doc){
      if(err){
          console.log("error :" + err);
      } else {
          console.log(doc);
          console.log("插入成功啦");
      }
  });
}


db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('连接到mongo啦');

  console.log('完事了');
});

insert();
