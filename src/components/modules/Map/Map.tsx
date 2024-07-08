"use client";
import L, { LatLngExpression } from "leaflet";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";

type MapProps = {
  center: LatLngExpression | undefined;
  position: LatLngExpression;
};

function Map() {
  const [isMounted, setIsMoundted] = useState(false);

  useEffect(() => {
    setIsMoundted(true);
  }, []);

  let DefaultIcon = L.icon({
    iconUrl: require("leaflet/dist/images/marker-icon.png"),
    shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
  });

  return (
    <>
      {isMounted && (
        <MapContainer
          center={[35.72021225108499, 51.42222691580869]}
          zoom={13}
          scrollWheelZoom={false}
          className="relative z-10 w-full h-full rounded-lg"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            position={[35.72021225108499, 51.42222691580869]}
            icon={DefaultIcon}
          >
            <Popup>kaj shop</Popup>
          </Marker>
        </MapContainer>
      )}
    </>
  );
}

export default Map;
