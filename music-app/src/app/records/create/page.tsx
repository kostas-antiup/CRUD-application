"use client";

import RecordForm from "@/components/forms/RecordForm";
import Button from "@/components/buttons/Button";
import { useCreateRecord } from "@/viewmodel/hooks/useCreateRecord";

const CreateRecord = () => {
  const { createRecord } = useCreateRecord();

  const handleCreate = async (createdRecord: any) => {
    const error = await createRecord(createdRecord);
    if (error) {
      alert(error);
    }
    else {
      alert("Record created successfully!")
    }

    return error;
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-6">
      <div className="max-w-lg w-full bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Create Record</h1>
        <RecordForm onSubmit={handleCreate} />
        <Button href="/">Back to Home</Button>
      </div>
    </div>
  );
};

export default CreateRecord;