import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import L from 'leaflet';


import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

const LocationMap = () => {
    return (
        <div>
            <MapContainer className='h-96' center={[ 23.8135, 90.4242 ]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[ 23.8135, 90.4242 ]}>
                    <Popup>
                        <div className='p-4 bg-gray-800 text-white rounded-xl'>
                            <h1 className='text-xl'>Styla Rental Head Office</h1>
                            <p>Jamuna Future Park</p>
                        </div>
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default LocationMap;