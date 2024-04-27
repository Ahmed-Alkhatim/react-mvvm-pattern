'use client'
import { TextInput } from "@/components"
import { useState, useContext, useEffect } from "react"
import { UsersContext } from "@/data/users"

/*
    Search components is a part of the global view
    -- It connects with data interface through its methods 
    -- It doesn't know how the functionality of searching is implemented 
    -- It doesn't change directly anything in the data interface 
    -- It only tells the data interface layer that we need to find the users their names are [value] 
*/
export default () => {
    const { searchForUser } = useContext(UsersContext)
    const [value, setValue] = useState()
    
    useEffect( () => {
        searchForUser(value)
    }, [value])

    return( 
        <>
            <TextInput placeholder='User name' onChange = { (value) => setValue(value) }/>
        </>
    )
}