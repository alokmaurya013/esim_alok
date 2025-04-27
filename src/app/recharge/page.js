'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import PlanCard from '../../components/PlanCard';
import data from '../../data/esimData.json';

export default function Recharge() {
  const router = useRouter();
  const [availablePlans, setAvailablePlans] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [currentPlan, setCurrentPlan] = useState(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const bookingId = params.get('bookingId')?.trim();

      const foundUser = Array.isArray(data)
        ? data.find(user => user.bookingId === bookingId)
        : null;

      if (foundUser) {
        setAvailablePlans(foundUser.availablePlans || []);
        setCurrentPlan(foundUser.plan || null);
      }
    }
  }, []);

  const handleSelectPlan = (plan) => {
    if (selectedPlan?.name === plan.name) {
      setSelectedPlan(null);
    } else {
      setSelectedPlan(plan);
    }
  };

  const handleRecharge = () => {
    if (selectedPlan) {
      setSuccess(true);
      setTimeout(() => {
        router.push(`/dashboard?bookingId=${getBookingIdFromUrl()}`);
      }, 1000);
    }
  };

  const handleBackToDashboard = () => {
    router.push(`/dashboard?bookingId=${getBookingIdFromUrl()}`);
  };

  const getBookingIdFromUrl = () => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      return params.get('bookingId')?.trim();
    }
    return '';
  };

  return (
    <div className="p-4 w-full lg:w-[70%] mx-auto min-h-screen bg-gray-50">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8 gap-4">
        <button
          onClick={handleBackToDashboard}
          className="bg-teal-400 hover:bg-teal-500 text-white font-semibold py-2 px-4 rounded-md transition flex items-center justify-center gap-2  md:w-auto"
        >
          <span>←</span> Back to Dashboard
        </button>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 text-center md:text-right">
          Manage SIM
        </h1>
      </div>

      {/* Current Plan */}
      {currentPlan && (
        <div className="p-6 rounded-lg shadow-lg bg-gradient-to-r from-blue-50 via-white to-blue-100 mb-8 border border-gray-200">
          <h2 className="text-xl md:text-2xl font-bold text-gray-700 mb-6 text-center">
            Your Current Plan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700 text-base md:text-lg">
            <div className="flex flex-col space-y-3">
              <p><span className="font-semibold text-gray-800">Name:</span> {currentPlan.name}</p>
              <p><span className="font-semibold text-gray-800">Valid From:</span> {currentPlan.validFrom}</p>
              <p><span className="font-semibold text-gray-800">Valid Until:</span> {currentPlan.validUntil}</p>
            </div>
            <div className="flex flex-col space-y-3">
              <p><span className="font-semibold text-gray-800">Price:</span> {currentPlan.price}</p>
              <p><span className="font-semibold text-gray-800">Remaining Data:</span> {currentPlan.remainingData}</p>
            </div>
          </div>
        </div>
      )}

      {/* Available Plans */}
      {availablePlans.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 text-center">
            Available Recharge Plans
          </h2>
          <p className="text-gray-600 text-center mt-2 text-sm md:text-base">
            Choose a plan below to recharge your SIM and stay connected.
          </p>
        </div>
      )}

      {/* Plan Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {availablePlans.map((plan) => (
          <PlanCard
            key={plan.name}
            plan={plan}
            selected={selectedPlan?.name === plan.name}
            onSelect={() => handleSelectPlan(plan)}
          />
        ))}
      </div>

      {/* Recharge Button */}
      <div className="flex justify-center mt-8">
        <button
          onClick={handleRecharge}
          disabled={!selectedPlan}
          className={`px-8 py-3 rounded-md font-semibold transition ${
            selectedPlan
              ? 'bg-teal-500 hover:bg-teal-600 text-white'
              : 'bg-gray-300 hover:bg-gray-400 text-gray-700 cursor-not-allowed'
          }`}
        >
          Recharge Now
        </button>
      </div>

      {/* Success Modal */}
      {success && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 flex items-center justify-center">
          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <h2 className="text-2xl font-bold text-green-600 mb-4">Recharge Successful!</h2>
            <p className="text-gray-700 text-lg">
              You recharged <span className="font-semibold">{selectedPlan.name}</span> successfully.
            </p>
            <p className="text-sm text-gray-500 mt-4">Redirecting to Dashboard...</p>
          </div>
        </div>
      )}
    </div>
  );
}
