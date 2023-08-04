import "../test/test.css";
const Test = ({ textCommint, imgUrl, goUrl }) => {
  return (
    <a className="card" href={goUrl}>
      <img src={imgUrl} className="imgCard"></img>
      <div className="textCommint">{textCommint}</div>
    </a>
  );
};

export default Test;
