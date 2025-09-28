import { useRecordModel } from "@/context/RecordContext";

export const useDeleteRecord = (setRecords) => {
  const recordModel = useRecordModel();

  const deleteRecord = async (id: string) => {
    if (confirm("Are you sure you want to delete this record?")) {
      try {
        const error = await recordModel.delete(id);
        setRecords((prevRecords) => prevRecords.filter((record) => record.id !== id));

        if (error) {
            return error;
        } else {
            return null;
        }
      } catch (error) {
        console.error("Failed to delete record:", error);
        return "An error occurred while deleting the record.";
      }
    }
  };

  return {
    deleteRecord
  };
};