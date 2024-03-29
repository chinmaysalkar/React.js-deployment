import React,{useState} from 'react'
import Header from '../../layouts/Header'
import Footer from '../../layouts/Footer'
import { Button, Form } from 'react-bootstrap';
import ListView from '../../components/Project/ProjectTaskBoard/ListView';
import GridView from '../../components/Project/ProjectTaskBoard/GridView';
import Sidebar from '../../layouts/Sidebar';


export default function TaskBoard() {
  const [activeButton, setActiveButton] = useState('listview');

  const [currentComponent, setCurrentComponent] = useState('listview');

  const handleButtonClick = (componentName) => {
      setCurrentComponent(componentName);
      setActiveButton(componentName);
  };
  
  


    const progressData = [
        { status: 'Planned', percentage: 20 },
        { status: 'In progress', percentage: 43 },
        { status: 'Completed', percentage: 83 },
        { status: 'In Completed', percentage: 12 },
      ];
  return (
    <>
    <div className='main d-flex'>
      <Sidebar/>
      <div className='pagewidth mx-3'>
        <Header/>

        <div className='d-flex justify-content-between mx-3 top-change-btn'>
        <div className='all-top d-flex'>
          <button onClick={() => handleButtonClick('listview')} className={`top-bar-btn mx-2 ${activeButton === 'listview' ? 'text-secondary border-top-2' : ''}`}>ListView</button>
          <button onClick={() => handleButtonClick('gridview')} className={`top-bar-btn mx-2 ${activeButton === 'gridview' ? 'text-secondary border-top-2' : ''}`}>GridView</button>
        </div>

        <div className='d-flex pt-2'>
          <Form.Control
            type='search'
            placeholder='Search something...'
            className='me-2'
            aria-label='Search'
          />
          <Button variant="primary" className='mx-1 btn-top'>
            +Add
          </Button>
        </div>
        </div>

        <div>
            <div className="row clearfix mx-2 mt-3">
            {progressData.map((item, index) => (
                <div key={index} className="col-lg-3 col-md-6">
                <div className="card mb-2">
                    <div className="card-body text-center">
                    <h6>{item.status}</h6>
                    <div style={{ width: '50%', margin: 'auto' }}>
                        <svg
                        className="CircularProgressbar"
                        viewBox="0 0 100 100"
                        data-test-id="CircularProgressbar"
                        >
                        <path
                            className="CircularProgressbar-trail"
                            d="M 50,50 m 0,-47.5 a 47.5,47.5 0 1 1 0,95 a 47.5,47.5 0 1 1 0,-95"
                            strokeWidth="5"
                            fillOpacity="0"
                            style={{ strokeDasharray: '298.451px, 298.451px', strokeDashoffset: '0px' }}
                        ></path>
                        <path
                            className="CircularProgressbar-path"
                            d="M 50,50 m 0,-47.5 a 47.5,47.5 0 1 1 0,95 a 47.5,47.5 0 1 1 0,-95"
                            strokeWidth="5"
                            fillOpacity="0"
                            style={{
                            stroke: 'rgb(110, 118, 135)',
                            strokeDasharray: '298.451px, 298.451px',
                            strokeDashoffset: `${item.percentage}px`,
                            }}
                        ></path>
                        <text className="CircularProgressbar-text" x="50" y="50">
                            {item.percentage}
                        </text>
                        </svg>
                    </div>
                    </div>
                </div>
                </div>
            ))}
            </div>
        </div>

        <div>
        {currentComponent === 'listview' && <ListView />}
        {currentComponent === 'gridview' && <GridView />}
        </div>

        <Footer/>
    </div>
    </div>
    </>
  )
}
