import React from "react";
import threedots from "../../assets/dashboard/dash-threedots.png";
const RecentActivity = () => {
  const activityArray = [
    {
      id: 1,
      time: "3hrs",
      detail:
        "Lorem Ipsum is simply dummy text of the printing and typesetting",
    },
    {
      id: 2,
      time: "3hrd",
      detail:
        "Lorem Ipsum is simply dummy text of the printing and typesetting",
    },
    {
      id: 3,
      time: "33min",
      detail:
        "Lorem Ipsum is simply dummy text of the printing and typesetting",
    },
    {
      id: 4,
      time: "5hrs",
      detail:
        "Lorem Ipsum is simply dummy text of the printing and typesetting",
    },
    {
      id: 5,
      time: "33min",
      detail:
        "Lorem Ipsum is simply dummy text of the printing and typesetting",
    },
    {
      id: 5,
      time: "33min",
      detail:
        "Lorem Ipsum is simply dummy text of the printing and typesetting",
    },
    {
      id: 5,
      time: "33min",
      detail:
        "Lorem Ipsum is simply dummy text of the printing and typesetting",
    },
  ];
  return (
    <div className="recent-activities">
      <div className="underline">
        <h5>Recent Activities</h5>
      </div>
      <div className="activities">
        {activityArray.map((activity, i) => (
          <div key={activity.id} className="activity">
            <div className="time-div">
              <p>{activity.time}</p>
            </div>
            <div
              className="activity-detail-div"
              style={{
                borderLeft:
                  i === activityArray.length - 1 ? "none" : "1px solid #000",
              }}
            >
              <div className="activity-cicle"></div>
              <p>{activity.detail}</p>
              {i === 0 && (
                <div className="threedots">
                  <img src={threedots} alt="Three Dots" />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;
