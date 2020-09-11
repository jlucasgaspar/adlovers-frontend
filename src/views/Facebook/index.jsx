import "./facebook.css"
import Header from "../../components/Header"

import React from "react"

import LineFacebook from '../../components/facebookCharts/LineFacebook'
import BarFacebook from '../../components/facebookCharts/BarFacebook'
import RadarFacebook from '../../components/facebookCharts/RadarFacebook'
import DoughnutFacebook from '../../components/facebookCharts/DoughnutFacebook'


export default function Facebook() {
    return (
        <>
            <Header />
            <div className="container banner btn my-5 p-4">
                <h2>
                    <i class="fa fa-exclamation-triangle mr-2"></i>
                    Esses gráficos serão atualizados com seus dados, assim que você adicionar sua conta do Facebook com todas as permissões
                </h2>
            </div>

            <div className="content mt-5">
                <div className="chart lineFacebook">
                    <LineFacebook />
                </div>
                <div className="chart barFacebook">
                    <BarFacebook />
                </div>
            </div>
            <div className="content">
                <div className="chart radarFacebook">
                    <RadarFacebook />
                </div>
                <div className="chart doughnutFacebook">
                    <DoughnutFacebook />
                </div>
            </div>
        </>
    )
}