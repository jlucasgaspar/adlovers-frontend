import "./help.css"
import Header from "../../components/Header"
import Footer from "../../components/Footer"

import React from "react"


export default function Help() {
    return (
        <>
            <Header />
            <div className="p-5">
                <span className="d-flex mx-5">
                    <i class="fa fa-life-ring fa-3x mr-2"></i><h1> Precisa de ajuda? </h1>
                </span>
                
                <hr />

                <a href="https://api.whatsapp.com/send?phone=5521964307478&text=">
                    <div className="container adCards btn my-5 p-4">
                        <h2>Fale conosco pelo WhatsApp</h2> <i class="fa fa-whatsapp fa-3x ml-2"></i>
                    </div>
                </a>

                
                
                <div className="contacts d-flex">

                    <div className="container contact mx-3 p-4">
                        <span className="d-flex mb-3">
                            <i class="fa fa-at fa-2x mr-2"></i> <h3>E-mail</h3>
                        </span>
                        <span>
                            <h6 className="my-auto"> adlovers.app@gmail.com </h6>
                        </span>
                    </div>

                    <div className="container contact mx-3 p-4">
                        <span className="d-flex mb-3">
                            <i class="fa fa-instagram fa-2x mr-2"></i> <h3>Instagram</h3>
                        </span>
                        <span>
                            <h6 className="my-auto"> @adlovers.app </h6>
                        </span>
                    </div>

                    <div className="container contact mx-3 p-4">
                        <span className="d-flex mb-3">
                            <i class="fa fa-home fa-2x mr-2"></i> <h3>Endereço</h3>
                        </span>
                        <span>
                            <h6 className="my-auto">
                                Av. das Américas, 19005 - Torre 2, Sala 217<br />
                                Recreio dos Bandeirantes, RJ - Brasil
                            </h6>
                        </span>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}