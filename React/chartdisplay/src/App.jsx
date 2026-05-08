import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import React from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ScatterChart,
  LineChart,
  PieChart,
  Pie,
  PolarAngleAxis,
  Radar,
  RadarChart,
  PolarGrid,
  PolarRadiusAxis,
} from "recharts";
import "./App.css";

// Add some mock data

const data = [
  {
    month: 'January',
    savings: 5000,
    loss: 500
  },
  {
    month: 'February',
    savings: 8000,
    loss: 300
  },
  {
    month: 'March',
    savings: 3000,
    loss: 800
  },
  {
    month: 'April',
    savings: 6000,
    loss: 100
  },
  {
    month: 'May',
    savings: 4000,
    loss: 700
  },
  {
    month: 'June',
    savings: 9000,
    loss: 1200
  },
];

function App() {
  return (
    <div className="App">
      <h1>Simple Line chart</h1>
      <LineChart width={1000} height={300} data={data}>
        <CartesianGrid></CartesianGrid>
        <XAxis dataKey="month"></XAxis>
        <YAxis></YAxis>
        <Tooltip> </Tooltip>
        <Legend></Legend>
        <Line type="monotone" dataKey="loss" stroke="green" />
        <Line type="monotone" dataKey="savings" stroke="red" />
      </LineChart>

      <h1>Simple Area Chart</h1>
      <AreaChart width={1000} height={300} data={data}>
        <CartesianGrid></CartesianGrid>
        <XAxis dataKey="month"></XAxis>
        <YAxis></YAxis>
        <Tooltip> </Tooltip>
        <Legend></Legend>
        <Area type="monotone" dataKey="savings" stroke="blue" fill="blue" />
        <Area type="monotone" dataKey="loss" stroke="green" fill="green" />
      </AreaChart>

      <h1>Simple Bar Chart</h1>
      <BarChart width={1000} height={300} data={data}>
        <CartesianGrid></CartesianGrid>
        <XAxis dataKey="month"></XAxis>
        <YAxis></YAxis>
        <Tooltip> </Tooltip>
        <Legend></Legend>
        <Bar type="monotone" dataKey="savings" fill="blue" />
        <Bar type="monotone" dataKey="loss" fill="green" />
      </BarChart>

      <h1>Stacked Bar Charts</h1>
      <BarChart width={1000} height={300} data={data}>
        <CartesianGrid></CartesianGrid>
        <XAxis dataKey="month"></XAxis>
        <YAxis></YAxis>
        <Tooltip> </Tooltip>
        <Legend></Legend>
        <Bar type="monotone" dataKey="savings" stackId="a" fill="green" />
        <Bar type="monotone" dataKey="loss" stackId="a" fill="red" />
      </BarChart>

<h1>Simple Scatterplot</h1>
     <ScatterChart
        width={750}
        height={250}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      >
        <CartesianGrid />
        <XAxis name="month" unit="month" />
        <YAxis
          yAxisId="left"
          type="number"
          dataKey="savings"
          name="savings"
          stroke="#8884d8"
        />
        <YAxis
          yAxisId="right"
          type="number"
          dataKey="loss"
          name="loss"
          orientation="right"
          stroke="#82ca9d"
        />
        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
        <Scatter yAxisId="left" name="Savings" data={data} fill="#8884d8" />
        <Scatter yAxisId="right" name="loss" data={data} fill="#82ca9d" />
      </ScatterChart>

      <h1>Pie Chart</h1>
      <PieChart width={1000} height={300}>
        <Pie
          data={data}
          dataKey="savings"
          nameKey="month"
          name="savings"
          cx="50%"
          cy="50%"
          outerRadius={50}
          fill="#8884d8"
        />
        <Pie
          data={data}
          dataKey="loss"
          nameKey="month"
          name="loss"
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill="#82ca9d"
          label
        />
      </PieChart>

      <h1>RadarChart</h1>
      <RadarChart outerRadius={90} width={1000} height={300} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="month" />
        <PolarRadiusAxis angle={30} domain={[0, 150]} />
        <Legend />
        <Radar
          name="savings"
          dataKey="savings"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
        <Radar
          name="loss"
          dataKey="loss"
          stroke="#82ca9d"
          fill="#82ca9d"
          fillOpacity={0.6}
        />
      </RadarChart>
    </div>
  );
}

export default App;