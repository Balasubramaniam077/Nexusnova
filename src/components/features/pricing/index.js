import { useNavigate } from "react-router-dom";
import styles from "./pricing.module.css"

function Pricing() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <p className={`fs-1 primary_txt fade-in ${styles.justify_txt} `}>
        <strong>Simple, transparent pricing</strong>
      </p>
      <p className={`secondary_txt fs-5 fade-in ${styles.justify_txt}`}>
        Get the Open PRO plan that fits your needs at a special introductory
        price.
      </p>

      <div className={`fade-in mt-5 ${styles.project_pricing}`}>
        <p className="fs-2 primary_txt">
          <strong>Project Pricing</strong>
        </p>
        <p className="secondary_txt fs-5 text-left fade-in">
          Important Note: Project Price is differ for the Different Domain and Technology.
        </p>

        <div className="row">
          <div className="col-lg-4 mt-4">
            <div className={`${styles.card} card mb-4 box-shadow ${styles.cust_card}`}>
              <div className="card-body mt-auto">
                <p className={`my-0 fs-2 pb-3 ${styles.card_title_text}`}>Basic Plan</p>
                <h1 className="card-title pricing-card-title">
                  <span className="secondary_txt fs-1">₹</span>{" "}
                  <strong>
                    <span className="primary_txt fs-1">3500</span>
                  </strong>
                  <span className="secondary_txt fs-6">/ Project</span>
                  <p className="secondary_txt fs-6 my-3">
                    Get started on your project with access to templates and
                    expert guidance.
                  </p>
                </h1>
                <hr />
                <p className="primary_txt fs-5">Features include:</p>
                <ul className={` mt-3 mb-4 secondary_txt ${styles.list_unstyled}`}>
                  <li className="my-2">
                    Project Code and Requirements Document
                  </li>
                  <li className="my-2">Email support</li>
                  <li className="my-2">
                    PPT includes all the details of the project
                  </li>
                  <li className="my-2">Help center access</li>
                </ul>
                <div className={`mt-auto ${styles.card_btn_border}`}>
                  <button
                    onClick={() => {
                      navigate("/contactus");
                    }}
                    className={styles.card_btn}
                  >
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mt-4 ">
            <div className={`${styles.card} card mb-4 box-shadow ${styles.cust_card}`}>
              <div className="card-body">
                <p className={`my-0 fs-2 pb-3 ${styles.card_title_text}`}>Premium Plan</p>
                <h1 className="card-title pricing-card-title">
                  <span className="secondary_txt fs-1">₹</span>{" "}
                  <strong>
                    <span className="primary_txt fs-1">4200</span>
                  </strong>
                  <span className="secondary_txt fs-6">/ Project</span>
                  <p className="secondary_txt fs-6 my-3">
                    Streamline your project with expert guidance and editing
                    services.
                  </p>
                </h1>
                <hr />
                <p className="primary_txt fs-5">Features include:</p>
                <ul className={` mt-3 mb-4 secondary_txt ${styles.list_unstyled}`}>
                  <li className="my-2">
                    Project Code and Requirements Document
                  </li>
                  <li className="my-2">
                    Project Cusmization with includes PPT
                  </li>
                  <li className="my-2">Documentation with Demo Section</li>
                  <li className="my-2">Phone and email support</li>
                  <li className="my-2">Help center access</li>
                </ul>
                <div className={`mt-4 ${styles.card_btn_border}`}>
                  <button
                    onClick={() => {
                      navigate("/contactus");
                    }}
                    className={styles.card_btn}
                  >
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mt-4">
            <div className={`${styles.card} card mb-4 box-shadow ${styles.cust_card}`}>
              <div className="card-body">
                <p className={`my-0 fs-2 pb-3 ${styles.card_title_text}`}>Pro Plan</p>
                <h1 className="card-title pricing-card-title">
                  <span className="secondary_txt fs-1">₹</span>{" "}
                  <strong>
                    <span className="primary_txt fs-1">5000</span>
                  </strong>
                  <span className="secondary_txt fs-6">/ Project</span>
                  <p className="secondary_txt fs-6 my-3">
                    Take your project to the next level with personalized
                    support and management services.
                  </p>
                </h1>
                <hr />
                <p className="primary_txt fs-5">Features include:</p>
                <ul className={` mt-3 mb-4 secondary_txt ${styles.list_unstyled}`}>
                  <li className="my-2">
                    Project Code, Documentation and  PPT with Demo Section
                  </li>
                  <li className="my-2">
                    Installation Setup Provided by the Remote with an Explanation
                  </li>
                  <li className="my-2">Dedicated project Team</li>
                  <li className="my-2">24/7 phone and email support</li>
                  <li className="my-2">Help center access</li>
                </ul>
                <div className={`mt-4 ${styles.card_btn_border}`}>
                  <button
                    onClick={() => {
                      navigate("/contactus");
                    }}
                    className={styles.card_btn}
                  >
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="paper_pricing py-5 fade-in">
        <p className="fs-2 primary_txt">
          <strong>Conference Paper Writing Service</strong>
        </p>
        <p className="secondary_txt fs-5 text-left fade-in">
          Important Note: Paper Price is differ for the Different Domain and Technology.
        </p>
        <div className="row">
          <div className="col-lg-4 mt-4">
            <div className={`${styles.card} card mb-4 box-shadow ${styles.cust_card}`}>
              <div className="card-body mt-auto">
                <p className={`my-0 fs-2 pb-3 ${styles.card_title_text}`}>Undergraduate (UG)</p>
                <h1 className="card-title pricing-card-title">
                  <span className="secondary_txt fs-1">₹</span>{" "}
                  <strong>
                    <span className="primary_txt fs-1">3000</span>
                  </strong>
                  <span className="secondary_txt fs-6">/ paper</span>
                  <p className="secondary_txt fs-6 my-3">
                    Get professional editing for your conference paper to ensure
                    it's polished and plag-free.
                  </p>
                </h1>
                <hr />
                <p className="primary_txt fs-5">Features include:</p>
                <ul className={` mt-3 mb-4 secondary_txt ${styles.list_unstyled}`}>
                  <li className="my-2">
                    Mansrcipt with the Two Version of the Paper
                  </li>
                  <li className="my-2">Index by the True Reseach on the Topic </li>
                  <li className="my-2">
                    Email support
                  </li>
                  <li className="my-2">Help center access</li>
                </ul>
                <div className={`mt-auto ${styles.card_btn_border}`}>
                  <button
                    onClick={() => {
                      navigate("/contactus");
                    }}
                    className={styles.card_btn}
                  >
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mt-4">
            <div className={`${styles.card} card mb-4 box-shadow ${styles.cust_card}`}>
              <div className="card-body">
                <p className={`my-0 fs-2 pb-3 ${styles.card_title_text}`}>Postgraduate (PG)</p>
                <h1 className="card-title pricing-card-title">
                  <span className="secondary_txt fs-1">₹</span>{" "}
                  <strong>
                    <span className="primary_txt fs-1">4500</span>
                  </strong>
                  <span className="secondary_txt fs-6">/ paper</span>
                  <p className="secondary_txt fs-6 my-3">
                    Elevate your conference paper with expert editing for
                    maximum impact.
                  </p>
                </h1>
                <hr />
                <p className="primary_txt fs-5">Features include:</p>
                <ul className={` mt-3 mb-4 secondary_txt ${styles.list_unstyled}`}>
                  <li className="my-2">
                    Mansrcipt with the Three Version of the Paper
                  </li>
                  <li className="my-2">
                    Improving the Quality of the Paper After the Review with the PPT
                  </li>
                  <li className="my-2">Conference Identification and End to End support</li>
                  <li className="my-2">Phone and email support</li>
                  <li className="my-2">Help center access</li>
                </ul>
                <div className={`mt-4 ${styles.card_btn_border}`}>
                  <button
                    onClick={() => {
                      navigate("/contactus");
                    }}
                    className={styles.card_btn}
                  >
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mt-4">
            <div className={`${styles.card} card mb-4 box-shadow ${styles.cust_card}`}>
              <div className="card-body">
                <p className={`my-0 fs-2 pb-3 ${styles.card_title_text}`}>Research Scholars(R&D)</p>
                <h1 className="card-title pricing-card-title">
                  <span className="secondary_txt fs-1">₹</span>{" "}
                  <strong>
                    <span className="primary_txt fs-1">10000</span>
                  </strong>
                  <span className="secondary_txt fs-6">/ paper</span>
                  <p className="secondary_txt fs-6 my-3">
                    Take your Reseach Work with the Best Level to showcase the Result with the Best Quality
                  </p>
                </h1>
                <hr />
                <p className="primary_txt fs-5">Features include:</p>
                <ul className={` mt-3 mb-4 secondary_txt ${styles.list_unstyled}`}>
                  <li className="my-2">
                    Mansrcipt with the Five Version of the Paper or journal with the development of the Reseach implamentation
                  </li>
                  <li className="my-2">
                    Suitable for high-stakes or high-visibility papers
                  </li>
                  <li className="my-2">Dedicated editor and project Team</li>
                  <li className="my-2">24/7 phone and email support</li>
                  <li className="my-2">With Project</li>
                  <li className="my-2">Help center access</li>
                </ul>
                <div className={`mt-4 ${styles.card_btn_border}`}>
                  <button
                    onClick={() => {
                      navigate("/contactus");
                    }}
                    className={styles.card_btn}
                  >
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
