import React, { useState, useEffect } from 'react'
import {Doughnut} from 'react-chartjs-2'

const DoughnutComparing = () =>{
    const [chartData, setChartData] = useState()
    const chart = () =>{
        setChartData({
            labels:['Google', 'Facebook'],
            datasets:[{
                data: [8000, 4500],
                backgroundColor: ['rgba(241, 169, 160, 1)','rgb(0, 123, 255, 1)'],
                borderWidth: 4
            }],
         
        })
    }

    useEffect(() =>{
        chart()
    }, [])
    return (
        <div className="DoughnutFacebook">
            <div>
                <Doughnut data={chartData} options ={
                    {responsive:true,
                     title:{text:'Total gasto por mídia (Google/Facebook)', display:true},
                    }
                    
                } />
            </div>
        </div>
    )
}

export default DoughnutComparing