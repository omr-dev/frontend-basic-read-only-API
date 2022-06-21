export const Translation = ({ item }) => {
  return (
    <div className="translationBox">
      <p>
        {item.fromPhrase}
        {" <=> "}
        {item.toPhrase}
      </p>
    </div>
  );
};
