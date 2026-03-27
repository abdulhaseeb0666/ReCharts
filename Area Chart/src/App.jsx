
import { useState } from "react";
import {
  AreaChart, Area,
  XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer,
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

  const [graph, setgraph] = useState("uv");

  const datagraph = (e) => {
    setgraph(e.target.value);
  }


  return (
    <div>
      <h1>Area Chart</h1>

      <select name="datakey" id="" onChange={datagraph}>
        <option value="uv">uv</option>
        <option value="pv">pv</option>
      </select>

        <ResponsiveContainer width="100%" height="500">
          <AreaChart data={data} margin={{right: "10"}}>
            <CartesianGrid strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            {
              graph === "uv" ? (
                <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
              ) : (
                <Area type="monotone" dataKey="pv" stroke="#8884d8" fill="#8884d8" />
              )
            }
          </AreaChart>
        </ResponsiveContainer>      
    </div>
  );
}