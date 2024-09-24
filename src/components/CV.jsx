
export default function CV(props) {
    const { personalInfo, educationInfo, experienceInfo, showPersonal, showEducation, showExperience } = props

    return (
        <div>
            {(showPersonal && (<section>
                <h1>Personal Info</h1>
                <h3>{personalInfo.name}</h3>
                <h3>{personalInfo.email}</h3>
                <h3>{personalInfo.phone}</h3>
            </section>))}
            <hr />
            {(showEducation && (<section>
                <h1>Education</h1>
                <h3>{educationInfo.schoolName}</h3>
                <h3>{educationInfo.studyTitle}</h3>
                <h3>{educationInfo.start}-{educationInfo.end}</h3>
            </section>))}
            <hr />
            {(showExperience && (<section>
                <h1>Experience</h1>
                <h3>{experienceInfo.company}</h3>
                <h3>{experienceInfo.position}</h3>
                <h3>{experienceInfo.responsibilities}</h3>
                <h3>{experienceInfo.start}-{experienceInfo.end}</h3>
            </section>))}
        </div>
    )
}
