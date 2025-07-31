import AddContactDetails from "./AddContactDetails";

function AddContactSection(){
    return(
        <section className="bg-blue-400 flex justify-between w-full p-5 pt-10">
                
            <AddContactDetails/>
            <div className="w-2/5 mr-20 ml-10">
                <div className="border-4 rounded-2xl border-white w-full h-5/6">
                    <img 
                        src="src\assets\Goose\Goose.gif"
                        className="rounded-xl h-full w-full object-cover"
                    />
                </div>
                <h1 className="text-center text-white font-bold font-mono text-3xl m-5">
                    Nobody messes with me
                </h1>
                <h1 className="text-center text-white font-bold font-mono text-2xl m-1">
                    Figure 6.9
                </h1>
            </div>
        </section>
    )
}

export default AddContactSection;