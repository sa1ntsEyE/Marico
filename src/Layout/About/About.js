import React from "react";
import {Link} from "react-router-dom";
import logo from "../../Assests/logo.png";
import logoAbout from "../../Assests/logoabout.png";
import line from "../../Assests/line.png";
import people1 from "../../Assests/people.png";
import people2 from "../../Assests/people2.png";
import people3 from "../../Assests/people3.png";
import "./About.css"
import logo2 from "../../Assests/Logo2.png";
import logo3 from "../../Assests/logothird.png";
import {useAuth} from "../../hooks/use-auth";
import {removeUser} from "../../store/slices/userSlice";
import {useDispatch} from "react-redux";
import settings from "../../Assests/settings.png";
import mark2 from "../../Assests/mark2.png";
import {signOut} from "firebase/auth";
import {auth} from "../../firebase";

function About() {
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
                <div className="Company__logo _container">
                    <img style={{
                        width: 76.42,
                        height: 71.32,
                     }} src={logoAbout} alt="logo"/>
                    Marico
                </div>
            </section>
            <section>
                <div className="Our__mission _container">
                    <div className="Our__mission__title">
                        OUR MISSION
                    </div>
                    <div className="Our__mission__subtitle">
                        We exist to help creators
                        own their audience.
                    </div>
                    <div className="Our__mission__text">
                        We believe that social platforms are taking advantage of creators.
                        We want to change that and help creators fight back.
                    </div>
                </div>
            </section>
            <section>
                <div className="About__us _container">
                    <div className="About__us__text__block">
                        <div className="Our__mission__info__text--1">
                            <p>Building a career on social platforms is like building a home on someone else's
                                land. While social platforms are great for discovering and reaching your audience,
                                your goal as a creator should be to convert your followers into email or text
                                message subscribers. Why? Look no further than TikTok. Almost overnight,
                                millions of creative people almost lost their careers.
                            </p>
                        </div>
                        <div className="Our__mission__info__text--2">
                            <p>If a platform removes your account, or their algorithm for distribution no longer
                                favours you, are you prepared?
                            </p>
                        </div>
                        <div className="Our__mission__info__text--3">
                            <p>If you want to build a career as a creator, your focus should be on building durable
                                distribution channels. Without distribution, you have no business. So how can you
                                build an audience that you actually own? With emails and phone numbers. These
                                distribution channels are direct. Instead of going through some algorithm, when
                                you share over email and text message, you know that your audience will see your
                                content. Even better is the fact that you own these lists. Instagram removes your
                                acount, you're ok. YouTube changes their algorithm, you're ok. You own your
                                audience.
                            </p>
                        </div>
                        <div className="Our__mission__info__text--4">
                            <p> We built Marico to make this process easy, fast, and effective. The traditional
                                solution to this problem involves spending days building a website or hiring
                                someone expensive to do it for you. But those days are gone. With Marico, you
                                get a portfolio that is always up-to-date and converts visitors into email or text
                                message subscribers. The best thing? It takes under 5 minutes to setup, and it
                                automatically updates whenever you post new content anywhere online. We
                                believe the best tools are the ones you don't even notice. Marico helps you build
                                your own audience, without any hassle or time commitment. All you have to do is
                                share your portfolio link with your audience, and we'll handle the rest.
                            </p>
                        </div>
                        <div className="Our__mission__info__text--5">
                            <p>
                                You can also create posts from within Marico and share them in just a few clicks
                                to your portfolio, and to your email and text message subscribers. Since all of your
                                content is already in Marico, creating content takes minutes, not hours.
                            </p>
                        </div>
                        <div className="Our__mission__info__text--6">
                            <p>
                                For too long, social platforms have taken advantage of creators. Fight back and
                                build an audience that you own.
                            </p>
                        </div>
                        <div className="Our__mission__info__text--7">
                            <p>- The Team Marico (Olivia, William, and Noah)</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="Team _container">
                    <div className="Team__Heading__text">
                        <div className="Team__Heading__title">
                            OUR TEAM
                        </div>
                        <div className="Team__Heading__subtitle">
                            We love creators
                        </div>
                    </div>
                    <div className="Team__info__block">
                        <div className="Team__info__people__block">
                            <div className="Team__img__people__block">
                                <img src={people1} alt=""/>
                            </div>
                            <div className="Team__name__people__block">
                                Jacob Mark
                            </div>
                            <div className="Team__position__people__block">
                                CEO & Design
                            </div>
                            <div className="Team__twitter__people__block">
                                Twitter
                                <img src={mark2} alt=""/>
                            </div>
                        </div>
                        <div className="Team__info__people__block">
                            <div className="Team__img__people__block">
                                <img src={people2} alt=""/>
                            </div>
                            <div className="Team__name__people__block">
                                Daniel
                            </div>
                            <div className="Team__position__people__block">
                                CTO & Development
                            </div>
                            <div className="Team__twitter__people__block">
                                Twitter
                                <img src={mark2} alt="" style={{
                                    cursor: "pointer"
                                }}/>
                            </div>
                        </div>
                        <div className="Team__info__people__block">
                            <div className="Team__img__people__block">
                                <img src={people3} alt="" style={{
                                    cursor: "pointer"
                                }}/>
                            </div>
                            <div className="Team__name__people__block">
                                Ryan Trump
                            </div>
                            <div className="Team__position__people__block">
                                COO & Sales
                            </div>
                            <div className="Team__twitter__people__block">
                                Twitter
                                <img src={mark2} alt="" style={{
                                    cursor: "pointer"
                                }}/>
                            </div>
                        </div>
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

export default About;

// <div className='Blog'>
//     <div className="Our__mission__main__block">
//         <div className="Our__mission__second__block _container">
//             <div className='Our__mission__header__name__block'>
//                 <div className='Our__mission__header__name__logo__block'>
//                     <img style={{
//                         width: 76.42,
//                         height: 71.32,
//
//                     }} src={logoAbout} alt="logo"/>
//                 </div>
//                 <div style={{
//                     width: 224,
//                     height: 93,
//                 }}>
//                     <h1 style={{
//                         width: 224,
//                         height: 93,
//                     }}>
//                         <Link to="/" style={{
//                             fontSize: 62,
//                             fontWeight: 800,
//                             color: "white",
//                             width: 224,
//                             height: 93,
//                         }}>
//                             Marico
//                         </Link>
//                     </h1>
//                 </div>
//             </div>
//             <div className="Our__mission__info__block">
//                 <div className="Our__mission__info__title">
//                     OUR MISSION
//                 </div>
//                 <div className="Our__mission__info__subtitle">
//                     We exist to help creators
//                     own their audience.
//                 </div>
//                 <div className="Our__mission__info__paragraph">
//                     We believe that social platforms are taking advantage of creators.
//                     We want to change that and help creators fight back.
//                 </div>
//             </div>
//             <div className="About__us__block">

//                 <div className="Our__mission__info__line">
//                     <img src={line} alt=""/>
//                 </div>
//             </div>
//         </div>
//     </div>
//     <div className="Team__main__block">
//         <div className="Team__second__block _container">
//             <div className="Team__heading__text__block">
//                 <div className="Team__heading__title__block">
//                     OUR TEAM
//                 </div>
//                 <div className="Team__heading__subtitle__block">
//                     We love creators
//                 </div>
//             </div>
//             <div className="Team__info__block">
//                 <div className="Team__info__people__block">
//                     <div className="Team__img__people__block">
//                         <img src={people1} alt=""/>
//                     </div>
//                     <div className="Team__name__people__block">
//                         Jacob Mark
//                     </div>
//                     <div className="Team__position__people__block">
//                         CEO & Design
//                     </div>
//                     <div className="Team__twitter__people__block">
//                         Twitter
//                     </div>
//                 </div>
//                 <div className="Team__info__people__block">
//                     <div className="Team__img__people__block">
//                         <img src={people2} alt=""/>
//                     </div>
//                     <div className="Team__name__people__block">
//                         Daniel
//                     </div>
//                     <div className="Team__position__people__block">
//                         CTO & Development
//                     </div>
//                     <div className="Team__twitter__people__block">
//                         Twitter
//                     </div>
//                 </div>
//                 <div className="Team__info__people__block">
//                     <div className="Team__img__people__block">
//                         <img src={people3} alt=""/>
//                     </div>
//                     <div className="Team__name__people__block">
//                         Ryan Trump
//                     </div>
//                     <div className="Team__position__people__block">
//                         COO & Sales
//                     </div>
//                     <div className="Team__twitter__people__block">
//                         Twitter
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//     <div className="gets__start__main__block">
//         <div className="gets__start__second__block _container">
//             <div className="gets__start__third__block">
//                 <div className="gets__start__logo__block">
//                     <img src={logo2} alt=""/>
//                 </div>
//                 <div className="gets__start__main__text__block">
//                     <div className="gets__start__second__text__block">
//                         <p className="gets_start_second__text__GSN">Get Started Now</p>
//                         <p className="gets_start_second__text__SIE">Setup is easy and takes under 5 minutes.</p>
//                     </div>
//                 </div>
//                 <div className="gets__start__btn__block">
//                     <input className="gets__start__submit"  type="submit" value="Get Started Now"/>
//                 </div>
//                 <div className="gets__start__counter__block">
//                     <div className="gets__start__text__block">
//                         <div className="gets__start__dot__block">
//                             <p className="gets__start__dot"></p>
//                         </div>
//                         <p className="gets__start__thousand">1000+</p>
//                         <p className="gets__start__text">creators have already started</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//     <div className="footer__main__block">
//         <div className="footer__second__block _container">
//             <div className="footer__logo__block">
//                 <div className="footer__logo__info">
//                     <div className="footer__logo">
//                         <img src={logo3} alt=""/>
//                     </div>
//                     <div className="footer__logo__name">
//                         <Link to="/" style={{
//                             fontSize: 42,
//                             fontWeight: 800,
//                             color: "white"
//                         }}>
//                             Marico
//                         </Link>
//                     </div>
//                 </div>
//                 <div className="footer__logo__link__block">
//                     info@marico.co
//                 </div>
//             </div>
//             <div className="footer__menu__block">
//                 <ul className='footer__controls__ul'>
//                     <li><Link to="/About" style={{
//                         fontFamily: 'Poppins',
//                         fontWeight: 500,
//                         fontSize: 28,
//                         color: '#707070',
//                     }}>
//                         About
//                     </Link></li>
//                     <li>
//                         <Link to="/Pricing" style={{
//                             fontFamily: 'Poppins',
//                             fontWeight: 500,
//                             fontSize: 28,
//                             color: '#3C82F4',
//                         }}>
//                             Pricing
//                         </Link></li>
//                     <li><Link to="/Blog" style={{
//                         fontFamily: 'Poppins',
//                         fontWeight: 500,
//                         fontSize: 28,
//                         color: '#707070',
//                     }}>
//                         Blog
//                     </Link></li>
//                     <li><Link to="/SignUp" style={{
//                         fontFamily: 'Poppins',
//                         fontWeight: 500,
//                         fontSize: 28,
//                         color: '#707070',
//                     }}>
//                         Sign in
//                     </Link></li>
//                 </ul>
//             </div>
//         </div>
//     </div>
// </div>