import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="container mx-auto my-10">
      <div className="gap-4 justify-center h-screen flex flex-col items-center">
        <h1 className="text-[250px]">404</h1>
        <p className="text-5xl">OPPS! PAGE NOT FOUND</p>
        <p className="text-2xl">Sorry the page you're looking doesn't exist. Sorry for the inconvenience.</p>
      <Link to="/"><button className="bg-blue-400 text-white p-3 text-2xl font-medium rounded-[30px]">Go back to Home</button></Link>

      </div>
    </div>
  );
};

export default ErrorPage;