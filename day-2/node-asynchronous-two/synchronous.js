const getDataFromCourier_1 = (timeout)=>{
    return new Promise ( (resolve, reject )=>{
        setTimeout( ()=>{ 
            console.log("Querying Courier_1");
            const data = {name: "courier_1" }
            resolve(data);
        }, timeout);            
    } );
};

const getDataFromCourier_2 = (timeout)=>{
    return new Promise ( (resolve, reject )=>{
        setTimeout( ()=>{ 
            console.log('Querying Courier_2');
            const data = {name: "courier_2"  }
            resolve(data);
        }, timeout);            
    } );
};

const getDataFromCourier_3 = (timeout)=>{
    return new Promise ( (resolve, reject )=>{
        setTimeout( ()=>{ 
            console.log('Querying Courier_3');
            const data = {name: "courier_3" }
            resolve(data);
        }, timeout);            
    } );
};

const getAllowedPlacesOfDelivery = async ()=>{
    const placeList = [];
    
    const courier_1 =  await getDataFromCourier_1(3000);
    placeList.push(courier_1);
    
    const courier_2 =  await getDataFromCourier_2(2010);
    placeList.push(courier_2);
    
    const courier_3 =  await getDataFromCourier_3(1500);
    placeList.push(courier_3);

    let result = {};
    result.name = "Places of Delivery";
    result.placeList = placeList;

    return result;
}

const showPlaces = async ()=>{
    const allowedPlaces = await getAllowedPlacesOfDelivery();
    console.log('The places are: \n ', allowedPlaces);
}

showPlaces();


