"use client";

import { useRecordList } from "@/viewmodel/hooks/useRecordList";
import { useDeleteRecord } from "@/viewmodel/hooks/useDeleteRecord";
import RecordItem from "@/components/recordview/RecordItem";
import Button from "@/components/buttons/Button";

const RecordList = () => {
  const { records, setRecords} = useRecordList();
  const { deleteRecord } = useDeleteRecord(setRecords);

  if (!records.length) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white p-6">
        <p className="text-lg text-gray-700">No records found.</p>
        <Button href="/">Back to Home</Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Records</h1>
        <ul className="space-y-6">
          {records.map((record) => (
            <RecordItem
              key={record.id}
              record={record}
              onDelete={deleteRecord}
            />
          ))}
        </ul>
        <Button href="/">Back to Home</Button>
      </div>
    </div>
  );
};

export default RecordList;