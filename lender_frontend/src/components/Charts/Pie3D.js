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

const ChartComponent = ({data}) =>{
  const chartConfigs = {
    type: "pie3d", // The chart type
    width: "90%", // Width of the chart
    height: "300", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        //Set the chart caption
        caption: "Accounts",
        theme: "fusion",
        decimals: 0,
        pieRadius: '45%',
      //  paletteColors:,
        animateClockwise: '1',
        enableSmartLabels: "1",
        useDataPlotColorForLabels: "1",
      },
      // Chart Data 
      data
    // data: [
    //     {
    //       label: "Equity",
    //       value: "300000"
    //     },
    //     {
    //       label: "Debt",
    //       value: "230000"
    //     },
    //     {
    //       label: "Bullion",
    //       value: "180000"
    //     },
    //     {
    //       label: "Real-estate",
    //       value: "270000"
    //     },
    //     {
    //       label: "Insurance",
    //       value: "20000"
    //     }
    //   ]
    }
  };
  return <ReactFC {...chartConfigs} />;
}
export default ChartComponent;
