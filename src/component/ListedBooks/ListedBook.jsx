
const ListedBook = ({book}) => {

  const {author} = book;

  return (
    <div>
      <h2>{author}</h2>
      <h2>{review}</h2>
    </div>
  );
};

export default ListedBook;