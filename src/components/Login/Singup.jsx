// import { Link } from "react-router-dom";
// import side from "../../assets/Images/Profile-img.png";
// const Singup = ({ handleClose }) => {


//   return (
//     <>
//       <div className="Login-sec">
//         <div className="Login-main-box">
//           <div className="Login-tital">
//             <div className="form">



//               <div className="Login-tital-heading">
//                 <h2>Sign Up</h2>
//               </div>

//               <div className="Login-tital-input-box">
//                 <div className="Login-tital-input-group  with-none">
//                   <input type="name" placeholder="Name" />
//                 </div>

//                 <div className="Login-tital-input-group with-none">
//                   <input type="email" placeholder="Enter your email" />
//                 </div>


//                 <div className="Login-tital-input-group with-none">
//                   <input type="Password" placeholder="Password" />
//                 </div>


//                 <div className="Login-tital-input-group with-none">
//                   <input type="Password" placeholder="Confirm Password" />
//                 </div>


//                 <div className="Login-tital-input-group with-none">
//                   <input type="type" placeholder="Address" />
//                 </div>


//                 <div className="Login-tital-input-group with-none">
//                   <input type="number" placeholder="Zip Code" />
//                 </div>

//                 <div className="Login-tital-input-group with-none">
//                   <input type="number" placeholder="Phone No" />
//                 </div>
//               </div>


//               <div className="Sing-up-main-box">
//                 <h2>Select Your Service You Wanna Provide</h2>

//                 <div className="Sing-up-cheack-main-box">

//                   <div className="Sing-up-cheack-list">
//                     <input type="checkbox" />
//                     <p>Heating, Ventilation & Air Conditioning</p>
//                   </div>

//                   <div className="Sing-up-cheack-list">
//                     <input type="checkbox" />
//                     <p>
//                       Water Heater</p>
//                   </div>

//                   <div className="Sing-up-cheack-list">
//                     <input type="checkbox" />
//                     <p>
//                       Roofing</p>
//                   </div>

//                   <div className="Sing-up-cheack-list">
//                     <input type="checkbox" />
//                     <p>
//                       Plumbing</p>
//                   </div>

//                   <div className="Sing-up-cheack-list">
//                     <input type="checkbox" />
//                     <p>
//                       Remodeling</p>
//                   </div>

//                   <div className="Sing-up-cheack-list">
//                     <input type="checkbox" />
//                     <p>
//                       Landscaping</p>
//                   </div>

//                   <div className="Sing-up-cheack-list">
//                     <input type="checkbox" />
//                     <p>
//                       Cleaning</p>
//                   </div>

//                   <div className="Sing-up-cheack-list">
//                     <input type="checkbox" />
//                     <p>
//                       Fencing</p>
//                   </div>

//                   <div className="Sing-up-cheack-list">
//                     <input type="checkbox" />
//                     <p>Handyman

//                     </p>
//                   </div>

//                 </div>
//               </div>

//               <div className="Login-tital-btn-box">
//                 <Link
//                   className="none-list"
//                   to="/dashboard"
//                   onClick={() => handleChangeIndex(5)}
//                 >
//                   <button>Sing up</button>
//                 </Link>
//               </div>

//               <div className="Login-tital-site-out">

//               <div className="Sing-up-cheack-list">
//                     <input type="checkbox" />
//                     <p>
//                     Agree With <span>Terms & Conditions</span>

//                     </p>
//                   </div>
//               </div>
//             </div>
//           </div>

//           <div className="Login-img">
//             <img src={side} alt="" />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Singup;








