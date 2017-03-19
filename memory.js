window.onload= init;

function init()
{
 var images= document.getElementsByTagName("img");
 for(var i=0; i<images.length; i++)
 {
  images[i].onclick= handleClick;
 }   
 model.generateImages(); 
}


function handleClick(e)
{

var image=e.target;
var id=image.id;
for(var i=0; i<model.boardsize;i++)
{
  if(id == model.hiddenlocations[i].loc)
   {
     image.src=model.hiddenlocations[i].src;
     controller.isSameImage(image,controller.clicks);
     
   }
}  
}

var controller={

 url:[],
 clicks:1,
  image1:{},
  image2:{},
 isSameImage: function(image,clicks){
  
 if(clicks==1) 
 {
  this.image1=image;
  this.url[clicks]=image.src;
  this.clicks++;
  
 }
  if(clicks==2)
 { 
  this.image2=image;
   this.url[clicks]=image.src;
   if(this.url[1]!=this.url[2])
   {setTimeout(this.facetile,2000,this.image1,this.image2);}
   this.clicks=1;
  }
 },

 facetile:function(image1,image2)
 {
  image1.src="twitterBird.png";
  image2.src="twitterBird.png";
 }

};

var model={
           boardsize:16,
           urls:[],
           locations:[],
           hiddenlocations:[],
           generateImages: function(){ console.log("enter");
				       for(var i=1; i<=(this.boardsize/2); i++)
                                       {
                                         var code = i;
                                         this.urls.push(code);
                                         this.urls.push(code);               
                                       }
                                       
                                       this.checkLocation();
                                     },

          

           generateLocation: function(){   
                                            var row= Math.floor(Math.random()*4);
                                            var column= Math.floor(Math.random()*4);
                                            var newlocation= row + "" + column;
                                            return newlocation;
                                         },

           checkLocation: function(){
                                     var location;
                                     for(var i=0; i<this.boardsize; i++) 
                                      {
                                       do{ 
                                          location=this.generateLocation();
                                         }while(this.collision(location));
                                       this.locations[i]=location;
                                      }
                                    this.assignUrl(); 
                                    },

          collision: function(location){
                                        
                                        if(this.locations.indexOf(location)>=0)
                                         {
                                          return true;
                                         }
                                        return false;
                                       }, 
                                        
         assignUrl: function(){
                               for(var i=0;i<this.boardsize;i++)
                                {
                                  this.hiddenlocations.push({loc:this.locations[i],src:"images/fruit-"+this.urls[i]+".jpeg"});
                                }
                 
                              }
};
