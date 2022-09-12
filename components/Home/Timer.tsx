import {useEffect,useState} from 'react'
import {NextPage} from 'next'


export default function Timer() {
    const [partyTime, setPartyTime] = useState(false)

    const [days, setDays ]= useState(0)
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)

    useEffect(() =>{

        const target = new Date("01/6/2023 23:59:59")

        const interval = setInterval(()=>{
        const now = new Date()
        const difference = target.getTime() - now.getTime()
        
        const d = Math.floor(difference / (1000 * 60 * 60 * 24));
        setDays(d);

        const h = Math.floor((difference % ( 1000 * 60 * 60 * 24)) / (1000* 60 *60))
        setHours(h);

        const m = Math.floor((difference % (1000 * 60 * 60 )) / (1000* 60 ))  
        setMinutes(m);
    
        const s = Math.floor((difference% (1000 * 60 )) / (1000))
        setSeconds(s);

        if (d <= 0 && h <= 0 && m <= 0 && s <= 0 ) {
            setPartyTime(true)
        }
    },1000)

        return ()=>clearInterval(interval)
    },[])

    return (

    <div className = 'border-2 p-10 rounded-xl flex-col'>
        <div className = ' p-9 text-4xl font-bold text-center '>COUNTDOWN</div>
        <div className = 'display-flex text-center'>
            <div className = ''>
                <span className = 'time'>{days}</span>
                <span className = 'label'> Days</span>
            </div>

            <div className = 'timer-segment'>
                <span className = 'time'>{hours}</span>
                <span className = 'label'> Hours</span>
            </div>
            
            <div className = 'timer-segment'>
                <span className = 'time'>{minutes}</span>
                <span className = 'label'> Minutes</span>
            </div>

            <div className = 'timer-segment'>
                <span className = 'time'>{seconds}</span>
                <span className = 'label'> Seconds</span>
            </div>
        </div>

    </div>
    
)
} 


