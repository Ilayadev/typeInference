var whatsapp = {

    about:{
    	Need:["Android mobile","mobile no"],
      	Developer:["whatsapp ","facebook"],
      	ReleaseDate:["Feburary 2009"],
      	Language:["HTML","CSS","Javascript"],
      	Facilities:["chat","status","call","profile"],
      	application:"mobile application",
      	file_share_limit: "100MB",
      	file:function(a){
      		if (a<100){
      			console.log("this file can sent")
      		}else{
      			console.log("this fiile can't send")
      		}
      	}
    },
    chat:{
    	option:["about","groupchat","clearchat","storedchat"],    	
    	chat:function(a){
    		if (a=="about"){
    			console.log("we can chat through message to anyone across the world")
    		}
    		else if (a=="groupchat"){
    			console.log("you are selected the " + a + 
    				" once can chat with family and friends from anyhwhere across the  world between one  or more than one person")    			
    		}else if (a=="clearchat"){
       			console.log("you are selected the " + a +
    				"   once  can clear the  chat")
    		} else if (a=="storedchat"){    			
    			console.log("you are selected the "+ a +
    				" once can store the chat which is important to user ")
    		} else {
    			console.log("this option is not in the chat list")
    		}
    	}
    },
    status:{
    	option:["about","privacy","contact","except","only"],
    	status:function(a){
    		if (a=="about"){
    			console.log("we can share our present moment with others through the status and can see the others status")
    		}
    		else if (a=="privacy"){
    			console.log("you are selected the " + a + 
    				" once can keep the status private by hiding from others")    			
    		}else if (a=="contact"){
       			console.log("you are selected the " + a +
    				" the status will show to the person who all are in your contact ")
    		} else if (a=="except"){    			
    			console.log("you are selected the " + a +
    				" the status didn't show to the person who are all in your except list ")
    		}else if (a=="only"){    			
    			console.log("you are selected the " + a +
    				" the status show to the  person who are all you selected ")
    		}else {
    			console.log("this option is not in the status list")
    		}
    	}
    },
    call:{
    	option:["about","videocall","voicecall"],
    	call:function(a){
    		if (a=="about"){    			
    			console.log("once can call to one or more than one person across the world froom anyhwhere  " )
    		}else if (a=="videocall"){    			
    			console.log("you are selected the " + a +
    				" once can  communicate with others through face to face  ")
    		}else if (a=="voicecall"){    			
    			console.log("you are selected the " + a +
    				" once can  communicate with others through voice ")
    		}else {
    			console.log("this option is not in the call list")
    		}
    	}
    },
    profile:{
    	option:["about","photo"],
    	profile:function(a){
    		if (a=="about"){    			
    			console.log("profile is used to identify the person who are all in your chat list ")
    		}else if (a=="photo"){    			
    			console.log("you are selected the " + a +
    				" once can place the photo to easily identify the person ")
    		}else {
    			console.log("this option is not in the profile ist")
    	}	}
    },
    others:{
    	option:["link","block","payment"],
    	others:function(a){
    		if (a=="link"){    			
    			console.log("you are selected the "+ a +"using this our whatsapp can  used in another device" )
    		}else if (a=="block"){    			
    			console.log("you are selected the " + a +
    				" once can  block the unwanted person ")
    		}else if (a=="payment"){    			
    			console.log("you are selected the " + a +
    				" once can transfer the money with secure")
    		}
    }	}
 }  


 




