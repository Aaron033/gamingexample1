
var canvas = document.getElementById('myCanvas'); 
var ctx = canvas.getContext('2d'); 

let screenWidth = 1000; 
let screenHeight = 500; 

class  GameCharacter {
    constructor(x, y, width, heigth, color){
        this.x = x; 
        this.y = y; 

        this.width = width ; 
        this.heigth = heigth; 
        this.color = color; 
    }

    var rectangle = new GameCharacter(

        50,50,50,50, "rgb(0,0,255)"
    ); 

    var draw = function(){

ctx.clearRect(0,0 ,screenWidth, screenHeight) 
ctx.fillStyle = rectangle.color; 
ctx.fillRect(rectangle.x, rectangle.y, rectangle.width, rectangle.heigth)      
    }

    var step = function (){
        window.requestAnimationFrame(step)
        draw(); 
    }
    
    
}