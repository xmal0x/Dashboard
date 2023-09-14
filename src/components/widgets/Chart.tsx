import React from 'react';
import ReactApexChart from 'react-apexcharts'

interface ChartProps {
    title: string
    type: "area" | "line" | "bar" | "pie" | "donut" | "radialBar" | "scatter" | "bubble" | "heatmap" | "candlestick" | "boxPlot" | "radar" | "polarArea" | "rangeBar" | "rangeArea" | "treemap" | undefined
    height: number
    options: ApexCharts.ApexOptions
    series: ApexAxisChartSeries | ApexNonAxisChartSeries | undefined
    colors: string[]
}

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
