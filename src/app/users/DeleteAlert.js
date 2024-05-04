'use client'
import UsersApi from "@/api/users"
import { useState } from "react"

export default  () => {
    
    const [userDeleted, setUser] = useState()
    const [isVisible, setIsVisible] = useState(false)

    UsersApi.on('userDeleted', (e) => { 
        setUser(e.detail)
        setIsVisible(true) 
    })
    
    return(
        <div>
            { isVisible && <div class="modal fixed left-0 bottom-0 right-0 top-0  overflow-scroll   z-50 bg-[rgba(51,48,60,.1)]" >
                <div class="modal-card  z-50 ">
                    <div className="bg-[#fff] rounded-[8px] px-20 py-5">
                        <p>{'The user ('+ userDeleted.username + ') Deleted Successfully'}</p>
                        <div onClick={() => setIsVisible(false)} className="absolute top-[10px] right-[10px] cursor-pointer">x</div>
                    </div>
                </div>
            </div>}
        </div>
    )
}