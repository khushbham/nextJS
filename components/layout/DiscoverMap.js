import React, { useLayoutEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5hierarchy from "@amcharts/amcharts5/hierarchy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import { Container } from "reactstrap";
import { bubbles } from "../../redux/action/frontend";
import { useDispatch } from "react-redux";
import { SITE_URL } from "../../redux/action/types";
import { useRouter } from 'next/router'


export default function DiscoverMap() {
  const dispatch = useDispatch()
  const router = useRouter()
   useLayoutEffect(() => {
    dispatch(bubbles()).then((res)=>{
      if(res.data && res.data.length>0){
      //setBubble(res.data)
     
    // Create root and main container
    let root = am5.Root.new("chartdiv");

    root.setThemes([am5themes_Animated.new(root)]);

    let container = root.container.children.push(
      am5.Container.new(root, {
        width: am5.percent(100),
        height: am5.percent(100),
        layout: root.verticalLayout,
      })
    );
    let series = container.children.push(
      am5hierarchy.ForceDirected.new(root, {
        minRadius: 16,
        maxRadius: am5.percent(15),
        valueField: "value",
        categoryField: "name",
        idField: "name",
        childDataField: "children",
        linkWithField: "link",
        nodePadding: 16,
        manyBodyStrength: -1,
        linkWithStrength: 0.5,
      })
    );

    series.outerCircles.template.setAll({
      fillOpacity: 0.7,
      strokeWidth: 1,
      strokeOpacity: 1,
      color: "white",
    });

    series.outerCircles.template.states.create("hover", {
      fillOpacity: 0.5,
      strokeOpacity: 0,
      strokeDasharray: 0,
    });
    series.nodes.template.events.on("click", function(ev) {
      if(ev.target.dataItem._settings.childData && ev.target.dataItem._settings.childData.length>0){
        var data = ev.target.dataItem.dataContext;
        var unique_url_calculated = data.name
        .replace(/[^a-zA-Z ]/g, "")
        .split(" ")
        .join("-")
        .toLowerCase();
        var url = SITE_URL +"/dedicated-category/"+encodeURIComponent(unique_url_calculated);
        if(unique_url_calculated != "xyz-wire-trends"){
          router.push(url)
        }
      }
      // window.open(url)
    });
    series.nodes.template.setAll({
      draggable: true,
    });

    series.nodes.template.setAll({
      toggleKey: "none",
      cursorOverStyle: "default",
    });

    series.links.template.setAll({
      strokeWidth: 2,
      strokeOpacity: 0.5,
      fill: am5.color(0xfffcfc),
    });
    
    
    series.data.setAll(res.data);
// })
// series.set("selectedDataItem", series.dataItems[0]);

series.labels.template.setAll({
  fontSize: 16,
      fill: am5.color(0xfffcfc),
      text: "{category}",
    });
    // series.labels.template.events.once("click", function(ev) {
    //   console.log("Clicked on a column", ev.target);
    // });
    // Add breadcrumbs
    container.children.unshift(
      am5hierarchy.BreadcrumbBar.new(root, {
        series: series,
      })
      );
      return () => {
        root.dispose();
      };
    }

  }).catch((err)=>{console.log(err,"this is a bubbles errrorrrrrr")})
    }, []);
    return (
      
      <Container className="text-center mt-4 mb-4">
      <h1>Discover XYZ Wire Trends</h1>
      <div id="chartdiv" style={{ width: "100%", height: "800px" }}></div>
    </Container>
    
     );
}
