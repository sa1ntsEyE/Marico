import React from "react";
import logo from "../../Assests/logo.png";
import {Link} from "react-router-dom";
import "./Blog.css"
import Twitter from "../../Assests/Twitter_logo.png"
import YouTube from "../../Assests/YouTube_logo.png"
import WordPress from "../../Assests/Wordpress_logo.png"
import Substack from "../../Assests/Substack_logo.png"
import Medium from "../../Assests/Medium_logo.png"
import Spotify from "../../Assests/Spotify_logo.png"
import Anchor from "../../Assests/Anchor_logo.png"
import ApplePodcasts from "../../Assests/Podcast_logo.png"
import Instagram from "../../Assests/Instagram_logo.png"
import Linkedin from "../../Assests/Linkedin_logo.png"
import Fackbook from "../../Assests/Facebook_logo.png"
import back from "../../Assests/back.png";
import logo2 from "../../Assests/Logo2.png";
import logo3 from "../../Assests/logothird.png";
import {useAuth} from "../../hooks/use-auth";
import {removeUser} from "../../store/slices/userSlice";
import {useDispatch} from "react-redux";
import settings from "../../Assests/settings.png";
import {signOut} from "firebase/auth";
import {auth} from "../../firebase";

function Blog() {
    const dispatch = useDispatch()
    const {isAuth, token, photo, name, nickname, username} = useAuth();

    const logOut = () => {
        signOut(auth).then(() => {
            dispatch(removeUser())
        }).catch((error) => {
            // An error happened.
        });
    }

    return (
        <div className="wrapper">
            <header>
                <div className="headers _container">
                    <div className="header__logo">
                        <Link to="/" style={{color: "white",
                            display: "flex",
                            alignItems: "center",
                        }}>
                            <img src={logo} alt=""/>
                            Marico
                        </Link>
                    </div>
                    <div className="header__nav__menu menu">
                        <nav id="menu" className="menu__body">
                            <ul className="menu__list">
                                <li><Link to="/About" style={{
                                    fontFamily: 'Poppins',
                                    fontWeight: 500,
                                    fontSize: 20,
                                    color: '#707070',
                                }}>
                                    About
                                </Link></li>
                                <li><Link to="/Pricing" style={{
                                    fontFamily: 'Poppins',
                                    fontWeight: 500,
                                    fontSize: 20,
                                    color: '#3C82F4',
                                }}>
                                    Pricing
                                </Link></li>
                                <li>
                                    <Link to="/Blog" style={{
                                        fontFamily: 'Poppins',
                                        fontWeight: 500,
                                        fontSize: 20,
                                        color: '#707070',
                                    }}>
                                        Blog
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/SettingsUser" style={{
                                        fontFamily: 'Poppins',
                                        fontWeight: 500,
                                        fontSize: 20,
                                        color: '#707070',
                                    }}>
                                        Settings
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="header__button">
                        <div className="header__userInfo__block" >
                            <div className="headers__text">
                                <p>Welcome </p>
                                <p> {name} {nickname} {username}</p>
                            </div>
                            <img style={{
                                width: 60,
                                height: 60,
                                borderRadius: "50%",
                            }} src={photo} alt=""/>
                        </div>
                        <div className="header__LogOut">
                            <Link to="/SignUp"><button id="LogOut" style={{
                                width: 119,
                                height: 55,
                                fontFamily: 'Poppins',
                                fontWeight: 500,
                                fontSize: 20,
                                color: '#FFFFFF',
                                background: '#306EF7',
                                borderRadius: 5,
                            }} onClick={logOut} >Log Out</button>
                            </Link>
                        </div>
                        <Link to="/BurgerMenu" className="icon-menu"><span></span></Link>
                    </div>
                </div>
            </header>
            <section>
                <div className="Blog__Heading__text _container">
                    <div className="heading__title">
                        Content Sources
                    </div>
                    <div className="heading__subtitle">
                        Connect these sources to your Marico homepage.
                    </div>
                </div>
            </section>
            <section>
                <div className="ContentSourceCompany _container">
                    <div className="ContentSource__box__block">
                        <div className="ContentSource__boxInfo__block">
                            <div className="ContentSource__box__logo">
                                <img src={Twitter} alt=""/>
                            </div>
                            <div className="ContentSource__box__socialNetwork">
                                Twitter
                            </div>
                            <div className="ContentSource__box__text">
                                Connect your Twitter feed to
                                your Marico homepage.
                            </div>
                        </div>
                    </div>
                    <div className="ContentSource__box__block">
                        <div className="ContentSource__boxInfo__block">
                            <div className="ContentSource__box__logo">
                                <img src={YouTube} alt=""/>
                            </div>
                            <div className="ContentSource__box__socialNetwork">
                                YouTube
                            </div>
                            <div className="ContentSource__box__text">
                                Connect your YouTube feed to
                                your Marico homepage.
                            </div>
                        </div>
                    </div>
                    <div className="ContentSource__box__block">
                        <div className="ContentSource__boxInfo__block">
                            <div className="ContentSource__box__logo">
                                <img src={WordPress} alt=""/>
                            </div>
                            <div className="ContentSource__box__socialNetwork">
                                WordPress
                            </div>
                            <div className="ContentSource__box__text">
                                Connect your WordPress feed
                                to your Marico homepage.
                            </div>
                        </div>
                    </div>
                    <div className="ContentSource__box__block">
                        <div className="ContentSource__boxInfo__block">
                            <div className="ContentSource__box__logo">
                                <img src={Substack} alt=""/>
                            </div>
                            <div className="ContentSource__box__socialNetwork">
                                Substack
                            </div>
                            <div className="ContentSource__box__text">
                                Connect your Substack feed to
                                your Marico homepage.
                            </div>
                        </div>
                    </div>
                    <div className="ContentSource__box__block">
                        <div className="ContentSource__boxInfo__block">
                            <div className="ContentSource__box__logo">
                                <img src={Medium} alt=""/>
                            </div>
                            <div className="ContentSource__box__socialNetwork">
                                Medium
                            </div>
                            <div className="ContentSource__box__text">
                                Connect your Medium feed to
                                your Marico homepage.
                            </div>
                        </div>
                    </div>
                    <div className="ContentSource__box__block">
                        <div className="ContentSource__box__comingSoon">
                            <input type="submit" value="Coming Soon" style={{
                                width: 145,
                                height: 39,
                                background: "#102142",
                                borderRadius: 10
                            }}/>
                        </div>
                        <div className="ContentSource__boxInfoSpecial__block">
                            <div className="ContentSource__box__logo">
                                <img src={WordPress} alt=""/>
                            </div>
                            <div className="ContentSource__box__socialNetwork">
                                RSS Feeds
                            </div>
                            <div className="ContentSource__box__text">
                                Connect your RSS feed to
                                your Marico homepage.
                            </div>
                        </div>
                    </div>
                    <div className="ContentSource__box__block">
                        <div className="ContentSource__boxInfo__block">
                            <div className="ContentSource__box__logo">
                                <img src={Spotify} alt=""/>
                            </div>
                            <div className="ContentSource__box__socialNetwork">
                                Spotify
                            </div>
                            <div className="ContentSource__box__text">
                                Connect your Spotify feed to
                                your Marico homepage.
                            </div>
                        </div>
                    </div>
                    <div className="ContentSource__box__block">
                        <div className="ContentSource__boxInfo__block">
                            <div className="ContentSource__box__logo">
                                <img src={Anchor} alt=""/>
                            </div>
                            <div className="ContentSource__box__socialNetwork">
                                Anchor
                            </div>
                            <div className="ContentSource__box__text">
                                Connect your Anchor feed to
                                your Marico homepage.
                            </div>
                        </div>
                    </div>
                    <div className="ContentSource__box__block">
                        <div className="ContentSource__boxInfo__block">
                            <div className="ContentSource__box__logo">
                                <img src={ApplePodcasts} alt=""/>
                            </div>
                            <div className="ContentSource__box__socialNetwork">
                                Apple Podcasts
                            </div>
                            <div className="ContentSource__box__text">
                                Connect your Apple Podcast
                                to your Marico homepage.
                            </div>
                        </div>
                    </div>
                    <div className="ContentSource__box__block">
                        <div className="ContentSource__box__comingSoon">
                            <input type="submit" value="Coming Soon" style={{
                                width: 145,
                                height: 39,
                                background: "#102142",
                                borderRadius: 10
                            }}/>
                        </div>
                        <div className="ContentSource__boxInfoSpecial__block">
                            <div className="ContentSource__box__logo">
                                <img src={Instagram} alt=""/>
                            </div>
                            <div className="ContentSource__box__socialNetwork">
                                Instagram
                            </div>
                            <div className="ContentSource__box__text">
                                Connect your Instagram feed
                                to your Marico homepage.
                            </div>
                        </div>
                    </div>
                    <div className="ContentSource__box__block">
                        <div className="ContentSource__box__comingSoon">
                            <input type="submit" value="Coming Soon" style={{
                                width: 145,
                                height: 39,
                                background: "#102142",
                                borderRadius: 10
                            }}/>
                        </div>
                        <div className="ContentSource__boxInfoSpecial__block">
                            <div className="ContentSource__box__logo">
                                <img src={Linkedin} alt=""/>
                            </div>
                            <div className="ContentSource__box__socialNetwork">
                                Linkedin
                            </div>
                            <div className="ContentSource__box__text">
                                Connect your Linkedin feed to
                                your Marico homepage.
                            </div>
                        </div>
                    </div>
                    <div className="ContentSource__box__block">
                        <div className="ContentSource__box__comingSoon">
                            <input type="submit" value="Coming Soon" style={{
                                width: 145,
                                height: 39,
                                background: "#102142",
                                borderRadius: 10
                            }}/>
                        </div>
                        <div className="ContentSource__boxInfoSpecial__block">
                            <div className="ContentSource__box__logo">
                                <img src={Fackbook} alt=""/>
                            </div>
                            <div className="ContentSource__box__socialNetwork">
                                Fackbook
                            </div>
                            <div className="ContentSource__box__text">
                                Connect your Fecebook feed to
                                your Marico homepage.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="Audience">
                    <div className="Audience__title">
                        We've helped over 1,000 creatorsre
                        claim control of their audience.
                    </div>
                    <div className="Audience__img__block">
                        <img className="Audience__img" src={back} alt=""/>
                    </div>
                </div>
            </section>
            <section>
                <div className="GS _container">
                    <div className="GS__logo">
                        <img src={logo2} alt=""/>
                    </div>
                    <div className="GS__title">
                        Get Started Now
                    </div>
                    <div className="GS__subtitle">
                        Setup is easy and takes under 5 minutes.
                    </div>
                    <div className="GS__button__block">
                        <input className="GS__button" type="submit" value="Get Started Now"/>
                    </div>
                    <div className="GS__paragraph">
                        <div className="GetStart__text__block">
                            <div style={{
                                width: 37,
                                height:37,
                                border: '5px solid #043016',
                                borderRadius: '50%',
                                mixBlendMode: 'normal',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginRight: 10

                            }}>
                                <p className="GetStart__dot" style={{
                                    width: 22,
                                    height:22,
                                    background: '#0FC65C',
                                    borderRadius: '50%',
                                }}></p>
                            </div>
                            <p className="GetStart__thousand" style={{
                                fontFamily: 'Poppins',
                                fontStyle: 'normal',
                                fontWeight: 700,
                                fontSize: 38,
                                color: '#FFFFFF',
                                marginRight: 9,
                            }}>1000+</p>
                            <p className="GetStart__text" style={{
                                maxWidth: 567,
                                fontFamily: 'Poppins',
                                fontStyle: 'normal',
                                fontWeight: 400,
                                fontSize: 38,
                                textAlign:"center",
                                color: "#707070",
                            }}>creators have already started</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="footer _container">
                    <div className="footer__logo">
                        <div className="footer__logo__name">
                            <img className="footer__logo__img" src={logo3} alt=""/>
                            Marico
                        </div>
                        <div className="footer__logo__info">
                            info@marico.co
                        </div>
                    </div>
                    <div className="footer__nav">
                        <nav id="menu" className="footer__body">
                            <ul className="footer__list">
                                <li><Link to="/About" style={{
                                    fontFamily: 'Poppins',
                                    fontWeight: 500,
                                    fontSize: 20,
                                    color: '#707070',
                                }}>
                                    About
                                </Link></li>
                                <li><Link to="/Pricing" style={{
                                    fontFamily: 'Poppins',
                                    fontWeight: 500,
                                    fontSize: 20,
                                    color: '#3C82F4',
                                }}>
                                    Pricing
                                </Link></li>
                                <li>
                                    <Link to="/Blog" style={{
                                        fontFamily: 'Poppins',
                                        fontWeight: 500,
                                        fontSize: 20,
                                        color: '#707070',
                                    }}>
                                        Blog
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/SettingsUser" style={{
                                        fontFamily: 'Poppins',
                                        fontWeight: 500,
                                        fontSize: 20,
                                        color: '#707070',
                                    }}>
                                        Settings
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <Link to="/BurgerMenu" className="icon-menu"><span></span></Link>
                </div>
            </section>
        </div>
    );
}

