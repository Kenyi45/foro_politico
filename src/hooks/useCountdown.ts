import { useState, useEffect, useCallback } from 'react';
import { CountdownTimer } from '../types/index';

interface UseCountdownProps {
  targetDate: Date;
  onComplete?: () => void;
}

interface UseCountdownReturn {
  timeLeft: CountdownTimer;
  isExpired: boolean;
  formatTime: (value: number) => string;
}

export const useCountdown = ({ targetDate, onComplete }: UseCountdownProps): UseCountdownReturn => {
  const [timeLeft, setTimeLeft] = useState<CountdownTimer>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isExpired, setIsExpired] = useState(false);

  const calculateTimeLeft = useCallback((): CountdownTimer => {
    const now = new Date().getTime();
    const target = targetDate.getTime();
    const difference = target - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }, [targetDate]);

  const formatTime = useCallback((value: number): string => {
    return value.toString().padStart(2, '0');
  }, []);

  useEffect(() => {
    const updateTimer = () => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);

      const hasExpired = newTimeLeft.days === 0 && 
                        newTimeLeft.hours === 0 && 
                        newTimeLeft.minutes === 0 && 
                        newTimeLeft.seconds === 0;

      if (hasExpired && !isExpired) {
        setIsExpired(true);
        onComplete?.();
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, [calculateTimeLeft, isExpired, onComplete]);

  return {
    timeLeft,
    isExpired,
    formatTime
  };
}; 