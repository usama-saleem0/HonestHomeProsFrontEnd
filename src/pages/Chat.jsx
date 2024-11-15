import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { io, Socket } from 'socket.io-client';
import { baseurl } from "../BaseUrl";
import Createpopup from "../components/Popup-site/Createpopup";
import Quotepopup from "../components/Popup-site/Quotepopup";
import Installmentpopup from "../components/Popup-site/Installmentpopup";
import { useDispatch, useSelector } from "react-redux";
import { get_single_job_details } from "../Redux/Features/vendorService";
import logo from "../assets/Images/dashlogo.png";

import mypic from "../assets/Images/ScheduleProjectsimg.png";
import { ToastContainer } from "react-toastify";
const Chat = () => {

    const {id,customerid}= useParams()

    const formatTime1 = (timeString) => {
        const [hours, minutes] = timeString.split(":");
        const hour = parseInt(hours, 10);
        const minute = parseInt(minutes, 10);
        const suffix = hour >= 12 ? "PM" : "AM";
        const formattedHour = hour % 12 || 12;
        return `${formattedHour}:${minute < 10 ? "0" + minute : minute} ${suffix}`;
      };
      
      const DateFormatCustom = (date) => {
        let x = date;
      
        const month = [
          "ts",
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ];
      
        const mm = x.split("-")[1];
      
        const yy = x.split("-")[0];
      
        const dd = x.split("-")[2];
      
        const y = mm[0].includes("0") ? mm.split("0")[1] : mm;
      
        // console.log(y)
      
        const  final_date= month[y]+" "+ dd+" "+ yy
      
        return final_date;
      
        // console.log(dd,month[y],yy)
      };

    console.log("chatttttt",id)
    const userid= localStorage.getItem('userId')

    const dispatch = useDispatch()

    const  { get_matching_customer_data,vendor_profile_data
    } = useSelector((state)=>state.vendorAuth)

    const SocketRef = useRef(null);
    const [senderId, setSenderId] = useState(userid); // Example sender ID, replace with actual logic
    const [receiverId, setReceiverId] = useState(customerid);
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [messages1, setMessages1] = useState([
        { sender: "Dylan", content: "Hey there, how are you?" },
        { sender: "Albert", content: "I'm doing well, how about you?" },
        { sender: "Dylan", content: "I'm great! What's going on?" },
        { sender: "Albert", content: "Just working on a new project." },
        { sender: "Dylan", content: "That's awesome, tell me more about it!" },
    ]);

    const fetchData = async () => {
        try {

            console.log("fetch")
            SocketRef.current = io(`${baseurl}`);

            // Set up socket listeners for new messages
            SocketRef.current.on("send_message", (incomingMessage) => {
                setMessages((prevMessages) => [...prevMessages, incomingMessage]);
            });

            // Listen for previous messages
            SocketRef.current.on("previous_messages", (previousMessages) => {
                console.log(previousMessages, "previous messages")
                setMessages(previousMessages);
            });

            // Request previous messages when the component mounts
            SocketRef.current.emit("get_previous_messages", {
                sender: senderId,
                receiver: receiverId,
            });
        } catch (error) {
            console.error('Error fetching data from server:', error);
        }
    };

    useEffect(() => {
        fetchData();
        dispatch(get_single_job_details(id));
    
        return () => {
            if (SocketRef.current) {
                SocketRef.current.off("send_message");
                SocketRef.current.off("previous_messages");
                SocketRef.current.disconnect();
                SocketRef.current = null;
            }
        };
    }, [id, dispatch]);

    
    const handleSendMessage = () => {

        console.log(message, "message")


        if (message.trim()) {
            const newMessage = {
                sender: senderId,
                receiver: receiverId,
                message: message,
            };

            // Emit message to server
            SocketRef.current.emit('send_message', newMessage);

            // Clear input field
            setMessage('');
        }
    };

    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [isPopupVisible2, setIsPopupVisible2] = useState(false);
    const [isPopupVisible3, setIsPopupVisible3] = useState(false);

    // Function to toggle popup visibility
    const handleViewClick = () => {
        setIsPopupVisible(true); // Show the popup
    };

    // Function to close the popup
    const handleClosePopup = () => {
        setIsPopupVisible(false); // Hide the popup
    };

    const handleViewClick2 = () => {
        setIsPopupVisible2(true); // Show the popup
    };

    // Function to close the popup
    const handleClosePopup2 = () => {
        setIsPopupVisible2(false); // Hide the popup
    };



    const handleViewClick3 = () => {
        setIsPopupVisible3(true); // Show the popup
    };

    // Function to close the popup
    const handleClosePopup3 = () => {
        setIsPopupVisible3(false); // Hide the popup
    };



    const handleSendPickTimeMessage=(data)=>{

        console.log(data,"yea boi")

        CustomSendMessage(`Time Picked Successfully Date: ${DateFormatCustom(data.date)} Time: ${formatTime1(data.time)}`)

    }



    const handleCreateQuoteMessage=(data)=>{

        console.log(data,"yea boi2")

        CustomSendMessage(`Quote Created Successfully Description: ${data.duration} Job Time: ${data.jobtime} Cost: ${data.cost}`)

    }




    


    const CustomSendMessage = (message) => {

        console.log(message, "message")


        if (message.trim()) {
            const newMessage = {
                sender: senderId,
                receiver: receiverId,
                message: message,
            };

            // Emit message to server
            SocketRef.current.emit('send_message', newMessage);

            // Clear input field
            setMessage('');
        }
    };


    const customerName = localStorage.getItem('CustomerName')

    return (
        <>

        <ToastContainer/>
            <div className="Chat-sec">
                <div className="Chat-main">
                    <div className="Chat-head">
                        <Link
                            className="none-list"
                            to="/dashboard"
                            onClick={() => handleChangeIndex(5)}
                        >
                            <button><svg xmlns="http://www.w3.org/2000/svg" width="44" height="30" viewBox="0 0 44 30" fill="none">
                                <path d="M0.585785 13.5858C-0.195263 14.3668 -0.195263 15.6332 0.585785 16.4142L13.3137 29.1421C14.0948 29.9232 15.3611 29.9232 16.1421 29.1421C16.9232 28.3611 16.9232 27.0948 16.1421 26.3137L4.82843 15L16.1421 3.68629C16.9232 2.90524 16.9232 1.63891 16.1421 0.857864C15.3611 0.0768156 14.0948 0.0768156 13.3137 0.857864L0.585785 13.5858ZM44 13L2 13V17L44 17V13Z" fill="#F37B3C" />
                            </svg></button>

                        </Link>
                        <h2>Hello {vendor_profile_data?.Name}</h2>
                    </div>

                    <div className="Chat-body">
                        <div className="Chat-box">
                            <div className="Chat-box-head">
                                <h2>{customerName?customerName:'Customer'} </h2>

                                <div className="Dylan-box-head-btn">
                                    <button onClick={handleViewClick}>To Pick a Time</button>
                                    <button onClick={handleViewClick2}>Create Quote</button>
                                    {/* <button onClick={handleViewClick3}>Create Installment</button> */}
                                </div>
                            </div>

                            <div className="Chat-box-body">

                                <div className="chat-body-ar">
                                <div className="messages-container-ar">
  <div className="main-scrllo-box-chart" style={styles.messageList}>
    {messages.map((item, i) => (
      <div className="gap-part"
        key={i}
        style={
          item.sender === senderId
            ? styles.myMessageContainer
            : styles.theirMessageContainer
        }
      >
        {/* <div className="chat-message-box"> */}
        <div className={item.sender === senderId ? "chat-message-box" : "chat-message-box more-box-chart"}>
          <p>
            {item.sender === senderId ? "You" : "Customer"}: {item.message}
          </p>
          <div className="chat-bubble-tail"></div>
        </div>
        <img src={logo} alt="Sender" className="sender-image" />
      </div>
    ))}
  </div>
</div>

                                </div>
                                <div className="Chat-box-type-messeag">
                                    <div className="Chat-box-type-messeag-in-box">
                                        <input
                                            type="text"
                                            placeholder="Type Message"
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                        />


                                    </div>
                                    <button className="Chat-box-type-messeag-btn" onClick={handleSendMessage}>
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 488.721 488.721"
    style={{ enableBackground: "new 0 0 488.721 488.721" }}
    xmlSpace="preserve"
  >
    <g>
      <g>
        <path
          d="M483.589,222.024c-5.022-10.369-13.394-18.741-23.762-23.762L73.522,11.331C48.074-0.998,17.451,9.638,5.122,35.086
               C-1.159,48.052-1.687,63.065,3.669,76.44l67.174,167.902L3.669,412.261c-10.463,26.341,2.409,56.177,28.75,66.639
               c5.956,2.366,12.303,3.595,18.712,3.624c7.754,0,15.408-1.75,22.391-5.12l386.304-186.982
               C485.276,278.096,495.915,247.473,483.589,222.024z M58.657,446.633c-8.484,4.107-18.691,0.559-22.798-7.925
               c-2.093-4.322-2.267-9.326-0.481-13.784l65.399-163.516h340.668L58.657,446.633z M100.778,227.275L35.379,63.759
               c-2.722-6.518-1.032-14.045,4.215-18.773c5.079-4.949,12.748-6.11,19.063-2.884l382.788,185.173H100.778z"
        />
      </g>
    </g>
  </svg>
</button>


                                </div>
                            </div>
                        </div>

                        <div className="Chat-Details">
                            <h2>Vendor Instructions</h2>

                            <div className="Details-para-box">
                                <p>1. If you are a cleaner/landscaper pick a time to confirm availability right after confirming availability, create a quote and this quote will be shown to the customer.
                                </p>
                                <p>2. ⁠If you are any category outside of cleaner/landscaper pick a time first and this is the time you will show up at the house to inspect what is wrong. After inspection, go back to honest home hub and press create a quote which will be shown to the customer. </p>

                                <p>3. If the job has emergency in the description then select the soonest time you can come out and complete the job along with the price you want to charge to complete the job. If you can’t quote it immediately then put the traveling cost as the quote and you can charge the customer at the job site.
                                </p>

                                <p>4. We take a $50 dollar fee for jobs under $500 and 10% above $500. There is no fee to give a quote and we only charge on jobs you actually do.





</p>
                                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at dui et lorem </p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at dui et lorem </p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at dui et lorem </p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Conditionally render the Popup2 component */}
            {isPopupVisible && (
                <div className="popup-View-box">
                    <Createpopup handleClose={handleClosePopup}  handleSendPickTimeMessage={handleSendPickTimeMessage}/>
                </div>
            )}


            {isPopupVisible2 && (
                <div className="popup-View-box">
                    <Quotepopup handleClose={handleClosePopup2}  handleCreateQuoteMessage={handleCreateQuoteMessage}/>
                </div>
            )}


            {isPopupVisible3 && (
                <div className="popup-View-box">
                    <Installmentpopup handleClose={handleClosePopup3} />
                </div>
            )}
        </>
    )



}


export default Chat










// display: flex;
//     justify-content: flex-end;
//     margin-bottom: 10px;
//     flex-direction: row-reverse;

const styles = {
    messageList: {
        paddingBottom: '20px',
    },
    myMessageContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
        marginBottom: '10px',
        
    },
    theirMessageContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
        marginBottom: '10px',
        flexDirection:'row-reverse'
    },
    myMessage: {
        backgroundColor: '#DCF8C6',
        padding: '10px',
        borderRadius: '10px',
        maxWidth: '60%',
        wordWrap: 'break-word',
    },
    theirMessage: {
        backgroundColor: '#ECECEC',
        padding: '10px',
        borderRadius: '10px',
        maxWidth: '60%',
        wordWrap: 'break-word',
    },
    messageText: {
        margin: 0,
        fontSize: '14px',
    },
};


























































