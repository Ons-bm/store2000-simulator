const Button = ({ title, step, setTabActive }) => {
  return (
    <>
      {title == "Suivant" ? (
        <span
          className="js-btn-next"
          title="Suivant"
          onClick={() => setTabActive(step)}
        >
          {title}
          <i className="fa fa-arrow-right" />
        </span>
      ) : (
        <span
          className="js-btn-prev"
          title="Précedent"
          onClick={() => setTabActive(step)}
        >
          <i className="fa fa-arrow-left" />
          {title}
        </span>
      )}
    </>
  );
};

export default Button;

{
}
