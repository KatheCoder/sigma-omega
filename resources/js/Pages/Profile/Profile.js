import React, {useState, useEffect} from 'react';
import Layout from "../Layout";
import Achieved from "../Sample/Achieved";
import PieChart from "../../components/PieChart";
import {Card, Rate, Space} from 'antd';
import {FaMale, FaFemale} from 'react-icons/fa';
import BarChart from "../../components/BarChart";
import {AiFillCaretRight} from "react-icons/all";
import {Inertia} from "@inertiajs/inertia";
import GautengMap from "../../components/GautengMap";


function Profile({chartData, newdata,gps}) {
     const [isChartData, setIsChartData] = useState(chartData);

    useEffect(() => {


    }, []);


    return (
        <>

            <Card
                title={'Business registration'}
                headStyle={{
                    backgroundColor:"#d45300",
                    color:"#ffffff"
                }}
                bodyStyle={{
                    borderWidth:"2px",
                    borderStyle:'solid',
                    borderColor:"#d45300",
                }}
            >
                <div className={'row'}>
                    <div className={'col-6'}>

                        <PieChart
                            chartId={'business-registration'}
                            chartData={isChartData}
                            optionalText={'Is this business registered with any organisation'}
                        />
                    </div>

                    <div className={'col-6'}>
                        <BarChart
                            chartId={'registered-with'}
                            optionalltext={'Organisation business registered with '}
                            chartData={newdata}
                        />
                    </div>


                </div>


            </Card>




            <div></div>
            <div className={'row'} style={{paddingTop: "5%"}}>
                <div className="col-md-8">
                        <BarChart
                            chartId={'innovation'}
                            optionalltext={'Types of Innovation'}
                            // province={province}
                            chartData={newdata}
                        />
                </div>
                <div className="col-md-4"  >
                        <BarChart
                            chartId={'contracts'}
                            optionalltext={'Number of Employees with Contract'}
                            // province={province}
                            chartData={isChartData[0]}
                        />

                </div>


            </div>

            <div style={{paddingTop: "5%"}}>
                <Card
                    title={'Firm Profile'}
                    headStyle={{
                        backgroundColor:"#d45300",
                        color:"#ffffff"
                    }}
                    bodyStyle={{
                        borderWidth:"2px",
                        borderStyle:'solid',
                        borderColor:"#d45300",
                    }}
                >
                <BarChart
                    chartId={'customers'}
                    optionalltext={'Who are your customers '}
                    // province={province}
                    chartData={isChartData[0]}
                />
                </Card>
            </div>
            <div style={{paddingTop: "5%"}}>

                <GautengMap gpsdata={gps}/>

            </div>

        </>
    );
}

Profile.layout = page =>
    <Layout children={page} title="Layout"/>

export default Profile;
