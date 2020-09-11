import "./home.css"
import Header from "../../components/Header"

import React, { useCallback } from "react"
import { useSelector } from "react-redux"
import { Redirect, useHistory } from "react-router-dom"


export default function Home() {
    const {userName} = useSelector(state => state.auth)

    const history = useHistory()

    const handleFacebook = useCallback(() => {
        history.push("/facebook")
    })

    const handleGoogle = useCallback(() => {
        history.push("/google")
    })

    return (
        <>
            <Header />
            <div className="p-4 d-flex flex-column">

                <h1 className="my-4 mb-5">Olá, {userName}!</h1>

                <div className="addAccount">
                    <h3>Conectar contas</h3>
                    <p>Adicione as redes da sua conta abaixo. Nós a usaremos para coletar dados das suas campanhas</p>
                </div>

                <div className="accounts d-flex flex-row">
                    <div className="container account m-auto p-3">
                            <i id="facebookIcon" class="bg-primary fa fa-facebook fa-4x mb-5"></i>
                            <h3>Conecte com sua conta do Facebook Ads.</h3>
                            <button className="btn btn-primary" onClick={handleFacebook}>Conectar</button>
                    </div>
                    <div className="container account m-auto p-3">
                            <i id="googleIcon" class="bg-danger fa fa-google fa-4x mb-5"></i>
                            <h3>Conecte com sua conta do Google Ads.</h3>
                            <button className="btn btn-danger" onClick={handleGoogle}>Conectar</button>
                    </div>
                </div>


                {/* <h1>
                    Aqui é /home
                </h1>
                <p>
                    Nome: { user.auth.userName }, <br />
                    Admin: { user.auth.userAdmin.toString() }, <br />
                    email: { user.auth.userEmail }, <br />
                    Logado: { user.auth.userLogged.toString() }, <br />
                    Telefone: { user.auth.userPhone }, <br />
                    userId: { user.auth.userId }, <br />
                    Token: { user.auth.userToken }
                </p> */}
            </div>
        </>
    )
}