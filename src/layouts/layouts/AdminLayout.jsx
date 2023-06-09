import React from "react"
import "../../assets/admin/css/Admin.css"

const AdminLayout = ({ children }) => {
	return (
		<div className="admin-root">
			<div className="sidebar">
				Sidebar
			</div>
			<div className="rest">
				{children}
			</div>
		</div>
	)
}

export default AdminLayout
