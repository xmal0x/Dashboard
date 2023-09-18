import React from 'react';
import ReactApexChart from 'react-apexcharts'
import {ChartProps} from "../../types";

const Chart = ({title, type, height, options, series, colors}: ChartProps) => {
    options.colors = colors

    return (
        <div>
            <h2 className="m-4 text-xl">{title}</h2>
            <ReactApexChart options={options} series={series} type={type} height={height}/>
        </div>
    );
};

export default Chart;
