import React, {useRef, useLayoutEffect} from 'react';
import Layout from "../Layout";
import Map from "../../components/Map";
import GroupTable from "../../components/GroupTable";
import {Space} from "antd";
import BarChart from "../../components/BarChart";



const Achieved = ({chartData,Age}) => {

    return (
        <Space
        size={'large'}
        >
            <div className={'row justify-content-center col-12'}>
                <div className={'col-md-6'}>
                    <BarChart
                        chartId={'Manufacturing-Primary-and-secondary-sector'}
                        optionalltext={'Manufacturing Primary and secondary sector'}
                        chartData={chartData}
                    />


                </div>

                <div className={'col-md-6'}>

                    <BarChart
                        chartId={'Achieved-Initial-sample'}
                        optionalltext={'Achieved Initial sample for 2019 and new sample in 2022 '}
                        chartData={chartData}
                    />
                </div>

                    <div className={'col-md-12'} style={{paddingTop: "5%"}}>

                        <BarChart
                            chartId={'Firm-size'}
                            optionalltext={'Achieved Sample by Firm size'}
                            chartData={chartData}
                        />
                </div>

                <div className={'col-md-12'} style={{paddingTop: "5%"}}>

                    <GroupTable chartData={chartData}/>
                </div>


            </div>

        </Space>
    );
};
Achieved.layout = page => <Layout children={page} title="Layout"/>

export default Achieved;
