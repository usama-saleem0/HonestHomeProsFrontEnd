import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import logo from "../../assets/Images/dashlogo.png";
import { update_vendor_profile_by_id_async_service } from "../../Redux/Features/vendorService";

const Popup1 = ({ handleClose }) => {
  const { vendor_profile_data } = useSelector((state) => state.vendorAuth);
  const [editing, setEditing] = useState(false);

  // Initial backup state representing the saved profile data
  const [formData, setFormData] = useState({
    Name: vendor_profile_data.Name || "",
    email: vendor_profile_data.email || "",
    phoneno: vendor_profile_data.phoneno || "",
    Home_Address: vendor_profile_data.Home_Address || "",
    selected_queries: vendor_profile_data.selected_queries || [],
  });

  // Temporary state for edited input values
  const [editedData, setEditedData] = useState({ ...formData });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    if (vendor_profile_data?._id) {
      dispatch(
        update_vendor_profile_by_id_async_service({
          id: vendor_profile_data._id,
          updatedData: editedData,
        })
      );
    }

    setFormData({ ...editedData });
    setEditing(false);
  };

  const handleCancel = () => {
    setEditedData({ ...formData });
    setEditing(false);
  };

  const handleChangeDropdown = (e) => {
    const selectedValue = e.target.value;
    setEditedData((prev) => ({
      ...prev,
      selected_queries: [selectedValue],
    }));
  };

  return (
    <>
      <div className="Popup1-site">
        <div className="Popup1-heading">
          <div className="Popup1-head-logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="Popup1-head-icon" onClick={handleClose}>
          <button>  <svg
              xmlns="http://www.w3.org/2000/svg"
              width="39"
              height="39"
              viewBox="0 0 39 39"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.93403 29.066C10.8006 29.9326 12.2188 29.9326 13.0854 29.066L19.5 22.6514L25.9146 29.066C26.7812 29.9326 28.1993 29.9326 29.0659 29.066C29.9325 28.1994 29.9325 26.7813 29.0659 25.9146L22.6514 19.5L29.066 13.0854C29.9326 12.2188 29.9326 10.8007 29.066 9.93411C28.1994 9.0675 26.7813 9.0675 25.9146 9.93411L19.5 16.3486L13.0854 9.93403C12.2188 9.06742 10.8007 9.06742 9.93411 9.93403C9.0675 10.8006 9.0675 12.2187 9.93411 13.0853L16.3486 19.5L9.93403 25.9146C9.06742 26.7812 9.06742 28.1994 9.93403 29.066ZM19.5 0C30.2695 0 39 8.73047 39 19.5C39 30.2695 30.2695 39 19.5 39C8.73047 39 0 30.2695 0 19.5C0 8.73047 8.73047 0 19.5 0Z"
                fill="#DC7139"
              />
            </svg></button>
          </div>
        </div>

        <div className="Popup1-body">
          <div className="Popup1-Profile-Details-tital">
            <h2>Profile Details</h2>
          </div>

          <div className="Popup1-Profile-Details-box with-gap">
            <div className="Popup1-Profile-Details-card with-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="22"
                viewBox="0 0 19 22"
                fill="none"
              >
                <path
                  d="M9.49883 0C6.35585 0 3.79883 2.55702 3.79883 5.7C3.79883 8.84298 6.35585 11.4 9.49883 11.4C12.6418 11.4 15.1988 8.84298 15.1988 5.7C15.1988 2.55702 12.6418 0 9.49883 0Z"
                  fill="white"
                />
                <path
                  d="M16.5919 15.1239C15.0314 13.5394 12.9626 12.6667 10.7667 12.6667H8.23333C6.03744 12.6667 3.96864 13.5394 2.4081 15.1239C0.855211 16.7006 0 18.7819 0 20.9845C0 21.3343 0.283564 21.6179 0.633333 21.6179H18.3667C18.7164 21.6179 19 21.3343 19 20.9845C19 18.7819 18.1448 16.7006 16.5919 15.1239Z"
                  fill="white"
                />
              </svg>
              <span>
                <h2>Full Name :</h2>
                {editing ? (
                  <input
                    type="text"
                    name="Name"
                    value={editedData.Name}
                    onChange={handleChange}
                  />
                ) : (
                  <h3>{formData.Name}</h3>
                )}
              </span>
            </div>
            <div className="Popup1-Profile-Details-card with-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="15"
                viewBox="0 0 22 15"
                fill="none"
              >
                <path
                  d="M13.8222 8.38525L12.0355 10.178C11.311 10.9051 10.0361 10.9208 9.29593 10.178L7.50914 8.38525L1.0918 14.8234C1.33067 14.9339 1.59405 14.9998 1.87405 14.9998H19.4574C19.7374 14.9998 20.0007 14.934 20.2395 14.8235L13.8222 8.38525Z"
                  fill="white"
                />
                <path
                  d="M19.4573 0H1.87396C1.59396 0 1.33059 0.0659168 1.0918 0.176375L7.94918 7.05651C7.94964 7.05696 7.95018 7.05705 7.95064 7.05751C7.95109 7.05796 7.95118 7.05859 7.95118 7.05859L10.1809 9.29567C10.4177 9.53251 10.9136 9.53251 11.1505 9.29567L13.3797 7.05896C13.3797 7.05896 13.3803 7.05796 13.3807 7.05751C13.3807 7.05751 13.3817 7.05696 13.3822 7.05651L20.2394 0.176334C20.0006 0.0658335 19.7373 0 19.4573 0Z"
                  fill="white"
                />
                <path
                  d="M0.199417 1.05054C0.0758334 1.30045 0 1.57787 0 1.87504V13.125C0 13.4222 0.0757501 13.6996 0.199375 13.9495L6.62784 7.50025L0.199417 1.05054Z"
                  fill="white"
                />
                <path
                  d="M21.1354 1.05029L14.707 7.50009L21.1354 13.9495C21.259 13.6996 21.3348 13.4221 21.3348 13.1249V1.87488C21.3348 1.57763 21.259 1.30021 21.1354 1.05029Z"
                  fill="white"
                />
              </svg>
              <span>
                <h2>Email address :</h2>

                {editing ? (
                  <input
                    type="text"
                    name="Name"
                    value={editedData.email}
                    onChange={handleChange}
                  />
                ) : (
                  <h3>{formData.email}</h3>
                )}
              </span>
            </div>

            <div className="Popup1-Profile-Details-card with-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M15.2051 13.2303C14.5517 12.5852 13.736 12.5852 13.0867 13.2303C12.5915 13.7214 12.0962 14.2125 11.6093 14.7119C11.4761 14.8492 11.3637 14.8784 11.2014 14.7868C10.881 14.612 10.5397 14.4705 10.2317 14.2791C8.79591 13.3759 7.59315 12.2148 6.52772 10.908C5.99918 10.2587 5.52889 9.56373 5.20011 8.78131C5.13352 8.62316 5.146 8.51911 5.27502 8.3901C5.77028 7.91149 6.25305 7.4204 6.73998 6.9293C7.41835 6.24677 7.41835 5.4477 6.73582 4.761C6.34877 4.36979 5.96172 3.9869 5.57467 3.59569C5.17514 3.19616 4.77976 2.79246 4.37607 2.39709C3.72267 1.76034 2.90695 1.76034 2.25771 2.40125C1.75829 2.89235 1.27968 3.39593 0.771943 3.8787C0.301659 4.32401 0.0644357 4.86921 0.014494 5.50596C-0.0645803 6.54225 0.18929 7.52028 0.547206 8.47333C1.27968 10.446 2.39505 12.1982 3.74764 13.8046C5.57467 15.9771 7.75546 17.6959 10.3066 18.9361C11.4553 19.4938 12.6456 19.9225 13.9399 19.9932C14.8305 20.0432 15.6046 19.8184 16.2247 19.1234C16.6492 18.649 17.1279 18.2161 17.5773 17.7625C18.2432 17.0883 18.2474 16.2726 17.5856 15.6067C16.7949 14.8118 16 14.021 15.2051 13.2303Z"
                  fill="white"
                />
                <path
                  d="M14.4098 9.91333L15.9455 9.65114C15.7042 8.24028 15.0383 6.96261 14.027 5.94713C12.9574 4.87754 11.6048 4.20333 10.1149 3.99524L9.89844 5.53927C11.0513 5.70158 12.1 6.22181 12.9282 7.05001C13.7107 7.83243 14.2226 8.82294 14.4098 9.91333Z"
                  fill="white"
                />
                <path
                  d="M16.8122 3.23789C15.0393 1.46496 12.7961 0.34543 10.3198 0L10.1034 1.54403C12.2426 1.84368 14.182 2.81338 15.7135 4.34077C17.166 5.79324 18.119 7.6286 18.4645 9.64707L20.0002 9.38488C19.5965 7.04594 18.4936 4.92342 16.8122 3.23789Z"
                  fill="white"
                />
              </svg>
              <span>
                <h2>Phone Number :</h2>
                {editing ? (
                  <input
                    type="text"
                    name="phoneno"
                    value={editedData.phoneno}
                    onChange={handleChange}
                  />
                ) : (
                  <h3>{formData.phoneno}</h3>
                )}
              </span>
            </div>
            <div className="Popup1-Profile-Details-card with-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="22"
                viewBox="0 0 19 22"
                fill="none"
              >
                <path
                  d="M9.49883 0C6.35585 0 3.79883 2.55702 3.79883 5.7C3.79883 8.84298 6.35585 11.4 9.49883 11.4C12.6418 11.4 15.1988 8.84298 15.1988 5.7C15.1988 2.55702 12.6418 0 9.49883 0Z"
                  fill="white"
                />
                <path
                  d="M16.5919 15.1239C15.0314 13.5394 12.9626 12.6667 10.7667 12.6667H8.23333C6.03744 12.6667 3.96864 13.5394 2.4081 15.1239C0.855211 16.7006 0 18.7819 0 20.9845C0 21.3343 0.283564 21.6179 0.633333 21.6179H18.3667C18.7164 21.6179 19 21.3343 19 20.9845C19 18.7819 18.1448 16.7006 16.5919 15.1239Z"
                  fill="white"
                />
              </svg>
              <span>
                <h2>Services :</h2>
                <h2>
                  {editing ? (
                    <>
                      <div className="labeldropdown adminjobdropdowndiv">
                        <select
                          id="dropdown"
                          value={editedData.selected_queries[0] || ""} // Ensure selected_queries has an initial value
                          onChange={handleChangeDropdown}
                          className="dropdownid"
                        >
                          <option value="">Type of Service</option>
                          <option value="Heating, Ventilation, Air Conditioning">
                            Heating, Ventilation, Air Conditioning
                          </option>
                          <option value="Water Heater">Water Heater</option>
                          <option value="Roofing">Roofing</option>
                          <option value="Plumbing">Plumbing</option>
                          <option value="Remodeling">Remodeling</option>
                          <option value="Landscaping">Landscaping</option>
                          <option value="Cleaning">Cleaning</option>
                          <option value="Fencing">Fencing</option>
                          <option value="Handyman">Handyman</option>
                        </select>
                      </div>
                      {/* <h2>Selected Type: {editedData.selected_queries[0]}</h2> */}
                    </>
                  ) : (
                    formData.selected_queries[0] // Show saved value when not editing
                  )}
                </h2>
              </span>
            </div>

            <div className="Popup1-Profile-Details-card with-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="23"
                viewBox="0 0 20 23"
                fill="none"
              >
                <path
                  d="M10.0013 0C6.00286 0 2.66797 3.22089 2.66797 7.33333C2.66797 8.89787 3.1381 10.293 4.04037 11.6003L9.4401 20.026C9.70206 20.4356 10.3011 20.4348 10.5625 20.026L15.9857 11.5716C16.8685 10.3236 17.3346 8.85809 17.3346 7.33333C17.3346 3.28973 14.0449 0 10.0013 0ZM10.0013 10.6667C8.16339 10.6667 6.66797 9.17124 6.66797 7.33333C6.66797 5.49542 8.16339 4 10.0013 4C11.8392 4 13.3346 5.49542 13.3346 7.33333C13.3346 9.17124 11.8392 10.6667 10.0013 10.6667Z"
                  fill="white"
                />
                <path
                  d="M15.2117 15.3198L11.8548 20.5681C10.9859 21.9229 9.00929 21.9184 8.14453 20.5694L4.78213 15.3212C1.82373 16.0052 0 17.2582 0 18.7556C0 21.3539 5.15236 22.7556 10 22.7556C14.8476 22.7556 20 21.3539 20 18.7556C20 17.2572 18.1737 16.0035 15.2117 15.3198Z"
                  fill="white"
                />
              </svg>
              <span>
                <h2>Address :</h2>
                {editing ? (
                  <input
                    type="text"
                    name="Home_Address"
                    value={editedData.Home_Address}
                    onChange={handleChange}
                  />
                ) : (
                  <h3>{formData.Home_Address}</h3>
                )}
              </span>
            </div>

            {!editing && <button onClick={() => setEditing(true)}>Edit</button>}

            {editing && (
              <div className="sapace-box-gap">
                <button onClick={handleCancel}>Cancel</button>
                <button onClick={handleSave}>Save</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Popup1;
