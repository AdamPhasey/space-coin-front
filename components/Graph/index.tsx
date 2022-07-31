import { useState } from "react";
import {
  ResponsiveContainer,
  Area,
  AreaChart,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

import { Data, DataProps } from "../../pages";

function Graph( {data} : DataProps ) {
  // const result = info.map((item: { Month: propTypes; Value: propTypes; }) => {({ Month: item.Month, Value: item.Value })});
  // console.log(result);

  // console.log(Array.isArray());

  return (
    <div className="flex-container1">
      <div className="h-full">
        <h2>Analytics</h2>
        <ResponsiveContainer maxHeight={500} minHeight={500}>
          <AreaChart data={data}>
            <defs>
              <linearGradient id="color" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#2451B7" stopOpacity={0.4}></stop>
                <stop
                  offset="75%"
                  stopColor="#2451B7"
                  stopOpacity={0.05}
                ></stop>
              </linearGradient>
            </defs>
            <Area dataKey="Value" stroke="#2451B7" fill="url(#color)"></Area>

            <XAxis dataKey="Month" axisLine={true} tickLine={false} />

            <YAxis
              dataKey="Value"
              axisLine={true}
              tickLine={false}
              tickCount={8}
              tickFormatter={(number) => `£${number.toFixed(0)}m`}
            />

            <Tooltip />

            <CartesianGrid opacity={0.1} vertical={false} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}



export default Graph;
