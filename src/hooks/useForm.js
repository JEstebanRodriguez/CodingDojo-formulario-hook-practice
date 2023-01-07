import React, { useState } from 'react'

export const useForm = (initialState = {}) => {
    const [values, setValues] = useState(initialState)
    const resetForm = () => setValues(initialState)
    const handleChange = ({ target }) => {
        setValues({
            ...values,
            [target.name]: target.value
        })
    }
    return [values, handleChange, resetForm]
}
