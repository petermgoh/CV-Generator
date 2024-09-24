import { useState} from 'react'

export default function Experience(props) {
    const [company, setCompany] = useState('')
    const [position, setPosition] = useState('')
    const [responsibilities, setResponsibilities] = useState('')
    const [start, setStart] = useState('')
    const [end, setEnd] = useState('')
    const [display, setDisplay] = useState(true)

    const handleSubmit = (e) => {
        e.preventDefault()
        props.handleExperienceSubmit({company: company, position: position, responsibilities: responsibilities, start: start, end: end})
        setCompany('')
        setPosition('')
        setResponsibilities('')
        setStart('')
        setEnd('')
        setDisplay(false)

    }

    const toggleDisplay = () => {
        setDisplay(!display)
    }

    return (
        <div>
            <h1 className='clickable-header' onClick={toggleDisplay}>Experience</h1>
            {display && 
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Company Name' value={company} onChange={(e) => setCompany(e.target.value)}/>
                <input type='text' placeholder='Position' value={position} onChange={(e) => setPosition(e.target.value)}/>
                <input type='text' placeholder='Responsibilities' value={responsibilities} onChange={(e) => setResponsibilities(e.target.value)}/>
                <input type='text' placeholder='Start Date' value={start} onChange={(e) => setStart(e.target.value)}/>
                <input type='text' placeholder='End Date' value={end} onChange={(e) => setEnd(e.target.value)}/>
                
                <input type='submit' />
            </form>}
        </div>
    )
}

