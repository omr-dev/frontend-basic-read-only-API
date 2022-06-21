export const Book = ({ item }) => {
  return (
    <div className="bookBox">
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </div>
  );
};
