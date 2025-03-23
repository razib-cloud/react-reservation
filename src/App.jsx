import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./../src/App.css";
import ManageCustomer from "./customer/ManageCustomer";
import CreateFee from "./Fee/CreateFee";
import ManageFee from "./Fee/ManageFee";
import UpdateFee from "./Fee/UpdateFee";
import ManageInventory from "./inventory/ManageInventory";
import Layout from "./Layout/layout";
import ManageOrder from "./order/ManageOrder";
import CreateInvoice from "./order_invoice/CreateInvoice";
import { About } from "./Pages/About";
import Dashboard from "./Pages/Dashboard";
import CreatePayment from "./payment/CreatePayment";
import ManageProduct from "./product/ManageProduct";






const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/createpayment" element={<CreatePayment />} />
          
          <Route path="/createfee" element={<CreateFee />} />
         
          <Route path="/managefee" element={<ManageFee />} />
          <Route path="/updatefee/:id" element={<UpdateFee />} />
          <Route path="/orderinvoice" element={<CreateInvoice />} />
          <Route path="/manageproduct" element={<ManageProduct />} />
          <Route path="/managecustomer" element={<ManageCustomer />} />
          <Route path="/manageorders" element={<ManageOrder />} />
          <Route path="/managestock" element={< ManageInventory />} />
          
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
