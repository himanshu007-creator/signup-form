import { useState, useRef, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import WomanImg from "../assets/woman.png";
import ManImg from "../assets/man.png";
import UnknownImg from "../assets/unknown.jfif";
import LgbtqImg from "../assets/lgbtq.jpeg";
import "../index.css";
import Msg, { ErrMsg, ScsMsg } from "./Msg";

export default function Form() {
  const [fstat, setFstat] = useState("hdn");
  const [nam, setName] = useState("");
  const [pas1, setP1] = useState("");
  const [pas2, setP2] = useState("");
  const [email, setEmail] = useState("");
  const [phn, setPhn] = useState("");
  const [gender, setGender] = useState("Unknown");
  const GenderCh = (e) => {
    var g = e.target.value;
    setGender(g);
  };

  function Mcomp(msg) {
    if (fstat === "hdn") {
      return <Msg />;
    } else if (fstat === "wr") {
      return <ErrMsg />;
    } else if (fstat === "com") {
      return <ScsMsg />;
    }
  }
  const ph = (e) => {
    setPhn(e.target.value);
  };
  const em = (e) => {
    setEmail(e.target.value);
  };
  const fn = (e) => {
    setName(e.target.value);
  };

  const p1st = (e) => {
    var p = e.target.value;
    setP1(p);
  };
  const p2st = (e) => {
    var p = e.target.value;
    setP2(p);
  };
  const name = useRef();
  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  const validatePhn = (inputtxt) => {
    const re = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (re.test(String(inputtxt).toLowerCase())) {
      return true;
    } else {
      return false;
    }
  };
  const validate = () => {
    if (
      pas1 === "" ||
      pas2 === "" ||
      nam === "" ||
      phn === "" ||
      email === ""
    ) {
      setFstat("wr");
    } else if (
      !(
        pas1 === "" &&
        pas2 === "" &&
        nam === "" &&
        phn === "" &&
        email === ""
      ) &&
      validateEmail(email) &&
      validatePhn(phn)
    ) {
      setFstat("com");
    }
  };
  useEffect(() => {
    AOS.init();
    AOS.refresh();

    name.current.focus();
  }, []);
  return (
    <div>
      <div data-aos="fade-right" className="App">
        {Mcomp()}
        {/* <Inp type="text" onChange={badlav} ref={hehe} dummy="ki hal a" /> */}
        <h2>Enter your Name</h2>
        <input onChange={fn} type="text" ref={name} placeholder="John Doe" />
        <h2>Enter your Gender </h2>
        <select onChange={GenderCh}>
          <option value="none" selected disabled hidden>
            Select an Option
          </option>{" "}
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="LGBTQ">Non-binary</option>
        </select>
        <h2>Enter your Email</h2>
        <input type="email" onChange={em} placeholder="John Doe" />
        <h2>Enter your Phone no</h2>
        <input onChange={ph} type="tel" placeholder="91XXXXXXXXXX" />
        <h2>Enter your Password</h2>
        <input type="password" onChange={p1st} placeholder="Password" />
        <h2>Confirm password</h2>
        <input type="password" onChange={p2st} placeholder="Same as above" />
        <br />
        <br />
        <button onClick={validate}>Sign up</button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button>Log in</button>
      </div>
      <div id="cont2" data-aos="fade-left">
        <h1>Form</h1>
        <img
          style={{ shadow: "2px 2px 10px  black" }}
          src={
            gender === "Unknown"
              ? UnknownImg
              : gender === "Male"
              ? ManImg
              : gender === "Female"
              ? WomanImg
              : LgbtqImg
          }
          width="100px"
          height="100px"
          alt="haha"
        />
        <h2>Name</h2>
        <p>{nam === "" ? "John Doe" : nam}</p>
        <h2>Email</h2>
        <p>{email === "" ? "Doe@gmail.com" : email}</p>
        <h2>Phone Number</h2>
        <p>{phn === "" ? "91XXXXXXXXXX" : phn}</p>
      </div>
    </div>
  );
}
