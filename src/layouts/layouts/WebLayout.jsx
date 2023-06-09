import React from "react"

import "../../assets/web/css/Web.css"
import "../../assets/web/css/WebLayout.css"
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"
import "../../assets/web/css/Responsive.css"

import Footer from "../footer/Footer"
import Header from "../header/Header"

const WebLayout = ({ children, ...props }) => {
	return (
		<div className="">
			<Header />
			<div className="" {...props}>
				{children}
			</div>
			<Footer />
		</div>
	)
}

export default WebLayout
