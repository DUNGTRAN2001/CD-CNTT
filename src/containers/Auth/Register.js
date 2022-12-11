import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
// import * as actions from "../store/actions";
// dùng cho redux
import * as actions from "../../store/actions";
import { withRouter } from "react-router";
import { toast } from "react-toastify";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      passWord: "",
      email: "",
      gender: "1",
      errMessage: "",
      confirmPassword: "",
    };
  }
  checkSimilarPassword = () => {
    let isValidPassWord = true;
    if (this.state.passWord === this.state.confirmPassword) {
      return isValidPassWord;
    } else {
      toast.error("Password and confirm password are incorrect");
      return (isValidPassWord = false);
    }
  };
  //   checkValidateInput = () => {
  //     let isValid = true;
  //     let arrCheck = [
  //       "userName",
  //       "passWord",
  //       "email",
  //       "gender",
  //       "confirmPassword",
  //     ];
  //     for (let i = 0; i < arrCheck.length; i++) {
  //       if (!this.state.arrCheck[i]) {
  //         isValid = false;
  //         toast.warn("This input is required: " + arrCheck[i]);
  //         break;
  //       }
  //     }
  //   };

  handleOnchangeInput = (event, id) => {
    let copyState = { ...this.state };
    copyState[id] = event.target.value;
    this.setState({
      ...copyState,
    });
  };
  check;
  handleRegister = async () => {
    let checkPassword = this.checkSimilarPassword();

    if (checkPassword) {
      this.props.registerRedux({
        username: this.state.userName,
        email: this.state.email,
        password: this.state.passWord,
        gender: +this.state.gender,
      });
      if (this.props.history) {
        this.props.history.push("/login");
      }
    } else {
      this.setState({
        userName: "",
        passWord: "",
        email: "",
        gender: "1",
        confirmPassword: "",
      });
    }
  };
  handleRedirectLogin = () => {
    if (this.props.history) {
      this.props.history.push("/login");
    }
  };
  render() {
    let { userName, passWord, email, gender, confirmPassword } = this.state;
    return (
      <>
        <section className="vh-100">
          <div className="container-fluid h-custom">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-md-9 col-lg-6 col-xl-5">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                  className="img-fluid"
                  alt="Sample image"
                />
              </div>
              <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                <form>
                  <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                    <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                    <button
                      type="button"
                      className="btn btn-primary btn-floating mx-1 item"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </button>

                    <button
                      type="button"
                      className="btn btn-primary btn-floating mx-1 item"
                    >
                      <i className="fab fa-twitter"></i>
                    </button>

                    <button
                      type="button"
                      className="btn btn-primary btn-floating mx-1 item"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </button>
                  </div>

                  <div className="divider d-flex align-items-center my-4 ">
                    <p className="text-center fw-bold mx-3 mb-0">Or</p>
                  </div>

                  <div className="form-outline mb-4">
                    <label className="form-label" for="form3Example3">
                      UserName
                    </label>
                    <input
                      type="email"
                      id="form3Example3"
                      className="form-control form-control-lg"
                      placeholder="Enter a valid UserName"
                      value={userName}
                      onChange={(event) =>
                        this.handleOnchangeInput(event, "userName")
                      }
                    />
                  </div>
                  <div className="form-outline mb-4 ">
                    <label className="form-label" for="form3Example3">
                      Email
                    </label>
                    <input
                      type="email"
                      id="form3Example3"
                      className="form-control form-control-lg"
                      placeholder="Enter a valid Email"
                      value={email}
                      onChange={(event) =>
                        this.handleOnchangeInput(event, "email")
                      }
                    />
                  </div>

                  <div className="form-outline mb-3">
                    <label className="form-label" for="form3Example4">
                      Password
                    </label>
                    <input
                      type="password"
                      id="form3Example4"
                      className="form-control form-control-lg"
                      value={passWord}
                      placeholder="Enter password"
                      onChange={(event) =>
                        this.handleOnchangeInput(event, "passWord")
                      }
                    />
                  </div>
                  <div className="form-outline mb-3">
                    <label className="form-label" for="form3Example4">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      id="form3Example4"
                      className="form-control form-control-lg"
                      value={confirmPassword}
                      placeholder="Enter password"
                      onChange={(event) =>
                        this.handleOnchangeInput(event, "confirmPassword")
                      }
                    />
                  </div>
                  <div className="form-outline mb-3">
                    <label className="form-label" for="form3Example4">
                      Gender
                    </label>
                    <select
                      id="form3Example4"
                      name="gender"
                      className="form-control form-control-lg"
                      value={gender}
                      onChange={(event) =>
                        this.handleOnchangeInput(event, "gender")
                      }
                    >
                      <option value="1">Male</option>
                      <option value="0">FeMale</option>
                    </select>
                  </div>
                  <div className="text-center text-lg-start mt-4 pt-2 ">
                    <div
                      className="btn btn-primary btn-lg px-5"
                      onClick={() => this.handleRegister()}
                    >
                      Register
                    </div>
                    <div className="small fw-bold mt-2 pt-1 mb-0">
                      Do you already have an account?
                      <span
                        className="link-danger"
                        onClick={() => this.handleRedirectLogin()}
                      >
                        Login
                      </span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    registerRedux: (data) => dispatch(actions.registerService(data)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Register)
);
