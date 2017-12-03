module.exports = function(app, Content)
{
  // admin.html 페이지 라우팅
  app.get('/admin', function(req, res){
    res.render('./../client/public/admin.html');
  });


//   app.get('/query', function(req,res){
//     Content.find(function(err, contents){
//       if(err) return res.status(500).send({err: 'database failure'});
//      //res.json(contents);
//       //var lop = contents+" ";
//     // var mig = String(contents).split(":");
//     if(contents=null)
//       alert('Null');
//     else
//      res.send(stabilizer(contents));
//     });
//   });

// app.post('/api/insert', function(req, res){ //
//     var content = new Content();
//     // console.log("req.body.name : ",req.body.name);
//       content.name = req.body.name;
//       content.url = req.body.url;
//       content.Comment = req.body.Comment;
      

//       content.save(function(err){
//           if(err){
//               console.error(err);
//               res.json({result: "error"});
//               return;
//           }
//       });
//       // res.send('input success');
//       res.redirect('/admin');
//     // res.redirect('back');
//       // res.json({result: "success"});
//   });



   




  app.post('/api/check', function(req, res){
    // 일치되는 값 전체 출력
    Content.find({url: req.body.url}, function(err, contents){
      if(err) return res.status(500).send({err: 'database failure'});
     // res.json(contents);
// if (res.send(contents)==[])
if (contents.length==0) 
  {
    var content = new Content();
    content.url = req.body.url;
content.name=  ".";
content.Comment = ".";
content.save(function(err){
          if(err){
              console.error(err);
              res.json({result: "error"});
              return;
          }
      });

 var context = req.body.url;
    res.render('/api/search', context);
  //  res.redirect('');
}
else
  {
     var context = req.body.url;
    res.render('/api/search', context);
  //res.redirect('/api/search');
  }
// res.send("rodrigues");
// else 
   //res.send(contents);}
    });
    // 일치되는 값 1개 출력
    // Content.findOne({name: req.body.name}, function(err, content){
    //   if(err) return res.status(500).json({error: err});
    //   if(!content) return res.status(404).json({error: 'content not found'});
    //   res.json(content);
    // });
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

function stabilizer(kurit, url){

var a=2;
var b=3;
var c=4;

  var mig = String(kurit).split(":");
//mig[b] = mig[b].replace(/,/gi, '');
var zigot = "<h1>"+mig[b]+"</h1><br/>";
while (mig[a]!=null){
zigot =zigot+"<h2>&quot"+mig[a].replace(/,/gi, '')+"&quot</h2>"+mig[c]+"<br/>";
a=a+4;
//b=b+4;
c=c+4;
}

//var bigot ="<h2 id='comment' style='display:none;'>&quot"+"&quot</h2><p id='user' style='display:none;' >"+"mig""</p><br/>";

//zigot = .replace('a','e');

zigot = zigot.replace(/'/gi, '');
zigot = zigot.replace(/}/gi, '');
zigot = zigot.replace(/name/gi, '');
zigot = zigot.replace(/url/gi, '');
zigot = zigot.replace(/,{ _id/gi, '');

//zigot = zigot+ "<link rel='stylesheet' href='css/main.css'>";


var apex = zigot.split("0");



var alamet=  '   var data = {};  '  + 
 '            data.url = "'+url+'" ;  '  + 
 '            data.name = document.getElementById("name").value;  '  + 
 '            data.Comment = document.getElementById("coment").value;  '  + 
 '     '  + 
 '   $.ajax({  '  + 
 '              type: "POST",  '  + 
 '              data: JSON.stringify(data),  '  + 
 '                  contentType: "application/json",  '  + 
 '                           url: "http://localhost:8080/api/insert",             '  + 
 '                           success: function(data) {  '  + 
 '                               console.log("success");  '  + 
 '                               console.log(JSON.stringify(data));  '  + 
 '                           }  '  + 
 '                      });  ' ; 



var script =  '   <script type="text/javascript">  '  + 

 '     '  + 
 '   function work(){  '  + alamet+
 '      '  + 
 '   document.getElementById("user").innerHTML = document.getElementById("name").value;  '  + 
 '   document.getElementById("comment").innerHTML = document.getElementById("coment").value; '  + 
 '     '  + 
 '   document.getElementById("user").style.display = "inline";  '  + 
 '   document.getElementById("comment").style.display = "inline";   '  + 
  '   document.getElementById("form").style.display = "none";   '  + 
    '   document.getElementById("thx").style.display = "inline";   '  + 
 '  }  </script>' ; 




//var combox = ""

var sb = "<div id='form'> <form id='form-one' class='form' action='/api/insert' method='post'>" +
"      " +
"      <p class='name' >" +
"        <input name='name' type='text'       class='validate[required,custom[onlyLetter],length[0,100]] feedback-input' placeholder='Name' id='name' />" +
"      </p>" +
"      " +
"      " +
"      " +
"      <p class='text'>" +
"        <textarea name='Comment' class='validate[required,length[6,300]] feedback-input' id='coment' placeholder='Comment' style='height: 50px; width: 300px;'></textarea>" +
"      </p>" +
"      " +
"      <input type='text' name='url'  placeholder='url' style='width: 20%; height: 35px; display: none ' " +"value="+url+">"+
"    " +
"        " +
"       </form>"+"<button onclick='work()'>Comment</button> </div><h3 id='thx' style='display:none'></br>Your Comment successfully submitted! , Thanks</h3>";


//sb = sb +"<h2 id='comment' style='display:none'>&quot" "&quot</h2><p id='user' style='display:none;' >" "mig""</p><br/>";

sb = "</br>&quot<h2 id='comment' style='display:none'>' '</h2>&quot</br></br><p id='user' style='display:none;' >' 'mig''</p><br/>"+sb;

sb = '<script src="http://code.jquery.com/jquery-latest.min.js"  type="text/javascript"></script>' +sb;


apex[0] = "<div style='text-align: center;'>"+apex[0]+sb+script +"</div></br></br></br></br></br></br></br></br></br></br></br></br>";


return apex[0];
   //   return mig[2];
}



function create(url){

var alamet=  '   var data = {};  '  + 
 '            data.url = "'+url+'" ;  '  + 
 '            data.name = document.getElementById("name").value;  '  + 
 '            data.Comment = document.getElementById("coment").value;  '  + 
 '     '  + 
 '   $.ajax({  '  + 
 '              type: "POST",  '  + 
 '              data: JSON.stringify(data),  '  + 
 '                  contentType: "application/json",  '  + 
 '                           url: "http://localhost:8080/api/insert",             '  + 
 '                           success: function(data) {  '  + 
 '                               console.log("success");  '  + 
 '                               console.log(JSON.stringify(data));  '  + 
 '                           }  '  + 
 '                      });  ' ; 



var script =  '   <script type="text/javascript">  '  + 

 '     '  + 
 '   function work(){  '  + alamet+
 '      '  + 
 '   document.getElementById("user").innerHTML = document.getElementById("name").value;  '  + 
 '   document.getElementById("comment").innerHTML = document.getElementById("coment").value; '  + 
 '     '  + 
 '   document.getElementById("user").style.display = "inline";  '  + 
 '   document.getElementById("comment").style.display = "inline";   '  + 
  '   document.getElementById("form").style.display = "none";   '  + 
    '   document.getElementById("empty").style.display = "none";   '  + 
    '   document.getElementById("thx").style.display = "inline";   '  + 
 '  }  </script>' ; 




//var combox = ""

var sb = "<div id='form'> <form id='form-one' class='form' action='/api/insert' method='post'>" +
"      " +
"      <p class='name' >" +
"        <input name='name' type='text'       class='validate[required,custom[onlyLetter],length[0,100]] feedback-input' placeholder='Name' id='name' />" +
"      </p>" +
"      " +
"      " +
"      " +
"      <p class='text'>" +
"        <textarea name='Comment' class='validate[required,length[6,300]] feedback-input' id='coment' placeholder='Comment' style='height: 50px; width: 300px;'></textarea>" +
"      </p>" +
"      " +
"      <input type='text' name='url'  placeholder='url' style='width: 20%; height: 35px; display: none ' " +"value="+url+">"+
"    " +
"        " +
"       </form>"+"<button onclick='work()'>Comment</button> </div><h3 id='thx' style='display:none'></br>Your Comment successfully submitted! , Thanks</h3>";


//sb = sb +"<h2 id='comment' style='display:none'>&quot" "&quot</h2><p id='user' style='display:none;' >" "mig""</p><br/>";

sb = "</br>&quot<h2 id='comment' style='display:none'>' '</h2>&quot</br></br><p id='user' style='display:none;' >' 'mig''</p><br/>"+sb;

sb = '<script src="http://code.jquery.com/jquery-latest.min.js"  type="text/javascript"></script>' +sb;



//var combox = ""



var apex;

apex = "<div style='text-align: center;'>"+"<p id='empty'><h1>"+url+"</h1></br>No Comments Found under This url, Be first!</p>"+sb+script +"</div></br></br></br></br></br></br></br></br></br></br></br></br>";


return apex;
   //   return mig[2];
}


  // 특정 값 데이터 조회 db.userdetails.remove( { "user_id" : "testuser" } )
  app.post('/api/search', function(req, res){
    // 일치되는 값 전체 출력
    Content.find({url: req.body.url}, function(err, contents){
      if(err) return res.status(500).send({err: 'database failure'});
var context = req.body.url;

 if (contents.length==0) 
   {
//     var content = new Content();
//     content.url = req.body.url;
// content.name=  " name";
//contents = "no-comments";
// content.Comment = " ";
// content.save(function(err){
//           if(err){
//               console.error(err);
               res.send(create(context));
//               return;
           }
//       });

else
 {
//  //    res.render('/api/search', context);
//   //  res.redirect('');
// }



     // res.json(contents);
    res.send(stabilizer(contents,context)); }
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
    //  res.redirect('/admin');


    
 Content.find({url: req.body.url}, function(err, contents){
      if(err) return res.status(500).send({err: 'database failure'});
var context = req.body.url;


    //do what you need here

 res.send("Your Comment has been successfully submitted !");

  


    // res.redirect('back');
      // res.json({result: "success"});
  });
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
