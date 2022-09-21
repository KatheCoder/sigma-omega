import React from 'react';
import {Card} from "antd";

function GroupTable({chartData}) {
    return (
        <Card
            title={'Achieved Sample by Main Manufacturing Activities'}
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
        <table className="table display product-overview mb-30" >
            <thead>
            <tr className={'sector-color'}>
                <th>Main manufacturing activity</th>
                <th>Achieved sample</th>
            </tr>
            </thead>

            <tbody>
                <tr>
                    <td>Manufacture of food products </td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>Manufacture of beverages </td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>Manufacture of tobacco products </td>
                    <td>2</td>
                </tr>
             <tr>
                    <td>Manufacture of textiles </td>
                    <td>2</td>
                </tr>
             <tr>
                    <td>Manufacture of wearing apparel </td>
                    <td>2</td>
                </tr>
             <tr>
                    <td>Manufacture of leather and related products </td>
                    <td>2</td>
                </tr>
             <tr>
                    <td>Manufacture of wood and of products of wood and cork, except furniture; manufacture of articles of straw and plaiting materials  </td>
                    <td>2</td>
                </tr>
             <tr>
                    <td>Manufacture of paper and paper products</td>
                    <td>2</td>
                </tr>

            </tbody>






        </table>
</Card>
    );
}

export default GroupTable;
