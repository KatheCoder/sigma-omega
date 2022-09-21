import React, {useEffect, useLayoutEffect, useRef} from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import {Card} from "antd";

am4core.options.commercialLicense = true;

am4core.useTheme(am4themes_animated);

function PieChart({chartId, province, chartData, optionalText}) {

    const chart = useRef(null);


    useLayoutEffect(() => {


// Create chart instance
        var chart = am4core.create("chartdiv_" + chartId, am4charts.PieChart);
        if (chartId == "business-registration") {
            chart.data = [
                {
                    "label": "Yes",
                    // "value": chartData[0].independent_establishment,
                    "value": chartData[0].yes,
                    "color":"#00B050"

                }, {
                    "label": "No",
                    "value": chartData[0].no,
                    "color":"#7030A0"
                }, {
                    "label": "Don't know",
                    "value": chartData[0].dont_know,
                    "color":"#494949"
                }


            ];
        }
        if (chartId == "SoleId") {
            chart.data = [
                {
                    "label": "yes",
                    "value": chartData[0].yes,
                    "color":"#00B050"
                }, {
                    "label": "no",
                    "value": chartData[0].no,
                    "color":"#7030A0"
                }


            ];
        }


        chart.responsive.enabled = true;
        chart.innerRadius = am4core.percent(30);

// Add and configure Series
        var pieSeries = chart.series.push(new am4charts.PieSeries());
        pieSeries.dataFields.value = "value";
        pieSeries.dataFields.category = "label";

        pieSeries.ticks.template.disabled = true;
        pieSeries.alignLabels = true;
        // pieSeries.labels.template.text = "{value.percent.formatNumber('#.0')}%";
        pieSeries.labels.template.text = "{value.percent.formatNumber('#.0')}%";
        pieSeries.labels.template.radius = 3;
        // pieSeries.labels.template.fill = am4core.color("#ffffff");
        pieSeries.slices.template.propertyFields.fill = "color";
        // pieSeries.labels.template.fontSize = 10;


        chart.legend = new am4charts.Legend();

        // chart.legend.maxHeight = 60;
        // chart.legend.scrollable = true;

        return () => {
            chart.dispose();
        };
    }, [chartData]);

    useEffect(() => {
        // console.log('chartdiv_'+chartId)
    }, []);


    return (
        <Card
            title={optionalText}
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
            {/*<h3>{optionalText}</h3>*/}
            <div id={'chartdiv_' + chartId} style={{width: '100%', height: '50vh'}}></div>
        </Card>

    );
}

export default PieChart;
