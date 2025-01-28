

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRouter = require('./routers/auth');
const cartRouter = require('./routers/cart')
const cors = require('cors');
const cookieParser = require('cookie-parser');
const productRouter = require('./routers/product');
// const profileRouter = require('./routers/auth');


dotenv.config();
app.use(cors({
    origin: 'http://localhost:3000' 
}));

const DB = process.env.MONGODB_URI;
console.log(DB)
mongoose.connect(DB, {
    useNewUrlParser: true,
    
    useUnifiedTopology: true,
    
}).then(() => {
    console.log("Successfully connected to MongoDB");
}).catch((err) => {
    console.log("Error connecting to MongoDB:", err);
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

const Middleware = (req, res, next) => {
    console.log('Response headers:', res.getHeaders());
    next();
};

app.use(express.json());
app.use(Middleware);
app.use('/auth', authRouter); 
app.use('/cart',cartRouter);
app.use('/product',productRouter)

app.use(cookieParser());

// app.use('/profile', profileRouter);

// const fetchUser = dispatch => async () => {
//     const response = await sellerApi.get("/api/users/profile");
//     console.log(response.data);
//     dispatch({ type: "fetch_user", payload: response.data });
// };

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});
