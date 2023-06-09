import React from 'react'
import { Route, Switch } from "react-router"

// layouts
import WebLayout from "../layouts/layouts/WebLayout"
import AdminLayout from "../layouts/layouts/AdminLayout"

// web pages
import Homepage from "../pages/homepage/Homepage"
import OurService from "../pages/ourservice/OurService"
import SoftWareTesting from "../pages/softwareTesting/SoftWareTesting"
import ContactUs from "../pages/cotactus/ContactUs"
import Blog from "../pages/Blog/Blog"
import ExcepteurInst from "../pages/Blog/ExcepteurInst"
import OurFamily from "../pages/ourfamily/OurFamily"
import Job from "../pages/Job/Job"
import JobDetail from "../pages/Job/JobDetail"
import OurProject from "../pages/ourproject/OurProject"
import SingleProject from "../pages/ourproject/SingleProject"
import SingleTeam from "../pages/ourfamily/SingleTeam"
import Technology from "../pages/technology/Technology"

// admin pages
import AdminLogin from "../pages/admin/login"
import AdminDashboard from "../pages/admin/dashboard"


function Routes() {
    return (
        <div>
            <Switch>
                {/* Web Pages */}
                <RouteWrapper
                    exact={true}
                    path="/"
                    component={Homepage}
                    layout={WebLayout}
                />
                <RouteWrapper
                    exact={true}
                    path="/ourservice"
                    component={OurService}
                    layout={WebLayout}
                />
                <RouteWrapper
                    exact={true}
                    path="/softwaretesting"
                    component={SoftWareTesting}
                    layout={WebLayout}
                />
                <RouteWrapper
                    exact={true}
                    path="/contactus"
                    component={ContactUs}
                    layout={WebLayout}
                />
                <RouteWrapper
                    exact={true}
                    path="/blog"
                    component={Blog}
                    layout={WebLayout}
                />
                <RouteWrapper
                    exact={true}
                    path="/excepteurinst"
                    component={ExcepteurInst}
                    layout={WebLayout}
                />
                <RouteWrapper
                    exact={true}
                    path="/ourfamily"
                    component={OurFamily}
                    layout={WebLayout}
                />
                <RouteWrapper
                    exact={true}
                    path="/singleteam"
                    component={SingleTeam}
                    layout={WebLayout}
                />
                <RouteWrapper
                    exact={true}
                    path="/job"
                    component={Job}
                    layout={WebLayout}
                />
                {/* <RouteWrapper
                    exact={true}
                    path="/job/:id"
                    component={JobDetail}
                    layout={WebLayout}
                /> */}
                <RouteWrapper
                    exact={true}
                    path="/jobdetail"
                    component={JobDetail}
                    layout={WebLayout}
                />
                <RouteWrapper
                    exact={true}
                    path="/ourproject"
                    component={OurProject}
                    layout={WebLayout}
                />
                <RouteWrapper
                    exact={true}
                    path="/singleproject"
                    component={SingleProject}
                    layout={WebLayout}
                />
                <RouteWrapper
                    exact={true}
                    path="/technology"
                    component={Technology}
                    layout={WebLayout}
                />

                {/* Admin Pages */}
                <RouteWrapper
                    exact={true}
                    path="/admin"
                    component={AdminLogin}
                />
                <RouteWrapper
                    exact={true}
                    path="/admin/dashboard"
                    component={AdminDashboard}
                    layout={AdminLayout}
                />
            </Switch>
        </div>
    )
}

export default Routes


function RouteWrapper({
    component: Component,
    layout: Layout,
    ...rest
}) {
    return (
        <>
            <Route
                {...rest}
                render={props => (
                    <>
                        {Layout ? (
                            <Layout>
                                <Component {...props} />
                            </Layout>
                        ): (
                            <Component {...props} />
                        )}
                     
                    </>
                )}
            />
        </>
    )
}
