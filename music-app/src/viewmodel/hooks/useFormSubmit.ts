import { useCallback } from 'react';

interface UseFormSubmitProps {
  onSubmit: (formData: FormData) => Promise<void>;
  formData: FormData;
}

const useFormSubmit = ({ onSubmit, formData }: UseFormSubmitProps) => {
  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      await onSubmit(formData);
    },
    [onSubmit, formData]
  );

  return { handleSubmit };
};

export default useFormSubmit;