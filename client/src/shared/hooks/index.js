import {useState} from 'react'

/**
 *  This takes a boolena, return toggle functionality
 * @function userToggle
 * @param {Boolean} - starting toggle boolean
 * @returns {Boolean, Function}
 */
export const useToggle = initToggle => {
    const [toggle, setToggle] = useState(initToggle)

    const toggler = () => {
        setToggle(!toggle)
    }

    return { toggle, toggler }
}


/** Creates Form Functionality
 * @function userFormProperties
 * @param {Object} initInputs 
 * @param {Function} submitCallback 
 * @returns {Function, Function, Object}
 */
export const useFormProperties = (initInputs, submitCallback) => {
    //setInputs will updates inputs
    const [inputs, setInputs] = useState(initInputs)

    const handleChange = e => {
        setInputs({
            ...inputs, 
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        submitCallback(inputs)
        setInputs(initInputs)
    }

    return { handleChange, handleSubmit, inputs }
}