import Users from "./Users"
import SearchUsers from "./SearchUsers"
import UsersProvider from "../../data/users"
import DeleteAlert from "./DeleteAlert"

export default () => (
    <div className="mt-10 mx-10 space-y-10">
        <UsersProvider>
            <SearchUsers />
            <Users />
            <DeleteAlert />
        </UsersProvider>
    </div>
)
