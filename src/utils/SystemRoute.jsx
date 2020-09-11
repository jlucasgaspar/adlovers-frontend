import React from "react"
import { Route, Redirect } from "react-router-dom"
import { useSelector } from "react-redux"

export default function SystemRoute(props) {

    const { userLogged } = useSelector(state => state.auth)

    if (!userLogged) {
        return <Redirect to="/login" />
    }

    return (
        <Route component={props.component} path={props.path} />
    )
}