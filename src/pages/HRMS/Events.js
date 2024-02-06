import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {  faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';


export default function Events() {
  
  const localizer = momentLocalizer(moment);
  // const [events, setEvents] = useState([
  //   {
  //     title: '',
  //     start: new Date(2024, 0, 15, 10, 0), // Year, Month (0-based), Day, Hour, Minute
  //     end: new Date(2024, 0, 15, 12, 0),
  //   }, 
  // ]);

  return (
    <div className='calender-main px-3'>
      
        <div>
          <Header/>
        </div>

        <div className='card mt-3 px-3 pt-3 pb-3 mx-3'>
          <div className='card-header mb-2 bg-white'>
            <div><h6 className='text-secondary'>SARA HOPKINS</h6></div>
            <div></div>      
          </div>
        <Calendar
          localizer={localizer}
          
          // events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 600 }}
        />
        </div>

        <div>
          <Footer/>
        </div>
      
      
    </div>
  )
}
