import React, { useEffect, useRef, useState } from "react";
import TimelineObserver from "react-timeline-animation";
import EventCard from "./assets/components/event";
import { AiOutlinePlayCircle } from "react-icons/ai"; // Play circle icon
import { MdEventAvailable } from "react-icons/md"; // Event available icon
import { FaRegHandshake } from "react-icons/fa"; // Handshake icon
import { IoIosPeople } from "react-icons/io"; // People icon (teamwork)
import { GiStarShuriken } from "react-icons/gi"; // Star icon (achievement)

import "./App.css";

const Timeline = ({ setObserver, callback }) => {
  const [message1, setMessage1] = useState("");
  const [message2, setMessage2] = useState("");
  const [message3, setMessage3] = useState("");
  const [message4, setMessage4] = useState("");
  const [message5, setMessage5] = useState("");
  
  const [activeIcon, setActiveIcon] = useState(null); // Track which icon is active
  
  const timeline1 = useRef(null);
  const timeline2 = useRef(null);
  const timeline3 = useRef(null);
  const timeline4 = useRef(null);
  const timeline5 = useRef(null);
  const circle1 = useRef(null);
  const circle2 = useRef(null);
  const circle3 = useRef(null);
  const circle4 = useRef(null);
  const circle5 = useRef(null);

  const someCallback = () => {
    setMessage1(<EventCard 
      isLeft={false}
      date={{ month: 'JAN', day: '15' }}
      title="Kickoff Meeting"
      time="9:00 AM - 11:00 AM"
      description="Project initiation and team introductions."
      tag="Meeting"
     
    />);
    setActiveIcon(1); // Set active icon to 1 when this event is in view
    callback();
  };

  const someCallback2 = () => {
    setMessage2(<EventCard 
      isLeft={true}
      date={{ month: 'JAN', day: '16' }}
      title="Team Brainstorming"
      time="1:00 PM - 3:00 PM"
      description="Collaborative session to generate ideas."
      tag="Brainstorming"
    />);
    setActiveIcon(2); // Set active icon to 2 when this event is in view
  };

  const someCallback3 = () => {
    setMessage3(<EventCard 
      isLeft={false}
      date={{ month: 'JAN', day: '20' }}
      title="Prototype Review"
      time="10:00 AM - 12:00 PM"
      description="Review the initial prototype and gather feedback."
      tag="Review"
    />);
    setActiveIcon(3); // Set active icon to 3 when this event is in view
  };

  const someCallback4 = () => {
    setMessage4(<EventCard 
      isLeft={true}
      date={{ month: 'JAN', day: '25' }}
      title="Team Presentation"
      time="2:00 PM - 4:00 PM"
      description="Present the final design to stakeholders."
      tag="Presentation"
    />);
    setActiveIcon(4); // Set active icon to 4 when this event is in view
  };

  const someCallback5 = () => {
    setMessage5(<EventCard 
      isLeft={false}
      date={{ month: 'JAN', day: '30' }}
      title="Project Launch"
      time="9:00 AM - 12:00 PM"
      description="Launch the project and go live."
      tag="Launch"
    />);
    setActiveIcon(5); // Set active icon to 5 when this event is in view
  };

  useEffect(() => {
    setObserver(timeline1.current);
    setObserver(timeline2.current);
    setObserver(timeline3.current);
    setObserver(timeline4.current);
    setObserver(timeline5.current);
    setObserver(circle1.current, someCallback);
    setObserver(circle2.current, someCallback2);
    setObserver(circle3.current, someCallback3);
    setObserver(circle4.current, someCallback4);
    setObserver(circle5.current, someCallback5);
  }, []);

  return (
    <div className="wrapper">
        <h1  >Events</h1>
      <div id="timeline1" ref={timeline1} className="timeline" />
      <div className="circleWrapper">
        <div id="circle1" ref={circle1} className={`circle ${activeIcon === 1 ? "icon-enlarged" : ""}`}>
          <AiOutlinePlayCircle size={40} color="white" /> {/* Play Circle Icon */}
        </div>
        <div className="message-right">{message1}</div>
      </div>

      <div id="timeline2" ref={timeline2} className="timeline" />
      <div className="circleWrapper">
        <div id="circle2" ref={circle2} className={`circle ${activeIcon === 2 ? "icon-enlarged" : ""}`}>
          <MdEventAvailable size={40} color="white" /> {/* Event Icon */}
        </div>
        <div className="message-left">{message2}</div>
      </div>

      <div id="timeline3" ref={timeline3} className="timeline" />
      <div className="circleWrapper">
        <div id="circle3" ref={circle3} className={`circle ${activeIcon === 3 ? "icon-enlarged" : ""}`}>
          <FaRegHandshake size={40} color="white" /> {/* Handshake Icon */}
        </div>
        <div className="message-right">{message3}</div>
      </div>

      <div id="timeline4" ref={timeline4} className="timeline" />
      <div className="circleWrapper">
        <div id="circle4" ref={circle4} className={`circle ${activeIcon === 4 ? "icon-enlarged" : ""}`}>
          <IoIosPeople size={40} color="white" /> {/* People Icon */}
        </div>
        <div className="message-left">{message4}</div>
      </div>

      <div id="timeline5" ref={timeline5} className="timeline" />
      <div className="circleWrapper">
        <div id="circle5" ref={circle5} className={`circle ${activeIcon === 5 ? "icon-enlarged" : ""}`}>
          <GiStarShuriken size={40} color="white" /> {/* Star Icon */}
        </div>
        <div className="message-right">{message5}</div>
      </div>
    </div>
  );
};

export default function Time() {
  const [message, setMessage] = useState("");

  const onCallback = () => {
    console.log("awesome");
  };

  return (
    <div className="App">
      <TimelineObserver
        initialColor="#e5e5e5"
        fillColor="#ff00cc"
        handleObserve={(setObserver) => (
          <Timeline
            callback={onCallback}
            className="timeline"
            setObserver={setObserver}
          />
        )}
      />
      <div className="stub2">{message}</div>
    </div>
  );
}
