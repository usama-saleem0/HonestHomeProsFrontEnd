// import React, { useState } from "react";


// const Drop1 = () => {

//     const [selectedOption, setSelectedOption] = useState('Helpful Blogs');
//     const [isOpen, setIsOpen] = useState(false);

//     const handleOptionClick = (option) => {
//         setSelectedOption(option);
//         setIsOpen(false);
//     };


//     return (
//         <>
//     <div className="select-station-drop">


//     <div onClick={() => setIsOpen(!isOpen)} className="dropdwon-1-list">
//                 {selectedOption}
//                 <svg xmlns="http://www.w3.org/2000/svg" width="12" height="6" viewBox="0 0 12 6" fill="none">
//   <path d="M6.00002 6C5.86053 6 5.72089 5.95113 5.61439 5.8535L0.159852 0.853527C-0.053284 0.658153 -0.053284 0.34178 0.159852 0.14653C0.372988 -0.0487185 0.718124 -0.0488435 0.931123 0.14653L6.00002 4.79301L11.0689 0.14653C11.2821 -0.0488435 11.6272 -0.0488435 11.8402 0.14653C12.0532 0.341904 12.0533 0.658278 11.8402 0.853527L6.38566 5.8535C6.27916 5.95113 6.13952 6 6.00002 6Z" fill="white"/>
// </svg>
//             </div>
                            
//                                     {isOpen && (
//                                         <ul className="options-list" >
//                                             <li onClick={() => handleOptionClick('Option1')} className="select-option">
//                                              Option1
//                                             </li>
//                                             <li onClick={() => handleOptionClick('Option2')} className="select-option">
//                                             Option2
//                                             </li>
//                                             <li onClick={() => handleOptionClick('Option3')} className="select-option">
//                                             Option3
//                                             </li>
//                                             <li onClick={() => handleOptionClick('Option4')} className="select-option">
//                                             Option4
//                                             </li>
//                                             <li onClick={() => handleOptionClick('Option5')} className="select-option">
//                                             Option5
//                                             </li>
//                                         </ul>
//                                     )}
//                                 </div>
//         </>
//     )



// }


// export default Drop1


import React, { useState } from "react";

const Drop1 = () => {
    const [selectedOption, setSelectedOption] = useState('Helpful Blogs');
    const [isOpen, setIsOpen] = useState(false);

    const options = [
        { label: "For Customers", href: "https://homeservicepatrol.com/" },
        { label: "For Cleaners", href: "https://cleanerdreams.com/" },
        { label: "For Landscapers", href: "https://landscaperdreams.com/" },
        { label: "For HVAC Pros", href: "https://hvacdreams.com/" },
        { label: "For Plumbers", href: "https://plumdogmillionaires.com/" },
        { label: "For Roofers", href: "https://rooferdreams.com/" }
    ];

    return (
        <div className="select-station-drop">
            <div onClick={() => setIsOpen(!isOpen)} className="dropdwon-1-list">
                {selectedOption}
             <button> <svg xmlns="http://www.w3.org/2000/svg" width="12" height="6" viewBox="0 0 12 6" fill="none">
                    <path d="M6.00002 6C5.86053 6 5.72089 5.95113 5.61439 5.8535L0.159852 0.853527C-0.053284 0.658153 -0.053284 0.34178 0.159852 0.14653C0.372988 -0.0487185 0.718124 -0.0488435 0.931123 0.14653L6.00002 4.79301L11.0689 0.14653C11.2821 -0.0488435 11.6272 -0.0488435 11.8402 0.14653C12.0532 0.341904 12.0533 0.658278 11.8402 0.853527L6.38566 5.8535C6.27916 5.95113 6.13952 6 6.00002 6Z" fill="white"/>
                </svg></button>
            </div>
            
            {isOpen && (
                <ul className="options-list">
                    {options.map((option, index) => (
                        <li key={index} className="select-option">
                            <a
                                href={option.href}
                                style={{textDecoration:'none',color:'white'}}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => {
                                    setSelectedOption(option.label);
                                    setIsOpen(false);
                                }}
                            >
                                {option.label}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Drop1;
