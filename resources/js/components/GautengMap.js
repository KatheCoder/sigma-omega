import React, {useLayoutEffect, useRef} from 'react';
import {Inertia} from "@inertiajs/inertia";
import { MapContainer, TileLayer, useMap ,Marker,Popup} from 'react-leaflet'
import Map from "./Map";
import {Card, Rate, Space} from 'antd';


function GautengMap({gpsdata}) {
    const totalCoords =gpsdata.length;
    const listItems = gpsdata.map((coord,index) =>
         <Marker key={index} position={[coord.Latitude,coord.Longitude]}>
            <Popup> interview number: {index+1} of {totalCoords}
            </Popup>
        </Marker>
    );
    return (
        <div style={{ height: "60px" }}>

            <Card
                title={'Interview locations'}
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
            <MapContainer
                center={[-25.9363439, 28.0813105]}
                zoom={8.5}
                scrollWheelZoom={false}

            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {listItems}
            </MapContainer>
            </Card>
        </div>
    );
}
export default GautengMap;
