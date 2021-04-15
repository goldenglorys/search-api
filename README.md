## Production ready Node.js REST API Setup using TypeScript, PostgreSQL and Redis

[Link to article]('https://itnext.io/production-ready-node-js-rest-apis-setup-using-typescript-postgresql-and-redis-a9525871407')

<img src="https://miro.medium.com/max/700/1*jXG3RQK9OvhLdfnTSV1Y8Q.png" />

    1. TypeScript with a strict mode. All types have to be explicitly specified.
    Express. The last version fully supports async/await, so no callback and no explicit promises in our routes/controllers.

    2. PostgreSQL. This time a relational database. Let’s see how easy it’s to use.
    TypeORM — powerful ORM written in TypeScript, supports migrations, Active Record, has an excellent query builder and much more.

    3. Winston — A logger for just about everything :)

    4. Redis. We will use this in-memory store for caching. It’s going to one extra line of code which makes a huge difference in performance.

    5. PM2 — process manager for node.js apps, it includes clustering, load balancing, simple terminal monitoring, and log management.
