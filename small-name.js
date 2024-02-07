// Find the friend with the smallest name.


function smallNameFinder(name){
  let smallName = name[0]
  for( let scale of name){
   
    if( scale.length < smallName.length){
        smallName = scale


    }
  }
  return smallName

}
const names = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
console.log(smallNameFinder(names))
