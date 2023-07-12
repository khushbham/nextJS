import React, { useEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5wc from "@amcharts/amcharts5/wc";
import * as am5map from "@amcharts/amcharts5/map";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
import am5geodata_usaLow from "@amcharts/amcharts5-geodata/usaLow";
import am5geodata_india from "@amcharts/amcharts5-geodata/india2020High"
// am4core.useTheme(am4themes_material);
// am4core.useTheme(am4themes_animated);

export default function Map(props) {
  useEffect(() => {
     // Create root and main container
  let root = am5.Root.new("mapdiv");

  root.setThemes([
    am5themes_Animated.new(root)
  ]);

let chart = root.container.children.push(am5map.MapChart.new(root, {
    panX: "translateX",
    panY: "translateY",
    projection: am5map.geoMercator()
  }));
  var polygonSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {
    geoJSON: am5geodata_worldLow,
    exclude: ["AQ"]
  }));
  
  polygonSeries.mapPolygons.template.setAll({
    tooltipText: "{name}",
    //toggleKey: "active",
    interactive: true
  });
  
//   polygonSeries.mapPolygons.template.states.create("hover", {
//     fill: root.interfaceColors.get("primaryButtonHover")
//   });
  
//   polygonSeries.mapPolygons.template.states.create("active", {
//     fill: root.interfaceColors.get("primaryButtonHover")
//   });
  
  
  // US Series
  // Create main polygon series for countries
  // https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/
  console.log(am5geodata_usaLow);
  var polygonSeriesUS = chart.series.push(am5map.MapPolygonSeries.new(root, {
    geoJSON: am5geodata_usaLow
  }));
  
  var colors = am5.ColorSet.new(root, {});
  
  polygonSeriesUS.mapPolygons.template.set("fill", colors.getIndex(3));
  
  polygonSeriesUS.mapPolygons.template.states.create("hover", {
    fill: root.interfaceColors.get("primaryButtonHover")
  });
  
  polygonSeriesUS.mapPolygons.template.states.create("active", {
    fill: root.interfaceColors.get("primaryButtonHover")
  });
  
  var polygonSeriesIndia = chart.series.push(am5map.MapPolygonSeries.new(root, {
    geoJSON: am5geodata_india
  }));
  
  
  polygonSeriesIndia.mapPolygons.template.set("fill", colors.getIndex(3));
  
  polygonSeriesIndia.mapPolygons.template.states.create("hover", {
    fill: root.interfaceColors.get("primaryButtonHover")
  });
  
  polygonSeriesIndia.mapPolygons.template.states.create("active", {
    fill: root.interfaceColors.get("primaryButtonHover")
  });
  
  // Add zoom control
  // https://www.amcharts.com/docs/v5/charts/map-chart/map-pan-zoom/#Zoom_control
  // chart.set("zoomControl", am5map.ZoomControl.new(root, {}));
  
  
  // Set clicking on "water" to zoom out
  chart.chartContainer.get("background").events.on("click", function () {
    chart.goHome();
  })
  
  
  // Make stuff animate on load
  chart.appear(1000, 100);
  
return () => {
  root.dispose();
};
  },[]);

  return (
    <div
      id="mapdiv"
      className={props.className}
      style={{ width: "100%", height: "100%" }}
    ></div>
  );
}
