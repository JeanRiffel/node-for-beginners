const getUserId = ()=>{
    console.log('User Id', 100);    
    return 100;    
}

const getUserData = async (userId )=>{
   return new Promise ( (resolve, reject )=>{
         setTimeout( ()=>{ 
            console.log('getting user data');
            const data = {
                userId,
                name: 'john',
                age: 30
            };
            resolve(data);
        }, 3000);            
    } );    
};

const isUserOfAge = (userData )=>{
    if (!userData) return false;    
    if (!userData.userId) return false;

    return userData.age >= 18 ? true : false;
}

const main = async ()=>{
    const userId = getUserId();    
    const userData = await getUserData(userId);     
   
    if (isUserOfAge(userData)) {
        console.log(`the user ${userData.name} is of age`);
    } else {
        console.log(`the user ${userData.name} is not of age`);
    }
}

main();