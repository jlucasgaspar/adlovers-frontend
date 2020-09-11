import "./recovery.css"
import logo from "../../assets/logo.png"

import React, { useState, useCallback } from "react"
import { Link } from "react-router-dom"

import firebase from "../../config/firebase"
import "firebase/auth"


export default function Recovery() {

    const [email, setEmail] = useState("")
    const [msg, setMsg] = useState("")
    const [loading, setLoading] = useState(false)

    const recovery = useCallback(() => {
        if (!email) {
            setMsg("error")
        }

        setLoading(true)

        firebase.auth().sendPasswordResetEmail(email)
            .then(result => {
                setLoading(false)
                setMsg("success")
            })
            .catch(err => {
                setLoading(false)
                setMsg("error")
            })
    })

    return (
        <div className="login-content d-flex align-items-center">
            <form className="form-signin mx-auto bg-light">
                <div className="text-center mb-4">
                    <img src={logo} alt="" srcset="" width="300"/>
                </div>

                <hr className="hr my-2" />

                <h5 className="my-4 d-flex justify-content-center">Recupere sua Senha</h5>

                <input onChange={(e) => setEmail(e.target.value)}
                    type="email" id="inputEmail" className="form-control my-3" placeholder="E-mail" required name="email" />

                { 
                    loading ? <div className="my-3"><div className="spinner-border text-danger d-flex m-auto" role="status"></div></div> :
                        <button onClick={recovery} className="btn btn-lg btn-danger my-4 btn-block" type="button">Recuperar senha</button> 
                }

                <div className="msg-login text-center text-white  w-75 m-auto">
                    {msg === "success" && <span className="bg-success p-2 rounded"><strong>Tudo ok!</strong> Confira sua caixa de e-mail. &#128526;</span>}
                    {msg === "error" && <span className="bg-secondary p-2 rounded"><strong>Ops...</strong> E-mail inválido. &#128546;</span>}
                </div>

                <div className="opcoes-login text-center my-4">
                    <Link to="/login" className="mx-2">Fazer Login</Link>
                    <span className="mx-2">|</span>
                    <Link to="/cadastro" className="mx-2">Cadastrar</Link>
                </div>
                
                <p className="my-3 text-muted text-center">&copy; Adlovers 2020</p>
            </form>
        </div>
    )
}