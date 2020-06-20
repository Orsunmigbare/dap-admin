import React from "react";

export const Dashboard = () => {
  return (
    <main className="main-content bgc-grey-100">
      <div id="mainContent">
        <div className="row gap-20 masonry pos-r">
          <div className="masonry-sizer col-md-6" />
          <div className="masonry-item  w-100">
            <div className="row gap-20">
              {/* #Toatl Visits ==================== */}
              <div className="col-md-3">
                <div className="layers bd bgc-white p-20">
                  <div className="layer w-100 mB-10">
                    <h6 className="lh-1">Total Visits</h6>
                  </div>
                  <div className="layer w-100">
                    <div className="peers ai-sb fxw-nw">
                      <div className="peer peer-greed">
                        <span id="sparklinedash" />
                      </div>
                      <div className="peer">
                        <span className="d-ib lh-0 va-m fw-600 bdrs-10em pX-15 pY-15 bgc-green-50 c-green-500">
                          +10%
                             </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* #Total Page Views ==================== */}
              <div className="col-md-3">
                <div className="layers bd bgc-white p-20">
                  <div className="layer w-100 mB-10">
                    <h6 className="lh-1">Total Page Views</h6>
                  </div>
                  <div className="layer w-100">
                    <div className="peers ai-sb fxw-nw">
                      <div className="peer peer-greed">
                        <span id="sparklinedash2" />
                      </div>
                      <div className="peer">
                        <span className="d-ib lh-0 va-m fw-600 bdrs-10em pX-15 pY-15 bgc-red-50 c-red-500">
                          -7%
                             </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* #Unique Visitors ==================== */}
              <div className="col-md-3">
                <div className="layers bd bgc-white p-20">
                  <div className="layer w-100 mB-10">
                    <h6 className="lh-1">Unique Visitor</h6>
                  </div>
                  <div className="layer w-100">
                    <div className="peers ai-sb fxw-nw">
                      <div className="peer peer-greed">
                        <span id="sparklinedash3" />
                      </div>
                      <div className="peer">
                        <span className="d-ib lh-0 va-m fw-600 bdrs-10em pX-15 pY-15 bgc-purple-50 c-purple-500">
                          ~12%
                             </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* #Bounce Rate ==================== */}
              <div className="col-md-3">
                <div className="layers bd bgc-white p-20">
                  <div className="layer w-100 mB-10">
                    <h6 className="lh-1">Bounce Rate</h6>
                  </div>
                  <div className="layer w-100">
                    <div className="peers ai-sb fxw-nw">
                      <div className="peer peer-greed">
                        <span id="sparklinedash4" />
                      </div>
                      <div className="peer">
                        <span className="d-ib lh-0 va-m fw-600 bdrs-10em pX-15 pY-15 bgc-blue-50 c-blue-500">
                          33%
                             </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="masonry-item col-12">
            {/* #Site Visits ==================== */}
            <div className="bd bgc-white">
              <div className="peers fxw-nw@lg+ ai-s">
                <div className="peer peer-greed w-70p@lg+ w-100@lg- p-20">
                  <div className="layers">
                    <div className="layer w-100 mB-10">
                      <h6 className="lh-1">Site Visits</h6>
                    </div>
                    <div className="layer w-100">
                      <div id="world-map-marker" />
                    </div>
                  </div>
                </div>
                <div className="peer bdL p-20 w-30p@lg+ w-100p@lg-">
                  <div className="layers">
                    <div className="layer w-100">
                      {/* Progress Bars */}
                      <div className="layers">
                        <div className="layer w-100">
                          <h5 className="mB-5">0</h5>
                          <small className="fw-600 c-grey-700">
                            Visitors From USA
                               </small>
                          <span className="pull-right c-grey-600 fsz-sm">
                            50%
                               </span>
                          <div className="progress mT-10">
                            <div
                              className="progress-bar bgc-deep-purple-500"
                              role="progressbar"
                              aria-valuenow={50}
                              aria-valuemin={0}
                              aria-valuemax={100}
                              style={{ width: "1%" }}
                            >
                              {" "}
                              <span className="sr-only">50% Complete</span>
                            </div>
                          </div>
                        </div>
                        <div className="layer w-100 mT-15">
                          <h5 className="mB-5">0</h5>
                          <small className="fw-600 c-grey-700">
                            Visitors From Europe
                               </small>
                          <span className="pull-right c-grey-600 fsz-sm">
                            0%
                               </span>
                          <div className="progress mT-10">
                            <div
                              className="progress-bar bgc-green-500"
                              role="progressbar"
                              aria-valuenow={0}
                              aria-valuemin={0}
                              aria-valuemax={100}
                              style={{ width: "1%" }}
                            >
                              {" "}
                              <span className="sr-only">80% Complete</span>
                            </div>
                          </div>
                        </div>
                        <div className="layer w-100 mT-15">
                          <h5 className="mB-5">0</h5>
                          <small className="fw-600 c-grey-700">
                            Visitors From Australia
                               </small>
                          <span className="pull-right c-grey-600 fsz-sm">
                            0%
                               </span>
                          <div className="progress mT-10">
                            <div
                              className="progress-bar bgc-light-blue-500"
                              role="progressbar"
                              aria-valuenow={50}
                              aria-valuemin={0}
                              aria-valuemax={100}
                              style={{ width: "1%" }}
                            >
                              {" "}
                              <span className="sr-only">40% Complete</span>
                            </div>
                          </div>
                        </div>
                        <div className="layer w-100 mT-15">
                          <h5 className="mB-5">0</h5>
                          <small className="fw-600 c-grey-700">
                            Visitors From India
                               </small>
                          <span className="pull-right c-grey-600 fsz-sm">
                            0%
                               </span>
                          <div className="progress mT-10">
                            <div
                              className="progress-bar bgc-blue-grey-500"
                              role="progressbar"
                              aria-valuenow={50}
                              aria-valuemin={0}
                              aria-valuemax={100}
                              style={{ width: "1%" }}
                            >
                              {" "}
                              <span className="sr-only">90% Complete</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Pie Charts */}
                      <div className="peers pT-20 mT-20 bdT fxw-nw@lg+ jc-sb ta-c gap-10">
                        <div className="peer">
                          <div
                            className="easy-pie-chart"
                            data-size={80}
                            data-percent={75}
                            data-bar-color="#f44336"
                          >
                            <span />
                          </div>
                          <h6 className="fsz-sm">New Users</h6>
                        </div>
                        <div className="peer">
                          <div
                            className="easy-pie-chart"
                            data-size={80}
                            data-percent={50}
                            data-bar-color="#2196f3"
                          >
                            <span />
                          </div>
                          <h6 className="fsz-sm">New Purchases</h6>
                        </div>
                        <div className="peer">
                          <div
                            className="easy-pie-chart"
                            data-size={80}
                            data-percent={90}
                            data-bar-color="#ff9800"
                          >
                            <span />
                          </div>
                          <h6 className="fsz-sm">Bounce Rate</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}