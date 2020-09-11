import "./edit.css"
import Header from "../../components/Header"

import React, { useState, useCallback } from "react"
import { useSelector } from "react-redux"
import firebase from "../../config/firebase"


export default function Edit() {

    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")

    const db = firebase.firestore()
    const state = useSelector(state => state.auth)

    const handleUser = useCallback(() => {

    })

    const handlePassword = useCallback(() => {
        if (!email) {
            return
        }

        firebase.auth().sendPasswordResetEmail(state.userEmail)
            .then(result => {

            })
            .catch(err => {

            })
    })

    return (
        <>
            <Header />
            <div className="content">

                <div className="container p-5">
                    <nav>
                        <div className="nav nav-tabs" id="nav-tab" role="tablist">
                            {/* <a className="nav-link text-secondary" id="nav-data-tab" data-toggle="tab" href="#nav-data" role="tab" aria-controls="nav-data" aria-selected="true">Seus Dados</a> */}
                            <a className="nav-link text-secondary active" id="nav-newPassword-tab" data-toggle="tab" href="#nav-newPassword" role="tab" aria-controls="nav-newPassword" aria-selected="false">Redefinição de Senha</a>
                        </div>
                    </nav>

                    <div className="tab-content" id="nav-tabContent">

                        {/* <div className="tab-pane fade" id="nav-data" role="tabpanel" aria-labelledby="nav-data-tab">
                            <div className="form-group my-2">
                                <label for="email">Seu e-mail</label>
                                <input className="form-control" placeholder={state.userEmail} disabled />
                            </div>
                            <div className="form-group my-2">
                                <label for="name">Nome</label>
                                <input className="form-control" placeholder={state.userName} onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className="form-group my-2">
                                <label for="phone">Telefone</label>
                                <input className="form-control" placeholder={state.userPhone} onChange={(e) => setPhone(e.target.value)} />
                            </div>
                            <button onClick={handleUser} className="mt-3 btn btn-dark">Editar dados</button>
                        </div> */}
                        
                        <div className="tab-pane fade show active" id="nav-newPassword" role="tabpanel" aria-labelledby="nav-newPassword-tab">
                            
                            <div className="form-group my-2">
                                <label for="email">Envie o link de redefinição para seu e-mail</label>
                                <input className="form-control" placeholder={state.userEmail} value={state.userEmail} disabled />
                            </div>
                            <button onClick={handlePassword} className="mt-3 btn btn-dark">Enviar e-mail</button>
                        
                        </div>

                    </div>
                </div>
                
                <div>
                    
                </div>
            </div>
        </>
    )
}