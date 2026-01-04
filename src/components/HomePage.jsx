import React, { useEffect, useState } from 'react';
import SearchBar from "./SearchBar";
import PostCard from "./PostCard";
import EventsCard from "./EventsCard";
import EventPopup from "./EventPopup";
import { getEvents } from "./eventsService";

function HomePage() {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      const data = await getEvents();
      setEvents(data);
    };

    fetchEvents();
  }, []);

  return (
    <>
      <div className="main-content">
        <div className="feed-section">
          <SearchBar />

          <PostCard
            title="Sanjay Srinivas"
            time="2 mins ago"
            text="Lorem ipsum is simply dummy text used in printing."
          />
          <PostCard
            title="Vijay Prakash"
            time="10 mins ago"
            text="Upcoming assignment circular updated."
          />
        </div>

        <div className="side-section">
          <EventsCard
            title="Upcoming Events"
            events={events}
            onEventClick={setSelectedEvent}
          />
        </div>
      </div>

      <EventPopup
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />
    </>
  );
}

export default HomePage;
