async function fetchUserTodos(userUrls,TodosUrls){
    try{
        let user=await fetch(userUrls)
        let Todos=await fetch(TodosUrls)
        let promise=await Promise.all([user,Todos])
        let userJson,TodosJson
        if(user.ok){
            userJson = await promise[0].json()
        }
        if(Todos.ok){
            TodosJson=await promise[1].json()
        }
        else{
            throw new Error('error!!!!!!!!!!!!!')
        }
        // console.log(promise)
        console.log(userJson)
        console.log(TodosJson)
    }catch(err){
console.log('Err:',err)
    }
    
}
fetchUserTodos('https://jsonplaceholder.typicode.com/users','https://jsonplaceholder.typicode.com/todos')