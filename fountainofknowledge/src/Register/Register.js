import Header from "../header/Header";
import React from "react";
import "./Register.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("PLease Enter Full Name");
  const [isName, setIsName] = useState(false);
  const [isNameFocus, setIsNameFocus] = useState(true);
  const [ip_email, setEmail] = useState("Please Enter a valid Email ID");
  const [isEmail, setIsEmail] = useState(false);
  const [isEmailFocus, setIsEmailFocus] = useState(true);
  const [selectedDate, setSelectedDate] = useState();
  const [valDate, setValDate] = useState(false);
  const [focusDate, setFocusDate] = useState(true);
  const [guestNumber, setguestNumber] = useState("");
  const [isGuest, setIsGuest] = useState(false);
  const [isGuestFocus, setIsGuestFocus] = useState(true);
  const [selectedTime, setSelectedTime] = useState("Select Time...");
  const [selectedTimeOption, setSelectedTimeOption] = useState("");
  const [isTime, setIsTime] = useState(false);
  const [isTimeFocus, setisTimeFocus] = useState(true);
  const [selectedOcassion, setSelectedOcassion] = useState("Select Ocassion");
  const [isOcassion, setIsOcassion] = useState(false);
  const [isOcassionFocus, setIsOcassionFocus] = useState(true);
  const [selectOcassion, setSelectOcassions] = useState("");

  const occasionHandler = (e) => {
    setSelectedOcassion(e.target.value);
    setSelectOcassions(e.target.value);
    setIsOcassion(e.target.value == "Select Ocassion" ? false : true);
  };
  const ocassionBlur = () => {
    setIsOcassionFocus(false);
  };
  const timeHandler = (e) => {
    setSelectedTime(e.target.value);
    setSelectedTimeOption(e.target.value);
    setIsTime(e.target.value == "Select Time..." ? false : true);
  };

  const timeBlur = () => {
    setisTimeFocus(false);
  };

  const onCHange_name = (e) => {
    setName(e.target.value);
    setIsName(e.target.value.length > 3 ? true : false);
  };

  const focusName = () => {
    setIsNameFocus(false);
  };

  const onChange_email = (e) => {
    setEmail(e.target.value);
    setIsEmail(
      e.target.value.length > 9 &&
        e.target.value.indexOf("@") > 1 &&
        e.target.value.indexOf(".com") > 1
        ? true
        : false
    );
  };

  const email_blur = () => {
    setIsEmailFocus(false);
  };

  const dateChangeHandler = (e) => {
    const selectedDate1 = new Date(e.target.value);
    const today = new Date();
    setValDate(selectedDate1 >= today ? true : false);
    setSelectedDate(selectedDate1);
  };
  const guestHandler = (e) => {
    setguestNumber(e.target.value);
    setIsGuest(e.target.value > 0 && e.target.value < 12 ? true : false);
  };
  const guest_blur = () => {
    setIsGuestFocus(false);
  };
  const dateBlurHandler = () => {
    setFocusDate(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    isName && isEmail && valDate && isGuest && isTime && isOcassion
      ? finalFunction()
      : alert("Please Fill All The Fields Correctly");
  };

  const finalFunction = () => {
    navigate("/table/confirm");
  };

  return (
    <>
      <Header></Header>
      <div id="res_main">
        <h1>REGISTER NOW</h1>

        <form
          style={{
            display: "grid",
            Width: "400vw",
            gap: "2vw",
            width: "35vw",
          }}
          onSubmit={handleSubmit}
        >
          <label htmlFor="res-name" style={{ fontWeight: "bold" }}>
            {" "}
            Name:{" "}
          </label>

          <div>
            <input
              type="text"
              id="res-name"
              className="res_ip"
              onChange={onCHange_name}
              onBlur={focusName}
              placeholder={name}
            />
            {!isName && !isNameFocus && (
              <p className="error_msg"> * Reuired Full Name</p>
            )}
          </div>

          <label htmlFor="res-email" style={{ fontWeight: "bold" }}>
            {" "}
            Email:{" "}
          </label>

          <div>
            <input
              type="email"
              id="res-email"
              className="res_ip"
              onChange={onChange_email}
              onBlur={email_blur}
              placeholder={ip_email}
            />
            {!isEmail && !isEmailFocus && (
              <p className="error_msg"> * Please Enter a valid Email</p>
            )}
          </div>

          <label htmlFor="guests" style={{ fontWeight: "bold" }}>
            Phone Number
          </label>
          <div>
            <input
              type="number"
              placeholder="03XXXXXXXXX"
              min="1"
              max="11"
              id="guests"
              className="res_ip"
              onBlur={guest_blur}
              onChange={guestHandler}
            ></input>
            {!isGuest && !isGuestFocus && (
              <p className="error_msg">
                {" "}
                * PLease Select a Valid Number of Guests Attending{" "}
              </p>
            )}
          </div>

          <div style={{ marginLeft: "auto", marginRight: "auto" }}>
            <button
              type="submit"
              value="Make Your reservation"
              className="res_but"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
