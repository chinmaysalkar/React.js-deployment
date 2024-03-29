import React, {useState} from 'react'
import Header from '../../layouts/Header';
import Userlist from '../../components/Users/Userlist';
import Adduser from '../../components/Users/Adduser';
import Footer from '../../layouts/Footer';
import { Button, Form } from 'react-bootstrap';
import Sidebar from '../../layouts/Sidebar';

export default function Users() {
  const [activeButton, setActiveButton] = useState('userlist');

  const [currentComponent, setCurrentComponent] = useState('userlist');

  const handleButtonClick = (componentName) => {
      setCurrentComponent(componentName);
      setActiveButton(componentName);
  };
  
 
    
  return (
    <>
    <div className='main d-flex'>
      <Sidebar/>
      <div className='users-main px-3'>
      <div>
      <Header/>
      </div>
      <div className='d-flex justify-content-between top-change-btn'>
    <div className='all-top'>
      <button onClick={() => handleButtonClick('userlist')} className={`top-bar-btn mx-2 ${activeButton === 'userlist' ? 'text-secondary border-top-2' : ''}`}>List</button>
      <button onClick={() => handleButtonClick('adduser')} className={`top-bar-btn mx-2 ${activeButton === 'adduser' ? 'text-secondary border-top-2' : ''}`}>AddNew</button>
    </div>

    <div className='d-flex pt-2'>
      <Button variant="primary" className='mx-3 btn-top'>
        +Add
      </Button>
    </div>
      </div>

      <div>
      {currentComponent === 'userlist' && <Userlist />}
      {currentComponent === 'adduser' && <Adduser />}
      </div>



      <div>
      <Footer/>
      </div>
    </div>
    </div>
    </>
  )
}
