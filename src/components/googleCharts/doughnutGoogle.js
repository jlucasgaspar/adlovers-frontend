import React, { useState, useEffect } from 'react'
import {Doughnut} from 'react-chartjs-2'

const DoughnutGoogle = () =>{
    const [chartData, setChartData] = useState()
    const chart = () =>{
        setChartData({
            labels:['GoogleAds - Adwords', 'GoogleAds - Google Display', 'GoogleAds - Youtube'],
            datasets:[{
                data: [5000, 1500, 3500],
                backgroundColor: ['rgb(0, 123, 255, 1)', 'rgba(241, 169, 160, 1)','rgba(0, 0, 0, 0.5)'],
                borderWidth: 4
            }],
         
        })
    }

    useEffect(() =>{
        chart()
    }, [])
    return (
        <div className="doughnutgoogle">
            <div>
                <Doughnut data={chartData} options ={
                    {responsive:true,
                     title:{text:'Total gasto por Mídia', display:true},
                    }
                    
                } />
            </div>
        </div>
    )
}

export default DoughnutGoogle