import { IconContext } from "react-icons";
import { FaSeedling } from "react-icons/fa";
import { TbHeartRateMonitor } from "react-icons/tb";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Card = ({
    title,
    icon,
    to,
    desc,
}: {
    title: string;
    icon: React.ReactElement;
    to: string;
    desc: string;
}) => {
    return (
        <Link
            className="border-2 grow border-black rounded-md hover:scale-105 hover:bg-gray-200 transition-transform"
            to={to}
        >
            <div className="flex flex-col justify-between items-center my-10">
                {icon}
                <p className="text-h3">{title}</p>
            </div>
            <div className="my-20">
                <p className="text-center text-h4">{desc}</p>
            </div>
        </Link>
    );
};

const IndexPage = () => {
    return (
        <div>
            <Navbar />
            <div className="mx-14 my-2">
                <h1 className="text-h2 font-bold">
                    Intelligente Landwirtschaft System
                </h1>
                <div className="flex justify-between gap-x-10 my-6">
                    <IconContext.Provider
                        value={{ size: "2.5em", color: "black" }}
                    >
                        <Card
                            title="Request Seed"
                            icon={<FaSeedling />}
                            to="/request-seed"
                            desc="Select and request seed for planting"
                        />
                        <Card
                            title="Monitor Field"
                            icon={<TbHeartRateMonitor />}
                            to="/field"
                            desc="Monitor your fields based on sensors data"
                        />
                    </IconContext.Provider>
                </div>
            </div>
        </div>
    );
};

export default IndexPage;
