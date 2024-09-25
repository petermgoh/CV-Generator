import html2pdf from 'html2pdf.js'
export default function CV(props) {
    const { personalInfo, educationInfo, experienceInfo, showPersonal, showEducation, showExperience } = props

    const downloadPDF = () => {
        const element = document.getElementById('cv-content');
        html2pdf().from(element).save('MyCV.pdf')
    }

    return (
        <div>
            <button onClick={downloadPDF} style={{ marginBottom: '20px', padding: '10px', cursor: 'pointer' }}>Download PDF</button>
            <div id="cv-content">
                {showPersonal && (
                    <section className="personal-info">
                        <h1>Personal Info</h1>
                        <div className="cv-item">
                            <strong>Name:</strong>
                            <span>{personalInfo.name}</span>
                        </div>
                        <div className="cv-item">
                            <strong>Email:</strong>
                            <span>{personalInfo.email}</span>
                        </div>
                        <div className="cv-item">
                            <strong>Phone:</strong>
                            <span>{personalInfo.phone}</span>
                        </div>
                        <hr />
                    </section>
                )}

                {showEducation && (
                    <section className="education">
                        <h1>Education</h1>
                        <div className="cv-item">
                            <strong>School Name:</strong>
                            <span>{educationInfo.schoolName}</span>
                        </div>
                        <div className="cv-item">
                            <strong>Title of Study:</strong>
                            <span>{educationInfo.studyTitle}</span>
                        </div>
                        <div className="cv-item">
                            <strong>Years:</strong>
                            <span>{educationInfo.start} - {educationInfo.end}</span>
                        </div>
                        <hr />
                    </section>
                )}

                {showExperience && (
                    <section className="experience">
                        <h1>Experience</h1>
                        <div className="cv-item">
                            <strong>Company:</strong>
                            <span>{experienceInfo.company}</span>
                        </div>
                        <div className="cv-item">
                            <strong>Position:</strong>
                            <span>{experienceInfo.position}</span>
                        </div>
                        <div className="cv-item">
                            <strong>Responsibilities:</strong>
                            <span>{experienceInfo.responsibilities}</span>
                        </div>
                        <div className="cv-item">
                            <strong>Years:</strong>
                            <span>{experienceInfo.start} - {experienceInfo.end}</span>
                        </div>
                    </section>
                )}
            </div>
        </div>
    )
}
    