import React, { useEffect } from "react";
import { Route, Switch, Redirect, useLocation } from "react-router";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ApiGet } from "../helper/API/ApiData";
import AuthStorage from "../helper/AuthStorage";
import Layout from "../layouts/Layout";
import { changeLoginState } from "../redux/actions/loginAction";
import Homepage from "./homepage/Homepage";
import OurService from "./ourservice/OurService";
import SoftWareTesting from "./softwareTesting/SoftWareTesting";
import ContactUs from "./cotactus/ContactUs";
import Blog from "./Blog/Blog";
import ExcepteurInst from "./Blog/ExcepteurInst";
import OurFamily from "./ourfamily/OurFamily";
import Job from "./Job/Job";
import JobDetail from "./Job/JobDetail";
import OurProject from "./ourproject/OurProject";
import SingleProject from "./ourproject/SingleProject";
import SingleTeam from "./ourfamily/SingleTeam";
import Technology from "./technology/Technology";
import LayoutAdmin from "../layouts/LayoutAdmin";
import AdminDash from "./admin/dashboard/AdminDash";
import LayoutNoAuth from "../layouts/LayoutNoAuth";
import Login from "./admin/noauth/Login";
import Projects from "./admin/project/Projects";
import Signup from "./admin/noauth/Signup";

const Index = () => {
  return (
    <>
      <Switch>
        <RouteWrapper
          exact={true}
          path="/"
          component={Homepage}
          layout={Layout}
          isPrivateRoute={true}
        />
        <RouteWrapper
          exact={true}
          path="/ourservice"
          component={OurService}
          layout={Layout}
          isPrivateRoute={true}
        />
        <RouteWrapper
          exact={true}
          path="/softwaretesting"
          component={SoftWareTesting}
          layout={Layout}
          isPrivateRoute={true}
        />
        <RouteWrapper
          exact={true}
          path="/contactus"
          component={ContactUs}
          layout={Layout}
          isPrivateRoute={true}
        />
        <RouteWrapper
          exact={true}
          path="/blog"
          component={Blog}
          layout={Layout}
          isPrivateRoute={true}
        />
        <RouteWrapper
          exact={true}
          path="/excepteurinst"
          component={ExcepteurInst}
          layout={Layout}
          isPrivateRoute={true}
        />
        <RouteWrapper
          exact={true}
          path="/ourfamily"
          component={OurFamily}
          layout={Layout}
          isPrivateRoute={true}
        />
        <RouteWrapper
          exact={true}
          path="/singleteam"
          component={SingleTeam}
          layout={Layout}
          isPrivateRoute={true}
        />
        <RouteWrapper
          exact={true}
          path="/job"
          component={Job}
          layout={Layout}
          isPrivateRoute={true}
        />
        {/* <RouteWrapper
          exact={true}
          path="/job/:id"
          component={JobDetail}
          layout={Layout}
          isPrivateRoute={true}
        /> */}
        <RouteWrapper
          exact={true}
          path="/jobdetail"
          component={JobDetail}
          layout={Layout}
          isPrivateRoute={true}
        />
        <RouteWrapper
          exact={true}
          path="/ourproject"
          component={OurProject}
          layout={Layout}
          isPrivateRoute={true}
        />
        <RouteWrapper
          exact={true}
          path="/singleproject"
          component={SingleProject}
          layout={Layout}
          isPrivateRoute={true}
        />
        <RouteWrapper
          exact={true}
          path="/technology"
          component={Technology}
          layout={Layout}
          isPrivateRoute={true}
        />

        {/* ADMIN LAYOUT */}
        <RouteWrapperAdmin
          exact={true}
          path="/admin"
          component={AdminDash}
          layout={LayoutAdmin}
          isPrivateRoute={true}
        />
          <RouteWrapperAdmin
          exact={true}
          path="/admin/project"
          component={Projects}
          layout={LayoutAdmin}
          isPrivateRoute={true}
        />
        {/* NO AUTH LAYOUT */}
        <RouteWrapperNoauth
          exact={true}
          path="/login"
          component={Login}      
          layout={LayoutNoAuth}
          isPrivateRoute={true}
        />
          <RouteWrapperNoauth
          exact={true}
          path="/signup"
          component={Signup}
          layout={LayoutNoAuth}
          isPrivateRoute={true}
        />
      </Switch>
    </>
  );
};

export default Index;

interface RouteWrapperProps {
  component: any;
  exact: boolean;
  layout: any;

  path: string;
  isPrivateRoute: boolean;
}

function RouteWrapper({
  component: Component,
  isPrivateRoute,
  layout: Layout,
  ...rest
}: RouteWrapperProps) {
  const history = useHistory();
  const isAuthenticated: boolean = isPrivateRoute
    ? AuthStorage.isUserAuthenticated()
    : true;
  return (
    <>
      <Route
        {...rest}
        render={(props) => (
          <>
            <Layout>
              <Component {...props} />
            </Layout>
          </>
        )}
      />
    </>
  );
}

interface RouteWrapperAdminProps {
  component: any;
  exact: boolean;
  layout: any;

  path: string;
  isPrivateRoute: boolean;
}

function RouteWrapperAdmin({
  component: Component,
  isPrivateRoute,
  layout: LayoutAdmin,
  ...rest
}: RouteWrapperAdminProps) {
  const history = useHistory();
  const isAuthenticated: boolean = isPrivateRoute
    ? AuthStorage.isUserAuthenticated()
    : true;
  return (
    <>
      <Route
        {...rest}
        render={(props) => (
          <>
            <LayoutAdmin>
              <Component {...props} />
            </LayoutAdmin>
          </>
        )}
      />
    </>
  );
}

interface RouteWrapperNoauthProps {
  component: any;
  exact: boolean;
  layout: any;
  path: string;
  isPrivateRoute: boolean;
}

function RouteWrapperNoauth({
  component: Component,
  isPrivateRoute,
  layout: LayoutNoAuth,
  ...rest
}: RouteWrapperNoauthProps) {
  const history = useHistory();
  const isAuthenticated: boolean = isPrivateRoute
    ? AuthStorage.isUserAuthenticated()
    : true;
  return (
    <>
      <Route
        {...rest}
        render={(props) => (
          <>
            <LayoutNoAuth>
              <Component {...props} />
            </LayoutNoAuth>
          </>
        )}
      />
    </>
  );
}