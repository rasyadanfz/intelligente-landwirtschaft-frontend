import { useEffect, useState } from "react";
import axios from "axios";
import FieldSelector, {
    FieldData,
} from "../components/Field/FieldSelector/FieldSelector";
import ReportCard from "../components/Field/ReportCard";
import FieldChart from "../components/Chart/FieldChart";

export interface FieldMonitorDataInterface {
    air_humidity: number;
    air_pressure: number;
    air_temperature: number;
    pH: number;
    soil_moisture: number;
    timePosted: Date;
}
const Field = () => {
    const [selectedChartType, setSelectedChartType] = useState("temperature");
    const [selectedFieldNumber, setSelectedFieldNumber] = useState(0);
    const [allFieldData, setAllFieldData] = useState<FieldData[]>([]);
    const [selectedFieldData, setSelectedFieldData] = useState<FieldData>();
    const [fieldMonitorData, setFieldMonitorData] =
        useState<FieldMonitorDataInterface[]>();
    const [latestFieldMonitorData, setLatestFieldMonitorData] =
        useState<FieldMonitorDataInterface>({
            air_humidity: 0,
            air_pressure: 0,
            air_temperature: 0,
            pH: 0,
            soil_moisture: 0,
            timePosted: new Date(),
        });

    const handleSelectedFieldNumber = async (fieldNumber: number) => {
        // If Selector is clicked, get the selected Field Data and monitor data
        setSelectedFieldNumber(fieldNumber);
        setSelectedFieldData(allFieldData[fieldNumber]);
        console.log(allFieldData[fieldNumber]);
        const res = await axios.get(
            `http://localhost:8000/api/monitor/${allFieldData[fieldNumber].id}`
        );
        const data = res.data.data;
        if (data.length === 0) {
            setFieldMonitorData([]);
            setLatestFieldMonitorData({
                air_humidity: 0,
                air_pressure: 0,
                air_temperature: 0,
                pH: 0,
                soil_moisture: 0,
                timePosted: new Date(),
            });
        } else {
            setFieldMonitorData(data);
            setLatestFieldMonitorData(data[data.length - 1]);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            const fieldDataResponse = await axios.get(
                `http://localhost:8000/api/field`
            );

            const fieldMonitorDataResponse = await axios.get(
                `http://localhost:8000/api/monitor/${fieldDataResponse.data.data[0].id}`
            );
            setAllFieldData(fieldDataResponse.data.data);
            setFieldMonitorData(fieldMonitorDataResponse.data.data);
            setLatestFieldMonitorData(
                fieldMonitorDataResponse.data.data[
                    fieldMonitorDataResponse.data.data.length - 1
                ]
            );
        };

        fetchData();
    }, []);

    return (
        <div className="mx-4 my-2 h-full">
            <h1 className="text-h2 font-bold">Field Monitor Dashboard</h1>
            <div className="flex gap-x-10 items-center pr-5 py-5">
                <div className="max-w-[20%]">
                    <FieldSelector
                        data={allFieldData}
                        onClick={handleSelectedFieldNumber}
                    />
                </div>
                <div className="flex flex-col justify-between">
                    <div className="flex gap-x-6 max-w-full flex-wrap gap-y-3">
                        <ReportCard
                            type="temperature"
                            value={latestFieldMonitorData?.air_temperature}
                            onClick={setSelectedChartType}
                            isSelected={selectedChartType === "temperature"}
                        />
                        <ReportCard
                            type="humidity"
                            value={latestFieldMonitorData?.air_humidity}
                            onClick={setSelectedChartType}
                            isSelected={selectedChartType === "humidity"}
                        />
                        <ReportCard
                            type="pressure"
                            value={latestFieldMonitorData?.air_pressure}
                            onClick={setSelectedChartType}
                            isSelected={selectedChartType === "pressure"}
                        />
                        <ReportCard
                            type="ph"
                            value={latestFieldMonitorData?.pH}
                            onClick={setSelectedChartType}
                            isSelected={selectedChartType === "ph"}
                        />
                        <ReportCard
                            type="moisture"
                            value={latestFieldMonitorData?.soil_moisture}
                            onClick={setSelectedChartType}
                            isSelected={selectedChartType === "moisture"}
                        />
                    </div>
                    <div>
                        <FieldChart
                            type={selectedChartType}
                            allData={fieldMonitorData}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Field;
