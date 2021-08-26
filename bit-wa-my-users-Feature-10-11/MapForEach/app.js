class Person {
    constructor(name,surname) {
        this.name = name;
        this.surname = surname;
    }

}




const fakes = [
{
  id:1,
  name:'Nikola',
  surname:'Radovic',
  adress:'Grcka 10'  
},
{
  id:2,
  name:'Marko',
  surname:'Radovic',
  adress:'Grcka 10'   
},
{
  id:3,
  name:'Djoel',
  surname:'Radovic',
  adress:'Grcka 10'  
},
{
  id:4,
  name:'Darko',
  surname:'Radovic',
  adress:'Grcka 10'  
}
]
arr =[ 1,2,3,4]
arr2 = []
arr.forEach(function(element,i){
    const aa = element + 2;
    arr2.push(aa);
    console.log(arr2);
    console.log(i);
        
    return arr2;
    
})

console.log(arr2);

// const init = (fakesattribut)=>{
//     const{name,surname} =fakesattribut;
//     return new Person(fakesattribut.name, fakesattribut.surname)
     
//     }
// const instance = (fakesattribut)=>{
//        console.log(fakesattribut); 
//        return fakes.map(init)
// }


// console.log(instance(fakes));






