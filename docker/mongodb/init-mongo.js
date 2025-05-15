db.createUser({
  user: 'admin',
  pwd: 'admin',
  roles: [
    { role: 'readWrite', db: 'mcp_users' },
    { role: 'userAdmin', db: 'admin' },
    { role: 'dbAdmin',  db: 'mcp_users' },
    { role: 'root', db: 'admin' }
  ]
});

db.createCollection('users');