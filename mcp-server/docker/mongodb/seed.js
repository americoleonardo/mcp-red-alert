
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({path: '../../.env'});

console.log(`➡️  Mongo URI: ${process.env.MONGODB_URI}`);
console.log(`➡️  Seeds to database: ${process.env.MONGODB_DATABASE}`);

const uri = process.env.MONGODB_URI;

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  department: String,
  updatedAt: Date,
  headquarter: {
    name: String,
    address: {
      street: String,
      number: String,
      complement: String,
      neighborhood: String,
      city: String,
      state: String,
      country: String,
      zip_code: String
    }
  },
  address: {
    street: String,
    number: String,
    complement: String,
    neighborhood: String,
    city: String,
    state: String,
    country: String,
    zip_code: String
  },
  manager: {
    id: String,
    name: String,
    email: String,
    phone: String,
    department: String
  },
  emergencyContact: [{
    name: String,
    phone: String,
    relation: String,
    email: String
  }]
});

const User = mongoose.model('User', userSchema);

async function seed() {
  await mongoose.connect(uri, { dbName: process.env.MONGODB_DATABASE });

  const users = [
    {
      name: 'User 1',
      email: 'user1@email.com',
      phone: '+1 415-000-0001',
      department: 'Department 5',
      updatedAt: new Date('2025-02-22'),
      headquarter: {
        name: 'HQ 1',
        address: {
          street: 'Avenue 1',
          number: '100',
          complement: 'Floor 1',
          neighborhood: 'District 1',
          city: 'San Francisco',
          state: 'CA',
          country: 'USA',
          zip_code: '94105'
        }
      },
      address: {
        street: 'Street 1',
        number: '200',
        complement: 'Apt 101',
        neighborhood: 'Neighborhood 1',
        city: 'San Francisco',
        state: 'CA',
        country: 'USA',
        zip_code: '94103'
      },
      manager: {
        id: 'uuid-manager-1',
        name: 'Manager 1',
        email: 'manager1@email.com',
        phone: '+1 415-800-001',
        department: 'Management'
      },
      emergencyContact: [
        {
          name: 'Contact 1',
          phone: '+1 415-900-0001',
          relation: 'Friend',
          email: 'contact1@email.com'
        }
      ]
    },
    {
      name: 'User 2',
      email: 'user2@email.com',
      phone: '+1 415-000-0002',
      department: 'Department 3',
      updatedAt: new Date('2025-03-31'),
      headquarter: {
        name: 'HQ 1',
        address: {
          street: 'Avenue 2',
          number: '101',
          complement: 'Floor 2',
          neighborhood: 'District 2',
          city: 'San Francisco',
          state: 'CA',
          country: 'USA',
          zip_code: '94103'
        }
      },
      address: {
        street: 'Street 2',
        number: '201',
        complement: 'Apt 102',
        neighborhood: 'Neighborhood 2',
        city: 'San Francisco',
        state: 'CA',
        country: 'USA',
        zip_code: '94108'
      },
      manager: {
        id: 'uuid-manager-2',
        name: 'Manager 2',
        email: 'manager2@email.com',
        phone: '+1 415-800-002',
        department: 'Management'
      },
      emergencyContact: [
        {
          name: 'Contact 2',
          phone: '+1 415-900-0002',
          relation: 'Friend',
          email: 'contact2@email.com'
        }
      ]
    },
    {
      name: 'User 3',
      email: 'user3@email.com',
      phone: '+1 415-000-0003',
      department: 'Department 5',
      updatedAt: new Date('2025-02-22'),
      headquarter: {
        name: 'HQ 2',
        address: {
          street: 'Avenue 3',
          number: '102',
          complement: 'Floor 3',
          neighborhood: 'District 3',
          city: 'San Francisco',
          state: 'CA',
          country: 'USA',
          zip_code: '94101'
        }
      },
      address: {
        street: 'Street 3',
        number: '202',
        complement: 'Apt 103',
        neighborhood: 'Neighborhood 3',
        city: 'San Francisco',
        state: 'CA',
        country: 'USA',
        zip_code: '94102'
      },
      manager: {
        id: 'uuid-manager-3',
        name: 'Manager 3',
        email: 'manager3@email.com',
        phone: '+1 415-800-003',
        department: 'Management'
      },
      emergencyContact: [
        {
          name: 'Contact 3',
          phone: '+1 415-900-0003',
          relation: 'Friend',
          email: 'contact3@email.com'
        }
      ]
    },
    {
      name: 'User 4',
      email: 'user4@email.com',
      phone: '+1 415-000-0004',
      department: 'Department 1',
      updatedAt: new Date('2025-03-28'),
      headquarter: {
        name: 'HQ 3',
        address: {
          street: 'Avenue 4',
          number: '103',
          complement: 'Floor 4',
          neighborhood: 'District 4',
          city: 'San Francisco',
          state: 'CA',
          country: 'USA',
          zip_code: '94101'
        }
      },
      address: {
        street: 'Street 4',
        number: '203',
        complement: 'Apt 104',
        neighborhood: 'Neighborhood 1',
        city: 'San Francisco',
        state: 'CA',
        country: 'USA',
        zip_code: '94105'
      },
      manager: {
        id: 'uuid-manager-4',
        name: 'Manager 4',
        email: 'manager4@email.com',
        phone: '+1 415-800-004',
        department: 'Management'
      },
      emergencyContact: [
        {
          name: 'Contact 4',
          phone: '+1 415-900-0004',
          relation: 'Friend',
          email: 'contact4@email.com'
        }
      ]
    },
    {
      name: 'User 5',
      email: 'user5@email.com',
      phone: '+1 415-000-0005',
      department: 'Department 2',
      updatedAt: new Date('2025-03-11'),
      headquarter: {
        name: 'HQ 2',
        address: {
          street: 'Avenue 5',
          number: '104',
          complement: 'Floor 5',
          neighborhood: 'District 1',
          city: 'San Francisco',
          state: 'CA',
          country: 'USA',
          zip_code: '94102'
        }
      },
      address: {
        street: 'Street 5',
        number: '204',
        complement: 'Apt 105',
        neighborhood: 'Neighborhood 2',
        city: 'San Francisco',
        state: 'CA',
        country: 'USA',
        zip_code: '94103'
      },
      manager: {
        id: 'uuid-manager-5',
        name: 'Manager 5',
        email: 'manager5@email.com',
        phone: '+1 415-800-005',
        department: 'Management'
      },
      emergencyContact: [
        {
          name: 'Contact 5',
          phone: '+1 415-900-0005',
          relation: 'Friend',
          email: 'contact5@email.com'
        }
      ]
    },
    {
      name: 'User 6',
      email: 'user6@email.com',
      phone: '+1 415-000-0006',
      department: 'Department 4',
      updatedAt: new Date('2025-02-26'),
      headquarter: {
        name: 'HQ 3',
        address: {
          street: 'Avenue 6',
          number: '105',
          complement: 'Floor 1',
          neighborhood: 'District 2',
          city: 'San Francisco',
          state: 'CA',
          country: 'USA',
          zip_code: '94107'
        }
      },
      address: {
        street: 'Street 6',
        number: '205',
        complement: 'Apt 106',
        neighborhood: 'Neighborhood 3',
        city: 'San Francisco',
        state: 'CA',
        country: 'USA',
        zip_code: '94105'
      },
      manager: {
        id: 'uuid-manager-1',
        name: 'Manager 1',
        email: 'manager1@email.com',
        phone: '+1 415-800-001',
        department: 'Management'
      },
      emergencyContact: [
        {
          name: 'Contact 6',
          phone: '+1 415-900-0006',
          relation: 'Friend',
          email: 'contact6@email.com'
        }
      ]
    },
    {
      name: 'User 7',
      email: 'user7@email.com',
      phone: '+1 415-000-0007',
      department: 'Department 5',
      updatedAt: new Date('2025-02-04'),
      headquarter: {
        name: 'HQ 3',
        address: {
          street: 'Avenue 7',
          number: '106',
          complement: 'Floor 2',
          neighborhood: 'District 3',
          city: 'San Francisco',
          state: 'CA',
          country: 'USA',
          zip_code: '94104'
        }
      },
      address: {
        street: 'Street 7',
        number: '206',
        complement: 'Apt 107',
        neighborhood: 'Neighborhood 1',
        city: 'San Francisco',
        state: 'CA',
        country: 'USA',
        zip_code: '94107'
      },
      manager: {
        id: 'uuid-manager-2',
        name: 'Manager 2',
        email: 'manager2@email.com',
        phone: '+1 415-800-002',
        department: 'Management'
      },
      emergencyContact: [
        {
          name: 'Contact 7',
          phone: '+1 415-900-0007',
          relation: 'Friend',
          email: 'contact7@email.com'
        }
      ]
    },
    {
      name: 'User 8',
      email: 'user8@email.com',
      phone: '+1 415-000-0008',
      department: 'Department 3',
      updatedAt: new Date('2025-02-22'),
      headquarter: {
        name: 'HQ 3',
        address: {
          street: 'Avenue 8',
          number: '107',
          complement: 'Floor 3',
          neighborhood: 'District 4',
          city: 'San Francisco',
          state: 'CA',
          country: 'USA',
          zip_code: '94109'
        }
      },
      address: {
        street: 'Street 8',
        number: '207',
        complement: 'Apt 108',
        neighborhood: 'Neighborhood 2',
        city: 'San Francisco',
        state: 'CA',
        country: 'USA',
        zip_code: '94108'
      },
      manager: {
        id: 'uuid-manager-3',
        name: 'Manager 3',
        email: 'manager3@email.com',
        phone: '+1 415-800-003',
        department: 'Management'
      },
      emergencyContact: [
        {
          name: 'Contact 8',
          phone: '+1 415-900-0008',
          relation: 'Friend',
          email: 'contact8@email.com'
        }
      ]
    },
    {
      name: 'User 9',
      email: 'user9@email.com',
      phone: '+1 415-000-0009',
      department: 'Department 3',
      updatedAt: new Date('2025-02-16'),
      headquarter: {
        name: 'HQ 3',
        address: {
          street: 'Avenue 9',
          number: '108',
          complement: 'Floor 4',
          neighborhood: 'District 1',
          city: 'San Francisco',
          state: 'CA',
          country: 'USA',
          zip_code: '94102'
        }
      },
      address: {
        street: 'Street 9',
        number: '208',
        complement: 'Apt 109',
        neighborhood: 'Neighborhood 3',
        city: 'San Francisco',
        state: 'CA',
        country: 'USA',
        zip_code: '94103'
      },
      manager: {
        id: 'uuid-manager-4',
        name: 'Manager 4',
        email: 'manager4@email.com',
        phone: '+1 415-800-004',
        department: 'Management'
      },
      emergencyContact: [
        {
          name: 'Contact 9',
          phone: '+1 415-900-0009',
          relation: 'Friend',
          email: 'contact9@email.com'
        }
      ]
    },
    {
      name: 'User 10',
      email: 'user10@email.com',
      phone: '+1 415-000-0010',
      department: 'Department 1',
      updatedAt: new Date('2025-02-25'),
      headquarter: {
        name: 'HQ 1',
        address: {
          street: 'Avenue 10',
          number: '109',
          complement: 'Floor 5',
          neighborhood: 'District 2',
          city: 'San Francisco',
          state: 'CA',
          country: 'USA',
          zip_code: '94102'
        }
      },
      address: {
        street: 'Street 10',
        number: '209',
        complement: 'Apt 110',
        neighborhood: 'Neighborhood 1',
        city: 'San Francisco',
        state: 'CA',
        country: 'USA',
        zip_code: '94108'
      },
      manager: {
        id: 'uuid-manager-5',
        name: 'Manager 5',
        email: 'manager5@email.com',
        phone: '+1 415-800-005',
        department: 'Management'
      },
      emergencyContact: [
        {
          name: 'Contact 10',
          phone: '+1 415-900-0010',
          relation: 'Friend',
          email: 'contact10@email.com'
        }
      ]
    },
    {
      name: 'User 11',
      email: 'user11@email.com',
      phone: '+1 415-000-0011',
      department: 'Department 5',
      updatedAt: new Date('2025-02-18'),
      headquarter: {
        name: 'HQ 2',
        address: {
          street: 'Avenue 11',
          number: '110',
          complement: 'Floor 1',
          neighborhood: 'District 3',
          city: 'San Francisco',
          state: 'CA',
          country: 'USA',
          zip_code: '94107'
        }
      },
      address: {
        street: 'Street 11',
        number: '210',
        complement: 'Apt 111',
        neighborhood: 'Neighborhood 2',
        city: 'San Francisco',
        state: 'CA',
        country: 'USA',
        zip_code: '94104'
      },
      manager: {
        id: 'uuid-manager-1',
        name: 'Manager 1',
        email: 'manager1@email.com',
        phone: '+1 415-800-001',
        department: 'Management'
      },
      emergencyContact: [
        {
          name: 'Contact 11',
          phone: '+1 415-900-0011',
          relation: 'Friend',
          email: 'contact11@email.com'
        }
      ]
    },
    {
      name: 'User 12',
      email: 'user12@email.com',
      phone: '+1 415-000-0012',
      department: 'Department 4',
      updatedAt: new Date('2025-03-11'),
      headquarter: {
        name: 'HQ 3',
        address: {
          street: 'Avenue 12',
          number: '111',
          complement: 'Floor 2',
          neighborhood: 'District 4',
          city: 'San Francisco',
          state: 'CA',
          country: 'USA',
          zip_code: '94107'
        }
      },
      address: {
        street: 'Street 12',
        number: '211',
        complement: 'Apt 112',
        neighborhood: 'Neighborhood 3',
        city: 'San Francisco',
        state: 'CA',
        country: 'USA',
        zip_code: '94107'
      },
      manager: {
        id: 'uuid-manager-2',
        name: 'Manager 2',
        email: 'manager2@email.com',
        phone: '+1 415-800-002',
        department: 'Management'
      },
      emergencyContact: [
        {
          name: 'Contact 12',
          phone: '+1 415-900-0012',
          relation: 'Friend',
          email: 'contact12@email.com'
        }
      ]
    },
    {
      name: 'User 13',
      email: 'user13@email.com',
      phone: '+1 415-000-0013',
      department: 'Department 3',
      updatedAt: new Date('2025-02-18'),
      headquarter: {
        name: 'HQ 3',
        address: {
          street: 'Avenue 13',
          number: '112',
          complement: 'Floor 3',
          neighborhood: 'District 1',
          city: 'San Francisco',
          state: 'CA',
          country: 'USA',
          zip_code: '94106'
        }
      },
      address: {
        street: 'Street 13',
        number: '212',
        complement: 'Apt 113',
        neighborhood: 'Neighborhood 1',
        city: 'San Francisco',
        state: 'CA',
        country: 'USA',
        zip_code: '94109'
      },
      manager: {
        id: 'uuid-manager-3',
        name: 'Manager 3',
        email: 'manager3@email.com',
        phone: '+1 415-800-003',
        department: 'Management'
      },
      emergencyContact: [
        {
          name: 'Contact 13',
          phone: '+1 415-900-0013',
          relation: 'Friend',
          email: 'contact13@email.com'
        }
      ]
    },
    {
      name: 'User 14',
      email: 'user14@email.com',
      phone: '+1 415-000-0014',
      department: 'Department 2',
      updatedAt: new Date('2025-03-26'),
      headquarter: {
        name: 'HQ 3',
        address: {
          street: 'Avenue 14',
          number: '113',
          complement: 'Floor 4',
          neighborhood: 'District 2',
          city: 'San Francisco',
          state: 'CA',
          country: 'USA',
          zip_code: '94101'
        }
      },
      address: {
        street: 'Street 14',
        number: '213',
        complement: 'Apt 114',
        neighborhood: 'Neighborhood 2',
        city: 'San Francisco',
        state: 'CA',
        country: 'USA',
        zip_code: '94104'
      },
      manager: {
        id: 'uuid-manager-4',
        name: 'Manager 4',
        email: 'manager4@email.com',
        phone: '+1 415-800-004',
        department: 'Management'
      },
      emergencyContact: [
        {
          name: 'Contact 14',
          phone: '+1 415-900-0014',
          relation: 'Friend',
          email: 'contact14@email.com'
        }
      ]
    },
    {
      name: 'User 15',
      email: 'user15@email.com',
      phone: '+1 415-000-0015',
      department: 'Department 1',
      updatedAt: new Date('2025-03-25'),
      headquarter: {
        name: 'HQ 1',
        address: {
          street: 'Avenue 15',
          number: '114',
          complement: 'Floor 5',
          neighborhood: 'District 3',
          city: 'San Francisco',
          state: 'CA',
          country: 'USA',
          zip_code: '94108'
        }
      },
      address: {
        street: 'Street 15',
        number: '214',
        complement: 'Apt 115',
        neighborhood: 'Neighborhood 3',
        city: 'San Francisco',
        state: 'CA',
        country: 'USA',
        zip_code: '94101'
      },
      manager: {
        id: 'uuid-manager-5',
        name: 'Manager 5',
        email: 'manager5@email.com',
        phone: '+1 415-800-005',
        department: 'Management'
      },
      emergencyContact: [
        {
          name: 'Contact 15',
          phone: '+1 415-900-0015',
          relation: 'Friend',
          email: 'contact15@email.com'
        }
      ]
    },
    {
      name: 'User 16',
      email: 'user16@email.com',
      phone: '+1 415-000-0016',
      department: 'Department 2',
      updatedAt: new Date('2025-03-19'),
      headquarter: {
        name: 'HQ 2',
        address: {
          street: 'Avenue 16',
          number: '115',
          complement: 'Floor 1',
          neighborhood: 'District 4',
          city: 'San Francisco',
          state: 'CA',
          country: 'USA',
          zip_code: '94109'
        }
      },
      address: {
        street: 'Street 16',
        number: '215',
        complement: 'Apt 116',
        neighborhood: 'Neighborhood 1',
        city: 'San Francisco',
        state: 'CA',
        country: 'USA',
        zip_code: '94103'
      },
      manager: {
        id: 'uuid-manager-1',
        name: 'Manager 1',
        email: 'manager1@email.com',
        phone: '+1 415-800-001',
        department: 'Management'
      },
      emergencyContact: [
        {
          name: 'Contact 16',
          phone: '+1 415-900-0016',
          relation: 'Friend',
          email: 'contact16@email.com'
        }
      ]
    },
    {
      name: 'User 17',
      email: 'user17@email.com',
      phone: '+1 415-000-0017',
      department: 'Department 3',
      updatedAt: new Date('2025-02-01'),
      headquarter: {
        name: 'HQ 1',
        address: {
          street: 'Avenue 17',
          number: '116',
          complement: 'Floor 2',
          neighborhood: 'District 1',
          city: 'San Francisco',
          state: 'CA',
          country: 'USA',
          zip_code: '94108'
        }
      },
      address: {
        street: 'Street 17',
        number: '216',
        complement: 'Apt 117',
        neighborhood: 'Neighborhood 2',
        city: 'San Francisco',
        state: 'CA',
        country: 'USA',
        zip_code: '94101'
      },
      manager: {
        id: 'uuid-manager-2',
        name: 'Manager 2',
        email: 'manager2@email.com',
        phone: '+1 415-800-002',
        department: 'Management'
      },
      emergencyContact: [
        {
          name: 'Contact 17',
          phone: '+1 415-900-0017',
          relation: 'Friend',
          email: 'contact17@email.com'
        }
      ]
    },
    {
      name: 'User 18',
      email: 'user18@email.com',
      phone: '+1 415-000-0018',
      department: 'Department 1',
      updatedAt: new Date('2025-03-22'),
      headquarter: {
        name: 'HQ 2',
        address: {
          street: 'Avenue 18',
          number: '117',
          complement: 'Floor 3',
          neighborhood: 'District 2',
          city: 'San Francisco',
          state: 'CA',
          country: 'USA',
          zip_code: '94102'
        }
      },
      address: {
        street: 'Street 18',
        number: '217',
        complement: 'Apt 118',
        neighborhood: 'Neighborhood 3',
        city: 'San Francisco',
        state: 'CA',
        country: 'USA',
        zip_code: '94105'
      },
      manager: {
        id: 'uuid-manager-3',
        name: 'Manager 3',
        email: 'manager3@email.com',
        phone: '+1 415-800-003',
        department: 'Management'
      },
      emergencyContact: [
        {
          name: 'Contact 18',
          phone: '+1 415-900-0018',
          relation: 'Friend',
          email: 'contact18@email.com'
        }
      ]
    },
    {
      name: 'User 19',
      email: 'user19@email.com',
      phone: '+1 415-000-0019',
      department: 'Department 4',
      updatedAt: new Date('2025-01-31'),
      headquarter: {
        name: 'HQ 3',
        address: {
          street: 'Avenue 19',
          number: '118',
          complement: 'Floor 4',
          neighborhood: 'District 3',
          city: 'San Francisco',
          state: 'CA',
          country: 'USA',
          zip_code: '94101'
        }
      },
      address: {
        street: 'Street 19',
        number: '218',
        complement: 'Apt 119',
        neighborhood: 'Neighborhood 1',
        city: 'San Francisco',
        state: 'CA',
        country: 'USA',
        zip_code: '94102'
      },
      manager: {
        id: 'uuid-manager-4',
        name: 'Manager 4',
        email: 'manager4@email.com',
        phone: '+1 415-800-004',
        department: 'Management'
      },
      emergencyContact: [
        {
          name: 'Contact 19',
          phone: '+1 415-900-0019',
          relation: 'Friend',
          email: 'contact19@email.com'
        }
      ]
    },
    {
      name: 'User 20',
      email: 'user20@email.com',
      phone: '+1 415-000-0020',
      department: 'Department 5',
      updatedAt: new Date('2025-02-01'),
      headquarter: {
        name: 'HQ 3',
        address: {
          street: 'Avenue 20',
          number: '119',
          complement: 'Floor 5',
          neighborhood: 'District 4',
          city: 'San Francisco',
          state: 'CA',
          country: 'USA',
          zip_code: '94109'
        }
      },
      address: {
        street: 'Street 20',
        number: '219',
        complement: 'Apt 120',
        neighborhood: 'Neighborhood 2',
        city: 'San Francisco',
        state: 'CA',
        country: 'USA',
        zip_code: '94103'
      },
      manager: {
        id: 'uuid-manager-5',
        name: 'Manager 5',
        email: 'manager5@email.com',
        phone: '+1 415-800-005',
        department: 'Management'
      },
      emergencyContact: [
        {
          name: 'Contact 20',
          phone: '+1 415-900-0020',
          relation: 'Friend',
          email: 'contact20@email.com'
        }
      ]
    }
  ];

  await User.insertMany(users);

  
  console.log('✅ Seed completed with 20 users');
  await mongoose.disconnect();
}

seed().catch(err => {
  console.error('❌ Seed failed', err);
  process.exit(1);
});
