import React, {useLayoutEffect, useRef} from 'react';
import {Inertia} from "@inertiajs/inertia";
import { MapContainer, TileLayer, useMap ,Marker,Popup} from 'react-leaflet'
import Map from "./Map";


function GautengMap({gpsdata}) {
    const listItems = gpsdata.map((coord,index) =>
         <Marker key={index} position={[coord.Latitude,coord.Longitude]}>
            <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
        </Marker>
    );
    return (
        <div style={{ height: "60px" }}>
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

        </div>
    );
}
export default GautengMap;
