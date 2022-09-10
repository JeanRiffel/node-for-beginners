/*
    Exemplo usando callback
*/

const getUserId = ()=>{
    console.log('User Id', 100);    
    return 100;    
}

const getUserData = (userId, callback )=>{
    setTimeout( ()=>{ 
        console.log('getting user data');
        const data = {
            userId,
            name : 'john',
            age : 30}
        callback(data);            
    }, 3000);            
};

const isOfAge = ( userData )=>{
    if (!userData){ console.log('data not found'); return false;}
    if (!userData.userId){ console.log('userId not found'); return false; }

    if (userData.age >= 18){
        console.log('is of Age');
        return true ;
    }else
    if (userData.age < 18){
        console.log('is not of Age');    
        return false;
    }
}

const main =  ()=>{
    const userId = getUserId();
    getUserData(userId, isOfAge );
}

main();