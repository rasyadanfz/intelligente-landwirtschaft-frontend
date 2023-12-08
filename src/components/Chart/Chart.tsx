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
    data: { time: Date; value: number }[];
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
    let dataToShow: number[] = [];
    let labelsData: string[] = [];
    let pointColors: string[] = [];
    let datasets: LineDataset[] = [];

    // Assuming data is {datetime, value}[]
    data.forEach((dataPoint: { time: Date; value: number }) => {
        // Get the date and/or time of the data, add to labelsData
        // Add the value to dataToShow
        // Add color to pointColors
    });
    datasets = getLineDatasets({
        label: title,
        data: dataToShow,
        pointBackgroundColor: pointColors,
        fillColor: "#fff",
        color: "#000",
    });

    // Finally return the Line Chart
    return getChart({ title, datasets, labelsData });
};

export default Chart;
