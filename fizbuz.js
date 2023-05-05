function aktErtek(n) {
    if (n % 3 === 0 && n % 5 === 0) {
        return "Fizz Buzz";
    }else{
        if (n % 3 === 0) {
            return "Fizz";
        }else{
            if (n % 5 === 0){
                return "Buzz";
            }else{
                return n;
            }
        }
    }

}

function sorozat(len){
let tomb = new Array(len) 
for (let i = 0; i < tomb.length; i++)
    tomb[i]= aktErtek(i+1)
return tomb.toString()
}
function sorozat2(sz){
const LISTA = [];
let index = 1;

while (index <= sz){
    let adat = aktErtek(index);
    LISTA.push(adat);
    index += 1;
}
let szoveg = LISTA.join(", ");
return szoveg;
}