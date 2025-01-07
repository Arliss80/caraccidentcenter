import React from 'react';

interface Step {
  title: string;
  content: string;
}

interface PIPStepsProps {
  steps: Step[];
}

export default function PIPSteps({ steps }: PIPStepsProps) {
  return (
    <div className="space-y-6">
      {steps.map((step, index) => (
        <div key={index} className="flex items-start space-x-4">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-blue-600 font-semibold">{index + 1}</span>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-1">{step.title}</h4>
            <p className="text-gray-600">{step.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}