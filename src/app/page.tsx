'use client'
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import StartupQuote from '@/components/ui/quoter';
import TaskChecklist from '@/components/ui/checklist';
// Type for Digit State
interface TimeState {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

const MILESTONES = [
  { day: 1, text: "Start Building! MVP by 04/01" },
  { day: 7, text: "Barebone MVP" },
  { day: 10, text: "Get 10 People to Try MVP" },
  { day: 14, text: "Modify MVP + 10 More Users" },
  { day: 17, text: "Iteration Phase Begins" },
  { day: 21, text: "Iterate & Build Story/Presentation" },
  { day: 22, text: "Pre-demo day - Test run with V1 community" },
  { day: 23, text: "Demo Day" },
];

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeState>({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00'
  });

  useEffect(() => {
    const targetDate = new Date('2025-04-17T18:00:00');

    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({
          days: days.toString().padStart(2, '0'),
          hours: hours.toString().padStart(2, '0'),
          minutes: minutes.toString().padStart(2, '0'),
          seconds: seconds.toString().padStart(2, '0')
        });
      }
    };

    // Initial call
    updateCountdown();

    // Update every second
    const timer = setInterval(updateCountdown, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(timer);
  }, []);

  const getCurrentMilestone = (daysLeft: number) => {
    // Convert days left to days elapsed (counting up from 1)
    const currentDay = 23 - Math.floor(daysLeft) + 1;
    
    // Find the last milestone that we've reached or passed
    for (let i = MILESTONES.length - 1; i >= 0; i--) {
      if (currentDay >= MILESTONES[i].day) {
        return MILESTONES[i];
      }
    }
    return null;
  };

  const currentMilestone = getCurrentMilestone(Number(timeLeft.days));

  // Individual digit component
  const TimerDigit: React.FC<{ value: string; label: string }> = ({ value, label }) => (
    <div className="flex flex-col items-center">
      <div className="bg-zinc-900 text-white rounded-lg shadow-lg w-20 h-24 flex items-center justify-center text-5xl font-bold mb-2">
        {value}
      </div>
      <span className="text-zinc-400 text-sm uppercase tracking-wider">
        {label}
      </span>
    </div>
  );

  return (
    <div className="space-y-8">
      <Card className="w-full max-w-4xl mx-auto bg-background border-border shadow-2xl">
        <CardContent className="pt-4 px-8 pb-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Countdown til Demo Day
            </h2>
            {currentMilestone && (
              <div className="mt-2">
                <p className="text-muted-foreground">
                  Current Goal (Day {23 - Math.floor(Number(timeLeft.days)) + 1}):
                </p>
                <p className="text-lg text-foreground font-medium">
                  {currentMilestone.text}
                </p>
              </div>
            )}
          </div>
          <div className="flex justify-center items-center space-x-4 sm:space-x-8">
            <TimerDigit value={timeLeft.days} label="Days" />
            <TimerDigit value={timeLeft.hours} label="Hours" />
            <TimerDigit value={timeLeft.minutes} label="Minutes" />
            <TimerDigit value={timeLeft.seconds} label="Seconds" />
          </div>
        </CardContent>
      </Card>
      <TaskChecklist />
      <StartupQuote/>
    </div>
  );
};

export default CountdownTimer;