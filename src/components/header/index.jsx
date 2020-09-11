import React, { useCallback } from "react"
import "./header.css"
import logo from "../../assets/logo.png"

import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import firebase from "../../config/firebase"
import axios from "axios"


export default function Header() {

    const user = useSelector((state) => { return state.auth.userName })
    const userAdmin = useSelector((state) => { return state.auth.userAdmin })

    const dispatch = useDispatch()
    
    const logout = useCallback(() => {
        dispatch({ type: "logout" })
        firebase.auth().signOut()
        localStorage.removeItem("adLoversUser")
        localStorage.removeItem("persist:adlovers_user")
        delete axios.defaults.headers.common["Authorization"]
        window.location.href = "/login"
    })

    return(
        <header className="navbar navbar-expand-md navbar-light bg-light">

            
            <Link className="navbar-brand ml-3 my-auto" to="/home">
                <img src={logo} width="200" />
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto d-flex justify-content-center">
                    <li className="nav-item mx-auto">
                        <Link className="nav-link mx-3 btn btn-lg" id="facebook" to="/facebook">
                            <i className="fa fa-facebook mr-1"></i> Facebook
                        </Link>
                    </li>
                    <li className="nav-item mx-auto">
                        <Link className="nav-link mx-3 btn" id="google" to="/google">
                            <i className="fa fa-google mr-1"></i> Google
                        </Link>
                    </li>
                    {/* <li className="nav-item my-auto dropdown mx-auto" id="rel">
                        <Link className="nav-link mx-3 dropdown-toggle" to="/home" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fa fa-paste mr-1"></i> Relatórios
                        </Link>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link className="dropdown-item" to="/home">Criar relatórios</Link>
                            <Link className="dropdown-item" to="/home">Comparação</Link>
                            <div className="dropdown-divider"></div>
                            <Link className="dropdown-item" to="/home">...</Link>
                        </div>
                    </li> */}
                    <li className="nav-item mx-auto">
                        <Link className="nav-link mx-3 btn" id="compare" to="/compare">
                            <i className="fa fa-paste mr-1"></i> Compare
                        </Link>
                    </li>
                </ul>

                <ul className="userDropDown navbar-nav">
                    <li className="nav-item dropdown m-auto" id="rel">
                        <div  className="nav-link mr-3 my-auto dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fa fa-user-circle fa-2x mr-2"></i>
                            <span className="mr-1">
                                { user ? user : "Usuário Fake" }
                            </span>
                        </div>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            { userAdmin ? 
                            <Link to="/admin" className="dropdown-item">
                                <i className="fa fa-home mr-1"></i> Administração
                            </Link> : null }
                            <Link to="/editar" className="dropdown-item">
                                <i className="fa fa-cogs mr-1"></i> Editar Perfil
                            </Link>
                            {/* <Link to="/pagamento" className="dropdown-item">
                                <i className="fa fa-barcode mr-1"></i> Pagamento
                            </Link> */}
                            <Link to="/ajuda" className="dropdown-item">
                                <i className="fa fa-life-ring mr-1"></i> Ajuda
                            </Link>
                            <Link to="/login" className="dropdown-item text-danger logout" onClick={logout}>
                                <i className="fa fa-sign-out mr-1"></i> Sair
                            </Link>
                        </div>
                    </li>
                </ul>
            </div>
        </header>
    )
}