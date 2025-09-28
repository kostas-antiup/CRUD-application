import { useRouter } from "next/navigation";
import { Record } from "@/model/Record";
import { useRecordModel } from "@/context/RecordContext";

export const useCreateRecord = () => {
  const recordModel = useRecordModel();
  const router = useRouter();

  const createRecord = async (record: Record) => {
    const error = await recordModel.create(record);

    if (error) {
      return error;
    } else {
      router.push("/records");
      return null;
    }
  };

  return { createRecord };
};