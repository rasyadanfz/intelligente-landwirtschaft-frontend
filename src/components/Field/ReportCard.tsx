import { FaTemperatureLow } from "react-icons/fa";
import { IoWater } from "react-icons/io5";
import { GiAcid } from "react-icons/gi";
import { IconContext } from "react-icons";

const getCardData = ({ type, value }: { type: string; value: number }) => {
    const cardData: {
        icon: React.ReactElement;
        cardValue: number;
        title: string;
        desc: string;
    } = {
        icon: <></>,
        cardValue: 0,
        title: "null",
        desc: "null",
    };

    switch (type) {
        case "temperature":
            cardData.title = "Temperature";
            cardData.icon = <FaTemperatureLow />;
            cardData.cardValue = value;
            cardData.desc = "Air temperature";
            break;
        case "humidity":
            cardData.title = "Humidity";
            cardData.icon = <IoWater />;
            cardData.cardValue = value;
            cardData.desc = "Air humidity";
            break;
        case "ph":
            cardData.title = "pH Level";
            cardData.icon = <GiAcid />;
            cardData.cardValue = value;
            cardData.desc = "Soil pH level";
            break;
    }
    return cardData;
};

const ReportCard = ({ type, value }: { type: string; value: number }) => {
    const { icon, cardValue, title, desc } = getCardData({ type, value });
    return (
        <div className="flex justify-between gap-x-10 border border-black rounded-md p-2">
            <div className="flex flex-col gap-y-2">
                <div className="text-h3 font-bold items-self-start">
                    {cardValue}
                </div>
                <div>
                    <div className="text-body font-medium">{title}</div>
                    <div className="text-caption">{desc}</div>
                </div>
            </div>
            <IconContext.Provider value={{ size: "2.5em", color: "black" }}>
                <div className="m-1">{icon}</div>
            </IconContext.Provider>
        </div>
    );
};

export default ReportCard;
