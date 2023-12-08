import { FieldMonitorDataInterface } from "../../pages/Field";
import Chart from "./Chart";

const FieldChart = ({
    type,
    allData,
}: {
    type: string;
    allData: FieldMonitorDataInterface[] | undefined;
}) => {
    // Filter all data and group into each category
    const currentData = [] as { value: number; timePosted: Date }[];
    allData?.forEach((dataPoint) => {
        switch (type) {
            case "temperature":
                currentData.push({
                    value: dataPoint.air_temperature,
                    timePosted: dataPoint.timePosted,
                });
                break;
            case "humidity":
                currentData.push({
                    value: dataPoint.air_humidity,
                    timePosted: dataPoint.timePosted,
                });
                break;
            case "pressure":
                currentData.push({
                    value: dataPoint.air_pressure,
                    timePosted: dataPoint.timePosted,
                });
                break;
            case "ph":
                currentData.push({
                    value: dataPoint.pH,
                    timePosted: dataPoint.timePosted,
                });
                break;
            case "moisture":
                currentData.push({
                    value: dataPoint.soil_moisture,
                    timePosted: dataPoint.timePosted,
                });
                break;
        }
    });
    return <Chart data={currentData} title={type} />;
};

export default FieldChart;
