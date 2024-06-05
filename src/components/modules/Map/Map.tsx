"use client";
import React from "react";
import { LatLngExpression } from "leaflet";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

type MapProps = {
    center: LatLngExpression | undefined;
    position: LatLngExpression;
};

function Map({ position, center }: MapProps) {
    
  return (
    <>
      <MapContainer center={center} zoom={13} scrollWheelZoom={false} className="relative z-10 w-full h-full rounded-lg">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            kaj shop
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
}

export default Map;
