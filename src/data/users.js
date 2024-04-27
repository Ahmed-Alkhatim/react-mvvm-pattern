'use client'

/*
    -- the perfect way is to use Redux but we will use Context api now 
    -- Data source interface does not need to know which component or method using or asking for updating data
    -- It is the only one who is responsible for changing data source, any other just ask for that
    -- it defines all required methods to manipulate data and provides the data to other interfaces
    [Dependency Inversion Principle]
*/
const { createContext, useState } = require("react");

export const UsersContext = createContext({
    users : [], updateUsers : () => {}, searchForUser : () => {}, deleteUser : () => {}
})

const UsersProvider = ({ children }) => {

    const [ users, setUsers ] = useState([])
    const [viewUsers, updateView] = useState([])

    const updateUsers = (data) => { setUsers(data); updateView(data) }

    const searchForUser = (str) => {
        if(str) updateView( users.filter( (user) => user.username.includes(str) ) )
        else updateView(users)
    }
    
    const deleteUser = (id) => {
        setUsers(users.filter( (user) => user.id != id ) )
        updateView(viewUsers.filter( (user) => user.id != id ) )
    }

    return(
        <UsersContext.Provider value={{ users, viewUsers, updateUsers, searchForUser, deleteUser }}>
            { children }
        </UsersContext.Provider>    
    )
}

export default UsersProvider