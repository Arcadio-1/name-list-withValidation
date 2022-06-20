import "./List.scss";
const List = (porps) => {
  return (
    <ul className="list">
      {porps.persons.map((pesron) => {
        return (
          <li key={pesron.id}>
            <article>
              <p>
                <span>{pesron.name}</span> {`=>`} <span>({pesron.age})</span>{" "}
                year old
              </p>
            </article>
          </li>
        );
      })}
    </ul>
  );
};
export default List;
