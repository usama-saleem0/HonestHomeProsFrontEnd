import { useSelector } from "react-redux";
import idlogo from "../../assets/Images/ScheduleProjectsimg.png"
import logo from "../../assets/Images/dashlogo.png";

import Star from "../../assets/Images/Star.png"


const StarRating = ({ rating }) => {
  const totalStars = 5;

  return (


    <div style={{ display: 'flex' ,flexDirection:'row',justifyContent:'flex-start'}}>
    {Array.from({ length: totalStars }, (_, index) => (
    <div className="Star-box-more"> 
    <img src={Star} alt="" 
    style={{
      filter: index < rating ? 'brightness(1) sepia(1) hue-rotate(-45deg) saturate(500%)' : 'grayscale(100%)'
    }}
    
    /> </div>

    ))}
  </div>
  );
};





const Reviews = () => {
  const ReviewsData = [
    {
      id: 1,
      name: "Chris Jordan",
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at dui et lorem tincidunt aliquet a id ligula. Maecenas eu ex et purus.",
      imgSrc: idlogo, // replace with actual image path
    },
    // Add more objects for additional reviews
    {
      id: 2,
      name: "Amanda Lee",
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at dui et lorem tincidunt aliquet a id ligula. Maecenas eu ex et purus.",
      imgSrc: idlogo,
    },
    // ...


    {
      id: 3,
      name: "Chris Jordan",
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at dui et lorem tincidunt aliquet a id ligula. Maecenas eu ex et purus.",
      imgSrc: idlogo, // replace with actual image path
    },
    // Add more objects for additional reviews
    {
      id: 4,
      name: "Amanda Lee",
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at dui et lorem tincidunt aliquet a id ligula. Maecenas eu ex et purus.",
      imgSrc: idlogo,
    },


    {
      id: 5,
      name: "Chris Jordan",
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at dui et lorem tincidunt aliquet a id ligula. Maecenas eu ex et purus.",
      imgSrc: idlogo, // replace with actual image path
    },
    // Add more objects for additional reviews
    {
      id: 6,
      name: "Amanda Lee",
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at dui et lorem tincidunt aliquet a id ligula. Maecenas eu ex et purus.",
      imgSrc: idlogo,
    },


    {
      id: 7,
      name: "Chris Jordan",
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at dui et lorem tincidunt aliquet a id ligula. Maecenas eu ex et purus.",
      imgSrc: idlogo, // replace with actual image path
    },
    // Add more objects for additional reviews
    {
      id: 8,
      name: "Amanda Lee",
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at dui et lorem tincidunt aliquet a id ligula. Maecenas eu ex et purus.",
      imgSrc: idlogo,
    },
    // ...
    // ...
    // ...
  ];



  
  const  { get_reviews_by_id_data
  } = useSelector((state)=>state.vendorAuth)

  console.log(get_reviews_by_id_data,"reviews")
  return (
    <>
    <div className="Schedule-Projects-sec">
      <div className="Schedule-Projects-main">
        <div className="Schedule-Projects-tital">
          <h2>Reviews</h2>
      

        </div>

        <div className="Schedule-Projects-card-box">
      {get_reviews_by_id_data?.CustomerReviews?.map((review,i) => (
        <div className="Reviews-card" key={i}>
          <div className="Reviews-card-id">
            <div className="Reviews-card-id-img">
              <img src={logo} alt={review.name}  />
            </div>
            <span>
              <h2>{review?.customerName ?review?.customerName:'Customer' } </h2>
              <div className="Reviews-star-box">
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="92" height="16" viewBox="0 0 92 16" fill="none">

                {

                  <path d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z" fill="#F37B3C"/>

                }
                  
                </svg> */}

           <StarRating rating={review?.rating} />
              </div>
            </span>
          </div>
          <h3>{review?.review}</h3>
        </div>
      ))}
    </div>

 
      </div>
    </div>
    </>
  );
};

export default Reviews;
