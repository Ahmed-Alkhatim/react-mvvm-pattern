'use client'
import { useContext, useEffect } from "react"
import { useGetUsers } from "./api-hooks"
import { Table, TableRow, DeleteIcon } from "@/components"
import UsersApi from "@/api/users"
import { UsersContext } from "../../data/users"

/* React component represents View and ViewModel in MVVM design pattern.
 -- View renders UI
 -- View-model handles ui events and responds to it by either update state or execute connection methods with model ( api and data source )
 -- View model also defines how to respond to api events
*/ 
/*
    -- By this way  View-model in Users Component has no reason to change, Unless a new (ui event) is going to be added 
*/
const Users = () => {
    // View-model
    const { viewUsers, updateUsers, deleteUser } = useContext(UsersContext) 
    const { data , getUsers } = useGetUsers()
     
    useEffect(() => {
        getUsers()    
    }, [])

    const deleteTheUser = (id) => {
        UsersApi.deleteUser(id)
    }

    UsersApi.on('usersFetched', () => {updateUsers(data)})
    UsersApi.on('userDeleted', (e) => {deleteUser(e.detail.id)})

    // View
    return(
        <>
         <Table heads={['name', 'email', 'city', '']}>
            { viewUsers.map( user => 
                <TableRow>
                    <td>{ user.username }</td>
                    <td>{ user.email }</td>
                    <td>{ user.address.city }</td>
                    <td className="flex space-x-2">
                        <DeleteIcon onClick = {() => deleteTheUser(user.id)} />
                    </td>
                </TableRow>
            )}      
       </Table>
       </>
    )
}

export default Users