import React from 'react';
import { Space, Table } from 'antd';
import type { TableProps } from 'antd';
import eye from '../../assets/eye.svg';
import '../../pages/TablePage/TableApp.css';
interface DataType {
  key: string;
  user: string;
  email: string;
  country: string;
  company: string;
  registration: string;
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'User',
    dataIndex: 'user',
    key: 'user',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Country of residency',
    dataIndex: 'country',
    key: 'country',
  },
  {
    title: 'Company',
    dataIndex: 'company',
    key: 'company',
  },
  {
    title: 'Registrarion',
    dataIndex: 'registration',
    key: 'registration',
  },
  {
    title: 'Action',
    key: 'action',
    render: () => (
      <Space size="middle">
        <img src={eye} alt="" />
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: '1',
    user: 'First Last Name',
    email: 'lorem@gmail.com',
    country: 'Morocco',
    company: 'Company Name',
    registration: 'December 21, 2021',
  },
  {
    key: '2',
    user: 'First Last Name',
    email: 'lorem@gmail.com',
    country: 'Morocco',
    company: 'Company Name',
    registration: 'December 21, 2021',
  },
  {
    key: '3',
    user: 'First Last Name',
    email: 'lorem@gmail.com',
    country: 'Morocco',
    company: 'Company Name',
    registration: 'December 21, 2021',
  },
  {
    key: '4',
    user: 'First Last Name',
    email: 'lorem@gmail.com',
    country: 'Morocco',
    company: 'Company Name',
    registration: 'December 21, 2021',
  },
  {
    key: '5',
    user: 'First Last Name',
    email: 'lorem@gmail.com',
    country: 'Morocco',
    company: 'Company Name',
    registration: 'December 21, 2021',
  },
  {
    key: '6',
    user: 'First Last Name',
    email: 'lorem@gmail.com',
    country: 'Morocco',
    company: 'Company Name',
    registration: 'December 21, 2021',
  },
  {
    key: '7',
    user: 'First Last Name',
    email: 'lorem@gmail.com',
    country: 'Morocco',
    company: 'Company Name',
    registration: 'December 21, 2021',
  },
  {
    key: '8',
    user: 'First Last Name',
    email: 'lorem@gmail.com',
    country: 'Morocco',
    company: 'Company Name',
    registration: 'December 21, 2021',
  },
  {
    key: '9',
    user: 'First Last Name',
    email: 'lorem@gmail.com',
    country: 'Morocco',
    company: 'Company Name',
    registration: 'December 21, 2021',
  },
];

const TableApp: React.FC = () => (
  <Table columns={columns} dataSource={data} className="custom-table" />
);

export default TableApp;
