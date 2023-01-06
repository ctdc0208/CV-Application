import React from "react";
import './styles/Information.css';
import Personal from './Forms/Personal';
import WorkExperience from './Forms/WorkExperience';
import ProjectExperience from "./Forms/ProjectExperience";
import Education from './Forms/Education';
import Skills from "./Forms/Skills";
import { Form } from 'react-final-form';
import arrayMutators from 'final-form-arrays'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
    await sleep(300)
    window.alert(JSON.stringify(values, 0, 2))
    const data = JSON.stringify(values, 0, 2);
    const parsedata = JSON.parse(data)
    console.log(parsedata.personal[0].name)
}

class Information extends React.Component {   
    render() {
        return (
            <div className="main-container">
                <div className="container">
                <Form 
                    onSubmit={onSubmit}
                    mutators={{
                        ...arrayMutators
                      }}
                    initialValues={{
                        
                        "personal":[
                          null
                        ],
                        "education": [
                            null
                        ],
                        "projectExperience": [
                            null
                        ],
                        "workExperience": [
                            null
                        ],
                        "skills": [
                            null
                        ],
                        
                        /*
                            "personal": [
                              {
                                "name": "Bruce Wayne",
                                "title": "EIT",
                                "email": "Email",
                                "address": "Address",
                                "phoneNumber": "Phone Number"
                              }
                            ],
                            "education": [
                              {
                                "degree": "Bachelor of Science in Mechanical Engineering",
                                "university": "State University",
                                "universityCity": "City",
                                "startDateEducation": "August 2019",
                                "endDateEducation": "April 2023"
                              }
                            ],
                            "projectExperience": [
                              {
                                "projectName": "Capstone Project: Redesign of an Ulnar Collateral Ligament Fatigue Testing Machine",
                                "startDateProject": "March 2020",
                                "endDateProject": "April 2020",
                                "projectExperienceAcquired": [
                                  {
                                    "projectExperienceAcquired": "Design and assembled acrylic tank and humorous holder in SolidWorks"
                                  },
                                  {
                                    "projectExperienceAcquired": "Analyzed joints, bolts, and other vulnerable parts with SolidWorks FEA fatigue simulation"
                                  },
                                  {
                                    "projectExperienceAcquired": "Assisted in writing grant proposal sent to MLB needed for further research on UCL fatigue"
                                  },
                                  {
                                    "projectExperienceAcquired": "Lead group meetings and delegated tasks to ensure device requirements were met in under 3 months"
                                  },
                                  {
                                    "projectExperienceAcquired": "Presented results to university faculty and County Hospital researchers"
                                  }
                                ]
                              },
                              {
                                "projectName": "Model of City Power Grid",
                                "startDateProject": "From Date",
                                "endDateProject": "To Date",
                                "projectExperienceAcquired": [
                                  {
                                    "projectExperienceAcquired": "Proposed design of steam power plant at the main campus of State University"
                                  },
                                  {
                                    "projectExperienceAcquired": "Optimized plant operating states under consideration of reheat cycle or feedwater heater"
                                  },
                                  {
                                    "projectExperienceAcquired": "Evaluated sectors energy balance using EES software to find inefficiencies in infrastracture"
                                  },
                                  {
                                    "projectExperienceAcquired": "Improved building heat efficiency by 13% and reduced emissions by 32% under authored scenario"
                                  }
                                ]
                              },
                              {
                                "projectName": "Airfoil Force Sensor Optimization",
                                "startDateProject": "From Date",
                                "endDateProject": "To Date",
                                "projectExperienceAcquired": [
                                  {
                                    "projectExperienceAcquired": "Collaborated with the Formula SAE team to construct force sensor to measure the lift coefficient"
                                  },
                                  {
                                    "projectExperienceAcquired": "Soldered and wired circuit to maximize DAQ input range"
                                  },
                                  {
                                    "projectExperienceAcquired": "Established HTML webpage to allow collaboration from fellow undergraduate students"
                                  },
                                  {
                                    "projectExperienceAcquired": "Refined MATLAB code to reduce wind tunnel noise and display output as a measurement of force"
                                  }
                                ]
                              },
                              {
                                "projectName": "Prototype Design of Wheelchair Rain Cover",
                                "startDateProject": "From Date",
                                "endDateProject": "To Date",
                                "projectExperienceAcquired": [
                                  {
                                    "projectExperienceAcquired": "Interviewed individuals with disabilities to determine downfalls of previous rain covers"
                                  },
                                  {
                                    "projectExperienceAcquired": "Drafted custom C-Clamps with AutoCAD to support attachment of rain cover"
                                  },
                                  {
                                    "projectExperienceAcquired": "Examined impact of rain using ANSYS to choose material with high stiffness for rain cover"
                                  },
                                  {
                                    "projectExperienceAcquired": "Directed two-minute video advertising prototype design sent to various startup companies"
                                  }
                                ]
                              }
                            ],
                            "workExperience": [
                              {
                                "projectName": "Team Member",
                                "companyName": "Big Retailer",
                                "startDateExperience": "January 2020",
                                "endDateExperience": "March 2020",
                                "experienceAcquired": [
                                  {
                                    "workExperienceAcquired": "Trained all new employees on operations regarding non-cash transactions and lottery"
                                  },
                                  {
                                    "workExperienceAcquired": "Received \"Most Helpful Associate\" award based on customer satisfaction surveys"
                                  }
                                ]
                              },
                              {
                                "projectName": "Sales Associate",
                                "companyName": "Local Supermarket",
                                "startDateExperience": "May 2020",
                                "endDateExperience": "September 2020",
                                "experienceAcquired": [
                                  {
                                    "workExperienceAcquired": "Processed customer payments by cash, debit, coupon, and credit card"
                                  },
                                  {
                                    "workExperienceAcquired": "Restocked shelves and helped maintain organization of 20 commercial refrigerators"
                                  }
                                ]
                              }
                            ],
                            "skills": [
                              {
                                "technicalSkill": "3D Modeling & Finite Element Analysis (FEA), Rapid Prototyping, Material/Process Selection, Rigid Body Dynamics",
                                "softwareSkill": "SolidWorks CSWA, MATLAB/Simulink, LabVIEW, Arduino, Python, MathCAD",
                                "communicationSkill": "Technical Writing, Oral Presentation, Project Management"
                              }
                            ]
                            */
                          
                    }}
                    render={({ 
                        handleSubmit, 
                        form: { mutators: { push, pop }}, 
                        form, 
                        submitting, 
                        pristine, 
                        values }) => (
                        <form onSubmit={handleSubmit}>
                            
                    <Personal />

                    <div>
                        <Education />
                            <button
                            type="button"
                            onClick={() => push('education', undefined)}
                            >
                            Add Education
                            </button>
                    </div>

                    <div>
                        <ProjectExperience />
                            <button
                            type="button"
                            onClick={() => push('projectExperience', undefined)}
                            >
                            Add Project Experience
                            </button>
                    </div>

                    <div>
                        <WorkExperience>
                          <button
                            type="button"
                            onClick={() => push('workExperience', undefined)}
                            >
                            Add Work Experience
                          </button>
                        </WorkExperience>
                            <button
                            type="button"
                            onClick={() => push('workExperience', undefined)}
                            >
                            Add Work Experience
                            </button>
                    </div>
                                       
                    <Skills />
                
                        <div className="buttons">
                            <button 
                            type="submit" 
                            disabled={submitting || pristine}  
                            style={{ cursor: 'pointer' }}             
                            >
                            Submit
                            </button>
                            <button
                            type="button"
                            onClick={form.reset}
                            disabled={submitting || pristine}
                            style={{ cursor: 'pointer' }}
                            >
                            Reset
                            </button>
                        </div>


                        
                        <pre>{
                         JSON.stringify(values, 0, 2)
                        }</pre>
          
                        </form>
                    )}
                />
                </div>
            </div>
        );
    }
}


export default Information