const getData=async(url,options)=>{
    try{
        let data = await fetch(url,options);
        data=await data.json()
        return data;
    }
    catch(error){
        throw error
    }

}

export default getData