import React, { useState, useEffect } from 'react'
import {Line} from 'react-chartjs-2'

const LineGoogle = () =>{
    const [chartData, setChartData] = useState()
    const chart = () =>{
        setChartData({
            labels:['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'],
            datasets:[{
                label:'Leads nessa semana',
                data: [10, 8, 13, 17, 14, 20, 21],
                borderColor: ['rgb(0, 123, 255,1)'],
                borderWidth: 4
            }, {label:'Leads semana anterior',
            data: [3, 6, 4, 5, 4, 5, 7],
            borderColor: ['rgba(241, 169, 160, 1)'],
            borderWidth: 4}],
         
        })
    }

    useEffect(() =>{
        chart()
    }, [])
    return (
        <div className="linegoogle">
            <div>
                <Line data={chartData} options ={
                    {responsive:true,
                     title:{text:'Google Ads - Leads', display:true},
                     scales:{
                         yAxes:[{
                             ticks:{autoSkip:true, maxTicksLimit:10,beginAtZero:true},
                             gridLines:{display: false}   
                         }],
                         xAxes:[{gridLines:{display: false}}]  
                     }   
                    }
                    
                } />
            </div>
        </div>
    )
}

export default LineGoogle