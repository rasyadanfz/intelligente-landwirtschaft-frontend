import { FaTemperatureLow } from "react-icons/fa";
import { IoWater } from "react-icons/io5";
import { GiAcid } from "react-icons/gi";
import { IconContext } from "react-icons";
import { SlSpeedometer } from "react-icons/sl";
import { WiHumidity } from "react-icons/wi";

const getCardData = ({ type, value }: { type: string; value: number }) => {
    const cardData: {
        icon: React.ReactElement;
        cardValue: number;
        title: string;
    } = {
        icon: <></>,
        cardValue: 0,
        title: "null",
    };

    switch (type) {
        case "temperature":
            cardData.title = "Air Temperature";
            cardData.icon = <FaTemperatureLow />;
            cardData.cardValue = value;
            break;
        case "humidity":
            cardData.title = "Air Humidity";
            cardData.icon = <WiHumidity />;
            cardData.cardValue = value;
            break;
        case "pressure":
            cardData.title = "Air Pressure";
            cardData.icon = <SlSpeedometer />;
            cardData.cardValue = value;
            break;
        case "ph":
            cardData.title = "pH Level";
            cardData.icon = <GiAcid />;
            cardData.cardValue = value;
            break;
        case "moisture":
            cardData.title = "Soil Moisture";
            cardData.icon = <IoWater />;
            cardData.cardValue = value;
            break;
    }
    return cardData;
};

const ReportCard = ({
    type,
    value,
    onClick,
    isSelected,
}: {
    type: string;
    value: number;
    onClick: (type: string) => void;
    isSelected: boolean;
}) => {
    const { icon, cardValue, title } = getCardData({ type, value });
    const handleClick = () => {
        onClick(type);
    };

    const className = `flex flex-wrap grow justify-between gap-x-10 border border-black rounded-md p-2 hover:cursor-pointer ${
        isSelected ? "bg-gray-200" : ""
    }`;
    return (
        <div className={className} onClick={handleClick}>
            <div className="flex flex-col">
                <div className="text-h3 font-bold items-self-start">
                    {cardValue}
                </div>
                <div>
                    <div className="text-body font-medium">{title}</div>
                </div>
            </div>
            <IconContext.Provider value={{ size: "2.5em", color: "black" }}>
                {icon}
            </IconContext.Provider>
        </div>
    );
};

export default ReportCard;
