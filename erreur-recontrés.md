Error: Cannot find module 'sequelize'

Solution: https://stackoverflow.com/questions/51941168/error-cannot-find-module-sequelize
"Looks like you install the cli in global node modules. You should also install the sequelize package along with sequelize-cli
if do it globally

npm install -g sequelize-cli
npm install -g sequelize
if do it locally

npm install --save sequelize-cli
npm install --save sequelize"

ERROR: connect ECONNREFUSED 127.0.0.1:3306

solution: config "host": "127.0.0.1",
Xampp:  Port appache and sql on, Mysql 3306

Error:  const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
                                                     ^

TypeError: require(...) is not a function

Solution: ?