import { Schema, model } from 'mongodb';

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  department: string;
  updatedAt: Date;
  headquarter: {
    name: string;
    address: Address;
  };
  address: Address;
  manager: Manager;
  emergencyContact: EmergencyContact[];
}

interface Address {
  street: string;
  number: string;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
  country: string;
  zip_code: string;
}

interface Manager {
  id: string;
  name: string;
  email: string;
  phone: string;
  department: string;
}

interface EmergencyContact {
  name: string;
  phone: string;
  relation: string;
  email: string;
}