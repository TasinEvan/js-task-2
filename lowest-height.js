// Find the lowest number in the array below.
// const heights2 = [167, 190, 120, 165, 137];

function lowestHeight( height ){
 let min = height[0]
  for( let scale of height)

  {  if( scale < min ){
    min = scale

  }
  }
  return min
}
const heights2 = [167, 190, 120, 165, 137];
console.log( lowestHeight(heights2))