import React, { useState } from "react";
import { useAsyncHook } from "../request";
import { message } from "antd";
import {useHistory} from "react-router-dom"

export const SignIn = () => {
  const history = useHistory()
  const [details, setDetails] = useState({
    email: "",
    password: ""
  })
  let [login, loading, error] = useAsyncHook({
    endpoint: "admin/login",
    method: "post",
  })

  const loginAdmin = (e) => {
    e.preventDefault();
    login(details)
      .then((data) => {
        localStorage.setItem("token", data.token);
        history.push("/dashboard")
        console.log("logged in successfully ---->", data)
      })
      .catch((err) => {
        if (err === 401) {
          console.log("its 401")
          message.error("Invalid Credentials")
        }
        console.log("error logging in ----->", err)
      })
  }
  return (
    <div className="peers ai-s fxw-nw h-100vh">
      <div className="d-n@sm- peer peer-greed h-100 pos-r bgr-n bgpX-c bgpY-c bgsz-cv" style={{ backgroundImage: 'url(assets/static/images/bg.jpg)' }}>
        <div className="pos-a centerXY">
          <div className="bgc-white bdrs-50p pos-r" style={{ width: 120, height: 120 }}>
            <img className="pos-a centerXY" src="assets/static/images/logo.png" alt />
          </div>
        </div>
      </div>
      <div className="col-12 col-md-4 peer pX-40 pY-80 h-100 bgc-white scrollable pos-r" style={{ minWidth: 320 }}>
        <h4 className="fw-300 c-grey-900 mB-40">LoginAdmin</h4>
        <form>
          <div className="form-group">
            <label className="text-normal text-dark">Username</label>
            <input type="email" onChange={(e) => { setDetails({ ...details, email: e.target.value }) }} className="form-control" placeholder="example@domain.com" />
          </div>
          <div className="form-group">
            <label className="text-normal text-dark">Password</label>
            <input type="password" onChange={(e)=>{setDetails({...details, password: e.target.value})}} className="form-control" placeholder="Password" />
          </div>
          <div className="form-group">
            <div className="peers ai-c jc-sb fxw-nw">
              <div className="peer">
                <div className="checkbox checkbox-circle checkbox-info peers ai-c">
                  <input type="checkbox" id="inputCall1" name="inputCheckboxesCall" className="peer" />
                  <label htmlFor="inputCall1" className="peers peer-greed js-sb ai-c"><span className="peer peer-greed">Remember Me</span></label>
                </div>
              </div>
              <div className="peer">
                <button onClick={loginAdmin} className="btn btn-primary">Login</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>


  )
}