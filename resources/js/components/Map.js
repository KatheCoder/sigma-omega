import React, {useLayoutEffect, useRef} from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_southAfrica from "@amcharts/amcharts4-geodata/southAfricaHigh";
import flagIcon from "../images/army.png";
import {Inertia} from "@inertiajs/inertia";

import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import {Card} from "antd";

am4core.options.commercialLicense = true;


function Map({chartData}) {

    const map = useRef(null);


    useLayoutEffect(() => {
        let map = am4core.create("chartdiv", am4maps.MapChart);
        map.geodata = am4geodata_southAfrica;
        map.seriesContainer.draggable = false;
        map.homeZoomLevel = 1.8;
        map.homeGeoPoint = {
            latitude: -28.5,
            longitude: 25
        };


        map.projection = new am4maps.projections.Miller();


        // Create map polygon series
        var polygonSeries = map.series.push(new am4maps.MapPolygonSeries());
        polygonSeries.useGeodata = true;
        polygonSeries.calculateVisualCenter = true;
        polygonSeries.exclude = ["LS"];
        polygonSeries.dataFields.value = "value";
// Configure series
        var polygonTemplate = polygonSeries.mapPolygons.template;

        // Add some data
        polygonSeries.data = [
            {
            "id": "ZA-GP",
            "name": "Gauteng",
            "value": chartData[0].Gauteng,
            "fill": am4core.color("#7F7F7F")
        }, {
            "id": "ZA-MP",
            "name": "Mpumalanga",
            "value": chartData[0].Mpumalanga,
            "fill": am4core.color("#0070C0")
        }, {
            "id": "ZA-LP",
            "name": "Limpopo",
            "value": parseInt(chartData[0].Limpopos),
            "fill": am4core.color("#8BC53F")
        }, {
            "id": "ZA-NW",
            "name": "North West",
            "value": chartData[0].North_West,
            "fill": am4core.color("#002060")
        }, {
            "id": "ZA-FS",
            "name": "Free State",
            "value": chartData[0].Free_State,
            "fill": am4core.color("#A9D18E")
        }, {
            "id": "ZA-KZN",
            "name": "KwaZulu-Natal",
            "value": chartData[0].KwaZulu_Natal,
            "fill": am4core.color("#548235")
        }, {
            "id": "ZA-EC",
            "name": "Eastern Cape",
            "value": chartData[0].Easter_Cape,
            "fill": am4core.color("#9DC3E6")
        }, {
            "id": "ZA-WC",
            "name": "Western Cape",
            "value": chartData[0].Western_Cape,
            "fill": am4core.color("#2F5597")
        }, {
            "id": "ZA-NC",
            "name": "Northern Cape",
            "value": chartData[0].Northern_Cape,
            "fill": am4core.color("#8FAADC")
        }

        ];


        polygonTemplate.tooltipText = "{name}:{value}";
        polygonTemplate.fill = am4core.color("#74B266");
        polygonTemplate.events.on("hit", function (ev) {
            Inertia.get('/Achieved-Sample', {province: ev.target.dataItem.dataContext.name}, {
                preserveState: true,
                onSuccess: (page) => {
                },
            })

        });


        polygonTemplate.propertyFields.fill = "fill";

        let labelSeries = map.series.push(new am4maps.MapImageSeries());

        let labelTemplate = labelSeries.mapImages.template.createChild(am4core.Label);
        labelTemplate.horizontalCenter = "middle";
        labelTemplate.verticalCenter = "top";
        labelTemplate.fontSize = 10;
         labelTemplate.nonScaling = true;
        labelTemplate.interactionsEnabled = false;
        labelTemplate.fill = am4core.color("#000000");

        let imageSeriesTemplate = labelSeries.mapImages.template;
        let marker = imageSeriesTemplate.createChild(am4core.Image);

        polygonSeries.events.on("inited", function () {
            polygonSeries.mapPolygons.each(function (polygon) {
                let label = labelSeries.mapImages.create();
                let state = polygon.dataItem.dataContext.name;
                let value = polygon.dataItem.dataContext.value;
                label.latitude = polygon.visualLatitude;
                label.longitude = polygon.visualLongitude;
                label.children.getIndex(0).text = " [font-size: 12px]"+ state +"[bold] \n "+ value;

           });
        });

        var hs = polygonTemplate.states.create("hover");
        hs.properties.fill = am4core.color("#367B25");


        var latitudes = {};
        var longitudes = {};

        function getCoordinates() {
            polygonSeries.mapPolygons.each(function (polygon) {
                latitudes[polygon.dataItem.dataContext.id] = am4core.math.round(polygon.visualLatitude, 2);
                longitudes[polygon.dataItem.dataContext.id] = am4core.math.round(polygon.visualLongitude, 2);
            })
        }


        return () => {
            map.dispose();
        };
    }, []);


    return (
        <Card
            title={'Achieved Sample by Province'}
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
            <div className="card-header  ">

                <div className="card-subtitle mb-2 text-muted">
                    <code>click on map to view details</code>
                </div>
            </div>

            <div id="chartdiv" style={{width: "100%", height: "90vh"}}></div>

        </Card>
    );
}

export default Map;
