import { Link } from "react-router-dom";


const Banner = () => {
  return (
    <div className="container mx-auto my-8 bg-[#1313130D] p-14 rounded-[24px] h-[554px]">

      
      <div className="flex justify-around ">

        <div className="flex flex-col justify-center gap-8">
          <h2 className="text-[#131313] w-[526px] font-playFair text-[56px] font-bold leading-[84px]">Books to freshen up your bookshelf</h2>
          <div>
          <Link to={'/listedbooks'}><button className="bg-[#23BE0A] pt-[15px] pb-[15px] pr-[20px] pl-[20px] text-[20px] rounded-lg text-white font-bold font-workSans">View The List</button></Link>
          </div>
        </div>

        <div>
          <img src="/public/assets/pngwing 1.png" alt="" />
        </div>

        </div>
      
    </div>
  );
};

export default Banner;