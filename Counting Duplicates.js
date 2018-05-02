let text = "Indivisibilities"

let lowercase = text.toLowerCase()
    let length = lowercase.length //?
    let array1 = lowercase.split('') //?
  let tempArray = array1
  let result = []

//compare array to itself
function duplicateCount(text){
   for(i=0; i<length; i++) {
    console.log(text[i]) 
    for(j=i + 1; j<length; j++){
      console.log(text[j]) 
      if(text[i] == text[j]) {
        result.push(text[i])
      }
   }
    }
  }

   

duplicateCount(lowercase)

let counts = {}
for (i = 0; i < length; i++) {
  counts[lowercase[i]] = 1 + (counts[lowercase[i]] || 0);
}

//count unique items in an object
function countUnique(iterable) {
  return new Set(iterable).size;
}

console.log(countUnique(result))

console.log(result)
console.log(counts)

// function duplicateCount(text) {
//   let lowercase = text.toLowerCase()
//   let length = lowercase.length
//   let result = []

//   for (i = 0; i < length; i++) {
//       for (j = i + 1; j < length; j++) {
//           if (lowercase[i] == lowercase[j]) {
//               result.push(lowercase[i])
//           }
//       }
//   }

//   function countUnique(iterable) {
//       return new Set(iterable).size;
//   }

//  return countUnique(result)
// }

// function duplicateCount(text){
//   return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
// }
