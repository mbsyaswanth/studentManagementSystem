var mode        =  require('./models/schemas');
module.exports=function(router) {
  router.post('/login', function(req,res){
   var logon= new mode();
   logon.username=req.body.username;
   logon.password=req.body.password;
   var creteria=req.body.username==null || req.body.username=="" || req.body.password==null || req.body.password=="";
   if(creteria){
     res.send("please enter username or email");
   }
   else {
   logon.save(function(err) {
     if (err) {
       res.send("username or password already exist");
       //console.log();
     }else {
       res.send("Account successfully created");
     }

   });
  }

  });
  return router;
}
