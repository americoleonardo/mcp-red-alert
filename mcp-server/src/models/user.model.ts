import mongoose from 'mongoose';

const addressSchema = new mongoose.Schema({
  street: String,
  number: String,
  complement: String,
  neighborhood: String,
  city: String,
  state: String,
  country: String,
  zip_code: String
}, { _id: false });

const emergencyContactSchema = new mongoose.Schema({
  name: String,
  phone: String,
  relation: String,
  email: String
}, { _id: false });

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  department: String,
  updatedAt: Date,
  headquarter: {
    name: String,
    address: addressSchema
  },
  address: addressSchema,
  manager: {
    id: String,
    name: String,
    email: String,
    phone: String,
    department: String
  },
  emergencyContact: [emergencyContactSchema]
});

export const User = mongoose.model('User', userSchema);
