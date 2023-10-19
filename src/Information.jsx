import React from "react";
import './styles/Information.css';
import Personal from './Forms/Personal';
import WorkExperience from './Forms/WorkExperience';
import ProjectExperience from "./Forms/ProjectExperience";
import Education from './Forms/Education';
import Skills from "./Forms/Skills";
import { Form } from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import FormStatetoRedux from "./Redux/FormStatetoRedux";

const onSubmit = async values => {
    window.alert(JSON.stringify(values, 0, 2))
    const data = JSON.stringify(values, 0, 2);
    const parsedata = JSON.parse(data);
    console.log(parsedata);
}
class Information extends React.Component {   
    render() {
        return (
            <div>
            <div className="main-container">
                <div className="container">
                <Form 
                    onSubmit={onSubmit}
                    mutators={{
                        ...arrayMutators
                      }}
                    initialValues={{
                        "personal": [
                            {
                                "name": "Christian T. dela Cruz",
                                "email": "christiantulao.delacruz@gmail.com",
                                "phoneNumber": "09265537249",
                                "title": "Web Developer",
                                "address": "228 Pagasa St. Julugan 6, Tanza, Cavite",
                                "github" : "github.com/ctdc0208"
                            }
                          ],
                          "education": [
                              {
                                  "degree": "Bachelor of Science in Mechanical Engineering",
                                  "university": "Technological University of the Philippines - Manila",
                                  "startDateEducation": "2019",
                                  "endDateEducation": "2023",
                                  "universityCity": "Manila, Philippines"
                                },
                                {
                                    "degree": "DOST – SEI Undergraduate Scholarship",
                                    "university": "RA. 7687",
                                    "startDateEducation": "2019",
                                    "endDateEducation": "2023"
                                }
                            ],
                            "projectExperience": [
                                {
                                    "projectName": "CV Application ",
                                    "projectExperienceAcquired": [
                                {
                                  "projectExperienceAcquired": "•	Developed React-Final-Form library, optimizing user input and validation capabilities."
                                },
                                {
                                    "projectExperienceAcquired": "•	Using FormSpy to store and manage form data in the Redux store to render outside form."
                                },
                                {
                                    "projectExperienceAcquired": "•	Utilized flex grids for layout and SVG for icons for scaling and filtering color purposes."
                                }
                            ]
                        },
                            {
                                "projectName": "Weather App",
                                "projectExperienceAcquired": [
                                    {
                                        "projectExperienceAcquired": "Asynchronous function to interact with the OpenWeather API, for real-time weather data."
                                    },
                                    {
                                        "projectExperienceAcquired": "Search feature allowing users to obtain weather information by specifying a city's name."
                                    },
                                    {
                                        "projectExperienceAcquired": "Use locale time string to provide current time and forecast information for future days."
                                    }
                                ]
                            },
                            {
                                "projectName": "DC Motor Variable Speed Controller",
                                "projectExperienceAcquired": [
                                    {
                                  "projectExperienceAcquired": "Designed an Arduino-based speed controller system variable control of DC motor speeds."
                                },
                                {
                                    "projectExperienceAcquired": "Implemented a user-friendly interface with push buttons, for variable speed adjustments."
                                },
                                {
                                    "projectExperienceAcquired": "Successfully engineered a portable device capable of operating on a 12V battery source."
                                }
                            ]
                        }
                    ],
                    "workExperience": [
                            {
                                "projectName": "Navy, Mechanic Apprentice",
                                "companyName": "Philippine Navy",
                                "startDateExperience": "August 2022",
                                "endDateExperience": "September 2022",
                                "experienceAcquired": [
                                    {
                                        "workExperienceAcquired": "Assisted in the installation and removal of ship components, such as engines, pumps, and valves. "
                                    },
                                    {
                                        "workExperienceAcquired": "Followed strict safety protocols and procedures to prevent accidents and ensure a safe working environment."
                                    }
                                ]
                            }
                        ],
                        "skills": [
                            {
                                "technicalSkill": "Programming Languages : JavaScript, HTML/CSS, C++",
                                "softwareSkill": "Frameworks/Libraries : React, npm, Node.js",
                                "communicationSkill": "Software/Tools : Git, GitHub"
                            }
                        ]
                        
                    }}
                    
                    render={({ 
                        handleSubmit, 
                        form: { mutators: { push }}, 
                        form, 
                        submitting, 
                        pristine,
                        values }) => (
                            <form onSubmit={handleSubmit}>
                            
                            <FormStatetoRedux form="Information" />
                            
                            <Personal/>
                            
                            <div>
                            <div className="form-top-border-divider"></div>
                            <Education  />
                            <button
                            type="button"
                            onClick={() => push('education', undefined)}
                            >
                            <svg className='add-icon icon-size'></svg>
                            <div className='bullet-icon-text'>Add Education Entry</div>
                            </button>
                            
                            </div>
                            
                            
                            <div>
                            <div className="form-top-border-divider"></div>
                            <WorkExperience />
                            
                            <button
                            type="button"
                            onClick={() => push('workExperience', undefined)}
                            >
                            <svg className='add-icon icon-size'></svg>
                            <div className='bullet-icon-text'>Add Work Experience Entry</div>
                            </button>
                            
                    </div>

                    <div>
                        <div className="form-top-border-divider"></div>
                        <ProjectExperience />
                      
                          <button
                            type="button"
                            onClick={() => push('projectExperience', undefined)}
                            >
                           <svg className='add-icon icon-size'></svg>
                            <div className='bullet-icon-text'>Add Project Experience Entry</div>
                          </button>
                          
                    </div>
                    
                    <div>   
                      <div className="form-top-border-divider"></div>        
                      <Skills />
                      <div className="form-top-border-divider"></div>    
                    </div>
                        <div className="submit-buttons">
                            <button 
                            type="submit" 
                            disabled={submitting || pristine}  
                            style={{ cursor: 'pointer' }}             
                            >
                            <svg className="submit-icon icon-size"></svg>
                            <div className="submit-text">
                                Submit
                            </div>
                            </button>
                            <button
                            type="button"
                            onClick={form.reset}
                            disabled={submitting || pristine}
                            style={{ cursor: 'pointer' }}
                            >
                            <svg className="reset-icon icon-size"></svg>
                            <div className="submit-text">
                                Reset
                            </div>
                            </button>
                        </div>
                        </form>
                    )}
                />
                </div>
            </div>
        </div>
        );
    }
}

export default Information