import React from 'react';
import { MapContainer, TileLayer ,Marker,Popup} from 'react-leaflet'
import {Card} from 'antd';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import ResetViewControl from '@20tab/react-leaflet-resetview';


function GautengMap({gpsdata}) {
    const totalCoords =gpsdata.length;
    const listItems = gpsdata.map((coord,index) =>
        <Marker key={index} position={[coord.GPS_LA,coord.GPS_LO]}>
            <Popup> interview number:{coord.SbjNum}
            </Popup>
        </Marker>
    );
    const createClusterCustomIcon = function (cluster) {
        return L.divIcon({
            html: `<span>`+cluster.getChildCount()+`</span>`,
            className: 'marker-cluster-custom',
            iconSize: L.point(40, 40, true),
  });
};

    return (
        <div style={{ height: "60px" }}>

            <Card
                title={'Interview locations '}
                extra={ <span style={{color:"white"}}> n = {totalCoords} </span>}
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
                className="markercluster-map"
            >
                <ResetViewControl
                    title="Reset view"
                    icon="R"
                />
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                    <MarkerClusterGroup
                        // iconCreateFunction={createClusterCustomIcon}
                    >
                        {listItems}
                    </MarkerClusterGroup>
             </MapContainer>
            </Card>
        </div>
    );
}
export default GautengMap;
