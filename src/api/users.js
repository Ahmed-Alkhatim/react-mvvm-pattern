import { useDelete, useGet } from "./setup";

/* 
 --- UsersAPI class is only responsible of integration with backend (Users Model)
 --- It handles every response status and decide to fire an event 
 --- through this class we can develop a full integrated layer of api methods 
 ---  Using Unit test We can:
   * Test that all api endpoints are working as expected and return the appropriate response status
   * Test that the expected data structure (schema) is returned from each API endpoint
   * Test that Errors are thrown in the correct status
*/

class UsersApiClass extends EventTarget {

    constructor(){
        super();
    }

    on(event, listener){ this.addEventListener(event, listener)}

    getUsers = async() => {

        try {
            let response = await useGet('/users')
            if(response.status === 200) {
                this.dispatchEvent(
                    new CustomEvent('usersFetched', { detail : response.data })
                )
            }
        } catch (error) {
            this.dispatchEvent( 
                new CustomEvent('fetchUsersFailed', { detail : error })
            )
        }

    }


    deleteUser = async(id) => {
        try{
            let response = await useDelete('/users/' + id)
            if(response.status === 200) {
                console.log('response', response);
                this.dispatchEvent(
                    new CustomEvent('userDeleted', { detail: response.data })
                )
            }
        } catch (error) {

        }
    }

}

const UsersApi = new UsersApiClass()
export default UsersApi