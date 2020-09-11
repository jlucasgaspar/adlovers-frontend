import "./register.css"
import logo from "../../assets/logo.png"

import React, { useState, useCallback } from "react"
import { Link } from "react-router-dom"

import axios from "axios"


export default function Register() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [msg, setMsg] = useState("")
    const [loading, setLoading] = useState(false)

    const signUp = useCallback(() => {
        setMsg(null)

        if (name.trim().split("").length < 2) return setMsg("errorName")
        if (email.trim().split("").length < 6) return setMsg("error")
        if (phone.trim().split("").length < 8) return setMsg("errorPhone")
        if (confirmPassword !== password) return setMsg("errorPassword")
        if (password.trim().split("").length < 6) return setMsg("errorPasswordLength")
            
        setLoading(true)

        const user = { name, email, phone, password, confirmPassword }

        axios.post(`${process.env.REACT_APP_URL}/signup`, user)
            .then((res) => {
                setLoading(false)
                setMsg(res.data.message)
                window.location.href = "/login"
            })
            .catch((error) => {
                setLoading(false)
                setMsg("erro")
            })
    })
    
    return(
        <>
        <div className="register-content d-flex align-items-center">
            <form className="form-signin mx-auto bg-light pt-4" id="container">
                <div className="text-center mb-4">
                    <img src={logo} alt="" srcset="" width="300"/>
                </div>

                <hr className="hr my-2" />

                <h5 className="d-flex justify-content-center my-4">Registre-se</h5>

                <input onChange={(e) => setName(e.target.value)}
                    type="name" id="inputName" className="form-control my-2" placeholder="Nome" required name="name" />
                <input onChange={(e) => setEmail(e.target.value)}
                    type="email" id="inputEmail" className="form-control my-2" placeholder="E-mail" required name="email" />
                <input onChange={(e) => setPhone(e.target.value)}
                    type="phone" id="inputPhone" className="form-control my-2" placeholder="Telefone com DDD" required name="phone" />
                <input onChange={(e) => setPassword(e.target.value)}
                    type="password" id="inputPassword" className="form-control my-2" placeholder="Senha" required name="password" />
                <input onChange={(e) => setConfirmPassword(e.target.value)}
                    type="password" id="inputConfirmPassword" className="form-control my-2" placeholder="Confirme a senha" required name="password" />
                { 
                    loading ? <div className="my-3"><div className="spinner-border text-danger d-flex m-auto" role="status"></div></div> :
                        <button onClick={signUp} className="btn btn-lg btn-danger btn-block my-4" type="button">Cadastrar</button> 
                }

                <div className="msg-register text-center text-white m-auto">
                    {msg === "success" && <span className="bg-success p-2 rounded"><strong>Maravilha!</strong> Você está cadastrado. &#128526;</span>}
                    {msg === "error" && <span className="bg-secondary p-2 rounded"><strong>Ops...</strong> Email ou senha inválidos. &#128546;</span>}
                    {msg === "errorEmail" && <span className="bg-secondary p-2 rounded"><strong>Ops...</strong> Email inválido. &#128546;</span>}
                    {msg === "errorEmailExist" && <span className="bg-secondary p-2 rounded"><strong>Ops...</strong> Email já cadastrado. &#128546;</span>}
                    {msg === "errorPassword" && <span className="bg-secondary p-2 rounded"><strong>Ops...</strong> Senhas não conferem. &#128546;</span>}
                    {msg === "errorPasswordLength" && <span className="bg-secondary p-2 rounded"><strong>Ops...</strong> Senhas inválidas. Mínimo de 6 caracteres. &#128546;</span>}
                    {msg === "errorPhone" && <span className="bg-secondary p-2 rounded"><strong>Ops...</strong> Telefone inválido. &#128546;</span>}
                    {msg === "errorName" && <span className="bg-secondary p-2 rounded"><strong>Ops...</strong> Nome inválido. &#128546;</span>}
                    {msg === "erro" && <span className="bg-secondary p-2 rounded"><strong>Ops...</strong> Houve algum erro. &#128546;</span>}
                </div>

                <div className="opcoes-register text-center my-4">
                    <Link to="/login" className="mx-2">Faça o login</Link>
                </div>
                
                <p className="mt-3 text-muted text-center">&copy; Adlovers 2020</p>
            </form>
        </div>
        </>
    )
}