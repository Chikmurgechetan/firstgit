function createPost()
 
 {
    return new Promise(() =>{

    });
}

const user ={
    username : 'ck',
    lastactivitytime:'28th of march'

}
upadtelastactivitytime ={

}
function userupdatepost()
 {
    Promise.all([createPost,upadtelastactivitytime])
    .then(([createPostresolves,updatelastactivitytimeresolve]) =>{
        console.log(updatetelastactivitytimeresolves)

    })
    .catch(err=> console.log(err))
}