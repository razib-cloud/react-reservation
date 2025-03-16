const Dashboard = () => {
    return (
        <>
            
                <div className="row">
                    <div className="col-sm-12 mb-4 mb-xl-0">
                        <h4 className="font-weight-bold text-dark">Hi, welcome back!</h4>
                        <p className="font-weight-normal mb-2 text-muted">APRIL 1, 2019</p>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-xl-3 flex-column d-flex grid-margin stretch-card">
                        <div className="row flex-grow">
                            <div className="col-sm-12 grid-margin stretch-card">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Customers</h4>
                                        <p>23% increase in conversion</p>
                                        <h4 className="text-dark font-weight-bold mb-2">43,981</h4>
                                        <canvas id="customers" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 stretch-card">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Orders</h4>
                                        <p>6% decrease in earnings</p>
                                        <h4 className="text-dark font-weight-bold mb-2">55,543</h4>
                                        <canvas id="orders" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-9 d-flex grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Website Audience Metrics</h4>
                                <div className="row">
                                    <div className="col-lg-5">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit amet cumque cupiditate</p>
                                    </div>
                                    <div className="col-lg-7">
                                        <div className="chart-legends d-lg-block d-none" id="chart-legends" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <canvas id="web-audience-metrics-satacked" className="mt-3" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-4 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex justify-content-between mb-3">
                                    <h4 className="card-title">Market Trends</h4>
                                    <div className="dropdown">
                                        <button className="btn btn-sm dropdown-toggle text-dark pt-0 pr-0" type="button" id="dropdownMenuSizeButton3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            This week
                                        </button>
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuSizeButton3">
                                            <h6 className="dropdown-header">This week</h6>
                                            <h6 className="dropdown-header">This month</h6>
                                        </div>
                                    </div>
                                </div>
                                <div id="chart-legends-market-trend" className="chart-legends mt-1">
                                </div>
                                <div className="row mt-2 mb-2">
                                    <div className="col-6">
                                        <div className="text-small"><span className="text-success">18.2%</span> higher </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="text-small"><span className="text-danger">0.7%</span> higher </div>
                                    </div>
                                </div>
                                <div className="marketTrends mt-4">
                                    <canvas id="marketTrendssatacked" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Traffic Sources</h4>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="d-flex justify-content-between mt-2 text-dark mb-2">
                                            <div><span className="font-weight-bold">4453</span> Leads</div>
                                            <div>Goal: 2000</div>
                                        </div>
                                        <div className="progress progress-md grouped mb-2">
                                            <div className="progress-bar  bg-danger" role="progressbar" style={{ width: '30%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                                            <div className="progress-bar bg-info" role="progressbar" style={{ width: '20%' }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                                            <div className="progress-bar  bg-primary" role="progressbar" style={{ width: '10%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                                            <div className="progress-bar bg-warning" role="progressbar" style={{ width: '10%' }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                                            <div className="progress-bar bg-success" role="progressbar" style={{ width: '5%' }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                                            <div className="progress-bar bg-light" role="progressbar" style={{ width: '25%' }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                    </div>
                                    <div className="col-sm-12">
                                        <div className="traffic-source-legend">
                                            <div className="d-flex justify-content-between mb-1 mt-2">
                                                <div className="font-weight-bold">SOURCE</div>
                                                <div className="font-weight-bold">TOTAL</div>
                                            </div>
                                            <div className="d-flex justify-content-between legend-label">
                                                <div><span className="bg-danger" />Google Search</div>
                                                <div>30%</div>
                                            </div>
                                            <div className="d-flex justify-content-between legend-label">
                                                <div><span className="bg-info" />Social Media</div>
                                                <div>20%</div>
                                            </div>
                                            <div className="d-flex justify-content-between legend-label">
                                                <div><span className="bg-primary" />Referrals</div>
                                                <div>10%</div>
                                            </div>
                                            <div className="d-flex justify-content-between legend-label">
                                                <div><span className="bg-warning" />Organic Traffic</div>
                                                <div>10%</div>
                                            </div>
                                            <div className="d-flex justify-content-between legend-label">
                                                <div><span className="bg-success" />Google Search</div>
                                                <div>5%</div>
                                            </div>
                                            <div className="d-flex justify-content-between legend-label">
                                                <div><span className="bg-light" />Email Marketing</div>
                                                <div>25%</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title mb-3">Recent Activity</h4>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="text-dark">
                                            <div className="d-flex pb-3 border-bottom justify-content-between">
                                                <div className="mr-3"><i className="mdi mdi-signal-cellular-outline icon-md" /></div>
                                                <div className="font-weight-bold mr-sm-4">
                                                    <div>Deposit has updated to Paid</div>
                                                    <div className="text-muted font-weight-normal mt-1">32 Minutes Ago</div>
                                                </div>
                                                <div><h6 className="font-weight-bold text-info ml-sm-2">$325</h6></div>
                                            </div>
                                            <div className="d-flex pb-3 pt-3 border-bottom justify-content-between">
                                                <div className="mr-3"><i className="mdi mdi-signal-cellular-outline icon-md" /></div>
                                                <div className="font-weight-bold mr-sm-4">
                                                    <div>Your Withdrawal Proceeded</div>
                                                    <div className="text-muted font-weight-normal mt-1">45 Minutes Ago</div>
                                                </div>
                                                <div><h6 className="font-weight-bold text-info ml-sm-2">$4987</h6></div>
                                            </div>
                                            <div className="d-flex pb-3 pt-3 border-bottom justify-content-between">
                                                <div className="mr-3"><i className="mdi mdi-signal-cellular-outline icon-md" /></div>
                                                <div className="font-weight-bold mr-sm-4">
                                                    <div>Deposit has updated to Paid                            </div>
                                                    <div className="text-muted font-weight-normal mt-1">1 Days Ago</div>
                                                </div>
                                                <div><h6 className="font-weight-bold text-info ml-sm-2">$5391</h6></div>
                                            </div>
                                            <div className="d-flex pt-3 justify-content-between">
                                                <div className="mr-3"><i className="mdi mdi-signal-cellular-outline icon-md" /></div>
                                                <div className="font-weight-bold mr-sm-4">
                                                    <div>Deposit has updated to Paid</div>
                                                    <div className="text-muted font-weight-normal mt-1">3 weeks Ago</div>
                                                </div>
                                                <div><h6 className="font-weight-bold text-info ml-sm-2">$264</h6></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-9 grid-margin-lg-0 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Top Sellers</h4>
                                <div className="table-responsive mt-3">
                                    <table className="table table-header-bg">
                                        <thead>
                                            <tr>
                                                <th>
                                                    Country
                                                </th>
                                                <th>
                                                    Revenue
                                                </th>
                                                <th>
                                                    Vs Last Month
                                                </th>
                                                <th>
                                                    Goal Reached
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <i className="flag-icon flag-icon-us mr-2" title="us" id="us" /> United States
                                                </td>
                                                <td>
                                                    $911,200
                                                </td>
                                                <td>
                                                    <div className="text-success"><i className="icon-arrow-up mr-2" />+60%</div>
                                                </td>
                                                <td>
                                                    <div className="row">
                                                        <div className="col-sm-10">
                                                            <div className="progress">
                                                                <div className="progress-bar bg-info" role="progressbar" style={{ width: '25%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-2">
                                                            25%
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <i className="flag-icon flag-icon-at mr-2" title="us" id="at" /> Austria
                                                </td>
                                                <td>
                                                    $821,600
                                                </td>
                                                <td>
                                                    <div className="text-danger"><i className="icon-arrow-down mr-2" />-40%</div>
                                                </td>
                                                <td>
                                                    <div className="row">
                                                        <div className="col-sm-10">
                                                            <div className="progress">
                                                                <div className="progress-bar bg-info" role="progressbar" style={{ width: '50%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-2">
                                                            50%
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <i className="flag-icon flag-icon-fr mr-2" title="us" id="fr" /> France
                                                </td>
                                                <td>
                                                    $323,700
                                                </td>
                                                <td>
                                                    <div className="text-success"><i className="icon-arrow-up mr-2" />+40%</div>
                                                </td>
                                                <td>
                                                    <div className="row">
                                                        <div className="col-sm-10">
                                                            <div className="progress">
                                                                <div className="progress-bar bg-info" role="progressbar" style={{ width: '10%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-2">
                                                            10%
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="py-1">
                                                    <i className="flag-icon flag-icon-de mr-2" title="us" id="de" /> Germany
                                                </td>
                                                <td>
                                                    $833,205
                                                </td>
                                                <td>
                                                    <div className="text-danger"><i className="icon-arrow-down mr-2" />-80%</div>
                                                </td>
                                                <td>
                                                    <div className="row">
                                                        <div className="col-sm-10">
                                                            <div className="progress">
                                                                <div className="progress-bar bg-info" role="progressbar" style={{ width: '70%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-2">
                                                            70%
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="pb-0">
                                                    <i className="flag-icon flag-icon-ae mr-2" title="ae" id="ae" /> united arab emirates
                                                </td>
                                                <td className="pb-0">
                                                    $232,243
                                                </td>
                                                <td className="pb-0">
                                                    <div className="text-success"><i className="icon-arrow-up mr-2" />+80%</div>
                                                </td>
                                                <td className="pb-0">
                                                    <div className="row">
                                                        <div className="col-sm-10">
                                                            <div className="progress">
                                                                <div className="progress-bar bg-info" role="progressbar" style={{ width: '60%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-2">
                                                            0%
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 grid-margin-lg-0 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title mb-3">Overall rating</h4>
                                <div className="d-flex">
                                    <div>
                                        <h4 className="text-dark font-weight-bold mb-2 mr-2">4.3</h4>
                                    </div>
                                    <div>
                                        <select id="over-all-rating" name="rating" autoComplete="off">
                                            <option value={1}>1</option>
                                            <option value={2}>2</option>
                                            <option value={3}>3</option>
                                            <option value={4}>4</option>
                                            <option value={5}>5</option>
                                        </select>
                                    </div>
                                </div>
                                <p className="mb-4">Based on 186 reviews</p>
                                <div className="row">
                                    <div className="col-sm-2 pr-0">
                                        <div className="d-flex">
                                            <div>
                                                <div className="text-dark font-weight-bold mb-2 mr-2">5</div>
                                            </div>
                                            <div>
                                                <i className="fa fa-star text-warning" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-9 pl-2">
                                        <div className="row">
                                            <div className="col-sm-10">
                                                <div className="progress progress-lg mt-1">
                                                    <div className="progress-bar bg-warning" role="progressbar" style={{ width: '80%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                            </div>
                                            <div className="col-sm-2 p-lg-0">
                                                80%
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-sm-2 pr-0">
                                        <div className="d-flex">
                                            <div>
                                                <div className="text-dark font-weight-bold mb-2 mr-2">4</div>
                                            </div>
                                            <div>
                                                <i className="fa fa-star text-warning" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-9 pl-2">
                                        <div className="row">
                                            <div className="col-sm-10">
                                                <div className="progress progress-lg mt-1">
                                                    <div className="progress-bar bg-warning" role="progressbar" style={{ width: '45%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                            </div>
                                            <div className="col-sm-2 p-lg-0">
                                                45%
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-sm-2 pr-0">
                                        <div className="d-flex">
                                            <div>
                                                <div className="text-dark font-weight-bold mb-2 mr-2">3</div>
                                            </div>
                                            <div>
                                                <i className="fa fa-star text-warning" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-9 pl-2">
                                        <div className="row">
                                            <div className="col-sm-10">
                                                <div className="progress progress-lg mt-1">
                                                    <div className="progress-bar bg-warning" role="progressbar" style={{ width: '30%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                            </div>
                                            <div className="col-sm-2 p-lg-0">
                                                30%
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-sm-2 pr-0">
                                        <div className="d-flex">
                                            <div>
                                                <div className="text-dark font-weight-bold mb-2 mr-2">2</div>
                                            </div>
                                            <div>
                                                <i className="fa fa-star text-warning" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-9 pl-2">
                                        <div className="row">
                                            <div className="col-sm-10">
                                                <div className="progress progress-lg mt-1">
                                                    <div className="progress-bar bg-warning" role="progressbar" style={{ width: '8%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                            </div>
                                            <div className="col-sm-2 p-lg-0">
                                                8%
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-sm-2 pr-0">
                                        <div className="d-flex">
                                            <div>
                                                <div className="text-dark font-weight-bold mb-2 mr-2">5</div>
                                            </div>
                                            <div>
                                                <i className="fa fa-star text-warning" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-9 pl-2">
                                        <div className="row">
                                            <div className="col-sm-10">
                                                <div className="progress progress-lg mt-1">
                                                    <div className="progress-bar bg-warning" role="progressbar" style={{ width: '1%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                                                </div>
                                            </div>
                                            <div className="col-sm-2 p-lg-0">
                                                1%
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <p className="mb-2 mt-3 mb-3 text-dark font-weight-bold">Rating by category</p>
                                        <div className="d-flex">
                                            <div>
                                                <div className="text-dark font-weight-bold mb-2 mr-2">4.3</div>
                                            </div>
                                            <div className="mr-2">
                                                <i className="fa fa-star text-warning" />
                                            </div>
                                            <div><p>Work/Management</p></div>
                                        </div>
                                        <div className="d-flex">
                                            <div>
                                                <div className="text-dark font-weight-bold mb-2 mr-2">3.5</div>
                                            </div>
                                            <div className="mr-2">
                                                <i className="fa fa-star text-warning" />
                                            </div>
                                            <div><p>Salary/Culture</p></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            

        </>
    )
}
export default Dashboard