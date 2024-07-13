import React from "react";
import { Outlet, useRoutes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import {
  OrganizationList,
  CreateOrganization,
  OrganizationDetails,
  EditOrganization,
} from "./pages/Organizations";
import {
  ClientList,
  CreateClient,
  ClientDetails,
  EditClient,
} from "./pages/Clients";
import Mainlayout from "./components/Mainlayout";
function Routes() {
  let element = useRoutes([
    {
      path: "/",
      element: (
        <Mainlayout selectedKey={"1"}>
          <Dashboard />
        </Mainlayout>
      ),
    },

    {
      path: "clients",
      element: (
        <Mainlayout selectedKey={"2"}>
          <Outlet />
        </Mainlayout>
      ),
      children: [
        {
          path: "",
          element: <ClientList />,
        },
        {
          path: "create",
          element: <CreateClient />,
        },
        {
          path: "details/:id",
          element: <ClientDetails />,
        },
        {
          path: "edit/:id",
          element: <EditClient />,
        },
      ],
    },

    {
      path: "organizations",
      element: (
        <Mainlayout selectedKey={"3"}>
          <Outlet />
        </Mainlayout>
      ),
      children: [
        {
          path: "",
          element: <OrganizationList />,
        },
        {
          path: "create",
          element: <CreateOrganization />,
        },
        {
          path: "details/:id",
          element: <OrganizationDetails />,
        },
        {
          path: "edit/:id",
          element: <EditOrganization />,
        },
      ],
    },
  ]);
  return element;
}

export default Routes;
