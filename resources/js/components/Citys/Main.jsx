import React from 'react'
import { Table,Space  } from 'antd';

const Main = () => {
    const columns = [
        {
          title: 'Заголовок',
          dataIndex: 'title',
        },
        {
          title: 'Дата',
          dataIndex: 'date',
          sorter: {
            compare: (a, b) => a.chinese - b.chinese,
            multiple: 3,
          },
        },
        {
            title: 'Удалить',
            dataIndex: '',
            key: 'x',
            render: () => (
                <Space size="middle">
                  <a>Delete</a>
                  <a>
                    ADD
                  </a>
                </Space>
              ),
        }
      ];
      
      const data = [
        {
          key: '1',
          title: 'Меро 1',
          date: 98,
          math: 60,
          english: 70,
        },
      ];

    return (
        <div>
            <Table columns={columns} dataSource={data} />
        </div>
    )
}
export default Main;
