# SERVER

Pass env values to configure database connection
```
DATABASE_HOST       = string
DATABASE_USER       = string
DATABASE_PASSWORD   = string
DATABASE_NAME       = string
DATABASE_DIALECT    = 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql'
```

```
DOCKER POSTGRES:
docker run --name express-postgres -e POSTGRES_PASSWORD=123 -d -p 5432:5432 postgres
```