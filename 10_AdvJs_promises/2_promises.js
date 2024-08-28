const promiseOne = new Promise((resolve, reject)=>{
    // Do an async task
    // DB calls , cryptography, network 

    setTimeout(()=>{
    //  console.log('Async task is completed:')
     resolve();
    },1000)
})

promiseOne.then(()=>{
    // console.log('PromiseOne resolved')
})

new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // console.log('Async 2 is complete');
        // resolve();
    },1000)
}).then(()=>{
    // console.log('Promise 2 is reolved')
})

const promiseThree = new Promise ((resolve, reject)=>{
    setTimeout(()=>{
     // All causes whatever you want to async(Block code )
    //  console.log("promise three is complete")
     resolve({username:'Anil', email:'ak@example.com'});
    },1000)
})

promiseThree.then((user)=>{
    // console.log(user);
    // console.log(user.email)
})

const promiseFour = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = false;
        if(!error){
            resolve({username:'Anil', email:'ak@example.com'});
        }else{
            reject('ERROR: Something went wrong::');
        }
    },1000)
})


promiseFour
.then((user)=>{
    console.log(user.username);
})
.catch((msg)=>{
  console.log(msg);
})


// promiseFour
// .then((user)=>{
//     console.log(user);
//     return user.username;
// })
// .then((username)=>{
//     console.log(username);
// })
// .catch((msg)=> console.log(msg))
// .finally(()=>{
//     console.log('Finally will always be execute::')
// })


// const promiseFive = new Promise((resolve, reject) =>{
//     setTimeout(()=>{
//         let error = true;
//         if(!error){
//             resolve({username:'Javascript', password:'123'});
//         }else{
//             reject('ERROR: JS went wrong::');
//         }
//     },1000)
// })

// async function consumePromiseFive() {
//   try {
//   const response =  await promiseFive
//   console.log(response);
//   } 
//   catch (error){
//     console.log(error)
//   }
// }
// consumePromiseFive();

// async function getAllUsers(){
//     try { 
//     const response = await fetch('https://api.github.com/users/hiteshchoudhary')
//     const data =  response.json();
//     // console.log(response);
//     console.log(data); 
//     }
//     catch(error) {
//        console.log(error)
//     }
// }

// getAllUsers();

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
   return response.json();
})
.then((data)=>{
    console.log(data)
})
.catch((e)=>{console.log(e)})



