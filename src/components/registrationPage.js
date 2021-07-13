import React, { useState, useEffect } from "react";
import "axios";
import axios from "axios";
import { validateInfo } from "../validationInfo";
// import { Login } from "./loginPage";

function Registration(props) {
  const [errors, setErrors] = useState({});
  const [user, setUser] = useState({
    Name: "",
    Phone: "",
    Address: "",
    email: "",
    Password: "",
    ConfirmPassword: "",
  });

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setUser({ ...user, [name]: value });
  }

  async function apiCaller(reqBody) {
    try {
      const apiUrl = "https://fitnessappauth.herokuapp.com/api/users/Register";
      const res = await axios.post(apiUrl, reqBody);
      console.log(res.data.SuccessMessage);
      return res;
    } catch (e) {
      console.log(`apicaller error ${e}`);
    }
  }

  async function handleSubmit(event) {
    setErrors(validateInfo(user));
    try {
      event.preventDefault();
      const reqBody = {
        Name: user.Name,
        email: user.email,
        Password: user.Password,
        Phone: user.Phone,
        Address: user.Address,
      };
      const res = await apiCaller(reqBody);
      console.log(res);
      console.log(res.data);
      console.log(res.status);
      if (res.status == "200") {
        console.log("200 block");
        alert("Registratiion successful!");
        props.history.push("/");
      } else {
        console.log("else of 200 block");
        alert("Registratiion Failed!");
      }
    } catch (e) {
      alert("Registratiion Failed!");
      console.log(`error inside handlersubmit ${e}`);
    }
  }

  return (
    <>
      <main>
        <section className="absolute w-full h-full">
          <div
            className="absolute top-0 w-full h-full bg-gray-900"
            style={{
              backgroundImage:
                "url(" +
                require("./../assets/img/register_bg_2.png").default +
                ")",
              backgroundSize: "100%",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div className="container mx-auto px-4 h-full">
            <div className="flex content-center items-center justify-center h-full">
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
                  <div className="rounded-t mb-0 px-6 py-6"></div>
                  <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    <div className="text-gray-500 text-center mb-3 font-bold">
                      <small>Please, register with valid email account</small>
                    </div>
                    <form onSubmit={handleSubmit}>
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Name
                        </label>
                        <input
                          onChange={handleChange}
                          name="Name"
                          value={user.Name}
                          type="text"
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Name"
                          style={{ transition: "all .15s ease" }}
                        />
                        {errors.Name && <p>{errors.Name}</p>}
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Phone
                        </label>
                        <input
                          onChange={handleChange}
                          name="Phone"
                          value={user.Phone}
                          type="tel"
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Phone"
                          style={{ transition: "all .15s ease" }}
                        />
                        {errors.Phone && <p>{errors.Phone}</p>}
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Address
                        </label>
                        <input
                          onChange={handleChange}
                          name="Address"
                          value={user.Address}
                          type="text"
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Address"
                          style={{ transition: "all .15s ease" }}
                        />
                        {errors.Address && <p>{errors.Address}</p>}
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Email
                        </label>
                        <input
                          onChange={handleChange}
                          name="Email"
                          value={user.Email}
                          type="email"
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Email"
                          style={{ transition: "all .15s ease" }}
                        />
                        {errors.Email && <p>{errors.Email}</p>}
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Password
                        </label>
                        <input
                          onChange={handleChange}
                          name="Password"
                          value={user.Password}
                          type="password"
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Password"
                          style={{ transition: "all .15s ease" }}
                        />
                        {errors.Password && <p>{errors.Password}</p>}
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Confirm Password
                        </label>
                        <input
                          onChange={handleChange}
                          name="ConfirmPassword"
                          value={user.ConfirmPassword}
                          type="password"
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Confirm Password"
                          style={{ transition: "all .15s ease" }}
                        />
                        {errors.ConfirmPassword && (
                          <p>{errors.ConfirmPassword}</p>
                        )}
                      </div>

                      <div>
                        <label className="inline-flex items-center cursor-pointer">
                          <input
                            id="customCheckLogin"
                            type="checkbox"
                            className="form-checkbox border-0 rounded text-gray-800 ml-1 w-5 h-5"
                            style={{ transition: "all .15s ease" }}
                          />
                          <span className="ml-2 text-sm font-semibold text-gray-700">
                            Remember me
                          </span>
                        </label>
                      </div>

                      <div className="text-center mt-6">
                        <button
                          // onClick={() => {
                          //   props.history.push("/");
                          // }}
                          className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                          type="submit"
                          style={{ transition: "all .15s ease" }}
                        >
                          Register
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="flex flex-wrap mt-6">
                  <div className="w-1/2 text-right">
                    <a
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      className="text-gray-300"
                    >
                      <small>Create new account</small>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export { Registration };
