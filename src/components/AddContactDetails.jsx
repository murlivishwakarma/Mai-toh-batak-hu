import { useState, useRef} from "react";
import { useNavigate } from "react-router-dom";

function AddContactDetails(){

    const [name_value, setNameValue] = useState("")
    const [mobile_value, setMobileValue] = useState("")
    const [reason_value, setReasonValue] = useState("")
    const sampleRef = useRef(null)
    const [useForRef, setUseForRef] = useState("Button") 
    const navigate = useNavigate()

    const update=()=>{
        setUseForRef(sampleRef.current.value!=""? sampleRef.current.value : "Your textbox empty")
    }

    const goToHome=()=>{
        navigate("/")
    }

    return (
        <div className="w-full h-full">

            <div className="bg-blue-500 border-3 border-white rounded-2xl m-10 w-1/2">  
                <form className="text-white font-mono flex flex-col bg-[rgba(0,0,0,0)] p-10 font-bold">
                    <label for="name">Your name:</label>
                    <input 
                        className="border border-white rounded hover:text-black hover:bg-white p-2 bg-blue-400"
                        id="name" type="tel" value={name_value}
                        onChange={(e)=>setNameValue(e.target.value)}
                    />

                    <label for="mobile_number">What's your mobile number:</label>
                    <input 
                        className="border border-white rounded hover:text-black hover:bg-white p-2 bg-blue-400"
                        id="mobile_number" type="tel" value={mobile_value}
                        onChange={(e)=>setMobileValue(e.target.value)}
                    />

                    <label for="reason">Why do you wanna bother me:</label>
                    <input 
                        className="border border-white rounded hover:text-black hover:bg-white p-2 bg-blue-400"
                        id="reason" type="tel" value={reason_value}
                        onChange={(e)=>setReasonValue(e.target.value)}
                    />

                    <label for="button_name">Set new name for button:</label>
                    <input 
                        className="border border-white rounded hover:text-black hover:bg-white p-2 bg-blue-400"
                        id="button_name" type="text" placeholder="check Uncontrolled" ref={sampleRef}
                    />

                </form>
            </div> 

            <div >
                <h1>{mobile_value}</h1>
                <button className="h-40 w-40 bg-yellow-400 ml-20 rounded-2xl border-2 border-white" onClick={update}>{useForRef}</button>
                <button className="h-40 w-40 bg-yellow-400 ml-20 rounded-2xl border-2 border-white" onClick={goToHome}>go to home</button>
            </div>

        </div>
    )
}

export default AddContactDetails;