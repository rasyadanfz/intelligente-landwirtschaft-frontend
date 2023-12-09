import { useEffect, useState } from "react";
import SeedCard from "../components/SeedCard";
import { seedCardInterface } from "../components/SeedCard";
import Button from "../components/Button";
const baseURL:string = 'https://intelligente-landwirtschaft-be.up.railway.app'

async function getListSeed(){
    try{
        const res = await fetch(`${baseURL}/api/seed`,{
            method:"GET"
        })

        if(!res.ok){
            throw new Error(`Failed to fetch data : ${res.statusText}`)
        }

        const data = res.json();
        return data
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
                const result = res.data;
                for(let i = 0;i < result.length;i++){
                    result[i].countTake = 0;
                }
                setListSeed(result);
            }catch(error){
                console.log("Error fetching data : ",error)
            }
        }

        fetchData();
    },[])

    return (
        <div className="flex flex-col">
            <div >
            {
                listSeed.length === 0 ?
                (<div className="text-center absolute top-[50%] left-[50%] translate-x-[-50%] items-center justify-center">
                <p className="font-semibold text-h5 md:text-h4 font-raleway">
                    There is no seed
                </p>
                </div>) :
                (
                    <div>
                        {
                           listSeed.map((item,index)=>(
                                <SeedCard key={index} name={item.name} stock={item.stock} />
                           ))
                        }
                    </div>
                )

            }
            </div>
            <div className="grid place-items-center">
                <Button className="border h-[50px] w-[200px] mb-[200px]" text="Confirm" onClick={()=>{}}/>
            </div>

        </div>
    );
};

export default RequestSeed;
