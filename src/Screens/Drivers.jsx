import React, { useState, useEffect } from "react";
import { useAsyncHook } from "../request";
import { Button, Modal } from "antd";

export const Drivers = () => {
  let [state, setState] = useState({
    drivers: [],
    current_page: 0,
    count: null,
    query_page: 0,
  });

  const [currentPrev, setPrev] = useState({});
  const [visible, setVisible] = useState(false);
  let [getDrivers, error, loading] = useAsyncHook({
    endpoint: `admin/drivers`,
    method: "get",
  });

  let [verifyDriver, error_verifying, loading_verifying] = useAsyncHook({
    endpoint: `admin/verify/driver/${currentPrev.id}`,
    method: "get",
  });
  const getPage = (i) => {
    setState({ ...state, query_page: i });
    getDrivers(null, `page=${i || state.query_page}`).then((res) => {
      setState({
        ...state,
        drivers: res.drivers,
        current_page: res.page,
        count: res.count.count,
      });
    });
  };
  useEffect(() => {
    getDrivers(null, `page=${state.query_page}`).then((res) => {
      setState({
        ...state,
        drivers: res.drivers,
        current_page: res.page,
        count: res.count.count,
      });
    });
  }, []);

  const showVerifyModal = (key, driver) => {
    console.log("key --->", key);
    if (key === "verification_status") {
      setVisible(true);
      setPrev(driver);
    }
  };

  console.log("state ---->", state);

  return (
    <main className="main-content bgc-grey-100">
      <div id="mainContent">
        <div className="container-fluid">
          <h4 className="c-grey-900 mT-10 mB-30">Drivers</h4>
          <div className="row">
            <div className="col-md-12">
              <div className="bgc-white bd bdrs-3 p-20 mB-20 overflow-auto table-cont">
                <h4 className="c-grey-900 mB-20 ">Driver's List</h4>
                {loading ? (
                  "Loading ....."
                ) : state.drivers.length ? (
                  <>
                    <table
                      id="dataTable"
                      className="table table-striped table-bordered"
                      cellSpacing={0}
                      width="100%"
                    >
                      <thead>
                        <tr col>
                          {Object.keys(state.drivers[0]).map((key) => (
                            <th>{key.replace(/_/g, " ")}</th>
                          ))}
                        </tr>
                      </thead>
                      {/* <tfoot>
                      <tr>
                        {Object.keys(state.drivers[0]).map((key) => (
                          <th>{key}</th>
                        ))}
                      </tr>
                    </tfoot> */}
                      <tbody>
                        {state.drivers.map((driver) => (
                          <tr className="pointer">
                            {Object.keys(driver).map((key) => (
                              <td
                                onClick={() => {
                                  showVerifyModal(key, driver);
                                }}
                              >
                                {console.log("key ---->", key, driver[key])}
                                {key === "verification_status"
                                  ? driver[key] === 0
                                    ? "Unverified"
                                    : "Verified"
                                  : key === "date_of_birth"
                                  ? new Date(
                                      parseInt(driver[key])
                                    ).toDateString()
                                  : driver[key]}{" "}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <div className="d-flex flex-row justify-content-start">
                      {new Array(Math.ceil(state.count / 30))
                        .fill(" ")
                        .map((arr, i) => (
                          <Button
                            className="btn-pry"
                            size={"small"}
                            onClick={() => {
                              getPage(i);
                            }}
                          >
                            {i + 1}
                          </Button>
                        ))}
                    </div>
                  </>
                ) : (
                  "No data to display"
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        title="Driver"
        visible={visible}
        // onOk={this.handleOk}
        onCancel={() => {
          setVisible(false);
        }}
      >
        <div className="d-flex flex-column justify-content-center">
          <img
            style={{ height: "50px", width: "50px", borderRadius: " 50%" }}
            className="mx-auto mb-3"
            src={
              currentPrev.avatar
                ? currentPrev.avatar.toLowerCase()
                : "images/avatar_default.png"
            }
          />
          <h4 className="text-center">
            {" "}
            {currentPrev.firstname} {currentPrev.lastname}{" "}
          </h4>
          <span className="text-center">
            {" "}
            Phone : <span className="text-bold"> {currentPrev.phone}</span>
          </span>
          <span className="text-center">
            {" "}
            Email : <span className="text-bold"> {currentPrev.email}</span>
          </span>
          <span className="text-center">
            {" "}
            Verification Status :{" "}
            <span className="text-bold">
              {" "}
              {currentPrev.verification_status === 0
                ? "Unverified"
                : "Verified"}
            </span>
          </span>

          {currentPrev.verification_status === 0 ? (
            <Button
              className="my-5 bg-primary text-white"
              loading={loading_verifying}
              onClick={() => {
                verifyDriver().then(() => {
                  getPage(state.current_page);
                  setVisible(false);
                });
              }}
            >
              {" "}
              Verify Driver
            </Button>
          ) : (
            ""
          )}
        </div>
      </Modal>
    </main>
  );
};
