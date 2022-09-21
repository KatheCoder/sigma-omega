import React, {useEffect, useState} from 'react';
import UploadFile from "./UploadFile";
import {List, Tag, Button, Badge} from 'antd';
import {Link, useForm} from '@inertiajs/inertia-react'
import {Inertia} from '@inertiajs/inertia'
import {BiArrowBack} from "react-icons/all";


function Admin({stats, page}) {
    const {data, setData, get, post, progress, processing} = useForm({
        table: ''
    });

    const userClearData = () => {
        post('/clearData', {
            onSuccess: data => {
            }
        })
    }


    useEffect(() => {
        if (data.table) {
            userClearData()
        }
    }, [data])


    return (<div className={'container-fluid'}>

            <div className={'row'}>
                <div className={'col-md-4'}>


                    <List
                        itemLayout="horizontal"
                        dataSource={stats}
                        renderItem={item => (
                            <List.Item>
                                <List.Item.Meta
                                    title={item.title}
                                />
                                <div>{item.status ?
                                    <>
                                        <Badge
                                            overflowCount={item.count}
                                            count={item.count}
                                            style={{backgroundColor: '#52c41a'}}
                                        />

                                        <Tag color="green">Data loaded</Tag>
                                        <Button onClick={() => {
                                            setData('table', item.title)
                                        }
                                        } type="primary" size={'small'}>Clear data</Button>

                                    </>
                                    :
                                    <Tag color="red">Missing data</Tag>

                                }</div>
                            </List.Item>
                        )}
                    />
                </div>

                <div className="col-md-4">
                    <UploadFile/>
                </div>


            </div>
            <div className="col-md-4">
                <Link href={"/home"}>

                    <Button type="primary" icon={<BiArrowBack />} size={'large'}>
                    Results Page
                    </Button>
                </Link>
            </div>

        </div>

    );
}

export default Admin;
