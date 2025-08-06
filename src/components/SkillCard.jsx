
function SkillCard({
  photo = "src/assets/goose/duck-with.gif",
  skillname = "dancing",
}) {
  return (
    <div className="flex flex-col justify-between p-4 border-2 border-white rounded-2xl hover:bg-green-400 w-1/8 h-1/2 items-center bg-blue-500">
      <div className="overflow-hidden h-50 w-40 mx-auto rounded-2xl mt-5 border-1 border-white">
        <img src={photo} className="object-cover h-full w-full" />
      </div>

      <div className="text-center text-2xl text-white font-mono">
        <h1>{skillname}</h1>
      </div>
    </div>
  );
}

export default SkillCard;