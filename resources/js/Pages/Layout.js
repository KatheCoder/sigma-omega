import React, {useEffect} from 'react';
import {Link, usePage} from '@inertiajs/inertia-react'
import Header from "./Header";
import logoSig from "../images/logo-sig.png";

function Layout({children}) {
    return (
        <>
            <Header/>

            <nav className="navbar">
                <div className="container-fluid">

                    <div className="navbar-header">
                        <div className="navbar-header"></div>


                    </div>


                </div>
            </nav>

                <div className={'container-fluid pageFill '}>{children}</div>
            <footer className={'mt-auto'}>
                <img src={logoSig} className="img-fluid" width="150" height="5"/>

            </footer>

        </>
    );
}

export default Layout;
