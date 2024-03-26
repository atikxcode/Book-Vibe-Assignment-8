
const ListedBook = ({book}) => {


  return (
    <div>
      <h2>{book?.author}</h2>
      <h2>{book?.review}</h2>
    </div>
  );
};

export default ListedBook;