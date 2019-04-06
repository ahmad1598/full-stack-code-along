import React,{Component} from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'
const UserContext = React.createContext()

class UserProvider extends Component {
    constructor(){
        super()
        this.state ={
            user: JSON.parse(localStorage.getItem("user")) || {},
            token: localStorage.token || "",
            errMsg:""
        }
    }

    // direct way to redirect user to specific page after signout or login or after any other page
    // this.props.history.push("/home")

    signup = credentials => {
        axios.post('/auth/signup', credentials).then(res => {
            const {user, token} = res.data
            localStorage.setItem("user", JSON.stringify(user))
            localStorage.setItem("token", token)
            this.setState({ user, token, errMsg:"" })
        })
        .catch(err => this.handleErr(err.response.data.errMsg))
    }
    // , this.props.history.push("/home")

    login = credentials => {
        axios.post('/auth/login', credentials).then(res => {
            const {user, token} = res.data
            localStorage.setItem("user", JSON.stringify(user))
            localStorage.setItem("token", token)
            this.setState({ user, token, errMsg:"" })
        })
        .catch(err => this.handleErr(err.response.data.errMsg))
    }
// , this.props.history.push("/home")

    logout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        this.setState({user:{}, token:""})
    }

    handleErr = err => {
        this.setState({ errMsg: err})
    }

    render(){
        return (
            <UserContext.Provider value={{
                ...this.state,
                signup: this.signup,
                login: this.login,
                logout:this.logout
            }}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}


export default withRouter(UserProvider)

export const withUser = C => props => (
    <UserContext.Consumer>
        { value => <C {...props} {...value} />}
    </UserContext.Consumer>
)