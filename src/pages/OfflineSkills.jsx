
import Header from "../components/Header";
import SkillCard from "../components/SkillCard";

function OfflineSkills(){
    
     const skill_json = [
            {   
                photo:"src/assets/goose/dance-cute-ducky-cute.gif",
                skillname:"Dance",
            },
            {
                photo:"src/assets/goose/duck-ducking.gif",
                skillname:"Swimming",
            },
            {
                photo:"src/assets/goose/duck-with.gif",
                skillname:"Driving",
            },
            {
                photo:"src/assets/goose/goose-geese.gif",
                skillname:"Running",
            },
            {
                photo:"src/assets/goose/goose-see.gif",
                skillname:"Unpredictable",
            },
        ] 
       
        return(
             
      <div className="flex flex-col items-center h-screen  w-screen bg-blue-400">
          <Header />
          <h1 className="text-white text-3xl">Connect To internet To see More Stuff</h1>
          <div className="flex gap-3 items-center h-full w-full justify-center">
            {skill_json.map((gif, index) => (
              <SkillCard
                key={index}
                photo={gif.photo}
                skillname = {gif.skillname}
              />
            ))}
          </div>
          <hr className="border-t border-white w-full" />
        </div>
        )

}

export default OfflineSkills