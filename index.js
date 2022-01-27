
function palindrome(str){
    const len = string.length;
     for(let i=0;i<len/2;i++){
        if(string[i]!==string[len -1 -i]){
            alert('its not a palidrome!!!');
        }else{
            alert('its a palidrome !!!')
        }

     }
}

const string = prompt('Enter a string;');

const value = palindrome(string);
console.log(value);