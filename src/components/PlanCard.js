'use client';

import { CheckCircle } from 'lucide-react'; 

export default function PlanCard({ plan, selected, onSelect }) {
  return (
    <div
      onClick={onSelect}
      className={`p-6 border-2 rounded-lg cursor-pointer transition-all duration-200 
        ${selected ? 'bg-blue-100 border-blue-600 shadow-md' : 'border-gray-300 hover:border-blue-400 hover:shadow-sm'}
        min-h-full flex flex-col justify-between`}
    >
      <div>
        <h2 className="font-bold text-2xl mb-4 text-gray-800 text-center">{plan.name}</h2>
        <p className="text-center text-xl text-blue-400 font-semibold mb-6">{plan.price}</p>

        <div className="space-y-2 text-gray-700 text-sm">
          {plan.data && (
            <p className="flex items-center gap-2">
              <CheckCircle className="text-green-600 w-4 h-4" /> {plan.data} Data
            </p>
          )}
          {plan.validity && (
            <p className="flex items-center gap-2">
              <CheckCircle className="text-green-600 w-4 h-4" /> {plan.validity} Validity
            </p>
          )}
          {plan.speed && (
            <p className="flex items-center gap-2">
              <CheckCircle className="text-green-600 w-4 h-4" /> {plan.speed} Speed
            </p>
          )}
          {plan.support && (
            <p className="flex items-center gap-2">
              <CheckCircle className="text-green-600 w-4 h-4" /> {plan.support} Support
            </p>
          )}
          {plan.roaming && (
            <p className="flex items-center gap-2">
              <CheckCircle className="text-green-600 w-4 h-4" /> Global Roaming
            </p>
          )}
        </div>
      </div>

      <div className="mt-6 flex justify-center">
        <button
          className={`px-4 py-2 rounded-md font-semibold w-full ${
            selected
              ? 'bg-teal-500 text-white'
              : 'bg-teal-400 hover:bg-teal-500 text-white'
          }`}
        >
          {selected ? 'Selected' : 'Select Plan'}
        </button>
      </div>
    </div>
  );
}
