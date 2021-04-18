import React from 'react';
import { Link } from 'react-router-dom';
import 'common/style/Home.css';
import HomeMainHead from 'common/component/HomeMainHead';

const HomeMainNavi = () => {
    return (
        <>
            <HomeMainHead />
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">
                            Me
                        </a>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <a href="user/component/login">로그인</a>
                            </li>
                            <li>
                                <a href="/user/component/sign-up">회원가입</a>
                            </li>
                            <li>
                                <a href="#">장바구니</a>
                            </li>
                            <li>
                                <Link to={'#'}>마이샵</Link>
                            </li>
                            <li>
                                <Link to={'#'}>커뮤니티</Link>
                            </li>
                            <li>
                                <Link to={'#'}>상품Q&A</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};
export default HomeMainNavi;
