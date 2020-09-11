import "./login.css"
import logo from "../../assets/logo.png"

import React, { useState, useCallback } from "react"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import axios from "axios"


export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [msg, setMsg] = useState("")
    const [loading, setLoading] = useState(false)

    const dispatch = useDispatch()

    const signIn = useCallback(() => {
        if (email.trim().split("").length < 6 || password.trim().split("").length < 6 ) return setMsg("error")

        setLoading(true)

        const user = { email, password }

        axios.post(`${process.env.REACT_APP_URL}/login`, user)
            .then((res) => {
                if (res.data.type === "login") {
                    dispatch({
                        type: res.data.type,
                        userToken: res.data.token,
                        userEmail: res.data.email,
                        userPhone: res.data.phone,
                        userName: res.data.name,
                        userId: res.data.id,
                        userAdmin: res.data.admin
                    })
                    localStorage.setItem("adLoversUser", `Bearer ${res.data.token}`)
                    axios.defaults.headers.common["Authorization"] = `Bearer ${res.data.token}`
                    setLoading(false)
                    setMsg(res.data.setMsg)
                    window.location.href = "/"
                }
                else {
                    setLoading(false)
                    setMsg("errorFB")
                }
            })
            .catch((err) => {
                setLoading(false)
                setMsg("errorFB")
            })
    })

    return (
        <div className="login-content d-flex align-items-center">

            <form className="form-signin mx-auto bg-light">
                <div className="text-center mb-4">
                    <img src={logo} alt="" srcset="" width="300"/>
                </div>

                <hr className="hr my-2" />

                <h5 className="d-flex justify-content-center my-4">Faça login</h5>

                <input onChange={(e) => setEmail(e.target.value)}
                    type="email" id="inputEmail" className="form-control my-3" placeholder="E-mail" required name="email" />
                <input onChange={(e) => setPassword(e.target.value)}
                    type="password" id="inputPassword" className="form-control my-3" placeholder="Senha" required name="password" />

                { 
                    loading ? <div className="my-3"><div className="spinner-border text-danger d-flex m-auto" role="status"></div></div> :
                        <button onClick={signIn} className="btn btn-lg btn-danger btn-block my-4" type="button">Entrar</button> 
                }

                <div className="msg-login text-center text-white  w-75 m-auto">
                    {msg === "success" && <span className="bg-success p-2 rounded"><strong>Tudo ok!</strong> Você está conectado. &#128526;</span>}
                    {msg === "error" && <span className="bg-secondary p-2 rounded"><strong>Ops...</strong> E-mail/Senha inválidos. &#128546;</span>}
                    {msg === "errorFB" && <span className="bg-secondary p-2 rounded"><strong>Ops...</strong> Houve algum erro. &#128546;</span>}
                    {msg === "errorPassword" && <span className="bg-secondary p-2 rounded"><strong>Ops...</strong> Informações incorretas. &#128546;</span>}
                </div>

                <div className="opcoes-login text-center my-4">
                    <Link to="/recuperar" className="mx-2">Quero recuperar senha</Link>
                    <span className="mx-2">|</span>
                    <Link to="/cadastro" className="mx-2">Quero cadastrar</Link>
                </div>
                
                <p className="my-3 text-muted text-center">&copy; Adlovers 2020</p>
            </form>
        </div>
    )
}