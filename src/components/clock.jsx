import '../modules/components.css'
import {useState, useEffect} from 'react'

export default function Clock() {
    const [seconds, setSeconds]=useState(59)
    const [minutes, setMinutes]=useState(59)
    const [hours, setHours]=useState(59)
    const [days, setDays]=useState(23)

    useEffect(() => {
        const timer = setInterval(() => {
            setSeconds(prev => prev - 1)
        }, 1000)
        return () => clearInterval(timer)
    }, [])

    

    useEffect(()=>{
        if (seconds === 0) {
            setSeconds(59)
            setMinutes(prev => prev - 1)
        }
        if (minutes === 0) {
            setMinutes(59)
            setHours(prev => prev - 1)
        }
        if (hours === 0) {
            setHours(23)
            setDays(prev => prev - 1)
        }
    })

    return (
        <>
            <div className="clock-container">
                <p>{days} days {hours} hours {minutes} minutes {seconds} seconds</p>
            </div>
        </>
    )
}