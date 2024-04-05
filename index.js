function hasTargetSum(arr, target) {
  
  for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
          
          if (arr[i] + arr[j] === target) {
              return true; 
          }
      }
  }
}
function hasTargetSum(arr, target) {
  
  for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
          
          if (arr[i] + arr[j] === target) {
              return true; 
          }
      }
  }
  return false; 
}

module.exports = hasTargetSum;

console.log(hasTargetSum([3, 8, 12, 4, 11, 7], 10)); 
console.log(hasTargetSum([22, 19, 4, 6, 30], 25));   
console.log(hasTargetSum([1, 2, 5], 4));  
