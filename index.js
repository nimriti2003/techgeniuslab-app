const express = require('express')
require('dotenv').config();
const connectDB = require("./config/database");
const userRouter = require('./routers/userRouter');
const productRouter = require('./routers/productRouter');
const adminRouter = require('./routers/adminRouter');
const orderRouter = require('./routers/orderRouter');
const app = express()
