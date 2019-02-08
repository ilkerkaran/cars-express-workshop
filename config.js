var config = {
	debug: true,
	port: 3000,
	jwt_secret: 'your_jwt_secret',
	databaseConfiguration: {
		host: 'UNDERCITY',
		username: 'sa',
		password: 'Ej123456!',
        database: 'NodeCar',
        dialect: 'mssql',
        logging : true,
        encrypt: true
	}
}

export default config

  