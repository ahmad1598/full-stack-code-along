import React from 'react'
import {Route, Redirect} from 'react-router-dom'

const ProtectedRoute = props => {
    // ...rest means any other props that will come to this component later on
    const {token, path, redirectTo, component: Component, ...rest} = props

    return(
        token 
            ? <Route path={path} render={rProps => <Component {...props} {...rest} />} />
            : <Redirect to={redirectTo} />
    )
}

export default ProtectedRoute