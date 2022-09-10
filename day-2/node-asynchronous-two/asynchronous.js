const getDataFromCourier_1 = (timeout)=>{
    return new Promise ( (resolve, reject )=>{
        setTimeout( ()=>{ 
            console.log('Querying Courier_1');
            const data ={name: "courier_1" }
            resolve(data);
        }, timeout);            
    } );
};

const getDataFromCourier_2 = (timeout)=>{
    return new Promise ( (resolve, reject )=>{
        setTimeout( ()=>{ 
            console.log('Querying Courier_2');
            const data ={name: "courier_2" }
            resolve(data);
        }, timeout);            
    } );
};

const getDataFromCourier_3 = (timeout)=>{
    return new Promise ( (resolve, reject )=>{
        setTimeout( ()=>{ 
            console.log('Querying Courier_3');
            const data ={name: "courier_3"}
            resolve(data);
        }, timeout);            
    } );
};

const getData = ()=>{
    
    getDataFromCourier_1(5500);
        
    getDataFromCourier_3(3800);
        
    getDataFromCourier_2(2100);
        
    return;
}

const showData = ()=>{
    getData();    
    console.log('Function got finished');
}

showData();
console.log('App has finished');
