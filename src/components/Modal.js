'use client'
import { useState } from "react"

export default  (props) => {

    const [isVisible, setIsVisible] = useState(false)
    
    return(
        <div>
            { isVisible && <div class="modal fixed left-0 bottom-0 right-0 top-0  overflow-scroll   z-50 bg-[rgba(51,48,60,.33)]" >
                <div class="modal-card  z-50 pt-10 pb-5">
                       { props.content((status) => {setIsVisible(status)}) }
                </div>
            </div>}
            <div onClick={() => setIsVisible(true)}>
                {props.activator}
            </div>
        </div>
    )
}