import { useEffect, useState } from "react";
import { useRecordModel } from "@/context/RecordContext";
import { Record } from "@/model/Record";

export const useRecordList = () => {
  const recordModel = useRecordModel();
  const [records, setRecords] = useState<Record[]>([]);

  useEffect(() => {
    const fetchRecords = async () => {
      const records = await recordModel.getAll();
      setRecords(records);
    };

    fetchRecords();
  }, [recordModel]);

  return {
    records,
    setRecords
  };
};