export const TechPerson = ({ item }) => {
  return (
    <div className="techPersonBox">
      <h3>{item.fullName}</h3>
      <p>{item.body}</p>
    </div>
  );
};
