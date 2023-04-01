import React from "react";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
const markers = [
  {
    markerOffset: 35,
    name: "Chicago",
    coordinates: [-87.6501, 41.85],
  },
  {
    markerOffset: 35,
    name: "Berlin",
    coordinates: [90.407608, 23.811056],
  },
  {
    markerOffset: 25,
    name: "Manaus",
    coordinates: [-60.02578, -3.117034],
  },
  {
    markerOffset: 25,
    name: "Giza",
    coordinates: [31.131302, 29.97648],
  },
  {
    markerOffset: 25,
    name: "Shanghai",
    coordinates: [121.46917, 31.224361],
  },
  {
    markerOffset: 25,
    name: "Queensland",
    coordinates: [142.702789, -20.917574],
  },
];
const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

const WorldMap = () => {
  // world map using react simple map 
  return (
    <div className="worldmap">
      <ComposableMap
        data-tip=""
        style={{ height: "100%", width: "100%"}}
      >
        <ZoomableGroup zoom={1.2} >
          <Geographies
            geography={geoUrl}
          >
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#BACDDB"
                  // fill="#90EE90"
                  stroke="#000000"
                  strokeWidth={1}
                />
              ))
            }
          </Geographies>
          {markers.map(({ name, coordinates, markerOffset }) => (
            <Marker key={name} coordinates={coordinates}>
              <circle r={5} fill="green" stroke="#fff" strokeWidth={1} />
              <text
                textAnchor="middle"
                y1={markerOffset}
                style={{ fontFamily: "system-ui", fill: "#89375F" }}
              >
                {name}
              </text>
            </Marker>
          ))}
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
};
export default WorldMap;