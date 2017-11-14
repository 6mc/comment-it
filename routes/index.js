module.exports = function(app, Content)
{
  // admin.html 페이지 라우팅
  app.get('/admin', function(req, res){
    res.render('./../client/public/admin.html');
  });

  // 모든 데이터 조회
  app.get('/api/contents', function(req,res){
    Content.find(function(err, contents){
      if(err) return res.status(500).send({err: 'database failure'});
     //res.json(contents);
      //var lop = contents+" ";
    // var mig = String(contents).split(":");
     res.send(stabilizer(contents));
    });
  });

function stabilizer(kurit){

var a=2;
var b=3;
var c=4;

  var mig = String(kurit).split(":");
var zigot = " ";
while (mig[a]!=null){
zigot =zigot+mig[a]+mig[b]+mig[c]+"<br/>";
a=a+4;
b=b+4;
c=c+4;
}

//zigot = .replace('a','e');

zigot = zigot.replace(/'/gi, '');
zigot = zigot.replace(/}/gi, '');
zigot = zigot.replace(/,{ _id/gi, '');
var apex = zigot.split("0");

return apex[0];
   //   return mig[2];
}



  // 특정 값 데이터 조회 db.userdetails.remove( { "user_id" : "testuser" } )
  app.post('/api/search', function(req, res){
    // 일치되는 값 전체 출력
    Content.find({url: req.body.url}, function(err, contents){
      if(err) return res.status(500).send({err: 'database failure'});
     // res.json(contents);
    res.send(stabilizer(contents));
    });
    // 일치되는 값 1개 출력
    // Content.findOne({name: req.body.name}, function(err, content){
    //   if(err) return res.status(500).json({error: err});
    //   if(!content) return res.status(404).json({error: 'content not found'});
    //   res.json(content);
    // });
  });

  // 데이터 생성
  app.post('/api/insert', function(req, res){ //
    var content = new Content();
    // console.log("req.body.name : ",req.body.name);
      content.name = req.body.name;
      content.url = req.body.url;
      content.Comment = req.body.Comment;
      

      content.save(function(err){
          if(err){
              console.error(err);
              res.json({result: "error"});
              return;
          }
      });
      // res.send('input success');
      res.redirect('/admin'); //
      // res.json({result: "success"});
  });

  // 데이터 수정
  // app.put('/api/contents/:name', function(req, res){
  //   Content.update({ name: req.params.name }, { $set: req.body }, function(err, output){
  //     if(err) res.status(500).json({ error: 'database failure' });
  //     console.log(output);
  //     if(!output.n) return res.status(404).json({ error: 'content not found' });
  //     res.json( { message: 'content updated' } );
  //   });
  // });

  // 데이터 제거
  // app.delete('/api/contents/:name', function(req, res){
  //   Content.remove({ _id: req.params.name }, function(err, output){
  //     if(err) return res.status(500).json({ error: "database failure" });
  //     res.status(204).end();
  //   });
  // });

};
