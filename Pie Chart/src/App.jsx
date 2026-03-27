"use client";

import {
  PieChart, Pie, Cell,
  Tooltip,
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
    </div>
  );
}