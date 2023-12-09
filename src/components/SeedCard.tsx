import Button from "./Button";
import DropDown from "./DropDown";
import { useState } from "react";


export interface seedInterface {
	id: string;
	name: string;
	stock: number;
	soil_moisture: number;
	air_temperature: number;
	air_humidity: number;
	air_pressure: number;
	pH: number;
}

export interface seedCardInterface {
    name: string;
    stock: number;
    countTake?: number;
    onChangeCount?: (count: number) => void;
}

export default function SeedCard({
  name,
  stock,
  countTake = 0,
  onChangeCount,
}: seedCardInterface) {
  const [localCountTake, setLocalCountTake] = useState(countTake);

  const handleIncreaseCount = () => {
    if (localCountTake < stock) {
      setLocalCountTake(localCountTake + 1);
      if (onChangeCount) {
        onChangeCount(localCountTake + 1);
      }
    }
  };

  const handleDecreaseCount = () => {
    if (localCountTake > 0) {
      setLocalCountTake(localCountTake - 1);
      if (onChangeCount) {
        onChangeCount(localCountTake - 1);
      }
    }
  };
    return (
        <div id="SeedCard">
            <div className="border border-black rounded-md p-4 relative duration-100 bg-[#EDEDED] my-[20px]">
                <div className="flex flex-col md:flex-row justify-center items-between md:justify-between md:items-center gap-y-4">
                    <div>
                        <h1 className="font-semibold text-h6 mb-2">{name}</h1>
                        <div className="flex flex-row gap-5">
                            <div className="">
                                <p>Stok</p>
                            </div>
                            <div className="ml-4">
                                <p>:</p>
                            </div>
                            <div className="">
                                <p>{stock}</p>
                            </div>
                        </div>
                    </div>
                    <div className="justify-self-end items-end flex flex-row gap-x-8">
                        {/* Here is the button going to be */}
                        <Button
                          className="mx-2 my-4 px-4 py-2"
                          text="-"
                          onClick={handleDecreaseCount}
                        />
                        <p className="my-7 mx-4 font-semibold">{localCountTake}</p>
                        <Button
                          className="mx-2 my-4 px-4 py-2"
                          text="+"
                          onClick={handleIncreaseCount}
                        />
                    </div>
                </div>
            </div>
            <div className="justify-self-end items-end flex flex-row">
                {/* Here is the button going to be */}
                {/* <Button className="mx-2 my-4" text='-' onClick={()=>{}}/>
                <p className="my-7 mx-4">0</p>
                <Button className="mx-2 my-4" text='+' onClick={()=>{}}/> */}
                <DropDown/>
            </div>
        </div>
    );
}
