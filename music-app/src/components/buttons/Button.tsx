import Link from 'next/link';
import React from 'react';

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  href,
  onClick,
  type = 'button',
  children,
  className = '',
}) => {
  const defaultClasses = "bg-gradient-to-r from-blue-500 to-blue-700 text-white py-3 px-6 rounded-lg shadow-lg hover:from-blue-600 hover:to-blue-800 transition-all transform hover:scale-105";

  const combinedClasses = `${defaultClasses} ${className}`;

  if (href) {
    return (
      <div className="flex justify-center mt-8">
        <Link href={href} className={combinedClasses}>
          {children}
        </Link>
      </div>
    );
  }

  return (
    <div className="flex justify-center mt-8">
      <button
        type={type}
        onClick={onClick}
        className={combinedClasses}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;