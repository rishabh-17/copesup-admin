import React from "react";
import { Table } from "antd";

const App = ({ columns, data, onChange }) => (
  <Table columns={columns} dataSource={data} />
);
export default App;
