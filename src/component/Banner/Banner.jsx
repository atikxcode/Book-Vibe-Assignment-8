import { Link } from "react-router-dom";


const Banner = () => {
  return (
    <div className="container mx-auto my-8 bg-[#1313130D] p-14 rounded-[24px] h-[554px]">

      
      <div className="flex flex-col lg:flex-row justify-around ">

        <div className="flex flex-col justify-center gap-2 lg:gap-8">
          <h2 className="text-[#131313] w-[90%] lg:w-[526px] font-playFair text-[30px] lg:text-[56px] font-bold leading-[38px] lg:leading-[84px]">Books to freshen up your bookshelf</h2>
          <div>
          <Link to={'/listedbooks'}><button className="bg-[#23BE0A] py-[10px] lg:py-[15px] px-[10px] lg:px-[20px] text-[18px] lg:text-[20px] rounded-lg text-white font-bold font-workSans">View The List</button></Link>
          </div>
        </div>

        <div>
          <img className="w-[240px] lg:w-auto" src="/public/assets/pngwing 1.png" alt="" />
        </div>

        </div>
      
    </div>
  );
};

export default Banner;