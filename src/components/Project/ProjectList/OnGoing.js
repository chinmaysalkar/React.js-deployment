import React from 'react'
import { Form } from 'react-bootstrap';
import avatar2 from '../../../assets/images/avatar2.jpg'
import avatar1 from '../../../assets/images/avatar1.jpg'
import avatar3 from '../../../assets/images/avatar3.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

export default function OnGoing() {
    const projectData = [
        {
          title: "New Admin Design",
          tag: "Web Design",
          description: "Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis temporibus!",
          created: "09 Jun 2019 11:32AM",
          creator: "Nathan Guerrero",
          question: 23,
          comments: 32,
          bug: 5,
          team: [avatar1, avatar2, avatar1, avatar1, avatar3],
          progress: 15,
          progressColor: "bg-red"
        },
        {
          title: "Job Portal Web App",
          tag: "Angular",
          description: "Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis temporibus!",
          created: "09 Jun 2019 11:32AM",
          creator: "Nathan Guerrero",
          question: 55,
          comments: 43,
          bug: 5,
          team: [avatar1, avatar2, avatar1, avatar1, avatar3],
          progress: 75,
          progressColor: "bg-green"
        },
    
        {
            title: "Job Portal Web App",
            tag: "Angular",
            description: "Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis temporibus!",
            created: "09 Jun 2019 11:32AM",
            creator: "Nathan Guerrero",
            question: 55,
            comments: 43,
            bug: 5,
            team: [avatar1, avatar2, avatar1, avatar1, avatar3],
            progress: 75,
            progressColor: "bg-green"
          },
    
          {
            title: "Job Portal Web App",
            tag: "Angular",
            description: "Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis temporibus!",
            created: "09 Jun 2019 11:32AM",
            creator: "Nathan Guerrero",
            question: 55,
            comments: 43,
            bug: 5,
            team: [avatar1, avatar2, avatar1, avatar1, avatar3],
            progress: 75,
            progressColor: "bg-green"
          },
    
          {
            title: "Job Portal Web App",
            tag: "Android",
            description: "Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis temporibus!",
            created: "09 Jun 2019 11:32AM",
            creator: "Nathan Guerrero",
            question: 55,
            comments: 43,
            bug: 5,
            team: [avatar1, avatar2, avatar1, avatar1, avatar3],
            progress: 75,
            progressColor: "bg-green"
          },
      ];
    
      const getTechColor = (tag) => {
        switch (tag.toLowerCase()) {
          case 'web design':
            return '#3C4087';
          case 'angular':
            return '#DF84A4';
          case 'android':
            return '#B5E850';
          
          default:
            return '#ffffff';
        }
      };
  return (
    <div className='pagewidth'>
        <div className="row mt-3 mx-1">
        {projectData.map((project, index) => (
          <div key={index} className="col-lg-4 col-md-12">
            <div className="card mb-3">
              <div className="card-header d-flex justify-content-between bg-white border-0">
                <h6 className="card-title">{project.title}</h6>
                <div className="card-options d-flex">
                    <Form.Check
                        type="switch"
                        id="custom-switch"  
                    />
                  <span className="card-options-collapse" data-toggle="card-collapse">
                    <FontAwesomeIcon icon={faChevronUp} />                   
                  </span>
                </div>
              </div>
              <div className="card-body">

                <span style={{
                          backgroundColor: getTechColor(project.tag),
                          padding: '3px',
                          borderRadius: '5px',
                          color: 'white',
                        }}>{project.tag}</span>

                <p className='mt-4'>{project.description}</p>
                <div className="row">


                  {/* ... (other project details) */}

                  <div className="d-flex justify-content-between"><strong>Created:</strong>
                  <p className='text-secondary'>{project.created}</p></div>
                  <div className="d-flex justify-content-between"><strong>Creator:</strong>
                  <p className='text-secondary'>{project.creator}</p></div>
                  <div className="d-flex justify-content-between"><strong>Questions:</strong><h5>{project.question}</h5></div>
                  <div className="d-flex justify-content-between"><strong>Comments:</strong><h5>{project.comments}</h5></div>
                  <div className="d-flex justify-content-between"><strong>Bug:</strong><h5>{project.bug}</h5></div>
    

                  <div className="col-5 py-1"><strong>Team:</strong></div>
                  <div className="col-7 py-1">
                    <div className="avatar-list avatar-list-stacked">
                      {project.team.map((avatar, avatarIndex) => (
                        <img
                          key={avatarIndex}
                          className="avatar avatar-sm"
                          src={avatar}
                          data-toggle="tooltip"
                          data-original-title="Avatar Name"
                          alt={`Avatar ${avatarIndex}`}
                        />
                      ))}
                      <span className="avatar avatar-sm">{`+${project.team.length}`}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer bg-white">
                <div className="clearfix">
                  <div className="float-left"><strong>{project.progress}%</strong></div>
                  <div className="float-right"><small className="text-muted">Progress</small></div>
                </div>
                <div className="progress progress-xs">
                  <div className={`progress-bar ${project.progressColor}`} role="progressbar" aria-valuenow={project.progress} aria-valuemin="0" aria-valuemax="100" style={{ width: `${project.progress}%` }}></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}
