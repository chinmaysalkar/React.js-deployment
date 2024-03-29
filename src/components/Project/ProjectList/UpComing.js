import React,{useState} from 'react'
import avatar1 from '../../../assets/images/avatar1.jpg'
import avatar2 from '../../../assets/images/avatar2.jpg'
import avatar3 from '../../../assets/images/avatar3.jpg'

export default function UpComing() {

      
    //   const handleShow = () => setShow(true);
    const tasks = [
        {
          owner: 'Isidore Dilao',
          milestone: 'Account receivable',
          avatar: avatar1,
          work: '30:00',
          duration: '30:0 hrs',
          priority: 'Medium',
        },
        {
          owner: 'Maricel Villalon',
          milestone: 'Account receivable',
          avatar: avatar2,
          work: '68:00',
          duration: '105:0 hrs',
          priority: 'High',
        },

        {
            owner: 'Maricel Villalon',
            milestone: 'Account receivable',
            avatar: avatar1,
            work: '68:00',
            duration: '105:0 hrs',
            priority: 'None',
        },


        {
            owner: 'Maricel Villalon',
            milestone: 'Account receivable',
            avatar: avatar3,
            work: '68:00',
            duration: '105:0 hrs',
            priority: 'None',
        },
        
        {
            owner: 'Maricel Villalon',
            milestone: 'Account receivable',
            avatar: avatar1,
            work: '68:00',
            duration: '105:0 hrs',
            priority: 'High',
        }, 


        {
            owner: 'Maricel Villalon',
            milestone: 'Account receivable',
            avatar: avatar1,
            work: '68:00',
            duration: '105:0 hrs',
            priority: 'High',
        }, 


        {
            owner: 'Maricel Villalon',
            milestone: 'Account receivable',
            avatar: avatar3,
            work: '68:00',
            duration: '105:0 hrs',
            priority: 'High',
        }, 
        
      ];
  return (
    <>
    <div className='pagewidth'>
        <div className="card mx-3 mt-3">
            <div className="card-body">
                <div className="table-responsive">
                <table className="table table-striped table-vcenter mb-0">
                    <thead>
                    <tr>
                        <th><span>OWNER</span></th>
                        <th><span>MILESTONE</span></th>
                        <th><span>WORK</span></th>
                        <th><span>DURATION</span></th>
                        <th><span>PRIORITY</span></th>
                    </tr>
                    </thead>
                    <tbody>
                    {tasks.map((task, index) => (
                        <tr key={index}>
                        <td>
                            <div>
                            <img
                            src={task.avatar}
                            alt="Avatar"
                            className="table-img rounded-circle mr-2 avatar-sm mx-2"
                            />
                            <span className='mt-2'>{task.owner}</span>
                            </div>
                        </td>
                        <td><span className='d-flex align-items-center mt-1'>{task.milestone}</span></td>
                        <td>
                            <span className='d-flex align-items-center mt-1'>{task.work}</span>
                        </td>
                        <td><span className='d-flex align-items-center mt-1'>{task.duration}</span></td>
                        <td><span className='d-flex align-items-center mt-1'>{task.priority}</span></td>                         
                        </tr>
                    ))}
                    </tbody>
                </table>
                </div>
            </div>
        </div>

    </div>


    
    </>
    
  )
}
