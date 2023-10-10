import React from "react";
import './styles/Information.css';
import Personal from './Forms/Personal';
import WorkExperience from './Forms/WorkExperience';
import ProjectExperience from "./Forms/ProjectExperience";
import Education from './Forms/Education';
import Skills from "./Forms/Skills";
import { Form } from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import { Provider } from "react-redux";
import store from "./Redux/store";
import FormStatetoRedux from "./Redux/FormStatetoRedux";
import FormStateFromRedux from "./Redux/FormStateFromRedux";

const GetDataJSON = () => (
    <Provider store={store}>
        <FormStateFromRedux form="Information" />
    </Provider>
)

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
            <Provider store={store}>
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
                                "name": "Christian",
                                "email": "christiandelacruz0208@gmail.com",
                                "phoneNumber": "09265537249",
                                "title": "Web Developer",
                              "address": "228 Pagasa St. Julugan 6, Tanza, Cavite"
                            }
                          ],
                          "education": [
                              {
                                  "degree": "BSME",
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
                                  "projectExperienceAcquired": "React- final form"
                                },
                                {
                                    "projectExperienceAcquired": "Use flex grids for layout and svg for filter color functions"
                                },
                                {
                                    "projectExperienceAcquired": "Redux to read outside your form. Using FormSpy to keep a copy of your form data in the Redux store."
                                }
                            ]
                        },
                            {
                                "projectName": "Weather App",
                                "projectExperienceAcquired": [
                                    {
                                        "projectExperienceAcquired": "•\tAsync function that calls open weather API"
                                    },
                                    {
                                        "projectExperienceAcquired": "•\tSearch the weather of the city using its own name and latitude and longitude coordinates"
                                    },
                                    {
                                        "projectExperienceAcquired": "•\tUse locale time string to get current time and set following days."
                                    }
                                ]
                            },
                            {
                                "projectName": "DC Motor Variable Speed Controller",
                                "projectExperienceAcquired": [
                                    {
                                  "projectExperienceAcquired": "Arduino with speed controller for controlling DC motor speed."
                                },
                                {
                                    "projectExperienceAcquired": "Use push button to control variable speeds"
                                },
                                {
                                    "projectExperienceAcquired": "Develop a device that can run on a 12V battery\n\n"
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
                        <GetDataJSON></GetDataJSON>
                        </form>
                    )}
                />
                </div>
            </div>
            </Provider>
        </div>
        );
    }
}

export default Information