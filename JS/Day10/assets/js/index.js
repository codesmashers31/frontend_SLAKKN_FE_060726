// const add = (cb)=>{
//     console.log('Running main process');

//     cb()
    
// }

// const newFunction = ()=>{

//    console.log("Login The process");
   

// }
// add(()=>{

// })



// const outer = ()=>{

//    let a = 10


// const inner = ()=>{

   

//     a++

//     console.log(a);
    

// }   

// return inner   
    
// }

// const result =  outer()



// result()
// result()
// result()






const teaShop = ["tea","milk","boost"]

const result = []


for(let a=0;a<teaShop.length;a++){

   console.log(teaShop[a]);

   result[result.length] = teaShop[a]
   
   
   
}

result[result.length] = "Coffee"

console.log(result);

const teaShop1 = ["tea","milk","boost"]


teaShop1.push("bisket",4,5,6,7)

console.log(teaShop1);


teaShop1.pop()

console.log(teaShop1);

teaShop1.unshift("React")
console.log(teaShop1);


teaShop1.shift()

console.log(teaShop1);

const first = [1,2,3,4]
const second = [12,3,4]


const getresult = [...first,...second]

console.log(getresult);


const result1 = first.concat(second)

console.log(result1);



const house = ["room","kitchen","TV","AC","room2","Room3","Room4"]
const re = house.includes("90809809")


const reve = house.reverse()

console.log(reve);


console.log(re);

// const showing = house.slice(2,8)

const splices = house.splice(0,5,"AC")


console.log(splices);


console.log(house);





