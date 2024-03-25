import { Link } from "react-router-dom";


const Book = ({book}) => {
  const {image, tags, author, bookName, category, rating, Id} = book;
  return (
    <Link to={`/book/${Id}`}>
    <div className="border-[1px] border-[#13131326] p-4 w-[374px] mx-auto">

      

<div className="bg-[#F3F3F3] p-6 flex justify-center rounded-lg mb-6">
<img className="items-center w-[134px] h-[166px]" src={image} alt="" />
</div>

<div className="flex gap-[12px] text-[#23BE0A] text-[16px] font-medium mb-4">
  <p className="bg-[#23BE0A0D] pt-[7px] pb-[7px] pr-[16px] pl-[16px] rounded-[30px]">{tags[0]}</p>
  <p className="bg-[#23BE0A0D] pt-[7px] pb-[7px] pr-[16px] pl-[16px] rounded-[30px]">{tags[1]}</p>
</div>

<div className="flex flex-col">
  <p className="text-[#131313] text-[24px] font-bold mb-4">{bookName}</p>
  <p className="text-[#131313CC] text-[16px] font-medium mb-5">By: {author}</p>
</div>

<hr className="border-dotted" />

<div className="flex justify-between mt-5">
<p className="text-[#131313CC] text-[16px] font-medium">{category}</p>
<p className="flex items-center gap-2">
  <span>{rating}</span>
  <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M11.48 3.49897C11.5223 3.3958 11.5943 3.30755 11.6869 3.24543C11.7795 3.18331 11.8885 3.15015 12 3.15015C12.1115 3.15015 12.2205 3.18331 12.3131 3.24543C12.4057 3.30755 12.4777 3.3958 12.52 3.49897L14.645 8.60997C14.6848 8.70561 14.7502 8.78841 14.834 8.84928C14.9178 8.91015 15.0167 8.94672 15.12 8.95497L20.638 9.39697C21.137 9.43697 21.339 10.06 20.959 10.385L16.755 13.987C16.6765 14.0542 16.6179 14.1417 16.5858 14.2399C16.5537 14.3382 16.5493 14.4434 16.573 14.544L17.858 19.929C17.8838 20.037 17.8771 20.1503 17.8385 20.2545C17.8 20.3587 17.7315 20.4491 17.6416 20.5144C17.5517 20.5797 17.4445 20.6168 17.3335 20.6212C17.2225 20.6256 17.1127 20.597 17.018 20.539L12.293 17.654C12.2048 17.6001 12.1034 17.5715 12 17.5715C11.8966 17.5715 11.7952 17.6001 11.707 17.654L6.982 20.54C6.88725 20.598 6.77745 20.6266 6.66645 20.6222C6.55546 20.6178 6.44825 20.5807 6.35836 20.5154C6.26848 20.4501 6.19996 20.3597 6.16145 20.2555C6.12294 20.1513 6.11617 20.038 6.142 19.93L7.427 14.544C7.45083 14.4434 7.44645 14.3381 7.41434 14.2399C7.38223 14.1416 7.32363 14.0541 7.245 13.987L3.041 10.385C2.95634 10.3128 2.895 10.2171 2.86476 10.1101C2.83451 10.003 2.83671 9.88942 2.87109 9.78362C2.90546 9.67782 2.97046 9.58461 3.05785 9.51578C3.14524 9.44695 3.25109 9.4056 3.362 9.39697L8.88 8.95497C8.98325 8.94672 9.08222 8.91015 9.16602 8.84928C9.24983 8.78841 9.31522 8.70561 9.355 8.60997L11.48 3.49897Z" stroke="#424242" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg></span>
  </p>
</div>


</div></Link>
  );
};

export default Book;