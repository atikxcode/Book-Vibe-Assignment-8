import React from 'react';
import { useLoaderData } from 'react-router-dom';

const TopRatedBooks = () => {

  const books = useLoaderData();
  
  const topRatedBooks = books.filter(book => book.rating >= 4.5);



  
  return (
    <div className='container mx-auto'>
      <div className='grid grid-cols-3 gap-8 w-full p-4'>
      {
        topRatedBooks.map(book => 
          <div key={book.id} className='flex justify-center border-[1px] border-[#13131326] p-4'>
            <div className='flex flex-col items-center'>

            <div className='bg-[#F3F3F3] p-6'>
            <img className='w-[200px] h-[300px]' src={book.image} alt="" />
            </div>

            <div className='flex flex-col items-center mt-5'>
              <h2 className='text-[#131313] text-[20px] font-bold mb-4'>{book.bookName}</h2>
              <p className="text-[#131313CC] text-[16px] font-medium mb-5"><span className='text-[#131313]'>Written By: </span>{book.author}</p>
              <div className='flex gap-4 items-center'>
                <p className='text-[#23BE0A] bg-[#23BE0A0D] font-medium text-[16px] p-2 rounded-[30px]'>{book.category}</p>
                <p className='flex gap-1'>
                <span className='text-[#131313CC] text-[16px]'>{book.rating}</span>
                  <span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M9.47998 1.49897C9.52227 1.3958 9.5943 1.30755 9.6869 1.24543C9.7795 1.18331 9.88848 1.15015 9.99998 1.15015C10.1115 1.15015 10.2205 1.18331 10.3131 1.24543C10.4057 1.30755 10.4777 1.3958 10.52 1.49897L12.645 6.60997C12.6848 6.70561 12.7501 6.78841 12.834 6.84928C12.9178 6.91015 13.0167 6.94672 13.12 6.95497L18.638 7.39697C19.137 7.43697 19.339 8.05997 18.959 8.38497L14.755 11.987C14.6764 12.0542 14.6179 12.1417 14.5858 12.2399C14.5537 12.3382 14.5493 12.4434 14.573 12.544L15.858 17.929C15.8838 18.037 15.877 18.1503 15.8385 18.2545C15.8 18.3587 15.7315 18.4491 15.6416 18.5144C15.5517 18.5797 15.4445 18.6168 15.3335 18.6212C15.2225 18.6256 15.1127 18.597 15.018 18.539L10.293 15.654C10.2048 15.6001 10.1034 15.5715 9.99998 15.5715C9.89659 15.5715 9.79521 15.6001 9.70698 15.654L4.98198 18.54C4.88724 18.598 4.77743 18.6266 4.66644 18.6222C4.55544 18.6178 4.44823 18.5807 4.35835 18.5154C4.26847 18.4501 4.19994 18.3597 4.16143 18.2555C4.12292 18.1513 4.11615 18.038 4.14198 17.93L5.42698 12.544C5.45081 12.4434 5.44643 12.3381 5.41432 12.2399C5.38221 12.1416 5.32361 12.0541 5.24498 11.987L1.04098 8.38497C0.956324 8.3128 0.894988 8.21714 0.864741 8.11009C0.834494 8.00304 0.836696 7.88942 0.87107 7.78362C0.905443 7.67782 0.970441 7.58461 1.05783 7.51578C1.14522 7.44695 1.25107 7.4056 1.36198 7.39697L6.87998 6.95497C6.98323 6.94672 7.0822 6.91015 7.16601 6.84928C7.24981 6.78841 7.3152 6.70561 7.35498 6.60997L9.47998 1.49897Z" stroke="#424242" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg></span>
                  
                  </p>
                <p className='bg-[#59C6D2] p-2 rounded-[30px] text-white font-medium'><span>YOP: </span>{book.yearOfPublishing}</p>
              </div>
            </div>

            </div>
          </div>
        )
      }
      </div>
      
    </div>
  );
};

export default TopRatedBooks;