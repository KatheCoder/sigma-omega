import React from 'react';
import Layout from "./Layout";
import {Link} from "@inertiajs/inertia-react";
import {BsBank2, BsFillBarChartFill, BsUiChecks} from "react-icons/all";
import {Avatar, Card, Space} from "antd";
import Meta from "antd/es/card/Meta";
import {usePage} from '@inertiajs/inertia-react'
import GautengMap from "../components/GautengMap";

const Main = () => {
    const {auth} = usePage().props

    return (
        <>

            <div className={'row d-flex justify-content-center centerFlex'}>
               <h3 style={{fontWeight:"600"}}>Click to view results</h3>
            </div>
            <div className={'row d-flex justify-content-center centerFlex'}>
                <Space size={'large'}>

                    <div className="col-4">
                    <Link href="/Achieved-Sample" title="Achieved Sample">
                        <Card
                            headStyle={{
                                borderColor:"#d45300",
                                borderWidth:"6px",
                                borderStyle:"solid",
                            }}
                            hoverable={true}
                            style={{width: 300}}
                            cover={<BsUiChecks size={'8.5em'} style={{
                                padding: '28px',
                                borderColor:"#d45300",
                                borderWidth:"6px",
                                borderStyle:"solid",

                            }}/>}
                        >
                            <Card.Grid style={{
                                width: '100%',
                                textAlign: 'center',
                                color: '#ffffff',
                                background: '#d45300'
                            }}>Achieved Samples
                            </Card.Grid>
                        </Card>
                    </Link>
                    </div>
                    <div className="col-4">

                    <Link href="/Firm-Profile" title="Firm Profile">
                        <Card
                            hoverable={true}
                            style={{width: 300}}
                            cover={<BsFillBarChartFill size={'8.5em'} style={{
                                padding: '28px',
                                borderColor:"#d45300",
                                borderWidth:"6px",
                                borderStyle:"solid",

                            }}/>}
                        >
                            <Card.Grid style={{
                                width: '100%',
                                textAlign: 'center',
                                color: '#ffffff',
                                background: '#d45300'
                            }}>
                                Firm Profile
                            </Card.Grid>
                        </Card>
                    </Link>
                    </div>

                    {auth.user.name === "itayi" || auth.user.name === "developer" && (
                        <div className="col-4">

                        <Link href="/admin" title="admin">
                            <Card
                                hoverable={true}
                                style={{width: 300}}
                                cover={<BsBank2 size={'8.5em'} style={{
                                    padding: '28px',
                                    borderColor:"#d45300",
                                    borderWidth:"6px",
                                    borderStyle:"solid",

                                }}/>}
                            >
                                <Card.Grid style={{
                                    width: '100%',
                                    textAlign: 'center',
                                    color: '#ffffff',
                                    background: '#d45300'
                                }}>
                                    Admin
                                </Card.Grid>
                            </Card>
                        </Link>
                        </div>

                    )}

                </Space>
            </div>
        </>
    );
};
Main.layout = page =>
    <Layout children={page} title="Layout"/>

export default Main;
