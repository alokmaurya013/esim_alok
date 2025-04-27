export default function UsageBar({ usage, total }) {
  const usagePercentage = (usage / total) * 100;

  return (
    <div className="w-full bg-gray-300 h-4 rounded overflow-hidden">
      <div
        className="h-4 bg-teal-500 transition-all duration-300"
        style={{ width: `${Math.min(usagePercentage, 100)}%` }} // Prevent the bar from going over 100%
      ></div>
    </div>
  );
}