import React, { useState, useEffect } from 'react'
import {Doughnut} from 'react-chartjs-2'

const DoughnutFacebook = () =>{
    const [chartData, setChartData] = useState()
    const chart = () =>{
        setChartData({
            labels:['Campanha: Conversões - Look a like 1% IC', 'Campanha: Geração de leads - Look a like 10% VC', 'Campanha: Retargeting - View Content 90 dias'],
            datasets:[{
                data: [8000, 4500, 2700],
                backgroundColor: ['rgb(0, 123, 255, 1)', 'rgba(241, 169, 160, 1)','rgba(0, 0, 0, 0.5)'],
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
                     title:{text:'Total gasto por Campanha ativa', display:true},
                    }
                    
                } />
            </div>
        </div>
    )
}

export default DoughnutFacebook