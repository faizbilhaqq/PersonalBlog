const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const blogRoutes = require('./routes/blogRoute');


// express app
const app = express();

//connect to databases
const dbURI = 'mongodb+srv://faizbilhaqq95:amazingfaiz@cluster0.ygz6bm4.mongodb.net/belajarNode?retryWrites=true&w=majority'
mongoose.set("strictQuery", false);

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));


//middleware and static files
app.use(express.static('public'));
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }));


// register view engine
app.set('view engine', 'ejs');

// blog routes (harus ditaruh diatas sebelum routes-routes yang laiin)
app.use('/blogs', blogRoutes);

//routes
app.get('/', (req, res) => {
  res.redirect('/blogs');
});


app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});



// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});


