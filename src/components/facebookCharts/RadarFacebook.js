import React, { useState, useEffect } from 'react'
import {Radar} from 'react-chartjs-2'


const RadarFacebook = () =>{
    const [chartData, setChartData] = useState()
    const chart = () =>{
        setChartData({
            labels:['CPA', 'CPL', 'CPV', 'CPC', 'CPM'],
            datasets:[{
                label:'Hoje',
                data: [42, 42, 13, 13, 6.5],
                borderColor: 'rgba(0, 0, 0, 0.5)',
                pointBackgroundColor: 'rgba(0, 0, 0, 0.5)',
                pointRadius: 10,
                pointBorderColor: 'rgb(255,250,250)'
                
            }, {
                label:'Semana',
                data: [36, 12, 6, 3, 1.5],
                borderColor: 'rgba(241, 169, 160, 1)',
                pointBackgroundColor: 'rgb(241, 169, 160)',
                backgroundColor:'rgba(241, 169, 160, 0.2)',
                pointRadius: 10,
                pointBorderColor: 'rgb(255,250,250)'
                
            }, {
                label:'Mês',
                data: [32, 13, 12, 6, 3],
                borderColor: ['rgb(0, 123, 255,1)'],
                pointBackgroundColor: 'rgb(0, 123, 255,1)',
                backgroundColor:'rgba(0, 123, 255, 0.2)',
                pointRadius: 10,
                pointBorderColor: 'rgb(255,250,250)'
                
            }],
         
        })
    }

    useEffect(() =>{
        chart()
    }, [])
    return (
        <div>
            <div className="radarfacebook">
                <Radar data={chartData} options ={
                    {responsive:true,
                     title:{text:'Campanha: Retargeting - View Content 90 dias', display:true}
                    }
                    
                } />
            </div>
        </div>
    )
}

export default RadarFacebook