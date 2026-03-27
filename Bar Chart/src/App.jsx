"use client";

import {
  LineChart, Line,
  BarChart, Bar,
  AreaChart, Area,
  PieChart, Pie, Cell,
  RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  RadialBarChart, RadialBar,
  ScatterChart, Scatter,
  ComposedChart,
  Treemap,
  FunnelChart, Funnel,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  ResponsiveContainer
} from "recharts";

const data = [
  { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 300, pv: 4567, amt: 2400 },
  { name: 'Page C', uv: 300, pv: 1398, amt: 2400 },
  { name: 'Page D', uv: 200, pv: 9800, amt: 2400 },
  { name: 'Page E', uv: 278, pv: 3908, amt: 2400 },
  { name: 'Page F', uv: 189, pv: 4800, amt: 2400 },
];


export default function App() {
  return (
    <div>
      {/* <h1>Line Charts</h1>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer> */}

      <h1>Bar Charts</h1>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" />
          <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>

      <h1>Area Chart</h1>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="pv" stroke="#8884d8" fill="#8884d8" />
          </AreaChart>
        </ResponsiveContainer>

      <h1>Pie Chart</h1>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={data} dataKey="pv" nameKey="name" outerRadius={100}>
              {data.map((_, i) => (
                <Cell key={i} fill={`hsl(${i * 60}, 70%, 50%)`} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>

      <h1>Composed Chart</h1>
        <ResponsiveContainer width="100%" height={300}>
          <ComposedChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="uv" fill="#82ca9d" />
            <Line dataKey="pv" stroke="#8884d8" />
          </ComposedChart>
        </ResponsiveContainer>

      <h1>Scatter Chart</h1>
        <ResponsiveContainer width="100%" height={300}>
          <ScatterChart>
            <CartesianGrid />
            <XAxis dataKey="uv" name="UV" />
            <YAxis dataKey="pv" name="PV" />
            <Tooltip cursor={{ strokeDasharray: "3 3" }} />
            <Scatter data={data} fill="#8884d8" />
          </ScatterChart>
        </ResponsiveContainer>

      <h1>Radar Chart</h1>
        <ResponsiveContainer width="100%" height={300}>
          <RadarChart data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="name" />
            <PolarRadiusAxis />
            <Radar dataKey="pv" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
          </RadarChart>
        </ResponsiveContainer>

      <h1>Radial Bar Chart</h1>
        <ResponsiveContainer width="100%" height={300}>
          <RadialBarChart innerRadius="20%" outerRadius="90%" data={data}>
            <RadialBar dataKey="pv" fill="#8884d8" />
            <Tooltip />
          </RadialBarChart>
        </ResponsiveContainer>

      <h1>TreeMap Chart</h1>
        <ResponsiveContainer width="100%" height={300}>
          <Treemap
            data={data}
            dataKey="pv"
            stroke="#fff"
            fill="#8884d8"
          />
        </ResponsiveContainer>

      <h1>Funnel Chart</h1>
        <ResponsiveContainer width="100%" height={300}>
          <FunnelChart>
            <Tooltip />
            <Funnel dataKey="pv" data={data} isAnimationActive />
          </FunnelChart>
        </ResponsiveContainer>
      
      
    </div>
  );
}