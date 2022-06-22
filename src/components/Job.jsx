export const Job = ({ item }) => {
  
  return (
    <div className="jobBox">
      <h3>{item.idCode}</h3>
      <div
        className="jobDetails"
        dangerouslySetInnerHTML={{ __html: item.html }}
      ></div>
    </div>
  );
};
