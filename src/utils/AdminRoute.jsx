import React from "react"
import { Route, Redirect } from "react-router-dom"
import { useSelector } from "react-redux"

export default function AdminRoute(props) {

    const { userAdmin } = useSelector(state => state.auth)

    if (!userAdmin) {
        return <Redirect to="/home" />
    }

    return (
        <Route component={props.component} path={props.path} />
    )
}