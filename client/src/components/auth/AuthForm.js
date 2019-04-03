import React from 'react'

const AuthForm = props => {
    const {handleChange, handleSubmit, inputs: {username, password}, btnText} = props

    return(
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" value={username} onChange={handleChange} placeholder="Username" required/>
                <input type="password" name="password" value={password} onChange={handleChange} placeholder="Password" required/>
                <button>{btnText}</button>
            </form>
    )
}

export default AuthForm