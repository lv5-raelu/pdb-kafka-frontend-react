import React, { Component } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            lineChartOptions: {
                title: {
                    text: "Solar Employment Growth by Sector, 2010-2016",
                },
                subtitle: {
                    text: "Source: thesolarfoundation.com",
                },
                yAxis: {
                    title: {
                        text: "Number of Employees",
                    },
                },
                xAxis: {
                    accessibility: {
                        rangeDescription: "Range: 2010 to 2017",
                    },
                },
                legend: {
                    layout: "vertical",
                    align: "right",
                    verticalAlign: "middle",
                },
                plotOptions: {
                    series: {
                        label: {
                            connectorAllowed: false,
                        },
                        pointStart: 2010,
                    },
                },
                series: [
                    {
                        name: "Installation",
                        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175],
                    },
                    {
                        name: "Manufacturing",
                        data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434],
                    },
                    {
                        name: "Sales & Distribution",
                        data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387],
                    },
                    {
                        name: "Project Development",
                        data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227],
                    },
                    {
                        name: "Other",
                        data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111],
                    },
                ],
                responsive: {
                    rules: [
                        {
                            condition: {
                                maxWidth: 500,
                            },
                            chartOptions: {
                                legend: {
                                    layout: "horizontal",
                                    align: "center",
                                    verticalAlign: "bottom",
                                },
                            },
                        },
                    ],
                },
            },
            barChartOptions: {
                chart: {
                    type: "column",
                },
                title: {
                    text: "Monthly Average Rainfall",
                },
                subtitle: {
                    text: "Source: WorldClimate.com",
                },
                xAxis: {
                    categories: [
                        "Jan",
                        "Feb",
                        "Mar",
                        "Apr",
                        "May",
                        "Jun",
                        "Jul",
                        "Aug",
                        "Sep",
                        "Oct",
                        "Nov",
                        "Dec",
                    ],
                    crosshair: true,
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: "Rainfall (mm)",
                    },
                },
                plotOptions: {
                    column: {
                        pointPadding: 0.2,
                        borderWidth: 0,
                    },
                },
                series: [
                    {
                        name: "Tokyo",
                        data: [
                            49.9,
                            71.5,
                            106.4,
                            129.2,
                            144.0,
                            176.0,
                            135.6,
                            148.5,
                            216.4,
                            194.1,
                            95.6,
                            54.4,
                        ],
                    },
                    {
                        name: "New York",
                        data: [
                            83.6,
                            78.8,
                            98.5,
                            93.4,
                            106.0,
                            84.5,
                            105.0,
                            104.3,
                            91.2,
                            83.5,
                            106.6,
                            92.3,
                        ],
                    },
                    {
                        name: "London",
                        data: [
                            48.9,
                            38.8,
                            39.3,
                            41.4,
                            47.0,
                            48.3,
                            59.0,
                            59.6,
                            52.4,
                            65.2,
                            59.3,
                            51.2,
                        ],
                    },
                    {
                        name: "Berlin",
                        data: [
                            42.4,
                            33.2,
                            34.5,
                            39.7,
                            52.6,
                            75.5,
                            57.4,
                            60.4,
                            47.6,
                            39.1,
                            46.8,
                            51.1,
                        ],
                    },
                ],
            },
        };
    }

    render() {
        return (
            <div>
                <HighchartsReact highcharts={Highcharts} options={this.state.lineChartOptions} />
                <br />
                <HighchartsReact highcharts={Highcharts} options={this.state.barChartOptions} />
            </div>
        );
    }
}

export default App;