async function trial(){
try{
    const promise1 = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Promise 1 resolved!'), 1000);
      });
      
      const promise2 = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Promise 2 resolved!'), 2000);
      });
      
      const promise3 = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Promise 3 resolved!'), 3000);
      });
      
      let p=await Promise.race([promise1, promise2, promise3])
      console.log(p)
      
}catch{}


}
trial()
