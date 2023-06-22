import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Footer() {
  const [currentYear, setCurrentYear] = useState("");

  useEffect(() => {
    const getYear = async () => {
      const response = await fetch("https://worldtimeapi.org/api/timezone/Etc/UTC");
      const data = await response.json();
      const year = new Date(data.datetime).getFullYear();
      setCurrentYear(year);
    };

    getYear();
  }, []);
  return (
    <div className="container mt-5">
      <footer className="text-center text-lg-start text-muted p-1">
        <section>
          <div className=" text-center text-md-start">
            <hr style={{ color: "#ffffff" }} />
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4 primary_txt">
                  NexusNova
                </h6>
                <p className="secondary_txt">
                  We Creating the Solution for your Business
                </p>
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 d-flex gap-1 flex-column">
                <h6 className="text-uppercase fs-6 mb-4 primary_txt">Service</h6>
                <Link to="/blog" className="secondary_txt">
                  Freelancing
                </Link>
                <br />
                <Link to="/blog" className="secondary_txt">
                  Final Year Projects
                </Link>
                <br />
                <Link to="/blog" className="secondary_txt">
                  Journal and Paper Writing
                </Link>
                <br />
                <Link to="/blog" className="secondary_txt">
                  Event Management
                </Link>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 d-flex gap-1 flex-column">
                <h6 className="text-uppercase fs-6 mb-4 primary_txt">
                  Useful links
                </h6>
                <Link to="/" className="secondary_txt">
                  Features
                </Link>
                <br />
                <Link to="/pricing" className="secondary_txt">
                  Pricing
                </Link>
                <br />
                <Link to="/blog" className="secondary_txt">
                  Blog
                </Link>
                <br />
                <Link to="/aboutus" className="secondary_txt">
                  About Us
                </Link>
                <br />
                <Link to="/contactus" className="secondary_txt">
                  Contact Us
                </Link>
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fs-6 mb-4 primary_txt">Contact</h6>
                <div className="d-flex gap-3 flex-column">
                  <span className="d-flex flex-row gap-2">
                    <span
                      className="bi bi-geo-alt"
                      style={{ color: "#ffffff" }}
                    ></span>
                    <span className="secondary_txt">
                      1/117 A6 1 st street, <br />
                      Ramakrishna Nagar, <br />
                      Kanniyampoondi , Avinashi,
                      <br /> Tirupur - 641663
                    </span>
                  </span>
                  <span className="d-flex flex-row gap-2">
                    <span
                      className="bi bi-envelope"
                      style={{ color: "#ffffff" }}
                    ></span>
                    <a href="dev.nexusnova@gmail.com" className="secondary_txt">
                      dev.nexusnova@gmail.com
                    </a>
                  </span>
                  <span className="d-flex flex-row gap-2">
                    <span
                      className="bi bi-telephone"
                      style={{ color: "#ffffff" }}
                    ></span>
                    <span className="d-flex flex-column">
                      <a href="tel:++ 91 97512-21518" className="secondary_txt">
                        + 91 97512-21518
                      </a>
                      <a href="tel:+ 91 84281-77829" className="secondary_txt">
                        + 91 84281-77829
                      </a>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="text-center p-4 secondary_txt">
          © {currentYear} Copyright :{" "}
          <Link
            className="secondary_txt"
            to="/"
            style={{ textDecoration: "none" }}
          >
            NexusNova.
          </Link>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
