
import { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import { getStoredBook } from '../utility/localStorage';




const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink', 'Green', '#800080', '#FF4500', '#00CED1', '#FFD700', '#9370DB', '#32CD32', '#4169E1', '#FF69B4'];

const data = [
  {
    name: 'Page A',
    uv: 4000,
    
    
  },
  {
    name: 'Page B',
    uv: 3000,
    
   
  },
  {
    name: 'Page C',
    uv: 2000,
    
    
  },
  {
    name: 'Page D',
    uv: 2780,
   
  
  },
  {
    name: 'Page E',
    uv: 1890,
    
   
  },
  {
    name: 'Page F',
    uv: 2390,
    
    
  },
  {
    name: 'Page G',
    uv: 3490,
    
   
  },
];






const Pages = () => {


  const [allData, setAllData] = useState([])

  useEffect(() => {
    fetch('Books.json')
    .then(res => res.json())
    .then(data => setAllData(data))
  },[])

  const [readList, setReadList] = useState([])

  useEffect(() => {
    const storedBookIds = getStoredBook();
    
    const readedBooks = allData?.filter(book => storedBookIds?.includes(book.Id))
    
    if(readedBooks){
      setReadList(readedBooks)
    } 
    
   },[allData])

   

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
  
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  const angle = window.innerWidth < 550? -45 : 0;
  const bottom = window.innerWidth < 550? 100 : 5;
  const interval = window.innerWidth < 550? 0 : 'undefined';
  const width = window.innerWidth < 550? 340 : 1300;


  console.log(window.innerWidth)


  return (
    <div className='container mx-auto'>
     <BarChart className='w-full'
      width={width}
      height={500}
      data={readList}

      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: bottom,
      }}
     
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis className='text-xs' dataKey="bookName" angle={angle} interval={interval} textAnchor='end' />
      <YAxis className='text-xs' />
      <Bar className='h-full' dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>
    </div>
  );
};

export default Pages;