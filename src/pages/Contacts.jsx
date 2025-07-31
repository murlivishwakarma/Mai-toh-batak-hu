import Header from "../components/Header"
import AddContactSection from "../components/AddContactSection";

function Contacts(){
    return(
        <div className="flex flex-col items-center h-screen  w-screen bg-blue-500">
            <Header />
            <div className="w-full h-full flex flex-col items-center text-white font-mono font-bold text-6xl mt-5">
                <h1 className="">Welcome to the Hood</h1>
                <div className="flex gap-3 justify-center w-full items-center">
                    <div className="flex flex-col justify-center items-center text-3xl w-2/7 gap-2 bg-blue-400 rounded-2xl h-1/3">
                        <h1>I say</h1> 
                        <h1>"I have no enemies"</h1>
                    </div>
                    <div className="m-10 border-2 border-white rounded-2xl bg-blue-400">
                        <img 
                            src="src\assets\Goose\goose-funny.gif"
                            className=" rounded-xl m-2"
                        />
                    </div>
                    <div className="flex flex-col justify-center items-center text-3xl w-2/7 gap-2 bg-blue-400 rounded-2xl h-1/3">
                        <h1>They say</h1> 
                        <h1 className="text-center">"But you don't have any friends either"</h1>
                    </div>
                </div>
            </div>
            <hr className="border-2 border-white w-full"/>
            <AddContactSection/>
            
        </div>
    )
}

export default Contacts;