import { useEffect, useState } from "react";

const baseURL:string = 'http://localhost:8000'

async function getListSeed(){
    try{
        const res = await fetch(`${baseURL}/api/seeds`,{
            method:"GET"
        })

        if(!res.ok){
            throw new Error(`Failed to fetch data : ${res.statusText}`)
        }

        const data = res.json();
        return data || [];
    }catch(error){
        console.error("Error fetching data: ", error);
        return [];
    }

}

const RequestSeed = () => {

    const [listSeed, setListSeed] = useState([]);
    
    useEffect(()=>{
        const fetchData = async() =>{
            try{
                const res = await getListSeed();
                console.log("HERE IS THE RES")
                console.log(res.data)
                setListSeed(res.data);
            }catch(error){
                console.log("Error fetching data : ",error)
            }
        }

        fetchData();
    },[])

    return (
        <div>
            <h1>ASD</h1>
        </div>
    );
};

export default RequestSeed;
