`npm init -y`

`npm i typescript ts-node @types/node -D`

`npm i prima`

`npx prima init --datasource-provider sqlite`
Next steps:

1. Set the DATABASE_URL in the .env file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-started
2. Run prisma db pull to turn your database schema into a Prisma schema.
3. Run prisma generate to generate the Prisma Client. You can then start querying your database.
4. Tip: Explore how you can extend the ORM with scalable connection pooling, global caching, and real-time database events. Read: https://pris.ly/beyond-the-orm

edit schema.prisma

`npx prisma migrate dev --name init`

`npx ts-node index.ts`

`npx prisma studio`
