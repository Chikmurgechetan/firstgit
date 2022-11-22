const posts = [
    {title:'Post One',body:'This is post one',createdAt:new Date().getTime()},
    {title:'Post Two',body:'This is post two',createdAt:new Date().getTime()}
];
let intervalId;
function getPost(){
    
    
}
function createPost(post,callback){
    setTimeout(()=>{
     posts.push({...post, createdAt:new Date().getTime()});
     callback();
  },2000);

}
function create4thPost(post,callback){
    setTimeout(()=>{
        posts.push({...post, createdAt:new Date().getTime()});
        callback();
    },6000)
}
getPost();
createPost({title:'Post Three',body:'This is post Three'},getPost);
create4thPost({title:'Post Four',body:'This is post Four'},getPost);