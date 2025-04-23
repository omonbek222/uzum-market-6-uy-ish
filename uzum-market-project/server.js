const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Middleware qo'shish
server.use(middlewares);
server.use(jsonServer.bodyParser);

// Login endpointini sozlash
server.post('/login', (req, res) => {
  const { email, password } = req.body;

  // db.json dan login ma'lumotlarini olish
  const user = router.db.get('login').find({ email }).value();

  if (user && user.password === password) {
    res.status(200).json({ success: true, message: 'Login successful' });
  } else {
    res.status(400).json({ success: false, message: 'Invalid email or password' });
  }
});

// Boshqa barcha requestlarga javob berish
server.use(router);
server.listen(5000, () => {
  console.log('JSON Server is running on http://localhost:5000');
});
