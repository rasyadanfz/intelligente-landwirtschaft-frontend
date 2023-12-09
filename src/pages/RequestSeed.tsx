import { useEffect, useState } from "react";
import Button from "../components/Button";
import SeedCard, { seedInterface } from "../components/SeedCard";
import Navbar from "../components/Navbar";

async function getListSeed() {
    try {
        const res = await fetch(
            `${import.meta.env.VITE_BACKEND_URL}/api/seed`,
            {
                method: "GET",
            }
        );

        if (!res.ok) {
            throw new Error(`Failed to fetch data : ${res.statusText}`);
        }

        const data = res.json();
        return data;
    } catch (error) {
        console.error("Error fetching data: ", error);
        return [];
    }
}

const RequestSeed = () => {
    const [listSeed, setListSeed] = useState<seedInterface[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getListSeed();
                const result = res.data;
                for (let i = 0; i < result.length; i++) {
                    result[i].countTake = 0;
                }
                setListSeed(result);
            } catch (error) {
                console.log("Error fetching data : ", error);
            }
        };

        fetchData();
    }, []);

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
                        {listSeed.map((item, index) => (
                            <SeedCard
                                key={index}
                                name={
                                    item.name.charAt(0).toUpperCase() +
                                    item.name.slice(1)
                                }
                                stock={item.stock}
                            />
                        ))}
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
