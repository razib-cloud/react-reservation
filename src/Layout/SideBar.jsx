import { useState } from "react";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  const [activeMenu, setActiveMenu] = useState("");

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? "" : menu);
  };

  return (
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
      <div className="user-profile">
        <div className="user-image">
          <img src="images/faces/face28.png" alt="User" />
        </div>
        <div className="user-name">Foodzy</div>
        <div>Love to make food</div>
      </div>

      <ul className="nav">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">
            <i className="icon-box menu-icon" />
            <span className="menu-title">Dashboard</span>
          </NavLink>
        </li>

        {/* Table Reservation */}
<li className={`nav-item ${activeMenu === "table" ? "active" : ""}`}>
  <a
    className="nav-link"
    onClick={() => toggleMenu("table")}
  >
    <i className="icon-disc menu-icon" />
    <span className="menu-title">TABLE RESERVATION</span>
    <i className={`menu-arrow ${activeMenu === "table" ? "rotate" : ""}`} />
  </a>
  <div className={`collapse ${activeMenu === "table" ? "show" : ""}`}>
    <ul className="nav flex-column sub-menu">
      <li className="nav-item">
        <NavLink className="nav-link" to="/createpayment">
          Create Reservation
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/managefee">
          View Reservations
        </NavLink>
      </li>
    </ul>
  </div>
</li>

        {/* Order Management */}
        <li className={`nav-item ${activeMenu === "order" ? "active" : ""}`}>
          <a
            className="nav-link"
            onClick={() => toggleMenu("order")}
          >
            <i className="icon-disc menu-icon" />
            <span className="menu-title">ORDER MANAGEMENT</span>
            <i className={`menu-arrow ${activeMenu === "order" ? "rotate" : ""}`} />
          </a>
          <div className={`collapse ${activeMenu === "order" ? "show" : ""}`}>
            <ul className="nav flex-column sub-menu">
              <li className="nav-item">
                <NavLink className="nav-link" to="/manageproduct">View All Items</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/orderinvoice">Create Order</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/manageorders">View All Orders</NavLink>
              </li>
            </ul>
          </div>
        </li>

        {/* Customer Management */}
        <li className={`nav-item ${activeMenu === "customer" ? "active" : ""}`}>
          <a className="nav-link" onClick={() => toggleMenu("customer")}>
            <i className="icon-disc menu-icon" />
            <span className="menu-title">CUSTOMER MANAGEMENT</span>
            <i className={`menu-arrow ${activeMenu === "customer" ? "rotate" : ""}`} />
          </a>
          <div className={`collapse ${activeMenu === "customer" ? "show" : ""}`}>
            <ul className="nav flex-column sub-menu">
              <li className="nav-item">
                <NavLink className="nav-link" to="/managecustomer">View Customer List</NavLink>
              </li>
            </ul>
          </div>
        </li>

        {/* Inventory Management */}
        <li className={`nav-item ${activeMenu === "inventory" ? "active" : ""}`}>
          <a className="nav-link" onClick={() => toggleMenu("inventory")}>
            <i className="icon-disc menu-icon" />
            <span className="menu-title">INVENTORY MANAGEMENT</span>
            <i className={`menu-arrow ${activeMenu === "inventory" ? "rotate" : ""}`} />
          </a>
          <div className={`collapse ${activeMenu === "inventory" ? "show" : ""}`}>
            <ul className="nav flex-column sub-menu">
              <li className="nav-item">
                <NavLink className="nav-link" to="/managestock">View All Inventory</NavLink>
              </li>
            </ul>
          </div>
        </li>

        {/* Kitchen Management */}
        <li className={`nav-item ${activeMenu === "kitchen" ? "active" : ""}`}>
          <a className="nav-link" onClick={() => toggleMenu("kitchen")}>
            <i className="icon-disc menu-icon" />
            <span className="menu-title">KITCHEN MANAGEMENT</span>
            <i className={`menu-arrow ${activeMenu === "kitchen" ? "rotate" : ""}`} />
          </a>
          <div className={`collapse ${activeMenu === "kitchen" ? "show" : ""}`}>
            <ul className="nav flex-column sub-menu">
              <li className="nav-item">
                <NavLink className="nav-link" to="/addproduct">Add New Product</NavLink>
              </li>
            </ul>
          </div>
        </li>

        {/* Reports */}
        <li className="nav-item">
          <NavLink className="nav-link" to="/reports">
            <i className="icon-box menu-icon" />
            <span className="menu-title">REPORTS</span>
          </NavLink>
        </li>

        {/* Logout */}
        <li className="nav-item">
          <NavLink className="nav-link" to="/logout">
            <i className="icon-box menu-icon" />
            <span className="menu-title">LOGOUT</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default SideBar;
