import Header from "../components/Header";
import SkillCard from "../components/SkillCard";

function Skills(){
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
            <Header/>
            <div className="flex gap-3 items-center h-full w-full justify-center">
    
                {skill_json.map((skill)=>(
                    <SkillCard photo={skill.photo} skillname={skill.skillname}/>
                ))}
                
            </div>
        <hr className="border-t border-white w-full"/>
        </div>
    )
}

export default Skills;
