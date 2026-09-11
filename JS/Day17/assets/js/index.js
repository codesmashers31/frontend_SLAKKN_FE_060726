// const add = ()=>{
//     console.log('running');
    
// }

// const newadd = add

// newadd()


// const callbackFn = (a,b,cb)=>{
    
//     let result = a+b
//     console.log(result);
//     cb(result)
    

// }

// addEventListener("click",()=>{

// })

// callbackFn(10,30,(a)=>{

//     console.log("This is data",a);
    

// })






// setTimeout(()=>{
//     console.log("start");

//     setTimeout(()=>{
//          console.log("Process");
//          setTimeout(()=>{
//             console.log('data done');
            
//          },2000)
//     },2000)
    
// },1000)






// promise

// const dio = new Promise((resolve,reject)=>{

//     const datas = false

//     if(datas) {
//         resolve("Running")
//     }else{
//         reject("My Error")
//     }

// })

// console.log(myPromise);


// dio.then((result)=>{

//     console.log(result);
    

// }).catch((error)=>{

//     console.log(error);
    

// })



// const add = async ()=>{

//      const data =  2*2

//       await console.log(data);
      

    

// }

// console.log(add());


// fetch("link",{data},{hinfo})

// json - 


// const a = ()=>{
//     let add = 10
   
//     const addnew = ()=>{

//         add++
//         console.log(add);
        

//     }

//     return addnew
    

// }

// console.log(add);

// const result = a()

// result()
// result()
// result()
// result()



const outerFunction = ()=>{

      let a = 10
    const innerfuncton = ()=>{
        
        a++

        console.log(a);
        

    
}

return innerfuncton

}





const result = outerFunction()

result()
result()
result()
result()









