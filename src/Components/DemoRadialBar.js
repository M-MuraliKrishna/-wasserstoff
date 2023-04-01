import React from "react";
import { RadialBar } from "@ant-design/plots";

const DemoRadialBar = () => {
  const data = [
    {
      name: "P",
      star: 862
    },
    {
      name: "D",
      star: 753
    },
    {
      name: "R",
      star: 553
    }
  ];
  const config = {
    data,
    xField: "name",
    yField: "star",
    maxAngle: 350,
    radius: 0.8,
    innerRadius: 0.2,
    tooltip: {
      formatter: (datum) => {
        return {
          name: "star",
          value: datum.star
        };
      }
    },
    colorField: "star",
    color: ({ star }) => {
      if (star > 800) {
        return "#E8E2E2";
        // return "#6349ec";
      } else if (star > 700 && star<800) {
        return "#FFB84C";
      }

      return "#F16767";
      // return "#D864A9";
    },
    barBackground: {},
    barStyle: {
      lineCap: "round"
    },
    annotations: [
      {
        type: "html",
        position: ["50%", "50%"],
        html: (container, view) => {
          const coord = view.getCoordinate();
          const w = coord.polarRadius * coord.innerRadius * 1.15;
          return `<div style="transform:translate(-50%,-46%)">
          <img width="${
            (w / 203) * 231
          }" height="${w}" alt="" src="https://gw.alipayobjects.com/zos/antfincdn/zrh%24J08soH/AntV%252520LOGO%2525202.png">
        </div>`;
        }
      }
    ]
  };
  const style = {
    width: "150px",
    height: "100px"
  };

  return (
    <div style={style}>
      <RadialBar {...config} />
    </div>
  );
};



export default DemoRadialBar
