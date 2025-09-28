import React from 'react';
import Button from "@/components/buttons/Button";

const NavLinks: React.FC = () => (
  <ul className="space-y-4">
    <Button href="/records/create">Create New Record</Button>
    <Button href="/records">View Records</Button>
  </ul>
);

export default NavLinks;