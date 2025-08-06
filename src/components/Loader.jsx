import Header from "./Header";
function Loader() {
  return (
    <>
      <Header />
      <div className="flex items-center justify-center h-screen bg-blue-600">
        <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin border-white-500"></div>
      </div>
    </>
  );
}

export default Loader;
