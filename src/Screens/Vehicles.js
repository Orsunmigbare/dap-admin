import React, { useState, useEffect } from "react";
import { useAsyncHook } from "../request";
import { Button } from 'antd';

export const Vehicles = () => {
    let [state, setState] = useState({
        vehicles: [],
        current_page: 0,
        count: null,
        query_page: 0
    });

    let [getDrivers, error, loading] = useAsyncHook({
        endpoint: `admin/vehicles?page=${state.query_page}`,
        method: "get",
    })


    const getPage = (i) => {
        setState({ ...state, query_page: i });
        getDrivers()
            .then((res) => {
                setState({
                    vehicles: res.vehicles,
                    current_page: res.page,
                    count: res.count.count
                })
            })
    }
    useEffect(() => {
        getDrivers()
            .then((res) => {
                setState({
                    vehicles: res.vehicles,
                    current_page: res.page,
                    count: res.count.count
                })
            })
    }, []);

    console.log("state ---->", state)

    return (
        <main className="main-content bgc-grey-100">
            <div id="mainContent">
                <div className="container-fluid">
                    <h4 className="c-grey-900 mT-10 mB-30">Vehicles</h4>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="bgc-white bd bdrs-3 p-20 mB-20 overflow-auto">
                                <h4 className="c-grey-900 mB-20 ">Vehicles List</h4>
                                {loading ? "Loading ....." : state.vehicles.length ?
                                    <>
                                        <table id="dataTable" className="table table-striped table-bordered" cellSpacing={0} width="100%">
                                            <thead>
                                                <tr >
                                                    {Object.keys(state.vehicles[0]).map((key) => (
                                                        <th>{key}</th>
                                                    ))}
                                                </tr>
                                            </thead>
                                            {/* <tfoot>
                      <tr>
                        {Object.keys(state.vehicles[0]).map((key) => (
                          <th>{key}</th>
                        ))}
                      </tr>
                    </tfoot> */}
                                            <tbody>
                                                {
                                                    state.vehicles.map((driver) => (
                                                        <tr className="pointer">
                                                            {
                                                                Object.keys(driver).map((key) => (
                                                                    <td> {driver[key]} </td>
                                                                ))
                                                            }
                                                        </tr>
                                                    ))
                                                }
                                            </tbody>
                                        </table>
                                        <div className="d-flex flex-row justify-content-start">
                                            {new Array(Math.ceil(state.count / 30)).fill(" ").map((arr, i) =>
                                                <Button className="btn-pry" size={"small"} onClick={() => { getPage(i) }}>
                                                    {i + 1}
                                                </Button>
                                            )}
                                        </div>
                                    </>
                                    : "No data to display"}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    );
};




