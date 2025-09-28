import React from 'react';
import { Record } from "@/model/Record";
import { VALID_GENRES } from "@/utility/Genres";
import { useFormData } from '@/viewmodel/hooks/useFormData';
import FormField from '@/components/forms/FormField';
import Button from "@/components/buttons/Button";
import useFormSubmit from "@/viewmodel/hooks/useFormSubmit";

interface RecordFormProps {
  record?: Record;
  onSubmit: (formData: Record) => Promise<string | null>;
}

const RecordForm: React.FC<RecordFormProps> = ({ record, onSubmit }) => {
  const { formData, handleChange } = useFormData({ record });
  const { handleSubmit } = useFormSubmit({ onSubmit, formData });

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <FormField
        id="name"
        label="Name"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <FormField
        id="artist"
        label="Artist"
        type="text"
        name="artist"
        value={formData.artist}
        onChange={handleChange}
      />
      <FormField
        id="price"
        label="Price"
        type="number"
        name="price"
        value={formData.price}
        onChange={handleChange}
      />
      <FormField
        id="genre"
        label="Genre"
        type="select"
        name="genre"
        value={formData.genre}
        onChange={handleChange}
        options={VALID_GENRES}
      />
      <FormField
        id="description"
        label="Description"
        type="textarea"
        name="description"
        value={formData.description}
        onChange={handleChange}
      />
      <FormField
        id="release_date"
        label="Release Date"
        type="datetime-local"
        name="release_date"
        value={formData.release_date}
        onChange={handleChange}
      />
      <FormField
        id="stock"
        label="Stock"
        type="number"
        name="stock"
        value={formData.stock}
        onChange={handleChange}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default RecordForm;