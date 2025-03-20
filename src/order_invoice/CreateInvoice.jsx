import React from 'react'

const CreateInvoice = () => {
  return (
    <>
















  <div className="container my-5">
    <div className="invoice-container">
      <div className="d-flex justify-content-between align-items-center border-bottom pb-3">
        <h2 className="mb-0 theme-color">Invoice <strong>#INV-0001</strong></h2>
        <span className="badge theme-bg fs-6">Pending</span>
      </div>
      <div className="row mt-4">
        <div className="col-md-4">
          <h6 className="theme-color">From:</h6>
          <p className="mb-0"><strong>Razib Farhan</strong></p>
          <p className="text-muted">Address: Shankar, Dhanmondi-1213</p>
          <p className="text-muted">Email: mdrazib@gmail.com</p>
          <p className="text-muted">Phone: 01855997560</p>
        </div>
        <div className="col-md-4">
          <h6 className="theme-color">To:</h6>
          <p className="mb-0"><strong>Salman Shah</strong></p>
          <p className="text-muted">Address: Agarga, Taltola</p>
          <p className="text-muted">Email: mark@daniel.com</p>
          <p className="text-muted">Phone: 01535824509</p>
        </div>
        <div className="col-md-4 text-end">
          <p><strong>Invoice Number:</strong> #123456</p> {/* Added Invoice Number */}
          <img src="{{ asset('assets') }}/images/qr.png" alt="QR Code" className="img-fluid" width={100} />
        </div>
      </div>
      <div className="table-responsive mt-4">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>Item</th>
              <th>Description</th>
              <th className="text-end">Unit Cost</th>
              <th className="text-center">Qty</th>
              <th className="text-end">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td><strong>Origin License</strong></td>
              <td>Extended License</td>
              <td className="text-end">$999.00</td>
              <td className="text-center">1</td>
              <td className="text-end">$999.00</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Custom Services</td>
              <td>Installation &amp; Customization</td>
              <td className="text-end">$150.00</td>
              <td className="text-center">20</td>
              <td className="text-end">$3,000.00</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Hosting</td>
              <td>1-year subscription</td>
              <td className="text-end">$499.00</td>
              <td className="text-center">1</td>
              <td className="text-end">$499.00</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Platinum Support</td>
              <td>1-year subscription</td>
              <td className="text-end">$3,999.00</td>
              <td className="text-center">1</td>
              <td className="text-end">$3,999.00</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="row mt-4">
        <div className="col-md-6" />
        <div className="col-md-6">
          <table className="table table-borderless">
            <tbody>
              <tr>
                <td><strong>Subtotal</strong></td>
                <td className="text-end">$8,497.00</td>
              </tr>
              <tr>
                <td><strong>Discount (20%)</strong></td>
                <td className="text-end text-danger">-$1,699.40</td>
              </tr>
              <tr>
                <td><strong>VAT (10%)</strong></td>
                <td className="text-end">$679.76</td>
              </tr>
              <tr className="theme-bg">
                <td><strong>Total</strong></td>
                <td className="text-end"><strong>$7,477.36</strong><br />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="d-flex justify-content-end">
        <button className="btn btn-theme px-4">Download PDF</button>
        <button className="btn btn-dark ms-2 px-4">Pay Now</button>
      </div>
    </div>
  </div>














      
    
    
    </>
  )
}

export default CreateInvoice
