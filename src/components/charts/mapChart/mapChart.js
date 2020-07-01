import React, {memo} from "react";
import {scaleLinear} from "d3-scale";
import {
    ComposableMap,
    Geographies,
    Geography,

} from "react-simple-maps";


const MapChart = (props) => {


    const geoUrl =
        "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

    const colorScale = scaleLinear()
        .domain([0, 6000])
        .range([
            "#ffedea",
            "#ffcec5",
            "#ffad9f",
            "#ff8a75",
            "#ff5533",
            "#e2492d",
            "#be3d26",
            "#9a311f",
            "#782618",
            "#5f2014"
        ]);

    return (
        <React.Fragment>
            <ComposableMap
                projectionConfig={{
                    rotate: [-10, 0, 0],
                    scale: 147
                }}

            >
                {props.stats.length > 0 && (
                    <Geographies geography={geoUrl}>
                        {({geographies}) =>
                            geographies.map(geo => {
                                const d = props.stats.find(s => s.ISO3 === geo.properties.ISO_A3);
                                return (
                                    <Geography
                                        key={geo.rsmKey}
                                        geography={geo}
                                        fill={d ? colorScale(d["value"]) : "#F5F4F6"}
                                        onMouseEnter={() => {
                                            const toolData = props.stats.find(s => s.ISO3 === geo.properties.ISO_A3);
                                            props.setTooltipContent(d ? `${toolData.ISO3} — ${toolData.value}`: "no Data");
                                        }}
                                        onMouseLeave={() => {
                                            props.setTooltipContent("");

                                        }}
                                        style={{
                                            hover: {
                                                fill: "#353536",
                                                outline: "none"
                                            },
                                            pressed: {
                                                fill: "#000000",
                                                outline: "none"
                                            }
                                        }}
                                    />
                                );
                            })
                        }
                    </Geographies>
                )}
            </ComposableMap>
        </React.Fragment>
    );
}

export default memo(MapChart);