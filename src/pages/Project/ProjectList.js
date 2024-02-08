import React,{useState} from 'react';
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';
import { Button, Form } from 'react-bootstrap';
import OnGoing from '../../components/Project/ProjectList/OnGoing';
import UpComing from '../../components/Project/ProjectList/UpComing';
import Modal from 'react-bootstrap/Modal';
import Sidebar from '../../layouts/Sidebar';

export default function ProjectList() {
    const [activeButton, setActiveButton] = useState('OnGoing');

    const [currentComponent, setCurrentComponent] = useState('OnGoing');

    const handleButtonClick = (componentName) => {
        setCurrentComponent(componentName);
        setActiveButton(componentName);
    };
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return ( 
    <>
    <div className='main d-flex'>
      <Sidebar/>
      <div className='pagewidth px-3'>
    <Header />
    <div className='d-flex justify-content-between mx-3 top-change-btn'>
      <div className='all-top'>
        <button onClick={() => handleButtonClick('OnGoing')} className={`top-bar-btn mx-2 ${activeButton === 'OnGoing' ? 'text-secondary border-top-2' : ''}`}>OnGoing</button>
        <button onClick={() => handleButtonClick('UpComing')} className={`top-bar-btn mx-2 ${activeButton === 'UpComing' ? 'text-secondary border-top-2' : ''}`}>UpComing</button>
      </div>

      <div className='d-flex pt-2'>
        <Form.Control
          type='search'
          placeholder='Search something...'
          className='me-2'
          aria-label='Search'
        />
        <Button variant="primary" className='mx-1 btn-top' onClick={handleShow}>
          +Add
        </Button>
      </div>
    </div>

      <div>
      {currentComponent === 'OnGoing' && <OnGoing />}
      {currentComponent === 'UpComing' && <UpComing />}
      </div>

    
    <Footer />
    </div>



    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Upcoming Project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div class="mb-3">
          <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Owner Name "/>
          </div>

          <div class="mb-3">
          <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Mile Stone "/>
          </div>

          <div class="mb-3">
          <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Work "/>
          </div>

          <div class="mb-3">
          <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Duration"/>
          </div>

          <div class="mb-3">
          <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Priority"/>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Add
          </Button>
        </Modal.Footer>
    </Modal>
    </div>
    </> 
    
  );
}
