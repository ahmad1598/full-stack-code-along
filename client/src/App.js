import React from 'react'
import {withUser} from './context/UserProvider.js'
import {Switch, Route, Redirect} from 'react-router-dom'
import AuthContainer from './components/auth/AuthContainer.js'

const App = (props) => {
    const {user, token, signup, login} = props
    return(
        <div>
            <Switch>
                <Route 
                path="/login" 
                render = {rProps => 
                    <AuthContainer 
                        {...rProps} 
                        signup={signup} 
                        login={login} /> } />
            </Switch>
        </div>
    )
}

export default withUser(App)