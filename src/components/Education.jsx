import React from 'react'
import { useState} from 'react'
export default function Education(props) {
    const [schoolName, setSchoolName] = useState('')
    const [studyTitle, setStudyTitle] = useState('')
    const [start, setStart] = useState('')
    const [end, setEnd] = useState('')
    const [display, setDisplay] = useState(true)

    const handleSubmit = (e) => {
        e.preventDefault()
        props.handleEducationSubmit({schoolName: schoolName, studyTitle: studyTitle, start: start, end: end})
        setSchoolName('')
        setStudyTitle('')
        setStart('')
        setEnd('')
        setDisplay(false)

    }

    const toggleDisplay = () => {
        setDisplay(!display)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1 className='clickable-header' onClick={toggleDisplay}>Education</h1>
                {display && 
                    <>
                    <input type='text' placeholder='School Name' value={schoolName} onChange={(e) => setSchoolName(e.target.value)}/>
                    <input type='text' placeholder='Title of Study' value={studyTitle} onChange={(e) => setStudyTitle(e.target.value)}/>
                    <input type='text' placeholder='Start Year' value={start} onChange={(e) => setStart(e.target.value)}/>
                    <input type='text' placeholder='End Year' value={end} onChange={(e) => setEnd(e.target.value)}/>
                    <input type='submit' />
                    </>}
            </form>
        </div>
    )
}
