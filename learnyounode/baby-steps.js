const arg = process.argv

let result = 0

for(let  i = 2; i < arg.length; i++) 
    result += Number(arg[i])

console.log(result)
