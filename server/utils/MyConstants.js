const MyConstants = {
  DB_SERVER: process.env.DB_SERVER || 'onlineshopping.7eavwgm.mongodb.net',
  DB_USER: process.env.DB_USER || 'tiendung8a6',
  DB_PASS: process.env.DB_PASS || 'C5QavQodd71CrZ0c',
  DB_DATABASE: process.env.DB_DATABASE || 'onlineshopping',
  JWT_SECRET: process.env.JWT_SECRET || 'tiendung8a6',
  JWT_EXPIRES: process.env.JWT_EXPIRES || '31556952000', // in milliseconds (01 year = 31556952000 ms)
  EMAIL_USER: process.env.EMAIL_USER || 'ngotdung2002@hotmail.com', // gmail service --Microsoft mail service
  EMAIL_PASS: process.env.EMAIL_PASS || 'ngotiendung123'
};
module.exports = MyConstants;
