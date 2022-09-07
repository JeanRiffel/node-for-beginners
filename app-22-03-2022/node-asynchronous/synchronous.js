const getUserId = ()=>{
    console.log('User ID is ', 100);    
    return 100;    
};

const getUserData = (userId)=>{    
    console.log('Querying the ser data');
    const userData = {
            userId,
            name: 'John',
            age: 30
        };
    
    return userData;    
};

const isOfAge = (userData)=>{
    if (!userData) { 
        console.log('Age data not found'); 
        return;
    }
    if (!userData.userId) { 
        console.log('UserId not found'); 
        return;
    }

    if (userData.age >= 18) {
        console.log('The user is of age');
        return true ;
    }else if (userData.age < 18) {
        console.log('The user is not of age');    
    }
}

const main =  ()=>{
    const userId = getUserId();    
    const userData = getUserData(userId);
    isOfAge(userData);
}

main();