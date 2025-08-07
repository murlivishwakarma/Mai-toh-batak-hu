import Nav from "./Nav";
import pfs from "../assets/Goose/duck-ducky.gif";

function Header(){
  return (
    <>
      <div className="flex flex-row bg-blue-600 items-center w-1/1 h-1/12 border-1 border-white sticky top-0">
        <img src={pfs} className="pl-2 h-full" />
        <h1 className="text-5xl text-white p-3 text-center font-mono font-bold ">
          IamGoose.com
        </h1>
        <Nav />
      </div>
    </>
  );
}
export default Header;
