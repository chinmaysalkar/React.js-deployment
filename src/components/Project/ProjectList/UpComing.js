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
                <table className="table  table-striped table-vcenter mb-0">
                    <thead>
                    <tr>
                        <th>Owner</th>
                        <th>Milestone</th>
                        <th>Work</th>
                        <th>Duration</th>
                        <th>Priority</th>
                    </tr>
                    </thead>
                    <tbody>
                    {tasks.map((task, index) => (
                        <tr key={index}>
                        <td>
                            <img
                            src={task.avatar}
                            alt="Avatar"
                            className="table-img rounded-circle mr-2 avatar-sm"
                            />
                            <span className='mx-2'>{task.owner}</span>
                        </td>
                        <td>{task.milestone}</td>
                        <td>
                            <span>{task.work}</span>
                        </td>
                        <td>{task.duration}</td>
                        <td><span>{task.priority}</span></td>                         
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
