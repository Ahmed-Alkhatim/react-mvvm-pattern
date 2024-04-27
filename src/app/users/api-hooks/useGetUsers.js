import UsersApi from "@/api/users"
import { useState } from "react"

export default () => {
    // States
    const [data, setUsers] = useState([])

    // respond to events
    UsersApi.on( 'usersFetched', (e) => {
        setUsers(e.detail)
    })

    // methods
    const getUsers = () => {
        UsersApi.getUsers()
    }

    return { getUsers, data }
}

/*
Api hooks used to
    -- define states 
    -- decide when a state should be updated ( responding to an api event )
    -- define methods that connect with api 
*/