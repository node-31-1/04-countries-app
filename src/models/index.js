const City = require('./City');
const Country = require('./Country');
const Student = require('./Student');
const User = require('./User');

// belongsTo - hasMany
Country.hasMany(User);
User.belongsTo(Country);

Country.hasMany(City);
City.belongsTo(Country);

City.hasMany(Student);
Student.belongsTo(City);
