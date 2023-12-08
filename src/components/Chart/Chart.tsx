import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from "chart.js";
import LineChart, { LineDataset } from "./LineChart";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    BarElement,
    Filler
);

interface ChartProps {
    data: { value: number; timePosted: Date }[];
    title: string;
}

const getLineDatasets = ({
    label,
    data,
    pointBackgroundColor,
    fillColor,
    color,
}: LineDataset) => {
    const datasets = [
        {
            label: label,
            data: data,
            fill: true,
            borderColor: color,
            tension: 0.1,
            pointBackgroundColor: pointBackgroundColor,
            pointRadius: 5,
            pointHoverRadius: 7,
            backgroundColor: fillColor,
            pointBorderWidth: 0,
        },
    ];

    return datasets;
};

const getChart = ({
    title,
    datasets,
    labelsData,
}: {
    title: string;
    datasets: LineDataset[];
    labelsData: string[];
}) => {
    return (
        <div>
            <LineChart
                title={title}
                datasets={datasets}
                labelsData={labelsData}
            />
        </div>
    );
};

const Chart = ({ data, title }: ChartProps) => {
    const dataToShow: number[] = [];
    const labelsData: string[] = [];
    const pointColors: string[] = [];
    let datasets: LineDataset[] = [];

    // Assuming data is {datetime, value}[]
    data.forEach((dataPoint: { value: number; timePosted: Date }) => {
        // Get the date and/or time of the data, add to labelsData
        const dataTime = new Date(dataPoint.timePosted);
        let hourString, minuteString;
        if (dataTime.getHours() < 10) {
            hourString = "0" + dataTime.getHours();
        } else {
            hourString = dataTime.getHours();
        }
        if (dataTime.getMinutes() < 10) {
            minuteString = "0" + dataTime.getMinutes();
        } else {
            minuteString = dataTime.getMinutes();
        }
        const label = `${dataTime.getDate()}/${
            dataTime.getMonth() + 1
        }/${dataTime.getFullYear()} ${hourString}:${minuteString}`;
        labelsData.push(label);
        // Add the value to dataToShow
        dataToShow.push(dataPoint.value);
        // Add color to pointColors
        pointColors.push("#1ce815");
    });
    datasets = getLineDatasets({
        label: title,
        data: dataToShow,
        pointBackgroundColor: pointColors,
        fillColor: "rgba(28, 232, 21, 0.3)",
        color: "#1ce815",
    });

    // Finally return the Line Chart
    return getChart({ title, datasets, labelsData });
};

export default Chart;
