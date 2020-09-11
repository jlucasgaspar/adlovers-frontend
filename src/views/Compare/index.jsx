import "./compare.css"
import Header from "../../components/Header"

import React from "react"

import LineComparing from '../../components/CompareCharts/lineComparing'
import BarComparing from '../../components/CompareCharts/barComparing'
import DoughnutComparing from '../../components/CompareCharts/doughnutComparing'


export default function Compare() {
    return (
        <>
            <Header />
            <div className="compareBanner btn my-5 p-4">
                <h2>
                    <i class="fa fa-exclamation-triangle mr-2"></i>
                    Esses gráficos serão atualizados com seus dados, assim que você adicionar suas contas do Facebook e Google com todas as permissões
                </h2>
            </div>

            <div className="content mt-5">
                <div className="chart lineFacebook">
                    <LineComparing />
                </div>
                <div className="chart barFacebook">
                    <BarComparing />
                </div>
            </div>
            <div className="content">
                <div className="chart radarFacebook m-auto">
                    <DoughnutComparing />
                </div>
            </div>
        </>
    )
}