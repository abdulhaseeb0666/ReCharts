import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
const data2 = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];


export default function Example() {
  return (
    <div>
      <h1>Line Chart</h1>
      <LineChart
        style={{ width: '100vw', height: '100vh', display: 'block', aspectRatio: 1 , padding: '50px' }}
        data={data}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border-3)" />
        <XAxis dataKey="name" stroke="#8884d8" />
        <YAxis width="auto" stroke="#8884d8" />
        <Tooltip
          cursor={{
            stroke: 'var(--color-border-2)',
          }}
          contentStyle={{
            backgroundColor: 'var(--color-surface-raised)',
            borderColor: 'var(--color-border-2)',
          }}
        />
        <Legend />
        <Line
          type="monotone"
          dataKey="pv"
          stroke="#8884d8"
          dot={{
            fill: 'var(--color-surface-base)',
          }}
          activeDot={{ r: 8, stroke: 'var(--color-surface-base)' }}
        />
        <Line
          type="monotone"
          dataKey="uv"
          stroke="#ffa500"
          dot={{
            fill: 'var(--color-surface-base)',
          }}
          activeDot={{ stroke: 'var(--color-surface-base)' }}
        />
        <RechartsDevtools />
      </LineChart>


      <LineChart
        style={{ width: '100vw', height: '100vh', aspectRatio: 1 , padding: '50px' }}
        responsive
        data={data2}
      >
        <XAxis dataKey="name" stroke="#8884d8" />
        <YAxis width="auto" stroke="#8884d8" />
        <Line
          type="monotone"
          dataKey="pv"
          stroke="#8884d8"
          strokeWidth={2}
          dot={{
            fill: 'var(--color-surface-base)',
          }}
          activeDot={{
            stroke: 'var(--color-surface-base)',
          }}
        />
        <RechartsDevtools />
      </LineChart>
    </div>
  );
}