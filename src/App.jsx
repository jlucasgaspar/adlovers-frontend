import "./App.css"
import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { store, persistor } from "./store"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"

// Pages (Views)
import Login from "./views/Login"
import Register from "./views/Register"
import Recovery from "./views/Recovery"
import Home from "./views/Home"
import Edit from "./views/Edit"
import Admin from "./views/Admin"
import Google from "./views/Google"
import Facebook from "./views/Facebook"
import Payment from "./views/Payment"
import Help from "./views/Help"
import Compare from "./views/Compare"

// Validating Routes -- Não tá funcionando direito
import AuthRoute from "./utils/AuthRoute"
import SystemRoute from "./utils/SystemRoute"
import AdminRoute from "./utils/AdminRoute" // Não tá funcionando bem


export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <AuthRoute exact path="/login" component={Login} />
          <AuthRoute exact path="/recuperar" component={Recovery} />
          <AuthRoute exact path="/cadastro" component={Register} />
          <SystemRoute exact path="/home" component={Home} />
          <SystemRoute exact path="/editar" component={Edit} />
          <SystemRoute exact path="/pagamento" component={Payment} />
          <SystemRoute exact path="/google" component={Google} />
          <SystemRoute exact path="/facebook" component={Facebook} />
          <SystemRoute exact path="/compare" component={Compare} />
          <SystemRoute exact path="/ajuda" component={Help} />
          <SystemRoute exact path="/admin" component={Admin} />
        </Router>
      </PersistGate>
    </Provider>
  )
}