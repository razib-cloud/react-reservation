import { Outlet } from "react-router-dom"
import Header from "./Header"
import SideBar from "./SideBar"
import Footer from "./Footer"


const Layout = () => {
    return (
        <>

            <Header />


            <div className="container-scroller">
                {/* partial:partials/_navbar.html */}
                {/* partial */}
                <div className="container-fluid page-body-wrapper">
                    {/* partial:partials/_sidebar.html */}
                    {/* partial */}
                    <SideBar />
                    <div className="main-panel">
                        <div className="content-wrapper">
                            <Outlet />
                            <Footer />
                        </div>
                        {/* </div> */}
                        {/* content-wrapper ends */}
                        {/* partial:partials/_footer.html */}
                        {/* partial */}
                    </div>
                    {/* main-panel ends */}
                </div>
                {/* page-body-wrapper ends */}
            </div>




        </>
    )
}
export default Layout