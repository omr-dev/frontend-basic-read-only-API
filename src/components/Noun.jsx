export const Noun = ({ item }) => {
  return (
    <div className="nounBox">
      <ul>
        <li>Article: {item.article}</li>
        <li>Singular: {item.singular}</li>
        <li>Plural: {item.plural}</li>
      </ul>
    </div>
  );
};
