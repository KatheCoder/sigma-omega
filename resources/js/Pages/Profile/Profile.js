import React, {useState} from 'react';
import Layout from "../Layout";
import PieChart from "../../components/PieChart";
import BarChart from "../../components/BarChart";
import GautengMap from "../../components/GautengMap";


function Profile({chartData, newdata,gps}) {
     const [isChartData, setIsChartData] = useState(chartData);

    return (
        <>
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

                <BarChart
                    chartId={'customers'}
                    optionalltext={'Who are your customers '}
                    // province={province}
                    chartData={isChartData[0]}
                />

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
