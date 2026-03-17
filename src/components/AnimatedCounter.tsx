'use client';

import { useEffect, useState, useRef, useMemo } from 'react';

export default function AnimatedCounter({ value }: { value: string }) {
  const [count, setCount] = useState(0);
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  // Parse string only when value changes
  const parsed = useMemo(() => {
    const match = value.match(/^([^0-9]*)([0-9.,]+)(.*)$/);
    if (!match) return null;
    
    let prefix = match[1];
    let numStr = match[2];
    let suffix = match[3];
    let endValue = 0;
    let isThousandDot = false; // like 1.000
    let isDecimalProp = false; // like 1.2

    // Simple heuristic for our specific portfolio cases
    const isThousandFormat = numStr.includes('.') && numStr.split('.')[1].length === 3;

    if (isThousandFormat) {
      endValue = parseInt(numStr.replace('.', ''), 10);
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

    return { prefix, numStr, suffix, endValue, isThousandDot, isDecimalProp };
  }, [value]);

  useEffect(() => {
    if (!parsed) return; // Can't animate non-numbers

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);
    
    return () => observer.disconnect();
  }, [parsed]);

  useEffect(() => {
    if (!inView || !parsed) return;
    
    let startTime: number | null = null;
    let animationFrameId: number;
    const duration = 5000; // 5 seconds animation
    
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // easeOutExpo easing function
      const easing = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(parsed.endValue * easing);
      
      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      }
    };
    
    animationFrameId = window.requestAnimationFrame(step);
    
    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [inView, parsed]);

  if (!parsed) {
    return <span>{value}</span>;
  }

  // Format the current count matching original format
  let displayNum = '';
  if (parsed.isThousandDot) {
    displayNum = Math.floor(count).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  } else if (parsed.isDecimalProp) {
    displayNum = Math.abs(count - parsed.endValue) < 0.1 && count !== 0 
      ? parsed.endValue.toString() 
      : count.toFixed(1);
    // Ensure "1.2" style formatting
    if (displayNum.endsWith('.0') && parsed.endValue % 1 !== 0) {
      displayNum = count.toFixed(1);
    }
  } else {
    displayNum = Math.floor(count).toString();
  }

  return (
    <span ref={ref}>
      {parsed.prefix}{displayNum}{parsed.suffix}
    </span>
  );
}
