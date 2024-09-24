import React from 'react'
import { useState } from 'react'

export default function Personal(props) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [display, setDisplay] = useState(true)

    const handleSubmit = (e) => {
        e.preventDefault()
        props.handlePersonalSubmit({name: name, email: email, phone: phone})
        setName('')
        setEmail('')
        setPhone('')
        setDisplay(false)
    }

    const toggleDisplay = () => {
        setDisplay(!display)
    }
    
    return (
        <div>
            <h1 className='clickable-header' onClick={toggleDisplay}>Personal Info</h1>
            {display && 
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)}/>
                <input type='text' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type='text' placeholder='Phone Number' value={phone} onChange={(e) => setPhone(e.target.value)}/>
                
                <input type='submit' />
            </form>}
        </div>
    )
}
