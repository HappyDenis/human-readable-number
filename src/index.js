module.exports = function toReadable (number) {

let numberString = {
    1:"one",
    2:"two",
    3:"three",
    4:"four",
    5:"five",
    6:"six",
    7:"seven",
    8:"eight",
    9:"nine"
}

let numberDuble  = {
    10:"ten",
    11:"eleven",
    12:"twelve",
    13:"thirteen",
    15:"fifteen",
    18:"eighteen",
    20:"twenty",
    30:"thirty",
    40:"forty",
    50:"fifty",
    80:"eighty"
}
    let numToString = number + ''
   
    let convDouble = (num)=> {
        let uniteNumber = Array.isArray(num)?num.join(""):num
            if(uniteNumber > 10 && uniteNumber < 20 && !numberDuble[uniteNumber])return numberString[uniteNumber[uniteNumber.length-1]]+"teen"
            if(numberString[uniteNumber] || uniteNumber[0]==0)return numberString[parseInt(uniteNumber)]
            if(numberDuble[uniteNumber])return numberDuble[uniteNumber]  
            return (numberDuble[uniteNumber[0]+0]||(numberString[uniteNumber[0]]+"ty"))+(parseInt(uniteNumber[1])?(" "+numberString[uniteNumber[1]]):"")    
    }
    return number?number%100==0?numberString[numToString[0]]+" hundred":(number > 99?numberString[numToString[0]]+" hundred "+(convDouble(numToString.slice(1))):convDouble(numToString)):"zero"
}