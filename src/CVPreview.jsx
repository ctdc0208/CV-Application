import React from "react";
import './styles/CVpreview.css';
import { connect } from 'react-redux'
import { getFormState } from './Redux/FinalFormDuck'
import { v4 as uuidv4 } from 'uuid';
import html2canvas from "html2canvas";
import jsPDF from "jspdf";


function Item(props) {
    return <li>{props.print}</li>;
  }

const CVPreview = ({ state }) => {
    
    const education =[state.values.education];
    const project = [state.values.projectExperience]
    const work = [state.values.workExperience]
    const personal = [state.values.personal]
    const skill = [state.values.skills]

    const printPersonal = personal.map((personals, index) =>
        <div key={index}>
            {personals.map((subItems, sIndex) => {
                return <div key={sIndex}>
                    <div className="personal-container" key={sIndex}>
                    <div className="personal-name">{subItems.name}</div>
                    <div className="flex-row twelve-px">
                    <div>{subItems.email}</div>
                    <div className="bullet-space">•</div>
                    <div>{subItems.phoneNumber}</div>
                    <div className="bullet-space">•</div>
                    <div>{subItems.githubLink}</div>
                    </div>
                    <div className="space"></div>
                    </div>
                </div>
            })}
        </div>
    )

    const printSkills = skill.map((skills, index) =>
        <div key={index}>
            {skills.map((subItems, sIndex) => {
                return <div key={sIndex}>
                    <div className="skills-container" key={index}>
                    <div className="underline-border twelve-px">Skills</div>
                    <div className="indent-left">
                    <div className="flex-row">
                    <div className="bold right-space">Frameworks/Libraries :</div>
                    <div>{subItems.softwareSkill}</div>
                    </div>
                    <div className="flex-row">
                    <div className="bold right-space">Programming Languages :</div>
                    <div>{subItems.technicalSkill}</div>
                    </div>
                    <div className="flex-row">
                    <div className="bold right-space">Software/Tools :</div>
                    <div>{subItems.communicationSkill}</div>
                    </div>
                    </div>
                    <div className="space"></div>
                    </div> 
                </div>
            })}
        </div>
    ) 

    const printProject = project.map((projects, index) =>
        <div className="project-container" key={index}>
            <div className="underline-border twelve-px">Projects</div>
            <div>
            {projects.map((subItems, sIndex) => {
                    const getDataProject = [subItems]
                        const resultProject = getDataProject.map((o) => ({
                            ...o,
                            id: `${uuidv4()}`
                        }));
                        const printProjectSecond = resultProject.map((subProject) => {
                            const projectExperience = [subProject.projectExperienceAcquired];
                            const printProjectExperience = projectExperience.map((projectExperienceTwo, subIndex) => {
                                return <div key={subIndex}>
                                    {projectExperienceTwo?.map((subsubItems, subsubIndex) => {
                                         const getData = [subsubItems]
                                         const result = getData.map((o) => ({
                                             ...o,
                                             id: `${uuidv4()}`
                                         }));
                                        const printSecondProjectExperience = result.map((subsubProject) => {
                                            return <li key={subsubProject.id}>
                                                {subsubProject?.projectExperienceAcquired}
                                            </li>
                                        })
                                        return <ul key={subsubIndex}  className="indent-left">
                                                {printSecondProjectExperience}
                                        </ul>
                                    })}
                                </div>
                            })
                            return <div key={subProject.id}>
                            <div className="flex-row justify-space-between">
                                <div className="bold">{subProject.projectName}</div>
                                <div className="flex-row">
                                    <div className="bold">{subProject.startEndDateProject}</div>
                                </div>
                            </div>
                            <div>{printProjectExperience}</div>
                            <div className="space"></div>
                        </div>
                        })
                    return <div key={sIndex}>
                        <div>{printProjectSecond}</div>
                    </div>
                })}
            </div>
        </div>
    )
    
    const printEducation = education.map((education, index) =>
        <div key={index} className="education-container">
            <div className="underline-border twelve-px">Education & Credentials</div>
            <div>
                    {education.map((subItems, index) => {
                        const getData = [subItems]
                        const result = getData.map((o) => ({
                            ...o,
                            id: `${uuidv4()}`
                        }));
                        const printEducationSecond = result.map((subEducation) => {
                            return <div key={subEducation.id}>
                                        <div className="flex-row justify-space-between">
                                            <div className="bold">{subEducation.degree}</div>
                                                <div className="flex-row">
                                                <div>{subEducation.startEndDateEducation}</div>
                                        </div>
                                        </div>
                                            <div>{subEducation.university}</div>
                                        <div className="space"></div>
                                </div>
                        })
                        return <div key={index}>
                            <div>{printEducationSecond}</div>
                        </div>
                    })}
            </div>
        </div>
    );

    const printWork = work.map((works, index) =>
        <div className="project-container" key={index}>
            <div className="underline-border twelve-px">Projects</div>
            <div>
                {works.map((subItems, sIndex) => {
                    const getDataWork = [subItems]
                        const resultWork = getDataWork.map((o) => ({
                            ...o,
                            id: `${uuidv4()}`
                        }));
                        const printWorkSecond = resultWork.map((subWork) => {
                            const workExperience = [subWork.experienceAcquired];
                            const printWorkExperience = workExperience.map((workExperienceTwo, subIndex) => {
                                return <div key={subIndex}>
                                    {workExperienceTwo?.map((subsubItems, subsubIndex) => {
                                         const getData = [subsubItems]
                                         const result = getData.map((o) => ({
                                             ...o,
                                             id: `${uuidv4()}`
                                         }));

                                        const printSecondWorkExperience = result.map((subsubWork) => {
                                            return <li key={subsubWork.id}>
                                                {subsubWork?.workExperienceAcquired}
                                            </li>
                                        })

                                        return <ul key={subsubIndex}  className="indent-left">
                                                {printSecondWorkExperience}
                                        </ul>
                                    })}
                                </div>
                            })
                            return <div key={subWork.id}>
                            <div className="flex-row justify-space-between">
                                <div className="bold">{subWork.projectName}</div>
                                <div className="flex-row">
                                    <div className="bold">{subWork.startEndDateExperience}</div>
                                </div>
                            </div>
                            <div>{printWorkExperience}</div>
                            <div className="space"></div>
                        </div>
                        })
                    return <div key={sIndex}>
                        <div>{printWorkSecond}</div>
                    </div>
                })}
            </div>
        </div>
    ) 

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

    return (
        <div className="preview-bg">
        <div className="preview-sticky">
        <div id="divToPrint" className="preview-container">
                <div className="preview-container-child">

                    <div>{printPersonal}</div>
                    <div>{printSkills}</div>
                    <div>{printProject}</div>
                    <div>{printEducation}</div>
                    <div>{printWork}</div>

                        {/* <div className="personal-name">{state.values.personal[0].name}</div> */}
                        {/* <div className="flex-row twelve-px">
                            <div>{state.values.personal[0].email}</div>
                            <div className="bullet-space">•</div>
                            <div>{state.values.personal[0].phoneNumber}</div>
                            <div className="bullet-space">•</div>
                            <div>{state.values.personal[0].githubLink}</div>
                        </div>
                        <div className="space"></div> */}
                        {/* <div className="skills-container">
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
                        </div>  */}
                    {/* <div className="project-container">
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
                        
                    </div> */}
                    {/* <div className="work-container">
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
                    </div> */}
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