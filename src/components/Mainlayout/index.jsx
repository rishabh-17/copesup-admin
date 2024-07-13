import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  PieChartOutlined,
  UserOutlined,
  VideoCameraOutlined,
  BuildOutlined,
  BellOutlined,
} from "@ant-design/icons";
import NotificationDrawer from "../NotificatonDrawer";
import { Button, Layout, Menu, theme } from "antd";
import { useNavigate } from "react-router-dom";
const { Header, Sider, Content } = Layout;
const App = ({ children, selectedKey }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [openNotification, setOpenNotification] = useState(false);

  const navigate = useNavigate();
  const {
    token: { colorBgContainer, borderRadiusLG, motionDurationSlow },
  } = theme.useToken();
  return (
    <Layout className="w-full min-h-screen">
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{
          padding: 0,
          background: colorBgContainer,
        }}
      >
        {!collapsed ? (
          <div className="demo-logo-vertical flex justify-center font-serif text-2xl my-5">
            Copesup
          </div>
        ) : (
          <div className="demo-logo-vertical flex justify-center font-serif text-2xl my-5">
            Cup
          </div>
        )}
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={[selectedKey]}
          selectedKeys={[selectedKey]}
          items={[
            {
              key: "1",
              icon: <PieChartOutlined />,
              label: "Dashboard",
              onClick: () => {
                navigate("/");
              },
            },
            {
              key: "2",
              icon: <UserOutlined />,
              label: "Clients",
              onClick: () => {
                navigate("/clients");
              },
            },
            {
              key: "3",
              icon: <BuildOutlined />,
              label: "Organizations",
              onClick: () => {
                navigate("/organizations");
              },
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
          className="flex justify-between items-center"
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
          <div className="mr-5">
            <BellOutlined
              onClick={() => setOpenNotification(!openNotification)}
            />
          </div>
        </Header>
        <Content
          style={
            selectedKey != "1"
              ? {
                  margin: "24px 16px",
                  padding: 24,
                  minHeight: 280,
                  background: colorBgContainer,
                  borderRadius: borderRadiusLG,
                }
              : {
                  margin: "24px 16px",
                  minHeight: 280,
                  borderRadius: borderRadiusLG,
                }
          }
        >
          {children}
        </Content>
        <NotificationDrawer
          open={openNotification}
          setOpen={setOpenNotification}
        />
      </Layout>
    </Layout>
  );
};
export default App;
