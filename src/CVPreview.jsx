import React from "react";
import './styles/CVpreview.css';
import { connect } from 'react-redux'
import { getFormState } from './Redux/FinalFormDuck'

const CVPreview = ({ state }) => {
    console.log(state.values)
    const education = [];
        for (let i = 0; i < 2; i++) {
            const educationDegree = state.values.education[i];
            education.push(educationDegree);
            //console.log(education)
        }
    return (
        <div>
        <div className="preview-container">
                <div className="preview-container-child">
                    <div className="personal-container">
                        <div>{state.values.personal[0].name}</div>
                        <div>{state.values.personal[0].email}</div>
                        <div>{state.values.personal[0].phoneNumber}</div>
                        <div>{state.values.personal[0].title}</div>
                        <div>{state.values.personal[0].address}</div>
                    </div>
                    <div className="education-container">
                        <div>
                            <div>{education[0].degree}</div>
                            <div>{education[0].university}</div>
                            <div>{education[0].startDateEducation}</div>
                            <div>{education[0].endDateEducation}</div>
                            <div>{education[0].universityCity}</div>
                        </div>
                        <div>
                            <div>{education[1].degree}</div>
                            <div>{education[1].university}</div>
                            <div>{education[1].startDateEducation}</div>
                            <div>{education[1].endDateEducation}</div>
                            <div>{education[1].universityCity}</div>
                        </div>
                    </div>
                    <div className="work-container">
                        <div>
                            <div>{state.values.workExperience[0].projectName}</div>
                            <div>{state.values.workExperience[0].companyName}</div>
                            <div>{state.values.workExperience[0].startDateExperience}</div>
                            <div>{state.values.workExperience[0].endDateExperience}</div>
                            <div>
                                <div>{state.values.workExperience[0].experienceAcquired[0].workExperienceAcquired}</div>
                                <div>{state.values.workExperience[0].experienceAcquired[1].workExperienceAcquired}</div>
                            </div>
                        </div>
                    </div>
                    <div className="project-container">
                        <div>
                            <div>{state.values.projectExperience[0].projectName}</div>
                            <div>
                                <div>{state.values.projectExperience[0].projectExperienceAcquired[0].projectExperienceAcquired}</div>
                                <div>{state.values.projectExperience[0].projectExperienceAcquired[1].projectExperienceAcquired}</div>
                                <div>{state.values.projectExperience[0].projectExperienceAcquired[2].projectExperienceAcquired}</div>
                            </div>
                        </div>
                        <div>
                            <div>{state.values.projectExperience[1].projectName}</div>
                            <div>
                                <div>{state.values.projectExperience[1].projectExperienceAcquired[0].projectExperienceAcquired}</div>
                                <div>{state.values.projectExperience[1].projectExperienceAcquired[1].projectExperienceAcquired}</div>
                                <div>{state.values.projectExperience[1].projectExperienceAcquired[2].projectExperienceAcquired}</div>
                            </div>
                        </div>
                        <div>
                            <div>{state.values.projectExperience[2].projectName}</div>
                            <div>
                                <div>{state.values.projectExperience[2].projectExperienceAcquired[0].projectExperienceAcquired}</div>
                                <div>{state.values.projectExperience[2].projectExperienceAcquired[1].projectExperienceAcquired}</div>
                                <div>{state.values.projectExperience[2].projectExperienceAcquired[2].projectExperienceAcquired}</div>
                            </div>
                        </div>
                    <div className="skills-container">
                        <div>{state.values.skills[0].technicalSkill}</div>
                        <div>{state.values.skills[0].softwareSkill}</div>
                        <div>{state.values.skills[0].communicationSkill}</div>
                    </div> 
                    </div>
                </div>   
            </div>
    </div>
    )
}


export default connect((state, ownProps) => ({
    state: getFormState(state, ownProps.form)
}))(CVPreview)