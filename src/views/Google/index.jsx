import "./google.css"
import Header from "../../components/Header"

import React from "react"

import LineGoogle from '../../components/googleCharts/lineGoogle'
import BarGoogle from '../../components/googleCharts/barGoogle'
import RadarGoogle from '../../components/googleCharts/radarGoogle'
import DoughnutGoogle from '../../components/googleCharts/doughnutGoogle'


export default function Google() {
    return (
        <>
            <Header />
            <div className="container bannerGoogle btn my-5 p-4">
                <h2>
                    <i class="fa fa-exclamation-triangle mr-2"></i>
                    Esses gráficos serão atualizados com seus dados, assim que você adicionar sua conta do Google com todas as permissões
                </h2>
            </div>

            <div className="content mt-5">
                <div className="chart lineGoogle">
                    <DoughnutGoogle />
                </div>
                <div className="chart barGoogle">
                    <RadarGoogle />
                </div>
            </div>
            <div className="content">
                <div className="chart radarGoogle">
                    <BarGoogle />
                </div>
                <div className="chart doughnutGoogle">
                    <LineGoogle />
                </div>
            </div>
        </>
    )
}