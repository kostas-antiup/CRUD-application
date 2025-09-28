import Button from "@/components/buttons/Button";
import React from "react";


const ErrorState = ({ errorMessage }: { errorMessage: string }) => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
    <p className="text-lg text-gray-700 mb-4">{errorMessage}</p>
    <Button href={`/records`}>Back To Records</Button>
  </div>
);

export default ErrorState;