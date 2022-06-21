export const Job = ({ item }) => {
  //TODO:show html content
  return (
    <div className="jobBox">
      <h3>{item.idCode}</h3>
      <pre>{item.html}</pre>
    </div>
  );
};
