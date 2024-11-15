


import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { baseurl } from "../BaseUrl";
import { io } from "socket.io-client";
 

const PandaDocPage = ({ handleClose }) => {
  // State to manage form data
 


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

            handleSendMessage()
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


  const SocketRef = useRef(null);

  
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
        // SocketRef.current.emit("get_previous_messages", {
        //     sender: senderId,
        //     receiver: receiverId,
        // });
    } catch (error) {
        console.error('Error fetching data from server:', error);
    }
};

useEffect(() => {
    fetchData();
 

    return () => {
        if (SocketRef.current) {
            SocketRef.current.off("send_message");
            SocketRef.current.off("previous_messages");
            SocketRef.current.disconnect();
            SocketRef.current = null;
        }
    };
}, []);

 
const handleSendMessage = () => {

  


    
        const newMessage = {
         
            message: 'FORM FILLED',
        };

        // Emit message to server
        SocketRef.current.emit('send_pandadoc', newMessage);

   
    
};
 


 
  return (
    <>
    
    {/* <button onClick={()=>handleSendMessage()}>
        click
    </button> */}
    


     
        <div className="panadoc pandasingle" style={{width:'90%',display:'flex',alignItems:'center',flexDirection:'column',justifyContent:'center'}}>
          {/* <FormComponent/> */}
          <div id="form-container-ef719d73-0aec-4e1a-88c6-509933b68a2a"></div>
        </div>
      
    </>
  );
};

export default PandaDocPage;
