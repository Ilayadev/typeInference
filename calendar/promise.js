function loading(){
    var ele1=document.querySelector('#ele1')
    var ele2=document.querySelector('#ele2')
    var ele3=document.querySelector('#ele3')
    ele1.addEventListener('click',requesting1)
    ele2.addEventListener('click',requesting2)
    ele3.addEventListener('click',requesting3)
}
function requesting1(){
setTimeout(() => {
   try{
    fetch('http://127.0.0.1:5500/calendar/promise.json').then(res=>res.json()).then(res=>console.log(res))
   }catch(e){
        console.log(`${e.name}:ulr is wrong ${e.message}`)
   }  
}, 3000);
}
function getuser(id){
    return new Promise(async(resolve,reject)=>{
        let user=await fetch('http://127.0.0.1:5500/calendar/promise.json')
        let res=await user.json()
        if(res){
            resolve(res[id])
        }else{
            reject('wrong url')
          }
        })
}
function getusername(user){
    return new Promise((resolve,reject)=>{
        if(user){
            resolve(user.name)
        }else{
            reject('there is  no user')
        }
    })
}
async function requesting2(){
    try{
        let user=await getuser(1)
    let username=await getusername(user)
    console.log(username)
    }catch(e){
        console.log(`${e.name} ${e.message}`)
    }
    
}
async function requesting3(){
  let fetch1=await fetch('http://127.0.0.1:5500/calendar/promise.json').then(res=>res.json())
  let fetch2=await fetch('http://127.0.0.1:5500/calendar/promise.json').then(res=>res.json())
  let fetch3=await fetch('http://127.0.0.1:5500/calendar/promise.json').then(res=>res.json())
  Promise.all([fetch1,fetch2,fetch3]).then(res=>console.log(res))
}