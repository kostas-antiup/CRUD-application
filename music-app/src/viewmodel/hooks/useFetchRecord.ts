import { useEffect, useState } from "react";
import { useRecordModel } from "@/context/RecordContext";
import { Record } from "@/model/Record";

const useFetchRecord = (id: string) => {
  const [record, setRecord] = useState<Record | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const recordModel = useRecordModel();

  useEffect(() => {
    const fetchRecord = async () => {
      try {
        const fetchedRecord = await recordModel.get(id);

        if (fetchedRecord) {
          setRecord(fetchedRecord);
        } else {
          setError("Record not found.");
        }
      } catch (err) {
        console.error("Error fetching record:", err);
        setError("An error occurred while fetching the record.");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchRecord();
    }
  }, [id, recordModel]);

  return { record, loading, error };
};

export default useFetchRecord;