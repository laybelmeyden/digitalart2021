import React from 'react'
import { Table } from 'antd';


const Main = (props) => {
    return (
        <div>
            <Table columns={props.columns} dataSource={props.data} />
        </div>
    )
}
export default Main;
