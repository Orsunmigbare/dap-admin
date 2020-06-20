import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";

export const Auth = ({ children }) => {
    const history = useHistory();
    const [sideState, setSideState] = useState(true)
    useEffect(() => {
        let token = localStorage.getItem("token");
        console.log("token --->", token)
        if (!token) {
            history.push("/auth")
        }
    }, [])
    let sidebar;
    useEffect(() => {
        sidebar = document.getElementsByClassName("sidebar")[0];
    })
    return (
        // children
        <div>
            {/* #Left Sidebar ==================== */}
            <div className="sidebar" style={{ left: sideState ? "0" : "-300px" }}>
                <div className="sidebar-inner">
                    {/* ### $Sidebar Header ### */}
                    <div className="sidebar-logo">
                        <div className="peers ai-c fxw-nw">
                            <div className="peer peer-greed">
                                <a className="sidebar-link td-n" href="/">
                                    <div className="peers ai-c fxw-nw">
                                        <div className="peer">
                                            <div className="logo">
                                                <img src="assets/static/images/logo.png" alt />
                                            </div>
                                        </div>
                                        <div className="peer peer-greed">
                                            <h5 className="lh-1 mB-0 logo-text">Admin</h5>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="peer">
                                <div className="mobile-toggle sidebar-toggle">
                                    <a href className="td-n" onClick={() => { setSideState(false) }}>
                                        <i className="ti-arrow-circle-left" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ### $Sidebar Menu ### */}
                    <ul className="sidebar-menu scrollable pos-r">
                        <li className="nav-item ">
                            <a className="" href="javascript:void(0);">
                                <span className="icon-holder">
                                    <i className="c-red-500 ti-home" />
                                </span>
                                <span className="title">Dashboard</span>
                            </a>
                        </li>
                        <li className="nav-item dropdown" onClick={() => { history.push("/drivers") }}>
                            <a className="dropdown-toggle" href="javascript:void(0);">
                                <span className="icon-holder">
                                    <i className="c-teal-500 ti-view-list-alt" />
                                </span>
                                <span className="title">Drivers</span>
                                <span className="arrow">
                                    <i className="ti-angle-right" />
                                </span>
                            </a>
                            <ul className="dropdown-menu">
                                <li className="nav-item dropdown">
                                    <a href="javascript:void(0);">
                                        <span>Menu Item</span>
                                    </a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a href="javascript:void(0);">
                                        <span>Menu Item</span>
                                        <span className="arrow">
                                            <i className="ti-angle-right" />
                                        </span>
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <a href="javascript:void(0);">Menu Item</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);">Menu Item</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown" onClick={() => { history.push("/vehicles") }}>
                            <a className="dropdown-toggle" href="javascript:void(0);">
                                <span className="icon-holder">
                                    <i className="c-teal-500 ti-view-list-alt" />
                                </span>
                                <span className="title">Vehicles</span>
                                <span className="arrow">
                                    <i className="ti-angle-right" />
                                </span>
                            </a>
                            <ul className="dropdown-menu">
                                <li className="nav-item dropdown">
                                    <a href="javascript:void(0);">
                                        <span>Menu Item</span>
                                    </a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a href="javascript:void(0);">
                                        <span>Menu Item</span>
                                        <span className="arrow">
                                            <i className="ti-angle-right" />
                                        </span>
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <a href="javascript:void(0);">Menu Item</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);">Menu Item</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown" onClick={() => { history.push("/owners") }}>
                            <a className="dropdown-toggle" href="javascript:void(0);">
                                <span className="icon-holder">
                                    <i className="c-teal-500 ti-view-list-alt" />
                                </span>
                                <span className="title">Vehicle Owners</span>
                                <span className="arrow">
                                    <i className="ti-angle-right" />
                                </span>
                            </a>
                            <ul className="dropdown-menu">
                                <li className="nav-item dropdown">
                                    <a href="javascript:void(0);">
                                        <span>Menu Item</span>
                                    </a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a href="javascript:void(0);">
                                        <span>Menu Item</span>
                                        <span className="arrow">
                                            <i className="ti-angle-right" />
                                        </span>
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <a href="javascript:void(0);">Menu Item</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);">Menu Item</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            {/* #Main ============================ */}
            <div className="page-container">
                {/* ### $Topbar ### */}
                <div className="header navbar">
                    <div className="header-container">
                        <ul className="nav-left">
                            <li>
                                <a
                                    id="sidebar-toggle"
                                    className="sidebar-toggle"
                                    // href="javascript:void(0);"
                                    onClick={() => { setSideState(true) }}
                                >
                                    <i className="ti-menu" />
                                </a>
                            </li>
                            <li className="search-box">
                                <a
                                    className="search-toggle no-pdd-right"
                                    href="javascript:void(0);"
                                >
                                    <i className="search-icon ti-search pdd-right-10" />
                                    <i className="search-icon-close ti-close pdd-right-10" />
                                </a>
                            </li>
                            <li className="search-input">
                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder="Search..."
                                />
                            </li>
                        </ul>
                        <ul className="nav-right">
                            <li className="notifications dropdown">
                                <span className="counter bgc-red">3</span>
                                <a
                                    href
                                    className="dropdown-toggle no-after"
                                    data-toggle="dropdown"
                                >
                                    <i className="ti-bell" />
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="pX-20 pY-15 bdB">
                                        <i className="ti-bell pR-10" />
                                        <span className="fsz-sm fw-600 c-grey-900">
                                            Notifications
                    </span>
                                    </li>
                                    <li>
                                        <ul className="ovY-a pos-r scrollable lis-n p-0 m-0 fsz-sm">
                                            <li>
                                                <a
                                                    href
                                                    className="peers fxw-nw td-n p-20 bdB c-grey-800 cH-blue bgcH-grey-100"
                                                >
                                                    <div className="peer mR-15">
                                                        <img
                                                            className="w-3r bdrs-50p"
                                                            src="https://randomuser.me/api/portraits/men/1.jpg"
                                                            alt
                                                        />
                                                    </div>
                                                    <div className="peer peer-greed">
                                                        <span>
                                                            <span className="fw-500">John Doe</span>
                                                            <span className="c-grey-600">
                                                                liked your{" "}
                                                                <span className="text-dark">post</span>
                                                            </span>
                                                        </span>
                                                        <p className="m-0">
                                                            <small className="fsz-xs">5 mins ago</small>
                                                        </p>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href
                                                    className="peers fxw-nw td-n p-20 bdB c-grey-800 cH-blue bgcH-grey-100"
                                                >
                                                    <div className="peer mR-15">
                                                        <img
                                                            className="w-3r bdrs-50p"
                                                            src="https://randomuser.me/api/portraits/men/2.jpg"
                                                            alt
                                                        />
                                                    </div>
                                                    <div className="peer peer-greed">
                                                        <span>
                                                            <span className="fw-500">Moo Doe</span>
                                                            <span className="c-grey-600">
                                                                liked your{" "}
                                                                <span className="text-dark">cover image</span>
                                                            </span>
                                                        </span>
                                                        <p className="m-0">
                                                            <small className="fsz-xs">7 mins ago</small>
                                                        </p>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href
                                                    className="peers fxw-nw td-n p-20 bdB c-grey-800 cH-blue bgcH-grey-100"
                                                >
                                                    <div className="peer mR-15">
                                                        <img
                                                            className="w-3r bdrs-50p"
                                                            src="https://randomuser.me/api/portraits/men/3.jpg"
                                                            alt
                                                        />
                                                    </div>
                                                    <div className="peer peer-greed">
                                                        <span>
                                                            <span className="fw-500">Lee Doe</span>
                                                            <span className="c-grey-600">
                                                                commented on your{" "}
                                                                <span className="text-dark">video</span>
                                                            </span>
                                                        </span>
                                                        <p className="m-0">
                                                            <small className="fsz-xs">10 mins ago</small>
                                                        </p>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="pX-20 pY-15 ta-c bdT">
                                        <span>
                                            <a href className="c-grey-600 cH-blue fsz-sm td-n">
                                                View All Notifications{" "}
                                                <i className="ti-angle-right fsz-xs mL-10" />
                                            </a>
                                        </span>
                                    </li>
                                </ul>
                            </li>
                            <li className="notifications dropdown">
                                <span className="counter bgc-blue">3</span>
                                <a
                                    href
                                    className="dropdown-toggle no-after"
                                    data-toggle="dropdown"
                                >
                                    <i className="ti-email" />
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="pX-20 pY-15 bdB">
                                        <i className="ti-email pR-10" />
                                        <span className="fsz-sm fw-600 c-grey-900">Emails</span>
                                    </li>
                                    <li>
                                        <ul className="ovY-a pos-r scrollable lis-n p-0 m-0 fsz-sm">
                                            <li>
                                                <a
                                                    href
                                                    className="peers fxw-nw td-n p-20 bdB c-grey-800 cH-blue bgcH-grey-100"
                                                >
                                                    <div className="peer mR-15">
                                                        <img
                                                            className="w-3r bdrs-50p"
                                                            src="https://randomuser.me/api/portraits/men/1.jpg"
                                                            alt
                                                        />
                                                    </div>
                                                    <div className="peer peer-greed">
                                                        <div>
                                                            <div className="peers jc-sb fxw-nw mB-5">
                                                                <div className="peer">
                                                                    <p className="fw-500 mB-0">John Doe</p>
                                                                </div>
                                                                <div className="peer">
                                                                    <small className="fsz-xs">5 mins ago</small>
                                                                </div>
                                                            </div>
                                                            <span className="c-grey-600 fsz-sm">
                                                                Want to create your own customized data
                                                                generator for your app...
                              </span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href
                                                    className="peers fxw-nw td-n p-20 bdB c-grey-800 cH-blue bgcH-grey-100"
                                                >
                                                    <div className="peer mR-15">
                                                        <img
                                                            className="w-3r bdrs-50p"
                                                            src="https://randomuser.me/api/portraits/men/2.jpg"
                                                            alt
                                                        />
                                                    </div>
                                                    <div className="peer peer-greed">
                                                        <div>
                                                            <div className="peers jc-sb fxw-nw mB-5">
                                                                <div className="peer">
                                                                    <p className="fw-500 mB-0">Moo Doe</p>
                                                                </div>
                                                                <div className="peer">
                                                                    <small className="fsz-xs">15 mins ago</small>
                                                                </div>
                                                            </div>
                                                            <span className="c-grey-600 fsz-sm">
                                                                Want to create your own customized data
                                                                generator for your app...
                              </span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href
                                                    className="peers fxw-nw td-n p-20 bdB c-grey-800 cH-blue bgcH-grey-100"
                                                >
                                                    <div className="peer mR-15">
                                                        <img
                                                            className="w-3r bdrs-50p"
                                                            src="https://randomuser.me/api/portraits/men/3.jpg"
                                                            alt
                                                        />
                                                    </div>
                                                    <div className="peer peer-greed">
                                                        <div>
                                                            <div className="peers jc-sb fxw-nw mB-5">
                                                                <div className="peer">
                                                                    <p className="fw-500 mB-0">Lee Doe</p>
                                                                </div>
                                                                <div className="peer">
                                                                    <small className="fsz-xs">25 mins ago</small>
                                                                </div>
                                                            </div>
                                                            <span className="c-grey-600 fsz-sm">
                                                                Want to create your own customized data
                                                                generator for your app...
                              </span>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="pX-20 pY-15 ta-c bdT">
                                        <span>
                                            <a
                                                href="email.html"
                                                className="c-grey-600 cH-blue fsz-sm td-n"
                                            >
                                                View All Email{" "}
                                                <i className="fs-xs ti-angle-right mL-10" />
                                            </a>
                                        </span>
                                    </li>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <a
                                    href
                                    className="dropdown-toggle no-after peers fxw-nw ai-c lh-1"
                                    data-toggle="dropdown"
                                >
                                    <div className="peer mR-10">
                                        <img
                                            className="w-2r bdrs-50p"
                                            src="https://randomuser.me/api/portraits/men/10.jpg"
                                            alt
                                        />
                                    </div>
                                    <div className="peer">
                                        <span className="fsz-sm c-grey-900">John Doe</span>
                                    </div>
                                </a>
                                <ul className="dropdown-menu fsz-sm">
                                    <li>
                                        <a href className="d-b td-n pY-5 bgcH-grey-100 c-grey-700">
                                            <i className="ti-settings mR-10" />
                                            <span>Setting</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href className="d-b td-n pY-5 bgcH-grey-100 c-grey-700">
                                            <i className="ti-user mR-10" />
                                            <span>Profile</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="email.html"
                                            className="d-b td-n pY-5 bgcH-grey-100 c-grey-700"
                                        >
                                            <i className="ti-email mR-10" />
                                            <span>Messages</span>
                                        </a>
                                    </li>
                                    <li role="separator" className="divider" />
                                    <li>
                                        <a href className="d-b td-n pY-5 bgcH-grey-100 c-grey-700">
                                            <i className="ti-power-off mR-10" />
                                            <span>Logout</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* ### $App Screen Content ### */}
                {children}
                {/* ### $App Screen Footer ### */}
                <footer className="bdT ta-c p-30 lh-0 fsz-sm c-grey-600">
                    <span>Admin DriversandPartners</span>
                </footer>
            </div>
        </div>
    )
}