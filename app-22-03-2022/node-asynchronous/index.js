const getUserId = ()=>{
    console.log('User Id', 100);    
    return 100;    
}

const getUserData = (userId )=>{    
    return new Promise( (resolve, reject) =>{
        try{ 
            setTimeout( ()=>{
                console.log('Getting user data');
                const data = {
                        userId,
                        name : 'john',
                        age : 30}        
                
                resolve(data);                
            }, 3000);
        
        }catch(error){
            reject(error);
        }
    });
};

const isOfAge = (userData)=>{    
    if (!userData){ return false; }
    return userData.age >= 18 ? true : false;
}

const main = async ()=>{
    const userId = getUserId();    

    await getUserData(userId)
        .then( ( userData )=>{
            if(isOfAge(userData)){
                console.log('Is Of Age');
            }else{
                console.log('Is not Of Age');
            }
        })
        .catch( (error)=>{
            console.log('Found error ', error );
        }); 
}

main();