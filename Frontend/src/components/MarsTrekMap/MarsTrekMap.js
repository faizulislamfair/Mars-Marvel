import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';


const MarsTrekMap = () => {
    const position = [0, 0]; // Center of Mars
    const zoom = 10;

    const wmtsURL = "https://trek.nasa.gov/tiles/Mars/EQ/Mars_MGS_MOLA_ClrShade_merge_global_463m/1.0.0/default/default028mm/0/0/1.jpg";


    return (
        <MapContainer
            center={position}
            zoom={zoom}
            style={{ width: "100%", height: "600px" }}
            worldCopyJump={false}
            minZoom={1}
            maxZoom={5}
        >
            <TileLayer
                url={wmtsURL}
                noWrap={true}
                tms={true}
            />
        </MapContainer>
    );

};

export default MarsTrekMap;