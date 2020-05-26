
function display_random_image() 
{
     var theImages = [{
        src: "https://i.imgur.com/WQxYvPMl.jpg"
     }, {
         src: "https://i.imgur.com/FzzU9gHl.jpg"
     }, {
         src: "https://i.imgur.com/JmRhMIcl.jpg"
     }, { 
         src: "https://i.imgur.com/CaZVinMl.jpg"
     }, {
         src: "https://i.imgur.com/SWjee1dl.jpg"
     }, {
         src: "https://i.imgur.com/q2TSRiNl.jpg"
     }, {
         src: "https://i.imgur.com/wCO2D9nl.jpg"
     }, { 
         src: "https://i.imgur.com/jpJOhYcl.jpg"
     }, {
         src: "https://i.imgur.com/qEqm3H0l.jpg"
     }, {
         src: "https://i.imgur.com/CFO0NzOl.jpg"
     }, {
        src: "https://i.imgur.com/zmE1hw4l.jpg",
    }, {
        src: "https://i.imgur.com/NItur1ml.jpg",
    }, {
        src: "https://i.imgur.com/g8vLZzZl.jpg",
    }, {   
        src: "https://i.imgur.com/aaubV35l.jpg",
    }, {
        src: "https://i.imgur.com/qlwUWIIl.jpg",
    }, {
        src: "https://i.imgur.com/RjlFThfl.jpg",
    }, {
        src: "https://i.imgur.com/KEctMJzl.jpg"
    }, {
        src: "https://i.imgur.com/qJn17cCl.jpg"
    }, {
        src: "https://i.imgur.com/GcU3Pnzl.jpg"
    }, {
        src: "https://i.imgur.com/Qpn5lIBl.jpg"
    }, {
        src: "https://i.imgur.com/lp2PcQFl.jpg"
    }, {
        src: "https://i.imgur.com/JuytvWll.jpg"
    }, {
        src: "https://i.imgur.com/l1SRjril.jpg"
    }, {
        src: "https://i.imgur.com/U7tq2yYl.jpg"
    }, {
        src: "https://i.imgur.com/OkDxwyZl.jpg"
    }, {
        src: "https://i.imgur.com/BsD9OXtl.jpg"
    }, {
        src: "https://i.imgur.com/iDpBJvkl.jpg"
    }, { 
        src: "https://i.imgur.com/7M6AGoIl.jpg"
    }, {
        src: "https://i.imgur.com/ioycVxPl.jpg"
    }, {
        src: "https://i.imgur.com/NDmzbQbl.jpg"
    
    }];
    
    var preBuffer = [];
    for (var i = 0, j = theImages.length; i < j; i++) {
        preBuffer[i] = new Image();
        preBuffer[i].src = theImages[i].src;
    }
   
// create random image number
  function getRandomInt(min,max) 
    {
    imn = Math.floor(Math.random() * (max - min + 1)) + min;
    return preBuffer[imn];
    }  

// 0 is first image,   preBuffer.length - 1 is  last image
  
var newImage = getRandomInt(0, preBuffer.length - 1);
 
// remove the previous images
var images = document.getElementsByTagName('img');
var l = images.length;
for (var p = 0; p < l; p++) {
    images[0].parentNode.removeChild(images[0]);
}
// display the image  
document.body.appendChild(newImage);
}


$(document).ready(function(){
  $("#update").click(function(){
    var jump = $("#update");
    jump.animate({fontSize: '1.2em'}, "medium");
    jump.animate({fontSize: '1em'}, "medium");
  });
});

$(document).ready(function(){
  $("#update").click(function(){
    var jump = $("#hpns");
    jump.animate({fontSize: '1.3em'}, "medium");
    jump.animate({fontSize: '1em'}, "slow");
  });
});

$(document).ready(function(){
  $("#update").click(function(){
    var jump = $("#counter");
    jump.animate({fontSize: '2em'}, "slow");
    jump.animate({fontSize: '1em'}, "medium");
  });
});


$(document).ready(function(){
  $("#update").click(function(){
    var jump = $("#rndmrulesbtn");
    jump.animate({fontSize: '1.08em'}, "slow");
    jump.animate({fontSize: '1em'}, "slow");
  });
});
