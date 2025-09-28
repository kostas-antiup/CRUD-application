import { useState, useEffect } from 'react';
import { Record } from "@/model/Record";

interface UseFormDataProps {
  record?: Record;
}

export const useFormData = ({ record }: UseFormDataProps) => {
  const [formData, setFormData] = useState({
    name: '',
    artist: '',
    price: '',
    genre: '',
    description: '',
    release_date: '',
    stock: ''
  });

  useEffect(() => {
    if (record) {
      setFormData({
        name: record.name || '',
        artist: record.artist || '',
        price: record.price || '',
        genre: record.genre || '',
        description: record.description || '',
        release_date: record.release_date || '',
        stock: record.stock || ''
      });
    }
  }, [record]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  return {
    formData,
    handleChange,
  };
};