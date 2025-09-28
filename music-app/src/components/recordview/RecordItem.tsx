import React from "react";
import Button from "@/components/buttons/Button";

interface RecordItemProps {
  record: {
    id: string;
    name: string;
    artist: string;
  };
  onDelete: (id: string) => void;
}

const RecordItem: React.FC<RecordItemProps> = ({ record, onDelete }) => {
  return (
      <li className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">{record.name}</h2>
          <p><strong>Artist:</strong> {record.artist}</p>
          <div className="mt-3 flex items-center space-x-4">
              <Button
                  href={`/records/${record.id}`}
                  className="from-gray-700 to-gray-900 hover:from-gray-800 hover:to-gray-900 text-sm py-1 px-3 rounded-md shadow-sm"
              >
                  View Details
              </Button>
              <Button
                  onClick={() => onDelete(record.id)}
                  className="from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-sm py-1 px-3 rounded-md"
              >
                  Delete
              </Button>
          </div>
      </li>
  );
};

export default RecordItem;