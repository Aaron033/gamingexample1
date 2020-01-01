let maxhealth = 100; 
var currentHealth = 50; 





var inventory = [ "shirt" , "axe " ,"bread"]
inventoruy = ["water", "pants"]

console.log(inventory)

inventory[0];

function addNumber (num) 
{
    var answer =0; 

    var convert = num.toString(); 

    convert.split("")

    for(var i=0; i < convert.length; i ++) {
        answer += parseInt(convert[i])

    }
    if(answer > 9){
        addNumber(answer)


    }else {
        console.log(answer)
    }
}
addNumber(555)


function missing(arr) {
    
}