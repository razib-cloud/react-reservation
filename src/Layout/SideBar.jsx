import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
      <div className="user-profile">
        <div className="user-image">
          <img src="images/faces/face28.png" alt="User" />
        </div>
        <div className="user-name">Foodzy Restaurant</div>
        <div className="user-designation">Love To Make Eat</div>
      </div>

      <ul className="nav">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">
            <i className="icon-box menu-icon" />
            <span className="menu-title">Dashboard</span>
          </NavLink>
        </li>

      
        

        {/* Admission Management */}
        <li className="nav-item">
          <a
            className="nav-link"
            data-toggle="collapse"
            href="#admission-management"
            aria-expanded="false"
            aria-controls="admission-management"
          >
            <i className="icon-disc menu-icon" />
            <span className="menu-title">TABLE RESERVATION</span>
            <i className="menu-arrow" />
          </a>
          <div className="collapse" id="admission-management">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item">
                <NavLink className="nav-link" to="/createpayment" >Create Reservaiton</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/managefee">
                  View Reservations
                </NavLink>
              </li>
            </ul>
          </div>
        </li>



        {/* Class Management */}
        <li className="nav-item">
          <a
            className="nav-link"
            data-toggle="collapse"
            href="#class-management"
            aria-expanded="false"
            aria-controls="class-management"
          >
            <i className="icon-disc menu-icon" />
            <span className="menu-title">ORDER MANAGEMENT</span>
            <i className="menu-arrow" />
          </a>
          <div className="collapse" id="class-management">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item">
              <NavLink className="nav-link" to="/manageproduct">
                  View All Item
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/orderinvoice">
                  Create Order
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/manageorders">
                  View All Orders
                </NavLink>
              </li>
             
             
            </ul>
          </div>
        </li>





      {/* Customer Management */}
        <li className="nav-item">
          <a
            className="nav-link"
            data-toggle="collapse"
            href="#class-management"
            aria-expanded="false"
            aria-controls="class-management"
          >
            <i className="icon-disc menu-icon" />
            <span className="menu-title">CUSTOMER MANAGEMENT</span>
            <i className="menu-arrow" />
          </a>
          <div className="collapse" id="class-management">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item">
              <NavLink className="nav-link" to="/managecustomer">
                  View Customer List
                </NavLink>
              </li>
             
            </ul>
          </div>
        </li>



  {/* Kitchen Management */}
        <li className="nav-item">
          <a
            className="nav-link"
            data-toggle="collapse"
            href="#student-management"
            aria-expanded="false"
            aria-controls="student-management"
          >
            <i className="icon-disc menu-icon" />
            <span className="menu-title">KITCHEN MANAGEMENT</span>
            <i className="menu-arrow" />
          </a>
          <div className="collapse" id="student-management">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item">
                <a className="nav-link" href="#">Add New Product</a>
              </li>
              {/* <li className="nav-item">
                <NavLink className="nav-link" to="/createpayment">
                  View Payment Receipt
                </NavLink>
              </li> */}
            </ul>
          </div>
        </li>


        {/* Static Menu Items */}
        <li className="nav-item">
          <NavLink className="nav-link" to="/settings">
            <i className="icon-box menu-icon" />
            <span className="menu-title">SETTINGS</span>
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/reports">
            <i className="icon-box menu-icon" />
            <span className="menu-title">REPORTS</span>
          </NavLink>
        </li>

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
