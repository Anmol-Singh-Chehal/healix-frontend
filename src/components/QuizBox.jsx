import React, { useState } from 'react';
import OptionBox from './OptionBox';
import { ArrowDownCircleIcon } from "lucide-react";
import { useLazyGetUserQuery } from "@/api/user/userApi";
import { dataset } from '../../model/dataset.js';
import { getRandomSymptoms, getNextSymptoms, calculateProbabilities } from '../utils/utils.js';
import jsPDF from "jspdf";

const TOTAL_PAGES = 20;

const QuizBox = () => {

  const [getUser, {}] = useLazyGetUserQuery();
  const [page, setPage] = useState(1);

  const [currentSymptoms, setCurrentSymptoms] = useState(
    getRandomSymptoms(dataset)
  );

  const [selectedSymptoms, setSelectedSymptoms] = useState({});

  const toggleSymptom = (symptom) => {
    setSelectedSymptoms(prev => ({
      ...prev,
      [symptom]: !prev[symptom]
    }));
  };

  const selectedList = Object.keys(selectedSymptoms).filter(s => selectedSymptoms[s]);

  const nextPage = () => {
    if (page < TOTAL_PAGES) {
      let next = getNextSymptoms(dataset, selectedList);
      next = next.filter(sym => !selectedList.includes(sym));
      setCurrentSymptoms(next);
      setPage(prev => prev + 1);
    } else {
      setPage(TOTAL_PAGES + 1);
    }
  };

  const result = calculateProbabilities(dataset, selectedList)[0];

  // -----------------------
  // PDF DOWNLOAD FUNCTION
  // -----------------------
  const downloadPDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(20);
    doc.text("Health Diagnosis Report", 10, 10);

    doc.setFontSize(14);
    doc.text("Selected Symptoms:", 10, 25);

    selectedList.forEach((sym, index) => {
      doc.text(`• ${sym}`, 12, 35 + index * 7);
    });

    let offsetY = 35 + selectedList.length * 7 + 10;

    doc.text("Predicted Disease:", 10, offsetY);
    doc.setFontSize(16);
    doc.text(result.disease, 12, offsetY + 10);

    offsetY += 25;

    doc.setFontSize(14);
    doc.text("Suggested Medicines:", 10, offsetY);

    result.medicines.forEach((med, index) => {
      doc.text(`• ${med}`, 12, offsetY + 10 + index * 7);
    });

    doc.save("health-report.pdf");
  };

  // -----------------------
  // FINAL RESULT PAGE
  // -----------------------
  if (page === TOTAL_PAGES + 1) {
    return (
      <div className="p-6 max-h-[74vh] overflow-y-auto overflow-x-hidden pr-2 scrollbar-thin w-full">
        <h1 className="text-xl font-bold">Your Results</h1>

        <h2 className="text-lg mt-3 font-semibold">Selected Symptoms</h2>
        <ul className="list-disc pl-5">
          {selectedList.map((s, i) => <li key={i}>{s}</li>)}
        </ul>

        <h2 className="text-lg mt-6 font-semibold">Predicted Disease</h2>
        <p className="text-indigo-700 font-bold text-xl">{result.disease}</p>

        <h2 className="text-lg mt-6 font-semibold">Suggested Medicines</h2>
        <ul className="list-disc pl-5">
          {result.medicines.slice(0, 20).map((m, i) => <li key={i}>{m}</li>)}
        </ul>

        <button
          onClick={downloadPDF}
          className="mt-6 bg-indigo-900 text-white px-6 py-2 rounded hover:scale-110 transition"
        >
          Download PDF
        </button>
      </div>
    );
  }

  // -----------------------
  // QUESTIONS PAGE
  // -----------------------
  return (
    <div className="flex flex-col gap-6 w-full">

      <div className="text-center">
        <h1 className="text-xl font-semibold">Page {page} of {TOTAL_PAGES}</h1>
        <h2 className="text-indigo-800">Select one or more symptoms carefully</h2>
        <h3 className="text-lg mt-2">What are you feeling?</h3>
      </div>

      <div className="flex flex-col gap-2">
        {currentSymptoms.map((symptom, i) => (
          <OptionBox
            key={i}
            text={symptom}
            tickValue={!!selectedSymptoms[symptom]}
            onClick={() => toggleSymptom(symptom)}
          />
        ))}
      </div>

      <div
        onClick={nextPage}
        className='cursor-pointer flex gap-2 self-center justify-center items-center 
        font-semibold bg-indigo-900 text-white p-2 px-4 rounded-[10px] 
        hover:scale-[1.2] ease-in-out duration-200'
      >
        <p>Next</p>
        <ArrowDownCircleIcon className='w-6 h-6 rotate-[-90deg]' />
      </div>

    </div>
  );
};

export default QuizBox;
