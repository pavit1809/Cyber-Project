// ==============================>>>>>>>>>>>>>>>>>>>>>>>>>>
var nameuser;
var totpass;
function generate(size){
   function random_item(list){
      return list[Math.floor(Math.random()*list.length)];
   }
   function shuffleArray(arra1) {
      var ctr = arra1.length, temp, index;
      while (ctr > 0) {
          index = Math.floor(Math.random() * ctr);
          ctr--;
          temp = arra1[ctr];
          arra1[ctr] = arra1[index];
          arra1[index] = temp;
      }
      return arra1;
   }
   var items=['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '~', '`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '=', '-', '\\', ']', '[', '|', '}', '"', "'", ':', ';', '?', '/', '>', '.', '<', ',' , '{'];
   //for time being i am taking the length of password to be 8
   size=parseInt(size);
   //no of passwords=5;
   var counter=1;
   var allpasswords=[];
   items=shuffleArray(items);
   var listshuffled=shuffleArray(items);
   var pass="";
   for(var i=0;i<size;i++){
      pass+=(random_item(listshuffled));
   }
   var finalpass=shuffleArray(pass);
   for(var i=0;i<size;i++){
      finalpass=shuffleArray(finalpass);
   }
   return finalpass;
}

// ==============================>>>>>>>>>>>>>>>>>>>>>>>>>>
var express =require("express");
var app=express();
var bodyparser=require("body-parser");
app.use(express.static("cssresources"));
app.use(bodyparser.urlencoded({extended:true}));
app.set("view engine","ejs");
// ==>>>> basic setup ends here

// ========================>
// DATABASE SETUP
// ========================>
const mongoose=require("mongoose");
const { stringify } = require("querystring");
const { request, response } = require("express");
mongoose.connect('mongodb://localhost/demo_cyber', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to DB!'))
.catch(error => console.log(error.message));
mongoose.set('useFindAndModify', false);
// =================> Designing user schemas
var userauthschema=new mongoose.Schema({
	Name: String,
	Userid: String,
	Password: String,
	master_key: Number
});
var userdataschema=new mongoose.Schema({
	master_key: Number,
   details :[{entity: String,password: String}]
});
var Authuser=mongoose.model("Authuser",userauthschema);	
var User=mongoose.model("User",userdataschema);
// =================>
// ================>
// Paths::::
// ================>

// =============================>
// PATHS FOR FIRST LANDING PAGE
// =============================>


//path for landing page
app.get("/",function(request,response)
{
	response.render("landing");
});
// path for developer info
app.get("/dev",function(request,response){
	response.render("developers");
});

// =============================>
// PATHS FOR CIPHER
// =============================>

//path for caeser cipher landing page
app.get("/cipherintro",function(request,response){
	response.render("cipherlanding");
});
//path for caeser cipher result
app.get("/encrypt",function(request,response){
	var tobeenc=request.query.asked;
	response.render("encryptlanding",{data:tobeenc});
});

// ==========================================>
// PATHS FOR PASSWORD MANAGEMENT PORTAL
// ==========================================>


//path for password management landing
app.get("/passwordlanding",function(request,response){
	response.render("passlanding");
})

//path for contact page in password landing page
app.get("/passwordlanding/contact",function(request,response){
	response.render("contacts");
});

//path for login and sign up page in password landing page
app.get("/passwordlanding/loginsignup",function(request,response){
	var tt="";
	response.render("loginpage",{tt});
});

app.post("/register",function(request,response){
	// console.log(request.body);
	var secretkey=Math.floor((Math.random() * 1000000) + 1);
	var userauthdata={
		Name: request.body.username,
		Userid: request.body.userid,
		Password: request.body.userpass,
		master_key: secretkey
	};
	var tt="";
	Authuser.find({Userid: request.body.userid},function(err,ret){
		if (err){
			console.log(err);
		}
		else{
			if (ret.length>0){
				tt="User already exists!!.\n PLEASE LOGIN OR SIGN UP WITH A DIFFERENT EMAIL ID!!";
				response.render("loginpage",{tt});
			}
			else{
				Authuser.create(userauthdata,function(err,user){
					if (err){
						console.log(err);
					}
					else{
						var newuser={
							master_key: secretkey
						};
						User.create(newuser,function(err,retout){
							if (err){
								console.log(err);
							}
							else{
								console.log(retout);
							}
						});
						tt="Congratulations!!, You are registered.\n Your secret key is :"+userauthdata.master_key+".\n Please keep it safe and secure!!"
						console.log("Successfully registered!!!!");
						// console.log(user);
						response.render("loginpage",{tt});
					}
				});
			}
		}
	});	
});
app.post("/validatedata",function(request,response){
	var provideddata={
		Userid: request.body.userid,
		Password: request.body.userpass
	};
	Authuser.find(provideddata,function(err,sendback){
		if (err){
			console.log(err);
		}
		else{
			if (sendback.length==0){
				var tt="Wrong Details!!.\nPlease signup first if you are not registered or try again!!";
				response.render("loginpage",{tt});
			}
			else{
				var tt="";
				nameuser=sendback[0].Name;
				var sk=sendback[0].master_key;
				User.find({master_key:sk},function(err,data){
					if (err){
						console.log(err);
					}
					else{
						totpass=data[0].details.length;
						// console.log(totpass);
						response.render("pwd-welcome",{tt,nameofuser:nameuser,recordsofuser:totpass});
					}
				});
			}
		}
	});
})
//================================>>>>>>>>>>>>>>>>
// Landing page for post login page
app.get("/home",function(request,response){
	var tt="";
	response.render("pwd-welcome",{tt,nameofuser:nameuser,recordsofuser:totpass});
});	

//Page for adding a password
app.get("/add",function(request,response){
	response.render("pwd-add");
});
//Path for the views page after addition
app.post("/add&view",function(request,response){
	// console.log(request.body);
	var newentry={
		entity: request.body.Domain,
		password: generate(request.body.len)
	}
	var providedkey=(parseInt(request.body.masterkey));
	// console.log(providedkey);
	Authuser.find({master_key:providedkey},function(err,retdata){
		if (err){
			console.log(err);
		}
		else{
			if (retdata.length==0){
				var tt="Provided Master key is wrong!!";
				response.render("pwd-welcome",{tt,nameofuser:nameuser,recordsofuser:totpass});
			}
			else{
				User.find({"details.entity": request.body.Domain,master_key:providedkey},function(err,res){
					if (err){
						console.log(err);
					}
					else{
						if (res.length==0){
							User.findOneAndUpdate({master_key:providedkey},{$push:{details:newentry}},function(err,user){
								if (err){
									console.log(err);
								}
								else{
									// console.log(user);
									totpass+=1;
									response.render("pwd-view2");
								}
							});
						}
						else{
							var tt="Password for this domain already exists.\nIf you wish to update,click the update link in the side menu.";
							response.render("pwd-welcome",{tt,nameofuser:nameuser,recordsofuser:totpass});
						}	
					}
				});
			}
		}
	});
});
//Page for view all passwords (stored)
app.get("/view",function(request,response){
	response.render("pwd-view2");
});
app.post("/getinfo",function(request,response){
	var dataprovided={
		master_key:request.body.masterkey,
		Password: request.body.masterpassword
	};
	Authuser.find(dataprovided,function(err,retauth){
		if (err){
			console.log(err);
		}
		else{
			if (retauth.length==0){
				var tt="Invalid Credentials";
				response.render("pwd-welcome",{tt,nameofuser:nameuser,recordsofuser:totpass});
			}
			else{
				User.find({master_key:request.body.masterkey},function(err,data){
					if (err){
						console.log(err);
					}
					else{
						if (data[0].details.length==0){
							var tt="No records found!!";
							response.render("pwd-welcome",{tt,nameofuser:nameuser,recordsofuser:totpass});
						}
						else{
							var userdetailsdata=data[0].details;
							// console.log(userdetailsdata);
							response.render("pwd-view",{displaydata:userdetailsdata});
						}
					}
				});
			}
		}
	});
});
//Path for updating a given password
app.get("/update",function(request,response){
	response.render("pwd-update");
});
//Path for the views page after updation
app.post("/upd&view",function(request,response){
	var authinfo={
		Password: request.body.pass,
		master_key: request.body.masterkey
	};
	Authuser.find(authinfo,function(err,retauth){
		if (err){
			console.log(err);
		}
		else{
			if (retauth.length==0){
				var tt="Invalid Credentials Provided!!!"
				response.render("loginpage",{tt});
			}
			else{
				User.find({"details.entity": request.body.domain,master_key:request.body.masterkey},function(err,resd){
					if (err){
						console.log(err);
					}
					else{
						if (resd.length==0){
							var tt="Please generate a password for the provided domain before trying to update it."
							response.render("pwd-welcome",{tt,nameofuser:nameuser,recordsofuser:totpass});
						}
						else{
							User.findOneAndUpdate({master_key:request.body.masterkey,"details.entity": request.body.domain},{$set :{"details.$[].password":generate(request.body.passlen)}},function(err,user){
								if (err){
									console.log(err);
								}
								else{
									response.render("pwd-view2");
								}
							});
						}
					}
				})
			}
		}
	});
});

//Path for deleting a password
app.get("/delete",function(request,response){
	response.render("pwd-delete");
});
//Path for the views page after deletion
app.post("/delete&view",function(request,response){
	var enteredcred={
		Password: request.body.pwd,
		master_key: request.body.masterkey
	}
	Authuser.find(enteredcred,function(err,res){
		if (err){
			console.log(err);
		}
		else{
			if (res.length==0){
				var tt="Invalid Credentials Provided!!!"
				response.render("loginpage",{tt});
			}
			else{
				User.find({"details.entity": request.body.domain,master_key:request.body.masterkey},function(err,resd){
					if (err){
						console.log(err);
					}
					else{
						if (resd.length==0){
							var tt="Please generate a password for the provided domain before trying to delele it."
							response.render("pwd-welcome",{tt,nameofuser:nameuser,recordsofuser:totpass});
						}
						else{
							User.updateMany({master_key:request.body.masterkey},{$pull :{details:{entity:request.body.domain}}},function(err,user){
							   if (err){
							      console.log(err);
							   }
							   else{
									totpass-=1;
									response.render("pwd-view2");
							   }
							});
						}
					}
				})
			}
		}
	});
});
//=====================================================
//Residual path
app.get("/passwordlanding/loginsignup/login",function(request,response){
	response.render("pwd-welcome");

});
app.get("/passwordlanding/loginsignup/login/generated",function(request,response){
	var reqlen=parseInt(request.query.len);
	response.render("postloginlandingans",{data:reqlen});
});
//JUST A TESTING PATH FOR ALL JS CODES
app.get("/testing",function(request,response){
	response.render("testerforalgos");
})

//Residual paths end here
//=====================================================



//command for starting the server
app.listen(process.env.PORT || 3000,process.env.IP,function()
{
	console.log("Server started!!!");
});