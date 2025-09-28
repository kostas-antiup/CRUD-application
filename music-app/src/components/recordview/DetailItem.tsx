import React from "react";

interface DetailItemProps {
  label: string;
  value: string;
}

const DetailItem: React.FC<DetailItemProps> = ({ label, value }) => (
  <div className="flex justify-between items-center">
    <span className="font-semibold text-gray-700">{label}:</span>
    <span className="text-gray-900">{value}</span>
  </div>
);

export default DetailItem;