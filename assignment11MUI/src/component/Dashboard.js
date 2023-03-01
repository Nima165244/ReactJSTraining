import { BarChart } from './BarChart';
import React, { useState } from 'react'
import {Link, useLocation} from 'react-router-dom'
import { Data } from './utils/Data';
import "chart.js/auto";
import ProductInfo from './ProductInfo';

function Dashboard() {
    let location=useLocation(); 
    const [chartData, setChartData] = useState({
        labels: Data.map((data) => data.year), 
        datasets: [
          {
            label: "Users Gained ",
            data: Data.map((data) => data.userGain),
            backgroundColor: [
              "rgba(75,192,192,1)",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0"
            ],
            borderColor: "black",
            borderWidth: 2
          }
        ]
      });

  return (
    <div>

        <h1>Welcome to shopping cart {location?.state.username}!</h1>
        <ProductInfo /><br/><br/>
        <p><BarChart chartData={chartData} /></p>

        <br/>
        <br />
        <br />
        <Link to="/">Back to Login</Link>
    </div>
  )
}


export default Dashboard