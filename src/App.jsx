import { useState } from 'react'
import './App.css'
import Personal from './components/Personal'
import Education from './components/Education'
import Experience from './components/Experience'
import CV from './components/CV'

function App() {
  const [personalInfo, setPersonalInfo] = useState({name: '', email: '', phone: ''})
  const [educationInfo, setEducationInfo] = useState({schoolName: '', studyTitle: '', start: '', end: ''})
  const [experienceInfo, setExperienceInfo] = useState({company: '', position: '', responsibilities: '', start: '', end: ''})
  const [showPersonal, setShowPersonal] = useState(false)
  const [showEducation, setShowEducation] = useState(false)
  const [showExperience, setShowExperience] = useState(false)

  const handlePersonalSubmit = (info) => {
    setPersonalInfo(info)
    setShowPersonal(true)
  }
  const handleEducationSubmit = (info) => {
    setEducationInfo(info)
    setShowEducation(true)
  }
  const handleExperienceSubmit = (info) => {
    setExperienceInfo(info)
    setShowExperience(true)
  }

  return (
    <div className='container'>
      <div className='left'>
      <Personal handlePersonalSubmit={handlePersonalSubmit}/>
      <Education handleEducationSubmit={handleEducationSubmit}/>
      <Experience handleExperienceSubmit={handleExperienceSubmit}/>
      </div>
      <div className='right'>
        <CV 
          personalInfo={personalInfo} 
          educationInfo={educationInfo} 
          experienceInfo={experienceInfo} 
          showPersonal={showPersonal} 
          showEducation={showEducation} 
          showExperience={showExperience}
        />
      </div>
    </div>
  )
}

export default App
