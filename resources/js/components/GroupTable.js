import React, {useEffect, useState} from 'react';
import {Card} from "antd";

function GroupTable({chartData}) {
    const [manufacturer, setManufacturer] = useState(chartData);
    useEffect(() => {
        setManufacturer(chartData)
        console.log()


    }, [manufacturer]);
    return (
        <Card
            title={'Achieved Sample by Main Manufacturing Activities'}
            headStyle={{
                backgroundColor: "#d45300",
                color: "#ffffff"
            }}
            bodyStyle={{
                borderWidth: "2px",
                borderStyle: 'solid',
                borderColor: "#d45300",
            }}
        >
            <table className="table display product-overview mb-30 table-hover">
                <thead>
                <tr className={'sector-color'}>
                    <th style={{textAlign:'left'}}>Main manufacturing activity</th>
                    <th style={{textAlign:'left'}}>Achieved sample</th>
                </tr>
                </thead>

                <tbody>
                <tr>
                    <td>Manufacture of food products</td>
                    <td>{manufacturer.hasOwnProperty('manufacturing_of_food') ? manufacturer.manufacturing_of_food.length : 0}</td>
                </tr>
                <tr>
                    <td>Manufacture of beverages</td>
                    <td>{manufacturer.hasOwnProperty('manufacturing_of_beverage') ? manufacturer.manufacturing_of_beverage.length : 0}</td>
                </tr>
                <tr>
                    <td>Manufacture of tobacco products</td>
                    <td>{manufacturer.hasOwnProperty('manufacturing_of_tobacco') ? manufacturer.manufacturing_of_tobacco.length : 0}</td>
                </tr>
                <tr>
                    <td>Manufacture of textiles</td>
                    <td>{manufacturer.hasOwnProperty('manufacturing_of_textiles') ? manufacturer.manufacturing_of_textiles.length : 0}</td>
                </tr>
                <tr>
                    <td>Manufacture of wearing apparel</td>
                    <td>{manufacturer.hasOwnProperty('manufacturing_of_apparel') ? manufacturer.manufacturing_of_apparel.length : 0}</td>
                </tr>
                <tr>
                    <td>Manufacture of leather and related products</td>
                    <td>{manufacturer.hasOwnProperty('manufacturing_of_leather') ? manufacturer.manufacturing_of_leather.length : 0}</td>
                </tr>
                <tr>
                    <td>Manufacture of wood and of products of wood and cork, except furniture; manufacture of articles
                        of straw and plaiting materials
                    </td>
                    <td>{manufacturer.hasOwnProperty('manufacturing_of_wood_products') ? manufacturer.manufacturing_of_wood_products.length : 0}</td>
                </tr>
                <tr>
                    <td>Manufacture of paper and paper products</td>
                    <td>{manufacturer.hasOwnProperty('manufacturing_of_paper') ? manufacturer.manufacturing_of_paper.length : 0}</td>
                </tr>

                <tr>
                    <td>Printing and reproduction of recorded media</td>
                    <td>{manufacturer.hasOwnProperty('manufacturing_of_recorded_media') ? manufacturer.manufacturing_of_recorded_media.length : 0}</td>
                </tr>

                <tr>
                    <td>Manufacture of coke and refined petroleum products</td>
                    <td>{manufacturer.hasOwnProperty('manufacturing_of_petroleum') ? manufacturer.manufacturing_of_petroleum.length : 0}</td>
                </tr>

                <tr>
                    <td>Manufacture of chemicals and chemical products</td>
                    <td>{manufacturer.hasOwnProperty('manufacturing_of_chemicals') ? manufacturer.manufacturing_of_chemicals.length : 0}</td>
                </tr>
                <tr>
                    <td>Manufacture of pharmaceuticals, medicinal chemical and botanical products</td>
                    <td>{manufacturer.hasOwnProperty('manufacturing_of_botanical') ? manufacturer.manufacturing_of_botanical.length : 0}</td>
                </tr>
                <tr>
                    <td>Manufacture of rubber and plastics products</td>
                    <td>{manufacturer.hasOwnProperty('manufacturing_of_rubber') ? manufacturer.manufacturing_of_rubber.length : 0}</td>
                </tr>
                <tr>
                    <td>Manufacture of other non-metallic mineral products</td>
                    <td>{manufacturer.hasOwnProperty('manufacturing_of_non_metallic_mineral') ? manufacturer.manufacturing_of_non_metallic_mineral.length : 0}</td>
                </tr>
                <tr>
                    <td>Manufacture of basic metals</td>
                    <td>{manufacturer.hasOwnProperty('manufacturing_of_basic_metals') ? manufacturer.manufacturing_of_basic_metals.length : 0}</td>
                </tr>
                <tr>
                    <td>Manufacture of fabricated metal products, except machinery and equipment</td>
                    <td>{manufacturer.hasOwnProperty('manufacturing_of_fabricated_metal') ? manufacturer.manufacturing_of_fabricated_metal.length : 0}</td>
                </tr>


                <tr>
                    <td>Manufacture of computer, electronic and optical products</td>
                    <td>{manufacturer.hasOwnProperty('manufacturing_of_electronics') ? manufacturer.manufacturing_of_electronics.length : 0}</td>
                </tr>

                <tr>
                    <td>Manufacture of electrical equipment</td>
                    <td>{manufacturer.hasOwnProperty('manufacturing_of_electrical') ? manufacturer.manufacturing_of_electrical.length : 0}</td>
                </tr>
                <tr>
                    <td>Manufacture of machinery and equipment n.e.c.</td>
                    <td>{manufacturer.hasOwnProperty('manufacturing_of_machinery') ? manufacturer.manufacturing_of_machinery.length : 0}</td>
                </tr>
                <tr>
                    <td>Manufacture of motor vehicles, trailers and semi-trailers</td>
                    <td>{manufacturer.hasOwnProperty('manufacturing_of_vehicles') ? manufacturer.manufacturing_of_vehicles.length : 0}</td>
                </tr>
                <tr>
                    <td>Manufacture of other transport equipment</td>
                    <td>{manufacturer.hasOwnProperty('manufacturing_of_transport') ? manufacturer.manufacturing_of_transport.length : 0}</td>
                </tr>
                <tr>
                    <td>Manufacture of furniture</td>
                    <td>{manufacturer.hasOwnProperty('manufacturing_of_furniture') ? manufacturer.manufacturing_of_furniture.length : 0}</td>
                </tr>
                <tr>
                    <td>Other manufacturing</td>
                    <td>{manufacturer.hasOwnProperty('manufacturing_of_Other') ? manufacturer.manufacturing_of_Other.length : 0}</td>
                </tr>
                <tr>
                    <td>Repair and installation of machinery and equipment – except motor vehicles</td>
                    <td>{manufacturer.hasOwnProperty('manufacturing_of_Repair') ? manufacturer.manufacturing_of_Repair.length : 0}</td>
                </tr>

                </tbody>

            </table>
        </Card>
    );
}

export default GroupTable;
