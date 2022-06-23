import React from "react";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
} from "recharts";
import "./chart.scss";
const data = [
  {
    name: "January",
    balance: 590,
    orders: 800,
    revenue: 1400,
    products: 490,
  },
  {
    name: "February",
    balance: 868,
    orders: 967,
    revenue: 1506,
    products: 590,
  },
  {
    name: "March",
    balance: 1397,
    orders: 1098,
    revenue: 989,
    products: 350,
  },
  {
    name: "April",
    balance: 1480,
    orders: 1200,
    revenue: 1228,
    products: 480,
  },
  {
    name: "May",
    balance: 1520,
    orders: 1108,
    revenue: 1100,
    products: 460,
  },
  {
    name: "June",
    balance: 1400,
    orders: 680,
    revenue: 1700,
    products: 380,
  },
];
function Chart({ title }) {
  return (
    <>
      <div className="chart-container">
        <div className="title-container">
          <span className="title">{title}</span>
        </div>

        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="name" scale="band" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="revenue"
              fill="#8884d8"
              stroke="#8884d8"
            />
            <Bar dataKey="orders" barSize={20} fill="#413ea0" />
            <Line type="monotone" dataKey="balance" stroke="#ff7300" />
            <Scatter dataKey="products" fill="red" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}

export default Chart;
