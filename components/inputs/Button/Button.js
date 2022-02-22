const Button = ({ title, step, setTabActive }) => {
  return (
    <>
      {title == "Précedent" ? (
        <span
          className="js-btn-prev"
          title={title}
          onClick={() => setTabActive(step)}
        >
          <i className="fa fa-arrow-left" />
          {title}
        </span>
      ) : (
        <span
          className="js-btn-next"
          title={title}
          onClick={() => setTabActive(step)}
        >
          {title}
          <i className="fa fa-arrow-right" />
        </span>
      )}
    </>
  );
};

export default Button;

{
}
