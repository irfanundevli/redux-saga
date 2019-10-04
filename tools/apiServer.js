const jsonServer = require('json-server');
const server = jsonServer.create();
const path = require('path');
const router = jsonServer.router(path.join(__dirname, 'db.json'));

const middlewares = jsonServer.defaults();

server.use(middlewares);
// to handle POST, PUT and PATCH
server.use(jsonServer.bodyParser);
// simulate delay
server.use(function(req, res, next) {
  setTimeout(next, 100);
});
// Declaring custom routes below. Add custom routes before JSON Server router
// Add createdAt to all POSTS
server.use(function(req, res, next) {
  if (req.method === 'POST') {
    req.body.createdAt = Date.now();
  }

  next();
});

server.post('/customers/', function(req, res, next) {
  const error = validateCourse(req.body);
  if (error) {
    res.status(400).send(error);
  } else {
    req.body.slug = createSlug(req.body.firstName); // Generate a slug for new courses.
    next();
  }
});

// use default router
server.use(router);

const port = 3001;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});

// Returns a URL friendly slug
function createSlug(value) {
  return value
    .replace(/[^a-z0-9_]+/gi, '-')
    .replace(/^-|-$/g, '')
    .toLowerCase();
}

function validateCourse(customer) {
  if (!customer.firstName) return 'First name is required.';
  if (!customer.lastName) return 'Last Name is required.';
  return '';
}
