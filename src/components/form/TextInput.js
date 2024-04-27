'use client'
import { useState } from "react"

export default ({ placeholder, onChange }) => {
    const [value, setValue ] = useState('')

    const handleChange = (e) => {
        setValue(e.target.value)
        onChange(e.target.value)
    }

    return(
        <div>
            <input value = {value} onChange = {(e) => handleChange(e)} placeholder = {placeholder} className="border border-[#666666] rounded-[8px] h-[36px] indent-3" />
        </div>
    )
}