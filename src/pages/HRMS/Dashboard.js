import React from 'react'
import Dashbordindex from '../../components/Dashboard/Dashbordindex';
import Salarystatistics from '../../components/Dashboard/Salarystatistics';
import Revenue from '../../components/Dashboard/Revenue';
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';
import Projectsummary from '../../components/Dashboard/Projectsummary';




export default function Dashboard() {
    

  return (
    <div className='dashboard-main px-3'>
        <Header/>
        <div className='mx-5 mt-3 dashbord-heading'>
            <h4>Welcome Jason Porter!</h4>
            <p>Measure How Fast You’re Growing Monthly Recurring Revenue. Learn More</p>
        </div>

        <Dashbordindex/>

        {/* <Salarystatistics/> */}

        {/* <Revenue/> */}

        <Projectsummary/>

       
        
        <div>
      <Footer/>
      </div>  
    </div>
  )
}
