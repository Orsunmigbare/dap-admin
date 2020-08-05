import React, { useState, useEffect } from "react";
import { useAsyncHook } from "../request";
import { Button } from 'antd';

export const Clients = () => {
    let [state, setState] = useState({
        clients: [],
        current_page: 0,
        count: null,
        query_page: 0
    });

    let [getDrivers, error, loading] = useAsyncHook({
        endpoint: `admin/clients`,
        method: "get",
    })


    const getPage = (i) => {
        setState({ ...state, query_page: i });
        getDrivers(null, `page=${i || state.query_page}`)
            .then((res) => {
                setState({
                    clients: res.clients,
                    current_page: res.page,
                    count: res.count.count
                })
            })
    }
    useEffect(() => {
        getDrivers(null, `page=${state.query_page}`)
            .then((res) => {
                console.log("res --->", res)
                setState({
                    clients: res.clients,
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
                    <h4 className="c-grey-900 mT-10 mB-30">Clients</h4>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="bgc-white bd bdrs-3 p-20 mB-20 overflow-auto table-cont">
                                <h4 className="c-grey-900 mB-20 ">Clients List</h4>
                                {loading ? "Loading ....." : state.clients.length ?
                                    <>
                                        <table id="dataTable" className="table table-striped table-bordered" cellSpacing={0} width="100%">
                                            <thead>
                                                <tr >
                                                    {Object.keys(state.clients[0]).map((key) => (
                                                        <th>{key.replace(/_/g, " ")}</th>
                                                    ))}
                                                </tr>
                                            </thead>
                                            {/* <tfoot>
                      <tr>
                        {Object.keys(state.clients[0]).map((key) => (
                          <th>{key}</th>
                        ))}
                      </tr>
                    </tfoot> */}
                                            <tbody>
                                                {
                                                    state.clients.map((driver) => (
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




