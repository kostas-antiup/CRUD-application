import { useRouter } from "next/navigation";
import { useRecordModel } from "@/context/RecordContext";

export const useUpdateRecord = (id: string) => {
  const recordModel = useRecordModel();
  const router = useRouter();

  const updateRecord = async (record: any) => {
    try {
      const error = await recordModel.update(id, record);

      if (error) {
        return error;
      } else {
        router.push(`/records/${id}`);
        return null;
      }
    } catch (err) {
      console.error("Error updating record:", err);
      return "An error occurred while updating the record.";
    }
  };

  return { updateRecord };
};