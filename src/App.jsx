import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./../src/App.css";
import CreateFee from "./Fee/CreateFee";
import ManageFee from "./Fee/ManageFee";
import UpdateFee from "./Fee/UpdateFee";
import Layout from "./Layout/layout";
import { About } from "./Pages/About";
import Dashboard from "./Pages/Dashboard";
import CreatePayment from "./payment/CreatePayment";
import CreateSub from "./subject/CreateSub";
import MnanageSub from "./subject/MnanageSub";
import UpdateSub from "./subject/UpdateSub";
import CreateInvoice from "./order_invoice/CreateInvoice";



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/createpayment" element={<CreatePayment />} />
          <Route path="/createsub" element={<CreateSub />} />
          <Route path="/createfee" element={<CreateFee />} />
          <Route path="/managesub" element={<MnanageSub />} />
          <Route path="/managefee" element={<ManageFee />} />
          <Route path="/updatesub/:id" element={<UpdateSub />} />
          <Route path="/updatefee/:id" element={<UpdateFee />} />
          <Route path="/orderinvoice" element={<CreateInvoice />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
