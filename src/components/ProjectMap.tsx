'use client';

import React, { memo } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup
} from 'react-simple-maps';
import { useTranslations } from 'next-intl';

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// Coordenadas aproximadas
const markers = [
  {
    markerOffset: -15,
    name: "España (Mula, Huelva, Garnacha, Corvera)",
    coordinates: [-4.0, 40.0] as [number, number],
    projects: "3+ Megaproyectos",
    capacity: "850+ MW"
  },
  {
    markerOffset: 25,
    name: "Colombia (Bosques Solares de Bolívar)",
    coordinates: [-74.0, 4.0] as [number, number],
    projects: "1+ Megaproyectos",
    capacity: "400+ MW"
  }
];

const ProjectMap = () => {
  const t = useTranslations('Portfolio');

  return (
    <div className="w-full h-[400px] md:h-[600px] bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden relative shadow-inner mb-16 group">
      <div className="absolute top-6 left-6 z-10 pointer-events-none">
        <h4 className="text-xl font-bold text-slate-800">{t('mapTitle') || 'Huella Global'}</h4>
        <p className="text-sm text-slate-500">{t('mapSubtitle') || 'Presencia internacional y escala de alcance'}</p>
      </div>
      
      <ComposableMap
        projectionConfig={{
          scale: 140,
          center: [0, 20]
        }}
        width={800}
        height={400}
        className="w-full h-full"
      >
        <ZoomableGroup center={[0, 20]} zoom={1} minZoom={1} maxZoom={5}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#e2e8f0"
                  stroke="#ffffff"
                  strokeWidth={0.5}
                  style={{
                    default: { outline: "none" },
                    hover: { fill: "#cbd5e1", outline: "none" },
                    pressed: { outline: "none" },
                  }}
                />
              ))
            }
          </Geographies>

          {markers.map(({ name, coordinates, markerOffset, projects, capacity }) => (
            <Marker key={name} coordinates={coordinates}>
              <g
                fill="none"
                stroke="#059669"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                transform="translate(-12, -24)"
                className="cursor-pointer transition-all duration-300 hover:scale-110 hover:stroke-emerald-500 group-hover:animate-pulse"
              >
                <circle cx="12" cy="10" r="3" fill="#059669" />
                <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
              </g>
              
              <text
                textAnchor="middle"
                y={markerOffset}
                style={{ fontFamily: "Inter, sans-serif", fill: "#1e293b", fontSize: "10px", fontWeight: "600" }}
                className="pointer-events-none drop-shadow-sm"
              >
                {name}
              </text>
              <text
                textAnchor="middle"
                y={markerOffset + 12}
                style={{ fontFamily: "Inter, sans-serif", fill: "#059669", fontSize: "8px", fontWeight: "700" }}
                className="pointer-events-none"
              >
                {capacity}
              </text>
            </Marker>
          ))}
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
};

export default memo(ProjectMap);
