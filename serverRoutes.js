var mode        =  require('./models/schemas');
module.exports=function(router) {
  router.post('/login', function(req,res){
   var logon= new mode();
   logon.username=req.body.username;
   logon.password=req.body.password;
   var criteria=req.body.username==null || req.body.username=="" || req.body.password==null || req.body.password=="";
   if(criteria){
    // res.send("please enter username or email");
     res.json({success:false,message:"please enter username or email"});
   }
   else {
   logon.save(function(err) {
     if (err) {
      // res.send("username or password already exist");
       res.json({success:false,message:"username or password already exist"});
       //console.log();
     }else {
       //res.send("Account successfully created");
       res.json({success:true,message:"Account successfully created"});
     }

   });
  }

  });
  return router;
}
