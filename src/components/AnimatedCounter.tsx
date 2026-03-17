'use client';

import { useEffect, useState, useRef } from 'react';

export default function AnimatedCounter({ value }: { value: string }) {
  const [count, setCount] = useState(0);
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  // Parse string
  // Matches the first sequence of digits, commas, and dots.
  const match = value.match(/^([^0-9]*)([0-9.,]+)(.*)$/);
  
  let prefix = value;
  let numStr = "";
  let suffix = "";
  let endValue = 0;
  let isThousandDot = false; // like 1.000
  let isDecimalProp = false; // like 1.2

  if (match) {
    prefix = match[1];
    numStr = match[2];
    suffix = match[3];

    // Simple heuristic for our specific portfolio cases
    if (numStr === '1.000') {
      endValue = 1000;
      isThousandDot = true;
    } else if (numStr.includes('.')) {
      endValue = parseFloat(numStr);
      isDecimalProp = true;
    } else if (numStr.includes(',')) {
      endValue = parseFloat(numStr.replace(',', '.'));
      isDecimalProp = true;
    } else {
      endValue = parseInt(numStr, 10);
    }
  }

  useEffect(() => {
    if (!match) return; // Can't animate non-numbers

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [match]);

  useEffect(() => {
    if (!inView || !match) return;
    
    let startTime: number | null = null;
    const duration = 2000; // 2 seconds animation
    
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // easeOutExpo easing function
      const easing = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(endValue * easing);
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [inView, endValue, match]);

  if (!match) {
    return <span>{value}</span>;
  }

  // Format the current count matching original format
  let displayNum = '';
  if (isThousandDot) {
    displayNum = Math.floor(count).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  } else if (isDecimalProp) {
    displayNum = Math.abs(count - endValue) < 0.1 && count !== 0 ? endValue.toString() : count.toFixed(1);
    // Ensure "1.2" style formatting
    if (displayNum.endsWith('.0') && endValue % 1 !== 0) displayNum = count.toFixed(1);
  } else {
    displayNum = Math.floor(count).toString();
  }

  return (
    <span ref={ref}>
      {prefix}{displayNum}{suffix}
    </span>
  );
}
