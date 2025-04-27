'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import data from '../../data/esimData.json';
import UsageBar from '../../components/UsageBar';

export default function Dashboard() {
  const router = useRouter();
  const [userData, setUserData] = useState(null);
  const [bookingId, setBookingId] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const id = params.get('bookingId')?.trim();
      console.log("Extracted bookingId from URL:", id);
      setBookingId(id);
    }
  }, []);

  useEffect(() => {
    if (bookingId) {
      const foundUser = Array.isArray(data)
        ? data.find(user => user.bookingId === bookingId)
        : data.bookingId === bookingId
          ? data
          : null;
      setUserData(foundUser || null);
    }
  }, [bookingId]);

  if (!userData) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-500 text-lg">Loading or invalid Booking ID...</p>
      </div>
    );
  }

  const { plan, usage, currentSession } = userData;

  const handleRechargeClick = () => {
    router.push(`/recharge?bookingId=${bookingId}`);
  };

  return (
    <div className="p-4 w-full max-w-7xl mx-auto lg:w-[70%] min-h-screen bg-gray-50">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <button
          onClick={handleRechargeClick}
          className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded-md transition"
        >
          Recharge
        </button>
      </div>

      {/* Usage Summary Box */}
      <div className="bg-gradient-to-r from-blue-50 via-white to-blue-100 shadow-lg rounded-xl p-6 mb-6 border border-gray-200">
        <h2 className="text-lg font-semibold mb-4 text-gray-700">Usage Summary</h2>
        <div className="grid grid-cols-1 gap-6 text-sm">
          {/* Data Usage */}
          <div className="flex flex-col gap-1">
            <div className="flex justify-between text-xs text-gray-600">
              <span>Used: {usage.usedData}</span>
              <span>Total: {usage.totalData}</span>
            </div>
            <UsageBar usage={parseFloat(usage.usedData)} total={parseFloat(usage.totalData)} />
          </div>

          {/* SMS Usage */}
          <div className="flex flex-col gap-1">
            <div className="flex justify-between text-xs text-gray-600">
              <span>Used: {usage.smsUsed} sms</span>
              <span>Total: {usage.smsTotal} sms</span>
            </div>
            <UsageBar usage={parseFloat(usage.smsUsed)} total={parseFloat(usage.smsTotal)} />
          </div>

          {/* Voice Usage */}
          <div className="flex flex-col gap-1">
            <div className="flex justify-between text-xs text-gray-600">
              <span>Used: {usage.voiceUsed}</span>
              <span>Total: {usage.voiceTotal}</span>
            </div>
            <UsageBar 
              usage={convertTimeToMinutes(usage.voiceUsed)} 
              total={convertTimeToMinutes(usage.voiceTotal)} 
            />
          </div>
        </div>
      </div>

      {/* Booking and Session Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Booking Details */}
        <div className="bg-gradient-to-r from-blue-50 via-white to-blue-100 shadow-lg rounded-xl p-6 mb-6 border border-gray-200">
          <h2 className="text-lg font-semibold mb-4 text-gray-700">Booking Details</h2>
          <div className="space-y-4">
            <div className="flex justify-between text-sm text-gray-700">
              <span className="font-medium">Booking ID:</span>
              <span>{bookingId}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-700">
              <span className="font-medium">Plan Name:</span>
              <span>{plan.name}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-700">
              <span className="font-medium">Remaining Data:</span>
              <span>{plan.remainingData}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-700">
              <span className="font-medium">Price:</span>
              <span>{plan.price}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-700">
              <span className="font-medium">Validity:</span>
              <span>{plan.validFrom} - {plan.validUntil}</span>
            </div>
          </div>
        </div>

        {/* Session Information */}
        <div className="bg-gradient-to-r from-blue-50 via-white to-blue-100 shadow-lg rounded-xl p-6 mb-6 border border-gray-200">
          <h2 className="text-lg font-semibold mb-4 text-gray-700">Session Information</h2>
          <div className="space-y-4">
            <div className="flex justify-between text-sm text-gray-700">
              <span className="font-medium">Session ID:</span>
              <span>{currentSession.sessionId}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-700">
              <span className="font-medium">Started:</span>
              <span>{new Date(currentSession.started).toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-700">
              <span className="font-medium">Current Usage:</span>
              <span>{currentSession.usageMB} MB</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper function to convert "h m" format to minutes
function convertTimeToMinutes(timeStr) {
  const [hStr, mStr] = timeStr.split(' ').map(s => parseInt(s));
  const hours = isNaN(hStr) ? 0 : hStr;
  const minutes = isNaN(mStr) ? 0 : mStr;
  return hours * 60 + minutes;
}