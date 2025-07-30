import About from "../components/About";
import Header from "../components/Header";
import History from "../components/History";

function Home(){
    console.log("Home component rendering");
    return(
        <div className="flex flex-col items-center h-screen  w-screen bg-blue-400">
            <Header />
            <About
                name="Donald Duck"
                description={"Mujhe Kya Pata, Mai toh Batak hu\n, I have no enemies(other than DuckDuckGo)"}
            />
            <hr className="border-t border-white w-full"/>
            <History/>
        </div>
        
    )
}

export default Home;