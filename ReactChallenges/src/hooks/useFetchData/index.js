import  {useEffect, useState } from 'react';
import axios from 'axios';

const useFetchData=(url,initialData)=>{
    
     const [data,setData]=useState(initialData);
     const [loading,setLoading]=useState(false);
     const [error,setError]=useState(null);


   const fetchData =async()=> {
            try{
                const res= await axios.get(url);
                setData(res.data);
            }
            catch(error){
                setError(error)
            }
            finally{
                setLoading(false);
            }   
    }

    useEffect(() => {
           fetchData() 
    }, [url])

    return {data,loading,error}
}


export default useFetchData;
