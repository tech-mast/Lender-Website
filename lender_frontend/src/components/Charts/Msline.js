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
    type: "msline", // The chart type
    // type: "mscolumn3d", // The chart type
    width: "90%", // Width of the chart
    height: "500", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
    chart: {
        caption: "Monthly Debit Statistic per Description",
        yaxisname: "debit per description in CAD",
        subcaption: "the recent six months",
        showhovereffect: "1",
        numberPrefix: "$",
        drawcrossline: "2",
        plottooltext: "<b>$dataValue</b> consumed on $seriesName",
        theme: "fusion"
    },

    //   categories: [
    //     {
    //       category: [
    //         {
    //           label: "2012"
    //         },
    //         {
    //           label: "2013"
    //         },
    //         {
    //           label: "2014"
    //         },
    //         {
    //           label: "2015"
    //         },
    //         {
    //           label: "2016"
    //         }
    //       ]
    //     }
    //   ],
    categories: data,
      dataset: data2
    //   [
    //     {
    //       seriesname: "Facebook",
    //       data: [
    //         {
    //           value: "62"
    //         },
    //         {
    //           value: "64"
    //         },
    //         {
    //           value: "64"
    //         },
    //         {
    //           value: "66"
    //         },
    //         {
    //           value: "78"
    //         }
    //       ]
    //     },
    //     {
    //       seriesname: "Instagram",
    //       data: [
    //         {
    //           value: "16"
    //         },
    //         {
    //           value: "28"
    //         },
    //         {
    //           value: "34"
    //         },
    //         {
    //           value: "42"
    //         },
    //         {
    //           value: "54"
    //         }
    //       ]
    //     },
    //     {
    //       seriesname: "LinkedIn",
    //       data: [
    //         {
    //           value: "20"
    //         },
    //         {
    //           value: "22"
    //         },
    //         {
    //           value: "27"
    //         },
    //         {
    //           value: "22"
    //         },
    //         {
    //           value: "29"
    //         }
    //       ]
    //     },
    //     {
    //       seriesname: "Twitter",
    //       data: [
    //         {
    //           value: "18"
    //         },
    //         {
    //           value: "19"
    //         },
    //         {
    //           value: "21"
    //         },
    //         {
    //           value: "21"
    //         },
    //         {
    //           value: "24"
    //         }
    //       ]
    //     }
    //   ]
    }
  };
  return <ReactFC {...chartConfigs} />;
}
export default ChartComponent;