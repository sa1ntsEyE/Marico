import './ForgotPassword.css'
import Sign from "../../Assests/Sign.png";
import React, {useState} from "react";
import {sendPasswordResetEmail } from "firebase/auth";
import {auth} from "../../firebase";
import {Link} from "react-router-dom";
import logo from "../../Assests/logo.png";


const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const resetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(() => {

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

    return  (
        <div className="wrapper">
            <header>
                <div className="headers__login _container">
                    <div className="header__logo__login">
                        <Link to="/" style={{color: "white",
                            display: "flex",
                            alignItems: "center",
                        }}>
                            <img src={logo} alt=""/>
                            Marico
                        </Link>
                    </div>
                    <div className='header__button__block'>
                        <div>
                            <Link to="/LogIn">
                                <button style={{
                                    fontFamily: 'Poppins',
                                    fontWeight: 500,
                                    fontSize: 20,
                                    color: '#707070',
                                    background: '#000',
                                    marginRight: 24,
                                }}>Login</button>
                            </Link>
                        </div>
                        <div>
                            <Link to="/SignUp">
                                <button style={{
                                    width: 119,
                                    height: 55,
                                    fontFamily: 'Poppins',
                                    fontWeight: 500,
                                    fontSize: 20,
                                    color: '#FFFFFF',
                                    background: '#306EF7',
                                    borderRadius: 5,
                                }}>Sign up</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
            <section>
                <div className="ForgotPassword _container">
                    <div className="ForgotPassword__text">
                        <div className="ForgotPassword__title">
                            Recover lost password
                        </div>
                        <div className="ForgotPassword__subtitle">
                            Please enter the email address of your account
                        </div>
                    </div>
                    <div className="ForgotPassword__input">
                        <div className="Input__emailAdress__block">
                            <input type="email"
                                   className="Input__emailAdressINP"
                                   value={email}
                                   onChange={(e) => setEmail(e.target.value)}
                                   placeholder="Email Address" style={{
                                background: "black",
                                color: "white",
                                marginRight: 7,
                            }}/>
                            <img src={Sign} alt="" style={{
                                width: 30.31,
                                height: 30.31,
                            }}/>
                        </div>
                        <div className="Input__LogIn__block">
                            <button className="Input__LogIn" onClick={() => resetPassword(email)} style={{
                                background: "#326CF9",
                                borderRadius: 15,
                                height: 85,
                                fontFamily: 'Poppins',
                                fontStyle: "normal",
                                fontWeight: 400,
                                fontSize: 26,
                                color: "#FFFFFF",
                                cursor: "pointer",
                            }}>Send recovery email</button>
                        </div>
                    </div>
                </div>
            </section>
            <section>

            </section>
        </div>
    );
}

export default ForgotPassword;