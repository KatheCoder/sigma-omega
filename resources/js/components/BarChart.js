import React, {useLayoutEffect, useRef, useEffect} from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import {Card} from "antd";

am4core.options.commercialLicense = true;

am4core.useTheme(am4themes_animated);


function BarChart({chartId, chartData, optionalltext}) {

    const chart = useRef(null);


    useLayoutEffect(() => {
        var chart = am4core.create("chartdiv_" + chartId, am4charts.XYChart);
        chart.maskBullets = false

        if (chartId == 'innovation') {
            chart.data = [
                {
                    "label": "Introduced entirely new products",
                    "value": chartData.new_products
                }, {
                    "label": "Significantly improved products",
                    "value": chartData.improved_products
                }, {
                    "label": "Entirely new services",
                    "value": chartData.new_services
                }, {
                    "label": "Significantly improved services",
                    "value": chartData.improved_services
                }, {
                    "label": "Entirely new processes ",
                    "value": chartData.new_processes
                }, {
                    "label": "Significantly improved processes  ",
                    "value": chartData.improved_processes
                }, {
                    "label": "None",
                    "value": chartData.other
                }

            ];
        }

        if (chartId == 'contracts') {
            chart.data = [
                {
                    "label": "Mean number of employees",
                    "value": chartData.avg_people
                }, {
                    "label": "Mean number of employees with contract",
                    "value": chartData.avg_contract_people
                }

            ];

        }
        if (chartId == 'customers') {
            chart.data = [
                {
                    "label": "Individuals",
                    "value": (chartData.Individuals /chartData.total )*100
                }, {
                    "label": "Small businesses",
                    "value": (chartData.Small_businesses /chartData.total )*100
                }, {
                    "label": "Medium businesses",
                    "value": (chartData.Medium_businesses /chartData.total )*100
                }, {
                    "label": "Large",
                    "value":( chartData.Large_businesses /chartData.total )*100
                }, {
                    "label": "Government or public institution",
                    "value": (chartData.Public_institutions /chartData.total )*100
                }, {
                    "label": "Other",
                    "value":( chartData.Other_Indi /chartData.total )*100
                }, {
                    "label": "Don't know",
                    "value": (chartData.spontaneous /chartData.total )*100
                }

            ];
        }
        if (chartId == 'Manufacturing-Primary-and-secondary-sector') {
            chart.data = [
                {
                    "label": "Manufacturing Primary Sector",
                    "value": chartData[0].sum_manufacturing_primary_sector
                }, {
                    "label": "Manufacturing Secondary Sector",
                    "value": chartData[0].sum_manufacturing_secondary_sector
                }

            ];
        }
        if (chartId == 'Achieved-Initial-sample') {
            chart.data = [
                {
                    "label": "Total Achieved for 2019 Sample",
                    "value": chartData[0].sum_sample_2019
                }, {
                    "label": "Total Achieved for 2022 New Sample",
                    "value": chartData[0].sum_sample_2022
                }

            ];
        }

        if (chartId == 'Firm-size') {
            chart.data = [
                {
                    "label": "1 - 9 Employees",
                    "value": chartData[0].sum_firmsize_A
                }, {
                    "label": "10 - 24 Employees",
                    "value": chartData[0].sum_firmsize_B
                } ,{
                    "label": "25 - 50 Employees",
                    "value": chartData[0].sum_firmsize_C
                }

            ];
        }
        if (chartId == 'registered-with') {
            chart.data = [
                {
                    "label": "SARS",
                    "value": chartData.sars
                }, {
                    "label": "Local municipality",
                    "value": chartData.locally
                }, {
                    "label": "Business association",
                    "value": chartData.business
                }, {
                    "label": "Other",
                    "value":chartData.other_business
                }

            ];
        }
        if (chartId == 'Age') {

             chart.data = chartData;
        }


        var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "label";
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.renderer.minGridDistance = 30;

        var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        if (chartId == 'customers') {
            valueAxis.max = 100;
            valueAxis.strictMinMax = true;
            valueAxis.renderer.labels.template.disabled = false;

        } else {

            valueAxis.renderer.labels.template.disabled = true;

        }
        valueAxis.renderer.baseGrid.disabled = false;
        valueAxis.renderer.ticks.template.disabled = true;
        valueAxis.renderer.baseGrid.disabled = true;
        valueAxis.renderer.grid.template.disabled = true;


        var series = chart.series.push(new am4charts.ColumnSeries());
        series.dataFields.valueY = "value";
        series.dataFields.categoryX = "label";
        series.name = "label";
        series.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/]";
        series.columns.template.fillOpacity = .8;
        series.columns.template.fill = chartId !== 'customers' ? am4core.color("#0b8601") : am4core.color("#00B0F4");


        var columnTemplate = series.columns.template;
        columnTemplate.strokeWidth = 2;
        columnTemplate.strokeOpacity = 1;

        var labelBullet = series.bullets.push(new am4charts.LabelBullet());
        labelBullet.label.verticalCenter = "bottom";
        labelBullet.label.dy = 2;
        if ( chartId == 'sector' || chartId == 'firm'|| chartId == 'Age') {
            labelBullet.label.text = "{values.valueY.workingValue.formatNumber('#.')}%";
        }else if (chartId == 'customers'){
            labelBullet.label.text = "{values.valueY.workingValue.formatNumber('#.00')}%";
         }else if (chartId == 'contracts'){
            labelBullet.label.text = "{values.valueY.workingValue.formatNumber('#.00')}";
         }else {
            labelBullet.label.text = "{values.valueY.workingValue.formatNumber('#.')}";
        }

        let label = categoryAxis.renderer.labels.template;
        label.wrap = true;
        label.maxWidth = 120;


        return () => {
            chart.dispose();
        };
    }, [chartData]);

    useEffect(() => {
    }, []);


    return (

        <Card
            title={optionalltext}
            headStyle={{
                backgroundColor:"#d45300",
                color:"#ffffff"
            }}
            bodyStyle={{
                borderWidth:"2px",
                borderStyle:'solid',
                borderColor:"#d45300",
            }}
        >


            <div className={chartId !== 'BarProfile' ? 'col-auto  align-self-end' : ''}>
                <h2></h2>
                <div
                    id={'chartdiv_' + chartId}
                    style={chartId == 'BarGender' ?
                        {width: '100%', height: '30vh'} :
                        {width: '100%', height: '50vh'}
                    }
                ></div>
            </div>
        </Card>
    );
}

export default BarChart;
