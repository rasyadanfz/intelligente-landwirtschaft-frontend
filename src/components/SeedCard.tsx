export interface seedCardInterface {
    id:string;
    name:string;
    stock:number;
    soil_moisture:number;
    air_temperature:number;
    air_humidity:number;
    air_pressure:number;
    pH:number
}


export default function SeedCard({name,stock}:seedCardInterface){
    return(
    <div id="SeedCard">
    <div className="border mx-[600px] border-black rounded-md p-4 relative duration-100 bg-[#EDEDED] my-[20px]">
        <div className="flex flex-col md:flex-row justify-center items-between md:justify-between md:items-center gap-y-4">
            <div>
                <h1 className="font-semibold text-h6 mb-2">
                    {name}
                </h1>
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
            <div className="justify-self-end items-end">
                {/* Here is the button going to be */}
            </div>
        </div>
    </div>
</div>
    )

}
