# express-sequelize-boilerplate
Boilerplate for backend APIs using Express and Sequelize


## prerequisites

- [Node >= v8.11.1](https://nodejs.org/en/)
- NPM >= v5.6.0
- Banco Mysql
- Criação das tabelas usando o script da pasta db/ddl

### Variáveis de ambiente

- **NODE_ENV:** ```development```, ```test``` ou ```production```
- **LOG_LEVEL:** ```error```, ```silly```, ```debug```, ```warn```, ```info```  ou ```verbose```
- **SQL_PRIMARY_URL:** URL do banco de produção primário


### Desenvolvimento
```
NODE_ENV=development npm start
```

### Teste
```
npm run lint && npm test
```

### Produção
```
npm start
```
