// STEP 1 - Include Dependencies
// Include react
import React from "react";


// Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Include the chart type
import Chart from "fusioncharts/fusioncharts.charts";

// Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

// STEP 2 - Chart Data

// STEP 3 - Creating the JSON object to store the chart configurations

const ChartComponent = ({data,data2}) =>{
  const chartConfigs = {
    type: "mscolumn3d", // The chart type
    // type: "mssplinearea", // The chart type
    width: "90%", // Width of the chart
    height: "500", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
    chart: {
        caption: "Monthly Credit Statistic per Description",
        yaxisname: "debit per description in CAD",
        subcaption: "the recent six months",
        showhovereffect: "1",
        numberPrefix: "$",
        drawcrossline: "2",
        yaxismaxvalue: "30",
        plottooltext: "<b>$dataValue</b> consumed on $seriesName",
        theme: "fusion"
    },
    categories: data,
      dataset: data2

    }
  };
  return <ReactFC {...chartConfigs} />;
}
export default ChartComponent;