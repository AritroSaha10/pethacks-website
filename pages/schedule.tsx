import Layout from '../components/Layout'
import Navbar from "@components/Navbar"
import SectionHead from "@components/SectionHead"
import { useState } from 'react';
import { m } from "framer-motion"
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";



function generateTimeIntervals(startTime: Date, endTime: Date, interval: number) {
    let timeFormatted = []
    let currDateObj = startTime;

    while (endTime >= currDateObj) {
        timeFormatted.push(
            currDateObj.toLocaleTimeString("en-US", {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true
            })
        );

        currDateObj = new Date(currDateObj.getTime() + interval * 60000);
    }

    return timeFormatted;
}

const eventData = [
    {
        date: "Friday, January 6",
        startTime: new Date("January 6, 2022 15:00"),
        endTime: new Date("January 6, 2022 23:00"),
        events: [
            {
                name: "Opening Ceremony",
                subtitle: "Team",
                color: "bg-yellow-900",
                hours: 1.5,
                text: "text-white"
            },
            {
                name: "Event",
                subtitle: "Cool dude",
                color: "bg-orange-300",
                hours: 1.5,
                text: "text-black"
            }
        ]
    },
    {
        date: "Saturday, January 7",
        startTime: new Date("January 6, 2022 15:00"),
        endTime: new Date("January 6, 2022 23:00"),
        events: [
            {
                name: "Event",
                subtitle: "Extra cool dude",
                color: "bg-orange-300",
                hours: 1.5,
                text: "text-black"
            },
            {
                name: "BREAK",
                subtitle: "",
                hours: 1.5,
            },
            

        ]
    },
    {
        date: "Sunday, January 8",
        startTime: new Date("January 6, 2022 15:00"),
        endTime: new Date("January 6, 2022 23:00"),
        events: [
            {
                name: "Event",
                subtitle: "Coolest dude",
                color: "bg-orange-300",
                hours: 1.5,
                text: "text-black"
            },
            {
                name: "BREAK",
                subtitle: "",
                hours: 1.5,
            },
            {
                name: "End event",
                subtitle: "",
                color: "bg-yellow-700",
                hours: 1.5,
                text: "text-white"
            },
        ]
    }
]

const ScheduleComponent: FC<{ scheduleIdx: number }> = ({ scheduleIdx }) => {
    const dayScheduleData = eventData[scheduleIdx];

    const intervals = generateTimeIntervals(
        dayScheduleData.startTime,
        dayScheduleData.endTime,
        30
    );

    const variants = {
        initial: {
            opacity: 0,
            y: -50,
        },
        animate: {
            opacity: 1,
            y: 0
        },
        exit: {
            opacity: 0,
            y: 100
        }
    }

    return (
        <m.div variants={variants} initial="initial" animate="animate" exit="exit" transition={{ ease: "easeInOut", duration: 0.4 }}>
            <div className="flex w-full gap-4">
                <div className="flex flex-col items-end gap-14">
                    {intervals.map(dateStr => (
                        <p className="text-black text-right" key={dateStr}>{dateStr}</p>
                    ))}
                </div>

                <div className="flex flex-col flex-grow">
                    {dayScheduleData.events.map((event, i) => {
                        event.name = event.name === "BREAK" ? "" : event.name;
                        
                            return (
                                <div className={`flex flex-col justify-center ${event.color} m-1 px-6 `} style={{ height: `${event.hours * 9 }rem` }} key={i}>
                                    <h2 className={`text-xl ${event.text}`}>{event.name}</h2>
                                    {event.subtitle && <h4 className={`text-md ${event.text}`}>{event.subtitle}</h4>}
                                </div>
                            )
                    })}
                </div>
            </div>
        </m.div>
    )
}

export default function Schedule() {
    const [scheduleIdx, setScheduleIdx] = useState(0);

    return (
        <Layout name="Schedule" noNavbar>
          <Navbar />
            <SectionHead title="Schedule" subtitle="All times are in EST!" />

            <div className="flex flex-col w-full self-center px-10 pt-6 pb-2 lg:px-20 xl:px-60 lg:pt-12 lg:pb-4 ">
                <div className="flex justify-center items-center gap-4 mb-4 self-center">
                    <button
                        className="hover:bg-pet-lightorange transition-all duration-150 rounded-full text-5xl text-gray-800"
                        style={{ visibility: scheduleIdx == 0 ? "hidden" : "visible" }}
                        onClick={() => setScheduleIdx(scheduleIdx - 1)}
                    >
                        <BsArrowLeftShort />
                    </button>

                    <h1 className="text-3xl text-center text-black font-semibold">{eventData[scheduleIdx].date}</h1>

                    <button
                        className=" hover:bg-pet-lightorange transition-all duration-150 rounded-full text-5xl text-gray-800"
                        style={{ visibility: scheduleIdx == eventData.length - 1 ? "hidden" : "visible" }}
                        onClick={() => setScheduleIdx(scheduleIdx + 1)}
                    >
                        <BsArrowRightShort />
                    </button>
                </div>

                <ScheduleComponent scheduleIdx={scheduleIdx} />

            </div>
        </Layout>
    )
}