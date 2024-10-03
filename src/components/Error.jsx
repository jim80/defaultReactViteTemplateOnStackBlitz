import "../App.css";

const Error = (props) => {
  const { error } = props;
  return (
    <>
      <div className="error-component">
        <h1>{"ERROR : Error status : " + error.status}</h1>
      </div>
    </>
  );
};
export default Error;
