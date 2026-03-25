import React, { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";

export default function BestPickMap({ lat = 37.7749, lon = -122.4194, zoom = 12 }) {
  const el = useRef();

  useEffect(() => {
    if (!window.L) return;
    const map = window.L.map(el.current).setView([lat, lon], zoom);

    window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors"
    }).addTo(map);

    window.L.marker([lat, lon]).addTo(map);

    return () => map.remove();
  }, [lat, lon]);

  return <div ref={el} style={{ width: "100%", height: 300, borderRadius: 8 }} />;
}
