import React, { useState } from "react";
import "./User.css";
import "bootstrap/dist/css/bootstrap.min.css";

function User() {
  // State variables to store form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Form Submitted Successfully");
  };

  return (
    <div className="App">
      {/* Section: Ready to take a free trial */}
      <section className="free-trial py-5 text-center">
        <div className="container">
          <h2>Ready to take a free trial?</h2>
          <p className="mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>

          {/* Form */}
          <div className="signup-form mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <input
                type="email"
                className="form-control mt-3"
                placeholder="Email address"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                className="form-control mt-3"
                placeholder="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <input
                type="password"
                className="form-control mt-3"
                placeholder="Create password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <button type="submit" className="btn btn-primary mt-3">
                Register
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer mt-auto py-4  footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h5>Logo</h5>
              <p>&copy; Photo, Inc. 2019. We love our users!</p>
            </div>
            <div className="col-md-2">
              <h6>Mobile app</h6>
              <ul className="list-unstyled">
                <li><a href="#">Features</a></li>
                <li><a href="#">Live share</a></li>
                <li><a href="#">Video record</a></li>
              </ul>
            </div>
            <div className="col-md-2">
              <h6>Community</h6>
              <ul className="list-unstyled">
                <li><a href="#">Featured artists</a></li>
                <li><a href="#">The Portal</a></li>
                <li><a href="#">Live events</a></li>
              </ul>
            </div>
            <div className="col-md-2">
              <h6>Company</h6>
              <ul className="list-unstyled">
                <li><a href="#">About us</a></li>
                <li><a href="#">Contact us</a></li>
                <li><a href="#">History</a></li>
              </ul>
            </div>
            <div className="col-md-2 d-flex align-items-center justify-content-end">
              <button className="btn btn-outline-primary mr-2">Register</button>
              <button className="btn btn-primary">Log in</button>
            </div>
          </div>

          <div className="social-icons text-center mt-3">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </footer>
      
    </div>
    
  );
}

export default User;
