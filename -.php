const CountryPhoneCapitalIndependenceYear = sequelize.define('CPCI', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	Country: Sequelize.STRING,
	PhoneCode: Sequelize.INTEGER,
	Capital: Sequelize.STRING,
	IndependenceYear: Sequelize.INTEGER
})