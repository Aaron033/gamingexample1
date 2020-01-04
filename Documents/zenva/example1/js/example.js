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
    let answer =[]; 
    
    let maxNum = Math.max(...arr) 
    
    for(let i = 0; i < arr.length; i++) {
        if(arr.indexOf(arr[i]+1) === -1 && arr[i] !==maxNum) {
            answer.push(arr[i] + 1 )

        }
    }
    return answer; 
}
missing([9,4,3,6,8,2])

function keyboardRow(arr) {
    let answer = []; 

    const rows = [/[qwertyuiop]/g, /[asdfeghjkl]/g, /[zxcvbnm]/g];

    for( let i =0; i < arr.length; i++){
        for(let j = 0; j< rows.length; j++){

            if() 
        }
    }
}