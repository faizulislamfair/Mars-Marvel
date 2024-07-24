import React from 'react';
import { MapContainer, ImageOverlay } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MarsTrekMap = () => {
    const position = [0, 0]; // Center of Mars
    const zoom = 0;
    const imageBounds = [
        [-90, -180],
        [90, 180]
    ];

    const imageURL = "https://trek.nasa.gov/tiles/Mars/EQ/Mars_MGS_MOLA_ClrShade_merge_global_463m/1.0.0/default/default028mm/0/0/1.jpg";

    return (
        <MapContainer
            center={position}
            zoom={zoom}
            style={{ width: "60%", height: "500px" }}
        >
            <ImageOverlay
                url={imageURL}
                bounds={imageBounds}
            />
        </MapContainer>
    );
};

export default MarsTrekMap;