export default Blog;



// <div className="ContentSource__mainBox__block">
//     <div className="ContentSource__secondBox__block _containers2">

//     </div>
// </div>
// <div className="Audience__main__block">
//     <div className="Audience__second__block _container_4">
//         <img src={back} alt=""/>
//         <p>We've helped over 1,000 creatorsre
//             claim control of their audience.</p>
//     </div>
// </div>
// <div className="gets__start__main__block">
//     <div className="gets__start__second__block _container">
//         <div className="gets__start__third__block">
//             <div className="gets__start__logo__block">
//                 <img src={logo2} alt=""/>
//             </div>
//             <div className="gets__start__main__text__block">
//                 <div className="gets__start__second__text__block">
//                     <p className="gets_start_second__text__GSN">Get Started Now</p>
//                     <p className="gets_start_second__text__SIE">Setup is easy and takes under 5 minutes.</p>
//                 </div>
//             </div>
//             <div className="gets__start__btn__block">
//                 <input className="gets__start__submit"  type="submit" value="Get Started Now"/>
//             </div>
//             <div className="gets__start__counter__block">
//                 <div className="gets__start__text__block">
//                     <div className="gets__start__dot__block">
//                         <p className="gets__start__dot"></p>
//                     </div>
//                     <p className="gets__start__thousand">1000+</p>
//                     <p className="gets__start__text">creators have already started</p>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>
// <div className="footer__main__block">
//     <div className="footer__second__block _container">
//         <div className="footer__logo__block">
//             <div className="footer__logo__info">
//                 <div className="footer__logo">
//                     <img src={logo3} alt=""/>
//                 </div>
//                 <div className="footer__logo__name">
//                     <Link to="/" style={{
//                         fontSize: 42,
//                         fontWeight: 800,
//                         color: "white"
//                     }}>
//                         Marico
//                     </Link>
//                 </div>
//             </div>
//             <div className="footer__logo__link__block">
//                 info@marico.co
//             </div>
//         </div>
//         <div className="footer__menu__block">
//             <ul className='footer__controls__ul'>
//                 <li><Link to="/About" style={{
//                     fontFamily: 'Poppins',
//                     fontWeight: 500,
//                     fontSize: 28,
//                     color: '#707070',
//                 }}>
//                     About
//                 </Link></li>
//                 <li>
//                     <Link to="/Pricing" style={{
//                         fontFamily: 'Poppins',
//                         fontWeight: 500,
//                         fontSize: 28,
//                         color: '#3C82F4',
//                     }}>
//                         Pricing
//                     </Link></li>
//                 <li><Link to="/Blog" style={{
//                     fontFamily: 'Poppins',
//                     fontWeight: 500,
//                     fontSize: 28,
//                     color: '#707070',
//                 }}>
//                     Blog
//                 </Link></li>
//                 <li><Link to="/SignUp" style={{
//                     fontFamily: 'Poppins',
//                     fontWeight: 500,
//                     fontSize: 28,
//                     color: '#707070',
//                 }}>
//                     Sign in
//                 </Link></li>
//             </ul>
//         </div>
//     </div>
// </div>