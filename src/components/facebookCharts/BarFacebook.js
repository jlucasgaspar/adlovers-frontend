import React, { useState, useEffect } from 'react'
import {Bar} from 'react-chartjs-2'

const BarFacebook = () =>{
    const [chartData, setChartData] = useState()
    const chart = () =>{
        setChartData({
            labels:['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'],
            datasets:[{
                label:'Leads captados por mês',
                data: ['503', '459', '632', '841', '954', '1050', '1230'],
                backgroundColor: 'rgba(241, 169, 160, 1)',
                borderWidth: 4
            }, {
                label:'Conversões no mês',
                data: ['201', '173', '274', '400', '411', '489', '527'],
                backgroundColor: 'rgb(0, 123, 255,1)',
                borderWidth: 4
            }],
         
        })
    }

    useEffect(() =>{
        chart()
    }, [])
    return (
        <div className="lineFacebook">
            <div /* style={{height:'200px', width:'360px'}} */>
                <Bar data={chartData} options ={
                    {responsive:true,
                     title:{text:'Campanha: Purchase - Look a like 10% IC', display:true},
                     scales:{
                         yAxes:[{
                             ticks:{autoSkip:true,beginAtZero:true},
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

export default BarFacebook