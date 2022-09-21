import React, {useState} from 'react';
import Layout from "../Layout";
import {Inertia} from "@inertiajs/inertia";

import Main from "../Main";
import BarChart from "../../components/BarChart";

function AchievedProvince({filter,province, chartData}) {
    const [isChartData, setIsChartData] = useState(chartData);
    const [isSelectedProvince, setIsSelectedProvince] = useState(province);
    const [isProvince, setIsProvince] = useState(filter);

    const handleProvinceChange = (e) => {
        setIsSelectedProvince(e.target.value)
        Inertia.get('/Achieved-Sample', {province: e.target.value}, {
            preserveState: true,
            onSuccess: (page) => {
                setIsChartData(page.props.chartData);
            },
            // replace: true
        })


    }


    return (
        <>
            <div className="row justify-content-center">

            {/*<form>*/}

            <div className="form-group">
                <label className={'control-label'}>Province</label>
                <select className={'form-control'} value={isSelectedProvince} onChange={handleProvinceChange}>
                    <option  value={'All'}>All</option>
                    {isProvince.map((value, index) => {
                        return <option key={index} value={value.name}>{value.name}</option>
                    })}
                </select>
            </div>


            {/*</form>*/}
        </div>
        <div className={'row'}>
            <div className={'col-md-6'}>
                <BarChart
                    chartId={'sector'}
                    province={province}
                    optionalltext={'Achieved Sample by Sector'}
                    chartData={isChartData}
                />
            </div>
            <div className={'col-md-6'}>
                <BarChart
                    chartId={'firm'}
                    optionalltext={'Achieved Sample by Firm Size'}
                    province={province}
                    chartData={isChartData}

                />
            </div>


        </div>
            </>
    );
}

AchievedProvince.layout = page => <Layout children={page} title="Layout"/>

export default AchievedProvince;
