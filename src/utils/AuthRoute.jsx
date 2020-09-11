import React from "react"
import { Route, Redirect } from "react-router-dom"
import { useSelector } from "react-redux"

export default function AuthRoute(props) {

    const { userLogged } = useSelector(state => state.auth)

    if (userLogged) {
        return <Redirect to="/home" />
    }

    return (
        <Route component={props.component} path={props.path} />
    )
}