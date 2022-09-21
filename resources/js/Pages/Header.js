import React,{useEffect} from 'react';
 import {Link, usePage} from '@inertiajs/inertia-react'
import logo from '../images/client_1.png'
import logoSig from '../images/logo-sig.png'
import {BsBoxArrowInRight, BsMenuButton,BsUiChecks} from "react-icons/all";


function Header(props) {
    const {url, component} = usePage()

useEffect(()=>{
 },[])
    return (
        <nav className="navbar navbar-shadow bg-white sticky-top ">
            <div className="container-fluid">
                <div className="navbar-header pull-left">
                    <img src={logo} className="img-fluid" width="60" height="5"/>
                </div>


                <div className="col-auto  align-self-end" style={{margin:"1%"}}>
                    {(
                        url === '/Achieved-Sample?province=Limpopo'||
                        url === '/Achieved-Sample?province=Eastern%20Cape' ||
                        url === '/Achieved-Sample?province=Free%20State'||
                        url === '/Achieved-Sample?province=Gauteng'||
                        url === '/Achieved-Sample?province=KwaZulu-Natal'||
                        url === '/Achieved-Sample?province=Mpumalanga'||
                        url === '/Achieved-Sample?province=Northern%20Cape'||
                        url === '/Achieved-Sample?province=North%20West'||
                        url === '/Achieved-Sample?province=Western%20Cape'||
                        url === '/Achieved-Sample?province=All'


                    )&&
                    (
                        <Link href="/Achieved-Sample" className="navbar-brand pull-right navbar-right ant-btn ">
                            <BsUiChecks size={'1em'}/>   overall achieved sample  </Link>
                    )
                    }

                    {(
                        url === '/Achieved-Sample' ||
                        url === '/Firm-Profile' ||
                        url === '/Achieved-Sample?province=Limpopo'||
                        url === '/Achieved-Sample?province=Eastern%20Cape' ||
                        url === '/Achieved-Sample?province=Free%20State'||
                        url === '/Achieved-Sample?province=Gauteng'||
                        url === '/Achieved-Sample?province=KwaZulu-Natal'||
                        url === '/Achieved-Sample?province=Mpumalanga'||
                        url === '/Achieved-Sample?province=Northern%20Cape'||
                        url === '/Achieved-Sample?province=North%20West'||
                        url === '/Achieved-Sample?province=Western%20Cape'||
                        url === '/Achieved-Sample?province=All'||
                        url === '/Firm-Profile?province=Limpopo'||
                        url === '/Firm-Profile?province=Eastern%20Cape' ||
                        url === '/Firm-Profile?province=Free%20State'||
                        url === '/Firm-Profile?province=Gauteng'||
                        url === '/Firm-Profile?province=KwaZulu-Natal'||
                        url === '/Firm-Profile?province=Mpumalanga'||
                        url === '/Firm-Profile?province=Northern%20Cape'||
                        url === '/Firm-Profile?province=North%20West'||
                        url === '/Firm-Profile?province=Western%20Cape'||
                        url === '/Firm-Profile?province=All'
                    ) &&
                    (
                        <Link href="/home" className="navbar-brand pull-right navbar-right ant-btn ">
                           <BsMenuButton size={'1em'}/> main menu </Link>
                    )
                    }


                    <Link href="/logout" className="navbar-brand pull-right navbar-right ant-btn ">
                        <BsBoxArrowInRight size={'1em'}/> logout
                    </Link>
                </div>

            </div>
        </nav>

    );
}

export default Header;
