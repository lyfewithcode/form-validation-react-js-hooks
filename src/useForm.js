import { useState, useEffect } from "react";

const useForm = () => {
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        password2: ''
    })
    const [errors, setErrors] = useState({})

    const handleChange = e => {
        // setValues({
        //     ...values,
        //     [e.target.name]: e.target.values
        // })
        // how to make this code much cleaner
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
    }

    return { handleChange, values, handleSubmit }
}

export default useForm