const getUserId = ()=>{
    console.log('User Id', 100);    
    return 100;    
}

const getDataUser = (userId)=>{
    return new Promise ( (resolve, reject )=>{
        try{
            setTimeout( ()=>{ 
                console.log('Querying user data');
                const data = {
                    userId,
                    name: 'john',
                    age: 30}
                resolve(data);
            }, 3000);            
        }catch(error){
            reject(error);
        }
    });
};

const isOfAge = (userData)=>{    
    if (!userData){
        console.log('Age data not found');
        return false;
    }
    if (!userData.userId){
        console.log('User Id not found');
        return false;
    }

    if (userData.age >= 18){
        console.log('Is Of Age');
        return true ;
    }else
    if (userData.age < 18){
        console.log('Is NOT Of Age');  
        return false;  
    }
}

const main = ()=>{
    const userId = getUserId();    
    getDataUser(userId)
        .then((dataUser) =>{
            isOfAge(dataUser);
        })
        .catch( (error)=>{
            console.error(error);
        } );
}

main();