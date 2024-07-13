import React, { useState } from "react";
import {
  MenuOutlined,
  DeleteOutlined,
  EditOutlined,
  StopOutlined,
} from "@ant-design/icons";
import { FloatButton, Switch, Tooltip } from "antd";
import { useNavigate, Link } from "react-router-dom";
const App = ({ type, handleDelete, handleDisable }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const onChange = (checked) => {
    setOpen(checked);
  };
  return (
    <>
      <FloatButton.Group
        open={open}
        trigger="click"
        onClick={() => setOpen(!open)}
        style={{
          right: 24,
        }}
        icon={<MenuOutlined />}
      >
        <FloatButton
          icon={
            <Link to={`/${type}/edit/1`}>
              <EditOutlined />
            </Link>
          }
        />
        <FloatButton icon={<DeleteOutlined onCkick={handleDelete} />} />
        <FloatButton icon={<StopOutlined onCkick={handleDisable} />} />
      </FloatButton.Group>
    </>
  );
};
export default App;