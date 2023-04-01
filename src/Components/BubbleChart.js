import React, { useState } from 'react'
import Chart from "react-apexcharts";
const BubbleChart = () => {
  // bubble chart for second page to show monthly earning or engaging users
    const [state] = useState({
      options: {
        chart: {
          id: "basic-bar",
        },
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept","Oct","Nov","Dec"],
        },
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91,55,10,22,55],
        },
      ],
    });
  return <div className="bubblechart">
  {/* bubble chart using apexchart */}
 <Chart
              options={state.options}
              series={state.series}
              type="scatter"
              width="800"
              height={"100%"}
            />
  </div>;
}

export default BubbleChart
