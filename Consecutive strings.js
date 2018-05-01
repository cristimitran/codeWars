// function longestConsec(strarr, k) {
//     let n = starr.length
//     let arrA = []
//     for (i=0;i<k-1;i++) {
        
//     }
// }

let arr = ["zone", "abigail", "theta", "form", "libe", "zas"]
let newArr = []
let n = arr.length
let k = 2
let result = []


console.log(arr[arr.length - k-5])

for (i=0; i<n; i++) {
    newArr.push(arr.slice(i, k+i))
}

let difference = (newArr.length - k)

console.log(newArr)

console.log(newArr[difference])

for (i=0; i<newArr.length-1; i++) {
    console.log(newArr[difference-i])
    for(j=1; j<newArr.length-1; j++) {
        console.log(newArr[difference-j])
        
          
    
    }
} 

console.log(result) //?

// if((newArr[difference-j][i] + newArr[difference-j][j]).length > (newArr[difference-i][i] + newArr[difference-i][j]).length) {
//     result.push(newArr[difference-j][i] + newArr[difference-j][j])
// }



// for(i=0; i<newArr.length; i++) {
//     console.log(newArr[i])
//     for(j=1; j<newArr.length; j++) {
//         console.log(newArr[j]) //?
//     }
// }

// newArr.forEach(function(x,y){
//     Object.keys(newArr).forEach(function (z) {
//         console.log(newArr[z][1])
//     })
// })


//(["zone", "abigail", "theta", "form", "libe", "zas"], 2), "abigailtheta")