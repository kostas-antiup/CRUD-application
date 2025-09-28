"use client";

import { usePathname } from "next/navigation";
import LoadingState from "@/components/states/LoadingState";
import ErrorState from "@/components/states/ErrorState";
import FullRecordItem from "@/components/recordview/FullRecordItem";
import useFetchRecord from "@/viewmodel/hooks/useFetchRecord";

const RecordDetails = () => {
  const pathname = usePathname();
  const id = pathname?.split("/").pop() || "";

  const { record, loading, error } = useFetchRecord(id);

  if (loading) return <LoadingState />;
  if (error) return <ErrorState errorMessage={error} />;
  if (record) return <FullRecordItem record={record} />;

  return null;
};

export default RecordDetails;