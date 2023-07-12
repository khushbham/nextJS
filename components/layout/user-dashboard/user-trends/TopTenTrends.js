import React, { useRef, useLayoutEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import * as am5percent from "@amcharts/amcharts5/percent";

// export default function TrafficPerCategory() {
//   return (
//    <h3>test</h3>
//   )
// }

function TopTenTrends(props) {
  useLayoutEffect(() => {
    let root = am5.Root.new("piechartdiv");


    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([
      am5themes_Animated.new(root)
    ]);
    
    
    // Create chart
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
    let chart = root.container.children.push(am5percent.PieChart.new(root, {
      layout: root.verticalLayout,
      innerRadius: am5.percent(50)
    }));
    
    
    // Create series
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
    let series = chart.series.push(am5percent.PieSeries.new(root, {
        valueField: "value",
      categoryField: "category",
      alignLabels: false
    }));
    
    series.labels.template.setAll({
    //   textType: "circular",
      centerX: 0,
      centerY: 0
    });
    
    
    // Set data
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Setting_data
    series.data.setAll([
      { value: 10, category: "#Trend 1" },
      { value: 9, category: "#Trend 2" },
      { value: 8, category: "#Trend 3" },
      { value: 7, category: "#Trend 4" },
      { value: 6, category: "#Trend 5" },
      { value: 5, category: "#Trend 6" },
      { value: 4, category: "#Trend 7" },
      { value: 3, category: "#Trend 8" },
      { value: 2, category: "#Trend 9" },
      { value: 1, category: "#Trend 10" },
    ]);

    // Disabling labels and ticks
series.labels.template.set("visible", false);
series.ticks.template.set("visible", false);
    
    
    // Create legend
    // https://www.amcharts.com/docs/v5/charts/percent-charts/legend-percent-series/
    let legend = chart.children.push(am5.Legend.new(root, {
      centerX: am5.percent(50),
      x: am5.percent(50),
      marginTop: 15,
      marginBottom: 15,
    }));
    
    legend.data.setAll(series.dataItems);
    
    
    // Play initial series animation
    // https://www.amcharts.com/docs/v5/concepts/animations/#Animation_of_series
    series.appear(1000, 100);

    return () => {
      root.dispose();
    };
  }, []);

  return (
    <div id="piechartdiv" style={{ width: "100%", height: "700px" }}></div>
  )
  
 
}
export default TopTenTrends;
