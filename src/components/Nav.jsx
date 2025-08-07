import { Link } from "react-router-dom";
function Nav() {
  return (
    <nav className="flex gap-4 ml-auto pr-3">
      < Link to="/" className="text-white font-mono mt-3 font-bold">Home</Link>
      <Link to="/Skills" className="text-white font-mono mt-3 font-bold">Gifs</Link>
      <Link to="/Contacts" className="text-white font-mono mt-3 font-bold">Contacts</Link>
      <img src="src\assets\menu.svg" className="mt-2 h-2/3 w-[30px]" />
    </nav>
  );
}

export default Nav;
