export default function StepsArea({ tabActive, setTabActive }) {
  return (
    <>
      <div className="steps-area steps-area-fixed">
        <div className="image-holder">
          <img src="assets/img/side-img.jpg" alt="" />
        </div>
        <div className="steps clearfix">
          <ul className="tablist multisteps-form__progress">
            <li
              className={`multisteps-form__progress-btn ${
                tabActive == 0 ? "js-active current" : ""
              }`}
              onClick={() => setTabActive(0)}
            >
              <span>1</span>
            </li>
            <li
              className={`multisteps-form__progress-btn ${
                tabActive == 1 ? "js-active current" : ""
              }`}
              onClick={() => setTabActive(1)}
            >
              <span>2</span>
            </li>
            <li
              className={`multisteps-form__progress-btn ${
                tabActive == 2 ? "js-active current" : ""
              }`}
              onClick={() => setTabActive(2)}
            >
              <span>3</span>
            </li>
            <li
              className={`multisteps-form__progress-btn ${
                tabActive == 3 ? "js-active current" : ""
              }`}
              onClick={() => setTabActive(3)}
            >
              <span>4</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
