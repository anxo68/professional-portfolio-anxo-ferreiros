'use client';

import React, { useState, useEffect } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { ExecutiveSummaryPDF } from './ExecutiveSummaryPDF';
import { FileText, Loader2 } from 'lucide-react';

interface DownloadSummaryButtonProps {
  dict: any;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  labelOverride?: string;
}

export const DownloadSummaryButton = ({ 
  dict, 
  variant = 'primary', 
  className = '',
  labelOverride
}: DownloadSummaryButtonProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Tailwind classes based on variant
  const baseClasses = "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-xl";
  
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white px-8 py-4",
    secondary: "bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4",
    outline: "border-2 border-slate-300 hover:border-blue-600 text-slate-700 hover:text-blue-600 bg-white px-8 py-4"
  };

  const finalClasses = `${baseClasses} ${variants[variant]} ${className}`;

  if (!isClient) {
    return (
      <button className={`${finalClasses} opacity-70 cursor-not-allowed disabled`}>
        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
        Processing...
      </button>
    );
  }

  return (
    <PDFDownloadLink
      document={<ExecutiveSummaryPDF dict={dict} />}
      fileName={`Anxo_Ferreiros_Executive_Summary.pdf`}
      className={finalClasses}
    >
      {({ loading }) =>
        loading ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            {dict.Nav?.loadingPDF || "Generating PDF..."}
          </>
        ) : (
          <>
            <FileText className="w-5 h-5 mr-2" />
            {labelOverride || dict.Contact?.downloadSummary || "Download Executive Summary PDF"}
          </>
        )
      }
    </PDFDownloadLink>
  );
};

export default DownloadSummaryButton;
