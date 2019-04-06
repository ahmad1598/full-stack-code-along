import React from 'react'
import {withUser} from './context/UserProvider.js'
import {Switch, Route, Redirect} from 'react-router-dom'
import AuthContainer from './components/auth/AuthContainer.js'
import Home from './components/Home.js'
import ProtectedRoute from './shared/ProtectedRoute.js'
const App = (props) => {
    // document.title = props.location.pathname.slice(1)(0).toUpperCase()+props.location.pathname.slice(2)
    const {user, token, logout} = props
    return(
        <div>
            <Switch>
                <Route 
                    path="/login" 
                    render = {rProps => <AuthContainer {...rProps}  /> } />

                {/* redirect user to the login page if they are not login */}
                <ProtectedRoute 
                    token={token}
                    path="/home"
                    redirectTo="/login"
                    component={Home}
                    username={user.username}
                    logout={logout}
                 />

                {/* <Route 
                    path="/home" 
                    render={rProps => !token ? <Redirect to="/login" /> : <Home {...rProps}/>}/> */}

            </Switch>
        </div>
    )
}

export default withUser(App)

// another way to redirect user to another page: use ternary operator
// render = {rProps => token? <Redirect to="/home" /> : <AuthContainer {...rProps}

// another way to do not allow user to go Home page before login. that is the same as ProtectedRoute
//render={rProps => !token ? <Redirect to="/login" /> : <Home {...rProps}/>}/>

// rProps: router props. instead of saying we need to have history={this.props.history} and all those
//things, we just spread all propt from render props and pass them into our component to use