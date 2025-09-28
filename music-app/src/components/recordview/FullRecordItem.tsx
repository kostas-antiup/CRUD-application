import { Record } from "@/model/Record";
import DetailItem from "./DetailItem";
import Button from "@/components/buttons/Button";

const RecordView = ({ record }: { record: Record }) => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-white p-6">
    <div className="max-w-lg w-full bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">Record Details</h1>
      <div className="space-y-4">
        <DetailItem label="ID" value={record.id} />
        <DetailItem label="Name" value={record.name} />
        <DetailItem label="Artist" value={record.artist} />
        <DetailItem label="Price" value={`$${record.price}`} />
        <DetailItem label="Genre" value={record.genre} />
        <DetailItem label="Description" value={record.description} />
        <DetailItem label="Release Date" value={new Date(record.release_date).toLocaleDateString()} />
        <DetailItem label="Stock" value={record.stock.toString()} />
      </div>
      <Button href={`/records/${record.id}/edit`}>Edit Record</Button>
      <Button href='/records'>Back to Records</Button>
    </div>
  </div>
);

export default RecordView;