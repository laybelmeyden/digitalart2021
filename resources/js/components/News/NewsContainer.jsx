import React from 'react'
import { connect } from 'react-redux';
import Main from './Main';
import { Link } from 'react-router-dom';
import { Space  } from 'antd';

const NewsContainer = (props) => {
    const data = [
        {
          key: '1',
          id: '1',
          title: 'Меро 1',
          date: 98,
          english: 70,
        },
        {
          key: '2',
          id: '2',
          title: 'Меро 2',
          date: 98,
          english: 70,
        },
      ];
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
            title: 'Действия',
            dataIndex: '',
            key: 'x',
            render: (e) => (
                <Space size="middle">
                  <Link to={`/newsEdit/1`}>Редактировать</Link>
                  <Link to="">Удалить</Link>
                </Space>
              ),
        }
      ];
    return (<Main columns={columns} data={data}/>)
}

const mapStateToProps = (state) => {
    return {}
};

export default connect(mapStateToProps, {})(NewsContainer);
