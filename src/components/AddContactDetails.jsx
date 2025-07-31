import { useState, useRef} from "react";
import { useNavigate } from "react-router-dom";

function AddContactDetails(){

    const [name_value, setNameValue] = useState("Jack")
    const [mobile_value, setMobileValue] = useState("911")
    const [reason_value, setReasonValue] = useState("I got robbed by a blackman")
    const sampleRef = useRef(null)
    const [useForRef, setUseForRef] = useState("Button") 
    const navigate = useNavigate()

    const update=()=>{
        setUseForRef(sampleRef.current.value!=""? sampleRef.current.value : "You are foobar!")
    }

    const goToHome=()=>{
        navigate("/")
    }

    return (
        <div className="w-full h-full">

            <div className="bg-blue-500 border-3 border-white rounded-2xl">  
                <form className="text-white font-mono flex flex-col bg-[rgba(0,0,0,0)] p-10 font-bold">
                    <label for="name">Your name:</label>
                    <input 
                        className="border border-white rounded hover:text-black hover:bg-white p-2 bg-blue-400"
                        id="name" type="tel" value={name_value} placeholder="Check Controlled Input" 
                        onChange={(e)=>setNameValue(e.target.value)}
                    />

                    <label for="mobile_number">What's your mobile number:</label>
                    <input 
                        className="border border-white rounded hover:text-black hover:bg-white p-2 bg-blue-400"
                        id="mobile_number" type="tel" value={mobile_value} placeholder="Check Controlled Input" 
                        onChange={(e)=>setMobileValue(e.target.value)}
                    />

                    <label for="reason">Why do you wanna bother me:</label>
                    <input 
                        className="border border-white rounded hover:text-black hover:bg-white p-2 bg-blue-400"
                        id="reason" type="tel" value={reason_value} placeholder="Check Controlled Input" 
                        onChange={(e)=>setReasonValue(e.target.value)}
                    />

                    <label for="button_name">Set new name for button:</label>
                    <input 
                        className="border border-white rounded hover:text-black hover:bg-white p-2 bg-blue-400"
                        id="button_name" type="text" placeholder="Check Uncontrolled Input" ref={sampleRef}
                    />

                </form>
            </div> 

            <h1 className="mt-5 text-3xl text-white font-mono font-bold">
                Important Note:
            </h1>

            <div className="bg-blue-500 mt-1 w-full border-white border-2 p-10 rounded-2xl text-white text-2xl font-mono font-bold mb-10">
                <h1>Hi {name_value != "" ? name_value : "Nigga"} </h1>
                <h1>I won't call on  {mobile_value != "" ? mobile_value : "911"}</h1>
                <h1>just because you say "{reason_value != "" ? reason_value : "I got pulled over by a white cop"}"</h1>
            </div>

            <div className="flex text-white font-mono font-bold gap-5 items-center">

                <button 
                className="h-25 w-25 bg-blue-500  rounded-xl border-3 border-white hover:bg-green-400 text-xl" 
                onClick={update}>
                    {useForRef}
                </button>
                {/* <hr className="w-3/5 border-2 border-white"/> */}
                <button 
                className="h-25 w-25 bg-blue-500  rounded-xl border-3 border-white text-xl text-center hover:bg-green-400" 
                onClick={goToHome}>
                    Home
                </button>

            </div>

        </div>
    )
}

export default AddContactDetails;