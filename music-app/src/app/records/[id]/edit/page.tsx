"use client";

import { usePathname } from "next/navigation";
import LoadingState from "@/components/states/LoadingState";
import ErrorState from "@/components/states/ErrorState";
import RecordForm from "@/components/forms/RecordForm";
import useFetchRecord from "@/viewmodel/hooks/useFetchRecord";
import { useUpdateRecord } from "@/viewmodel/hooks/useUpdateRecord";
import Button from "@/components/buttons/Button";

const EditRecord = () => {
  const pathname = usePathname();
  const id = pathname?.split("/").at(-2) || "";

  const { record, loading, error } = useFetchRecord(id);
  const { updateRecord } = useUpdateRecord(id);

  const handleUpdate = async (updatedRecord: any) => {
    const error = await updateRecord(updatedRecord);
    if (error) {
      alert(error);
    }
    else {
      alert("Record updated successfully!")
    }

    return error;
  };

  if (loading) return <LoadingState />;
  if (error) return <ErrorState errorMessage={error} />;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-6">
      <div className="max-w-lg w-full bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4">Edit Record</h1>
        <RecordForm record={record} onSubmit={handleUpdate} />
        <Button href={`/records/${id}`}>Back to Record Details</Button>
      </div>
    </div>
  );
};

export default EditRecord;