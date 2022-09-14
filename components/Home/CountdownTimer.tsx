import Link from "next/link";
import { useEffect, useState } from "react";

export default function CountdownTimer() {
  const [partyTime, setPartyTime] = useState(false);

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date("01/6/2023 23:59:59");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setPartyTime(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center border-2 p-10 rounded-xl">
      <div className=" p-9 text-5xl font-bold text-center underline">
        countdown
      </div>

      <div className="flex flex-row text-center p-4 text-white font-bold text-5xl gap-12 flex-wrap items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="flex gap-2">
            {days
              .toString()
              .split("")
              .map((char: string, i: number) => (
                <div className="p-4 bg-pet-teal rounded-lg" key={`days-${i}`}>
                  <span>{char}</span>
                </div>
              ))}
          </div>

          <span className="text-slate-800">days</span>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex gap-2">
            {("0" + hours.toString())
              .slice(-2)
              .split("")
              .map((char: string, i: number) => (
                <div className="p-4 bg-pet-teal rounded-lg" key={`hours-${i}`}>
                  <span>{char}</span>
                </div>
              ))}
          </div>

          <span className="text-slate-800">hours</span>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex gap-2">
            {("0" + minutes.toString())
              .slice(-2)
              .split("")
              .map((char: string, i: number) => (
                <div
                  className="p-4 bg-pet-teal rounded-lg"
                  key={`minutes-${i}`}
                >
                  <span>{char}</span>
                </div>
              ))}
          </div>

          <span className="text-slate-800">minutes</span>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex gap-2">
            {("0" + seconds.toString())
              .slice(-2)
              .split("")
              .map((char: string, i: number) => (
                <div
                  className="p-4 bg-pet-teal rounded-lg"
                  key={`seconds-${i}`}
                >
                  <span>{char}</span>
                </div>
              ))}
          </div>

          <span className="text-slate-800">seconds</span>
        </div>
      </div>

      <Link href="/sign-up">
        <a className="px-4 py-2 bg-orange-500 hover:bg-orange-700 hover:text-white duration-75 transition-all text-2xl rounded-lg font-semibold">
          Sign Up
        </a>
      </Link>
    </div>
  );
}