import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import side from "../../assets/Images/Profile-img.png";
import { toast, ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { create_vendor_async_service } from "../../Redux/Features/vendorService";
import { asyncStatus } from "../../Redux/utils/async_status";
import { setVendorIdle } from "../../Redux/Features/vendorSlice";

const Signup = ({ handleClose }) => {
  // State to manage form data

  const dispatch = useDispatch()
  const navigation = useNavigate()


  const [formData, setFormData] = useState({
    type:'vendor',
    Name: "",
    email: "",
    password: "",
    confirmPassword: "",
    Home_Address: "",
    zipCode: "",
    phoneno: "",
    selected_queries: "",  // Store selected service as a single string
    agreeToTerms: false,
    Profile_Image:'asd',
    driving_license:'adas',
    vendor_profile_picture:'dasd'
  });
  const [show, setShow] = useState(true);
  useEffect(() => {
    const config = {
      nodeId: "form-container-ef719d73-0aec-4e1a-88c6-509933b68a2a",
      width: "100%",
      height: "700px",
      url: "https://eform.pandadoc.com/?eform=b2e3106a-305a-48b9-a100-f6d047d47236",
      events: {
        loaded: function () {},
        started: function (data) {
          if (data.started) {
            console.log("Form is filled.");
            setShow(false);
          } else {
            console.log("Form is not filled.");
          }
        },
        completed: function (data) {
          // Check if the form is filled
          if (data.completed) {
            console.log("Form is filled.");
          } else {
            console.log("COMPLETED.");
            setShow(false);
          }
        },
        exception: function (data) {},
      },
      data: {},
    };
    const dataQueryString = config.data
      ? Object.keys(config.data)
          .map(function (key) {
            return (
              "&" +
              key +
              "=" +
              encodeURIComponent(JSON.stringify(config.data[key]))
            );
          })
          .join("")
      : "";
    const iframe = document.createElement("iframe");
    iframe.frameBorder = 0;
    iframe.src = config.url + dataQueryString;
    if (config.nodeId) {
      const node = document.getElementById(config.nodeId);
      if (node) {
        node.style.height = config.height;
        node.style.width = config.width;
        iframe.height = "100%";
        iframe.width = "100%";
        node.appendChild(iframe);
      }
    } else {
      iframe.height = config.height;
      iframe.width = config.width;
      document.body.appendChild(iframe);
    }
    const eventMethod = window.addEventListener
      ? "addEventListener"
      : "attachEvent";
    const messageEvent =
      eventMethod === "attachEvent" ? "onmessage" : "message";
    window[eventMethod](
      messageEvent,
      function (e) {
        if (
          e &&
          e.data &&
          config &&
          iframe &&
          e.source === iframe.contentWindow
        ) {
          try {
            const message = JSON.parse(e.data);
            if (message && message.event) {
              const event = message.event.replace("embed.form.", "");
              const callback = config.events ? config.events[event] : null;
              if (callback) {
                callback(message.data);
              }
            }
          } catch (e) {}
        }
      },
      false
    );
    // Clean up the iframe when component unmounts
    return () => {
      if (config.nodeId) {
        const node = document.getElementById(config.nodeId);
        if (node) {
          node.innerHTML = "";
        }
      } else {
        document.body.removeChild(iframe);
      }
    };
  }, []);
  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox" && name === "agreeToTerms") {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };


  const { vendor_status,
    vendor_data,
    vendor_error } = useSelector((state) => state.vendorAuth)

  const handleSubmit = (e) => {
    e.preventDefault();
    const { password, confirmPassword } = formData;

    if (!formData.agreeToTerms) {
      toast.error("Please agree to the terms and conditions."); // Toast alert
    } else if (!formData.selected_queries) {
      toast.error("Please select a service."); // Toast alert
    } else if (password !== confirmPassword) {
      toast.error("Password and Confirm Password must match!"); // Toast alert
    } else {
      // Submit form data
      console.log("Form Submitted", formData);
      dispatch(create_vendor_async_service(formData))
    }
  };



  useEffect(() => {
    if (vendor_status === asyncStatus.SUCCEEDED) {
        navigation('/dashboard')
        window.location.reload()
        dispatch(setVendorIdle(setVendorIdle))
    }
}, [, vendor_status])

  return (
    <>
    <ToastContainer/>
      <div className="Login-sec">
        <div className="Login-main-box">
          <div className="Login-tital">
            <form onSubmit={handleSubmit}>
              <div className="Login-tital-heading">
                <h2>Sign Up</h2>
              </div>

              <div className="Login-tital-input-box">
                <div className="Login-tital-input-group with-none">
                  <input
                    type="text"
                    name="Name"
                    placeholder="Name"
                    value={formData.Name}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="Login-tital-input-group with-none">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="Login-tital-input-group with-none">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="Login-tital-input-group with-none">
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="Login-tital-input-group with-none">
                  <input
                    type="text"
                    name="Home_Address"
                    placeholder="Address"
                    value={formData.Home_Address}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="Login-tital-input-group with-none">
                  <input
                    type="number"
                    name="zipCode"
                    placeholder="Zip Code"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="Login-tital-input-group with-none">
                  <input
                    type="tel"
                    name="phoneno"
                    placeholder="Phone No"
                    value={formData.phoneno}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="Sing-up-main-box">
                <h2>Select Your Service You Wanna Provide</h2>

                <div className="Sing-up-cheack-main-box">
                  {[
                    "Heating, Ventilation & Air Conditioning",
                    "Water Heater",
                    "Roofing",
                    "Plumbing",
                    "Remodeling",
                    "Landscaping",
                    "Cleaning",
                    "Fencing",
                    "Handyman",
                  ].map((service) => (
                    <div className="Sing-up-cheack-list" key={service}>
                      <input
                        type="radio"
                        name="selected_queries"
                        value={service}
                        onChange={handleInputChange}
                        checked={formData.selected_queries === service}
                        required
                      />
                      <p>{service}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="Sing-up-cheack-list">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  onChange={handleInputChange}
                  checked={formData.agreeToTerms}
                  required
                />
                <p>
                  Agree With <span> <Link className="none-list"
            to="/CustomerPolicy"
            onClick={() => handleChangeIndex(5)}  > Terms & Conditions </Link></span>
                </p>
              </div>

              <div className="Login-tital-btn-box">
                <button type="submit">Sign up</button>
              </div>
            </form>
          </div>

          <div className="Login-img">
            <img src={side} alt="Signup Visual" />
          </div>
        </div>
      </div>


      {show && (
        <div className="panadoc">
          {/* <FormComponent/> */}
          <div id="form-container-ef719d73-0aec-4e1a-88c6-509933b68a2a"></div>
        </div>
      )}
    </>
  );
};

export default Signup;
