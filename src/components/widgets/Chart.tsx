import ReactApexChart from 'react-apexcharts'
import {ChartProps} from "../../types";

const Chart = ({title, type, height, options, series, colors = []}: ChartProps) => {
    const chartOptions = {...options, colors: colors}

    return (
        <>
            <h2 className="m-4 text-xl">{title}</h2>
            <ReactApexChart options={chartOptions} series={series} type={type} height={height}/>
        </>
    );
};

export default Chart;
