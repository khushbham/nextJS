import React, { useRef, useLayoutEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

// export default function TrafficPerCategory() {
//   return (
//    <h3>test</h3>
//   )
// }

function TrafficPerCategory(props) {
  useLayoutEffect(() => {
    // let root = am5.Root.new("chartdiv");

    // root.setThemes([
    //   am5themes_Animated.new(root)
    // ]);

    // let chart = root.container.children.push(
    //   am5xy.XYChart.new(root, {
    //     panY: false,
    //     layout: root.verticalLayout
    //   })
    // );

    // let data = [{
    //   category: "Research",
    //   value1: 1000,
    //   value2: 588
    // }, {
    //   category: "Marketing",
    //   value1: 1200,
    //   value2: 1800
    // }, {
    //   category: "Sales",
    //   value1: 850,
    //   value2: 1230
    // }];

    // let yAxis = chart.yAxes.push(
    //   am5xy.ValueAxis.new(root, {
    //     renderer: am5xy.AxisRendererY.new(root, {})
    //   })
    // );

    // let xAxis = chart.xAxes.push(
    //   am5xy.CategoryAxis.new(root, {
    // renderer: am5xy.AxisRendererX.new(root, {}),
    //     categoryField: "category"
    //   })
    // );
    // xAxis.data.setAll(data);

    // let series1 = chart.series.push(
    //   am5xy.ColumnSeries.new(root, {
    //     name: "Series",
    //     xAxis: xAxis,
    //     yAxis: yAxis,
    //     valueYField: "value1",
    //     categoryXField: "category"
    //   })
    // );
    // series1.data.setAll(data);

    // let series2 = chart.series.push(
    //   am5xy.ColumnSeries.new(root, {
    //     name: "Series",
    //     xAxis: xAxis,
    //     yAxis: yAxis,
    //     valueYField: "value2",
    //     categoryXField: "category"
    //   })
    // );
    // series2.data.setAll(data);

    // let legend = chart.children.push(am5.Legend.new(root, {}));
    // legend.data.setAll(chart.series.values);

    // chart.set("cursor", am5xy.XYCursor.new(root, {}));

    /* Chart code */
    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    let root = am5.Root.new("chartdiv");

    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([am5themes_Animated.new(root)]);

    // Create chart
    // https://www.amcharts.com/docs/v5/charts/xy-chart/
    let chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        // panX: true,
        // panY: true,
        // wheelX: "panX",
        // wheelY: "zoomX",
        // pinchZoomX: true,
      })
    );

    // Add cursor
    // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
    let cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
    cursor.lineY.set("visible", false);

    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    let xRenderer = am5xy.AxisRendererX.new(root, { minGridDistance: 30 });
    xRenderer.labels.template.setAll({
      rotation: -90,
      centerY: am5.p50,
      centerX: am5.p100,
      paddingRight: 15,
    });

    let xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        maxDeviation: 0.3,
        categoryField: "country",
        renderer: xRenderer,
        tooltip: am5.Tooltip.new(root, {}),
      })
    );

    let yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        maxDeviation: 0.3,
        renderer: am5xy.AxisRendererY.new(root, {}),
      })
    );

    // Create series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    let series = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        name: "Series 1",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value",
        sequencedInterpolation: true,
        categoryXField: "country",
        tooltip: am5.Tooltip.new(root, {
          labelText: "{valueY}",
        }),
      })
    );

    series.columns.template.setAll({ cornerRadiusTL: 5, cornerRadiusTR: 5 });
    series.columns.template.adapters.add("fill", function (fill, target) {
      return chart.get("colors").getIndex(series.columns.indexOf(target));
    });

    series.columns.template.adapters.add("stroke", function (stroke, target) {
      return chart.get("colors").getIndex(series.columns.indexOf(target));
    });

    // Set data
    let data = [
      {
        country: "Commercial Cultures",
        value: 2025,
      },
      {
        country: "Lifestyle",
        value: 1982,
      },
      {
        country: "Sustainability",
        value: 1809,
      },
      {
        country: "Music",
        value: 1622,
      },
      {
        country: "Pop Culture",
        value: 1522,
      },
      {
        country: "Technology",
        value: 1414,
      },
      {
        country: "Multimedia",
        value: 1400,
      },
      {
        country: "Social Media",
        value: 1380,
      },
      {
        country: "Sports",
        value: 1350,
      },
      {
        country: "Travel",
        value: 1200,
      },
      {
        country: "Business News",
        value: 1200,
      },
    ];



    xAxis.data.setAll(data);
    series.data.setAll(data);

    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    series.appear(1000);
    chart.appear(1000, 100);

    return () => {
      root.dispose();
    };
  }, []);

  return (
    <div id="chartdiv" style={{ width: "100%", height: "700px" }}></div>
  )
  
 
}
export default TrafficPerCategory;
