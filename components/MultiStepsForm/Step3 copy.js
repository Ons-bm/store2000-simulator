export default function Step3({ }) {
    return (
       <>
       
      <div className="multisteps-form__panel js-active" data-animation="slideHorz">
        <div className="wizard-forms">
          <div className="inner pb-100 clearfix">
            <div className="form-content pera-content">
              <div className="step-inner-content">
                <span className="step-no bottom-line">Step 3</span>
                <div className="step-progress float-right">
                  <span>3 of 5 completed</span>
                  <div className="step-progress-bar">
                    <div className="progress">
                      <div className="progress-bar" style={{width: '40%'}} />
                    </div>
                  </div>
                </div>
                <h2>What kind of services You Need</h2>
                <p>Tation argumentum et usu, dicit viderer evertitur te has. Eu dictas concludaturque usu, facete detracto patrioque an per, lucilius pertinacia eu vel.</p>
                <div className="services-select-option">
                  <ul>
                    <li className="bg-white active"><label>Web Design <input type="radio" id="condition2" name="web_service" defaultValue="Web Design" defaultChecked /></label></li>
                    <li className="bg-white"><label>Web Development <input type="radio" name="web_service" defaultValue="Web Development" /></label></li>
                    <li className="bg-white"><label>Graphics Design <input type="radio" name="web_service" defaultValue="Graphics Design" /></label></li>
                    <li className="bg-white"><label>SEO <input type="radio" name="web_service" defaultValue="SEO" /></label></li>
                  </ul>
                </div>
                <div className="conditional" data-condition="#condition2 && web_service == 'Web Design'">
                  <div className="form-inner-area">
                    <label> <h3>Details</h3></label>
                    <input type="text" name="web_service_detail" />
                  </div>
                </div>
                
                <div className="comment-box">
                  <p><i className="fas fa-comments" /> Write Somthing note</p>
                  <textarea name="full_comments" placeholder="Write here" defaultValue={""} />
                </div>
              </div>
            </div>
          </div>
          {/* ./inner */}
          <div className="actions">
            <ul>
              <li><span className="js-btn-prev" title="BACK"><i className="fa fa-arrow-left" /> BACK </span></li>
              <li><span className="js-btn-next" title="NEXT">NEXT <i className="fa fa-arrow-right" /></span></li>
            </ul>
          </div>
        </div>
      </div>
       </>
    )
}