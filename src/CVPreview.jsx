import React from "react";
import './styles/CVpreview.css';
import { connect } from 'react-redux'
import { getFormState } from './Redux/FinalFormDuck'
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const CVPreview = ({ state }) => {
    const printDocument = () => {
        const input = document.getElementById('divToPrint');
        html2canvas(input, {
            scale:2.5
          })
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF('p', 'pt', 'a4');
                pdf.addImage(imgData, 'PNG', 0, 0, 595.3, 841.9);
                // pdf.output('dataurlnewwindow');
                pdf.save("download.pdf");
      })
    ;
      };


    const education = [];
        for (let i = 0; i < 2; i++) {
            const educationDegree = state.values.education[i];
            education.push(educationDegree);
            //console.log(education)
        }
    return (
        <div className="preview-bg">
        <div className="preview-sticky">
        <div id="divToPrint" className="preview-container">
                <div className="preview-container-child">
                    <div className="personal-container">
                        <div className="personal-name">{state.values.personal[0].name}</div>
                        <div className="flex-row twelve-px">
                            <div>{state.values.personal[0].email}</div>
                            <div className="bullet-space">•</div>
                            <div>{state.values.personal[0].phoneNumber}</div>
                            <div className="bullet-space">•</div>
                            <div>{state.values.personal[0].githubLink}</div>
                        </div>
                        <div className="space"></div>
                    </div>
                    <div className="skills-container">
                        <div className="underline-border twelve-px">Skills</div>
                        <div className="indent-left">
                            <div className="flex-row">
                                <div className="bold right-space">Frameworks/Libraries :</div>
                                <div>{state.values.skills[0].softwareSkill}</div>
                            </div>
                            <div className="flex-row">
                                <div className="bold right-space">Programming Languages :</div>
                                <div>{state.values.skills[0].technicalSkill}</div>
                            </div>
                            <div className="flex-row">
                                <div className="bold right-space">Software/Tools :</div>
                                <div>{state.values.skills[0].communicationSkill}</div>
                            </div>
                        </div>
                        <div className="space"></div>
                    </div> 
                    <div className="project-container">
                        <div>
                            <div className="underline-border twelve-px">Projects</div>
                            <div className="flex-row justify-space-between">
                                <div className="bold">{state.values.projectExperience[0].projectName}</div>
                                <div className="flex-row">
                                    <div className="bold">{state.values.projectExperience[0].startDateProject}</div>
                                    <div className="bullet-space">-</div>
                                    <div className="bold">{state.values.projectExperience[0].endDateProject}</div>
                                </div>
                            </div>
                            <ul className="indent-left">
                                <li>{state.values.projectExperience[0].projectExperienceAcquired[0].projectExperienceAcquired}</li>
                                <li>{state.values.projectExperience[0].projectExperienceAcquired[1].projectExperienceAcquired}</li>
                                <li>{state.values.projectExperience[0].projectExperienceAcquired[2].projectExperienceAcquired}</li>
                            </ul>
                            <div className="space"></div>
                        </div>
                        <div>
                            <div className="flex-row justify-space-between">
                                <div className="bold">{state.values.projectExperience[1].projectName}</div>
                                <div className="flex-row">
                                    <div className="bold">{state.values.projectExperience[1].startDateProject}</div>
                                    <div className="bullet-space">-</div>
                                    <div className="bold">{state.values.projectExperience[1].endDateProject}</div>
                                </div>
                            </div>
                            <ul className="indent-left">
                                <li>{state.values.projectExperience[1].projectExperienceAcquired[0].projectExperienceAcquired}</li>
                                <li>{state.values.projectExperience[1].projectExperienceAcquired[1].projectExperienceAcquired}</li>
                                <li>{state.values.projectExperience[1].projectExperienceAcquired[2].projectExperienceAcquired}</li>
                            </ul>
                            <div className="space"></div>
                        </div>
                        <div>
                            <div className="flex-row justify-space-between">
                                <div className="bold">{state.values.projectExperience[2].projectName}</div>
                                <div className="flex-row">
                                    <div className="bold">{state.values.projectExperience[2].startDateProject}</div>
                                    <div className="bullet-space">-</div>
                                    <div className="bold">{state.values.projectExperience[2].endDateProject}</div>
                                </div>
                            </div>
                            <ul className="indent-left">
                                <li>{state.values.projectExperience[2].projectExperienceAcquired[0].projectExperienceAcquired}</li>
                                <li>{state.values.projectExperience[2].projectExperienceAcquired[1].projectExperienceAcquired}</li>
                                <li>{state.values.projectExperience[2].projectExperienceAcquired[2].projectExperienceAcquired}</li>
                            </ul>
                            <div className="space"></div>
                        </div>
                        <div>
                            <div className="flex-row justify-space-between">
                                <div className="bold">{state.values.projectExperience[3].projectName}</div>
                                <div className="flex-row">
                                    <div className="bold">{state.values.projectExperience[3].startDateProject}</div>
                                    <div className="bullet-space">-</div>
                                    <div className="bold">{state.values.projectExperience[3].endDateProject}</div>
                                </div>
                            </div>
                            <ul className="indent-left">
                                <li>{state.values.projectExperience[3].projectExperienceAcquired[0].projectExperienceAcquired}</li>
                                <li>{state.values.projectExperience[3].projectExperienceAcquired[1].projectExperienceAcquired}</li>
                            </ul>
                            <div className="space"></div>
                        </div>
                        
                    </div>
                    <div className="education-container">
                        <div className="underline-border twelve-px">Education & Credentials</div>
                        <div>
                            <div className="flex-row justify-space-between">
                               <div className="bold">{education[0].degree}</div>
                               <div className="flex-row">
                                    <div>{education[0].startDateEducation}</div>
                                    <div className="bullet-space">-</div>
                                    <div>{education[0].endDateEducation}</div>
                               </div>
                            </div>
                            <div>{education[0].university}</div>
                            <div className="space"></div>
                        </div>
                        <div>
                            <div className="flex-row justify-space-between">
                               <div className="bold">{education[1].degree}</div>
                               <div className="flex-row">
                                    <div>{education[1].startDateEducation}</div>
                                    <div className="bullet-space">-</div>
                                    <div>{education[1].endDateEducation}</div>
                               </div>
                            </div>
                            <div>{education[1].university}</div>
                            <div className="space"></div>
                        </div>
                    </div>
                    <div className="work-container">
                        <div className="underline-border twelve-px">Work Experience</div>
                        <div>
                            <div className="flex-row justify-space-between">
                                <div className="flex-row bold">
                                    <div>{state.values.workExperience[0].companyName}</div>
                                    <div className="right-space">,</div>
                                    <div>{state.values.workExperience[0].projectName}</div>
                                </div>
                                <div className="flex-row">
                                    <div>{state.values.workExperience[0].startDateExperience}</div>
                                    <div className="bullet-space">-</div>
                                    <div>{state.values.workExperience[0].startDateExperience}</div>
                               </div>
                            </div>
                            <ul className="indent-left">
                                <li>{state.values.workExperience[0].experienceAcquired[0].workExperienceAcquired}</li>
                                <li>{state.values.workExperience[0].experienceAcquired[1].workExperienceAcquired}</li>
                            </ul>
                        </div>
                    </div>
                </div>   
            </div>
        <div className="print-button-container">
            <button onClick={printDocument} className="print-button">
            <svg className="print-icon icon-size"></svg>
                <div className="submit-text">
                    Print
                </div>
            </button>
            <button className="print-button">
                <svg className="download-icon icon-size"></svg>
                <div className="submit-text">
                    Download
                </div>
            </button>
        </div>
        </div>
    </div>
    )
}


export default connect((state, ownProps) => ({
    state: getFormState(state, ownProps.form)
}))(CVPreview)