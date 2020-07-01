import React from "react";
import ReactApexChart from "react-apexcharts";

const countryChart = (props) => {


    let date = [];
    for (let c in props.countryData.timeline.deaths) {
        date.push(c);
    }

    let deaths = Object.values(props.countryData.timeline.deaths);

    let cases = Object.values(props.countryData.timeline.cases);

    let recoveries = Object.values(props.countryData.timeline.recovered);


    const dataSource = {
        series: [
            {
                name: "Deaths",
                data: deaths
            },
            {
                name: "Cases",
                data: cases
            },
            {
                name: "Recoveries",
                data: recoveries
            }

        ],
        options: {
            chart: {
                height: 1000,
                type: 'line',
                zoom: {
                    enabled: false
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'straight'
            },
            title: {
                text: 'Change in the last 30 Days',
                align: 'left'
            },
            grid: {
                row: {
                    colors: ['#ffffff', 'transparent'],
                    opacity: 0.5
                },
            },
            xaxis: {
                categories: date,
            },
            yaxis:{
            }
        },
    };


    return (
        <div id="chart">
            <ReactApexChart options={dataSource.options} series={dataSource.series} type="line" height={600} width={1200}/>
        </div>
    );

}

export default countryChart;