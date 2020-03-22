import React, { Component } from "react";
import { connect } from "react-redux";
import { mapStateToProps } from "../store";
let loggedIn = localStorage.getItem("user");
const validContactRegex = RegExp(/^\+\d{12}$/);
const validateForm = erros => {
    let valid = true;
    Object.values(erros).forEach(val => val.length > 0 && (valid = false));
    return valid;
};
class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {

            message: "",
            errors: {
                firstname: "",
                lastname: "",
                email: "",
                contact: "",
                password: ""
            }
        };
    }

    handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let errors = this.state.errors;

        switch (name) {
            case "firstname":
                errors.firstname =
                    value.length < 5 ? "First Name must be 5 characters long !!!" : "";
                break;
            case "lastname":
                errors.lastname =
                    value.length < 5 ? "Last Name must be 5 characters long !!!" : "";
                break;
            case "contact":
                errors.contact = validContactRegex.test(value)
                    ? ""
                    : "please enter a valid phone no (+xxxxxxxxxxxx)";
                break;
            case "password":
                errors.password =
                    value.length < 8 ? "password must be 8 characters long !!!" : "";
                break;
            default:
                break;
        }
        this.setState({ errors, [name]: value }, () => {
            console.log(this.state);
        });

        if (this.state.errors[name].length === 0) {
            this.setState({ [name]: value }, () => {
                console.log(this.state);
            });
        }
    };

    handleSubmit = e => {
        e.preventDefault();
        if (validateForm(this.state.errors)) {
            let user = {
                firstname: loggedIn.firstname,
                lastname: this.state.lastname,
                email: this.state.email,
                contact: this.state.contact,
                password: this.state.password
            };
            localStorage.setItem("user", JSON.stringify(user))

            this.props.dispatch({
                type: "UPDATE_USER",
                payload: user
            });
            this.setState({ message: "Updated Successfully" });

        } else {
            this.setState({ message: "Something Bad Happend" });
        }
    };
    componentDidMount() {
        this.props.dispatch({ type: "ADD_USER", payload: JSON.parse(loggedIn) });
    }

    render() {
        const { errors } = this.state;
        return (
            <div>
                {this.props.users.length > 0 ?
                    <div
                        className="container-fluid d-flex justify-content-center align-items-center mt-4"
                        style={{ height: "80vh" }}
                    >
                        <div className="row">
                            <div className="col-md-12 col-sm-12">
                                <h3>Sign Up</h3>
                                <hr />
                                <form class="mt-3" onSubmit={e => this.handleSubmit(e)}>
                                    <div className="container-fluid p-0">
                                        <div className="row">
                                            <div className="col-6">
                                                <div className="form-group">
                                                    <label>First Name</label>
                                                    <input
                                                        name="firstname"
                                                        onChange={e => this.handleChange(e)}
                                                        type="text"
                                                        className="form-control"
                                                        placeholder={`${this.props.users[0].firstname}`}

                                                    />
                                                    {errors.firstname.length > 0 && (
                                                        <small className="text-danger">
                                                            {errors.firstname}
                                                        </small>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="form-group">
                                                    <label>Last Name</label>
                                                    <input
                                                        type="text"
                                                        onChange={e => this.handleChange(e)}
                                                        name="lastname"
                                                        className="form-control"
                                                        placeholder={`${this.props.users[0].lastname}`}

                                                    />
                                                    {errors.lastname.length > 0 && (
                                                        <small className="text-danger">{errors.lastname}</small>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-6">
                                                <div className="form-group">
                                                    <label>Email address</label>
                                                    <input
                                                        onChange={e => this.handleChange(e)}
                                                        type="text"
                                                        name="email"
                                                        className="form-control"
                                                        placeholder={`${this.props.users[0].email}`}
                                                        disabled
                                                    />
                                                    {errors.email.length > 0 && (
                                                        <small className="text-danger">{errors.email}</small>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="form-group">
                                                    <label>Contact</label>
                                                    <input
                                                        type="text"
                                                        name="contact"
                                                        onChange={e => this.handleChange(e)}
                                                        className="form-control"
                                                        placeholder={`${this.props.users[0].contact}`}

                                                    />
                                                    {errors.contact.length > 0 && (
                                                        <small className="text-danger">{errors.contact}</small>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label>New Password</label>
                                        <input
                                            type="password"
                                            name="password"
                                            onChange={e => this.handleChange(e)}
                                            className="form-control"
                                            placeholder="New Password"
                                        />
                                        {errors.password.length > 0 && (
                                            <small className="text-danger">{errors.password}</small>
                                        )}
                                    </div>
                                    <button type="submit" className="btn btn-primary">
                                        Update
              </button>
                                </form>
                                {this.state.message.length > 0 && (
                                    <div className="d-flex mt-3 align-items-center ">
                                        <p className=" text-success mb-1">
                                            <strong>{this.state.message}</strong>
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div> : ""}
            </div>
        );
    }
}

export default connect(mapStateToProps)(Profile);

// localStorage.setItem("user", JSON.stringify(user))
