import React, { useState } from 'react';
import Header from '../../layouts/Header';
import Footer from '../../layouts/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import avatar1 from '../../assets/images/avatar1.jpg';
import avatar2 from '../../assets/images/avatar2.jpg';
import { Link } from 'react-router-dom';
export default function TodoList() {
  const [todoItems, setTodoItems] = useState([
    {
      id: 1,
      name: 'Report Panel Usage',
      dueDate: 'Feb 12-2019',
      priority: 'HIGH',
    //   avatar: 'NG',
      avatarname:'NG',
      checked: true,
    },
    {
      id: 2,
      name: 'Report Panel Usage',
      dueDate: 'Feb 18-2019',
      priority: 'MED',
      avatar: avatar1,
      checked: false,
    },
    {
      id: 3,
      name: 'New logo design for Angular Admin',
      dueDate: 'March 02-2019',
      priority: 'high',
      avatar: avatar2,
      checked: true,
    },

    {
        id: 4,
        name: 'New logo design for Angular Admin',
        dueDate: 'March 02-2019',
        priority: 'high',
        avatar: avatar2,
        checked: false,
      },

      {
        id: 5,
        name: 'New logo design for Angular Admin',
        dueDate: 'March 02-2019',
        priority: 'high',
        // avatar: avatar2,
        avatarname:'NG',
        checked: true,
      },


      {
        id: 6,
        name: 'New logo design for Angular Admin',
        dueDate: 'March 02-2019',
        priority: 'high',
        avatar: avatar2,
        checked: false,
      },
  ]);

  const getPriorityColor = (priority) => {
    const lowerCasePriority = priority.toLowerCase();
    const upperCasePriority = priority.toUpperCase();

    switch (lowerCasePriority) {
      case 'high':
        return '#DF84A4';
      case 'med':
      case 'medium':
        return '#F9F511';
      default:
        switch (upperCasePriority) {
          case 'HIGH':
            return '#B7EC55';
          default:
            return '#ffffff';
        }
    }
  };

  const handleCheckboxChange = (itemId) => {
    const updatedTodoItems = todoItems.map((item) =>
      item.id === itemId ? { ...item, checked: !item.checked } : item
    );
    setTodoItems(updatedTodoItems);
  };

  return (
    <div className='pagewidth px-3'>
      <Header />

      <div className='section mt-4'>
        <div className='container-fluid'>
          <div className='row d-flex flex-wrap'>
            <div className='col-12'>
              <div className='card d-flex flex-column'>
                <div className='card-body'>
                  <div className="table-responsive todo_list">
                    <table className="table table-striped table-vcenter mb-0">
                      <thead>
                        <tr>
                          <th>
                            <button className="btn btn-info btn-sm">
                              Add New
                            </button>
                          </th>
                          <th className=" text-right">Due</th>
                          <th>Priority</th>
                          <th>
                            <FontAwesomeIcon icon={faUser} />
                          </th>   
                        </tr>
                      </thead>
                      
                      <tbody>
                        {todoItems.map((item) => (
                          <tr key={item.id}>
                            <td>
                              <label className="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  name={`example-checkbox${item.id}`}
                                  value={`option${item.id}`}
                                  checked={item.checked}
                                  onChange={() => handleCheckboxChange(item.id)}
                                />
                                <span className="custom-control-label mx-2">{item.name}</span>
                              </label>
                            </td>
                            <td className="text-right">{item.dueDate}</td>
                            <td>
                              <span
                                className='ml-0 mr-0'
                                style={{
                                  backgroundColor: getPriorityColor(item.priority),
                                  padding: '3px',
                                  borderRadius: '5px',
                                  color: 'white',
                                }}>
                                {item.priority}
                              </span>
                            </td>
                            <td>{item.avatar ? (
                            <img
                                src={item.avatar}
                                alt=""
                                className="avatar rounded-circle avatar-sml"
                            />
                            ) : (
                            <span className="avatar rounded-circle avatar-sml">{item.avatarname}</span>
                            )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
