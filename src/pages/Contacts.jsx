import Header from "../components/Header"
import AddContactSection from "../components/AddContactSection";

function Contacts(){
    return(
        <div className="flex flex-col items-center h-screen  w-screen bg-blue-400">
            <Header />
            <div className="w-full h-full flex flex-col items-center text-white font-mono font-bold text-6xl mt-5">
                <h1>Welcome to the Hood</h1>
                <img 
                    src="src\assets\Goose\goose-funny.gif"
                    className="mt-5 rounded-xl m-10"
                />
            </div>
            <hr className="border-2 border-blue-600 w-full"/>
            <AddContactSection/>
            
        </div>
    )
}

export default Contacts;