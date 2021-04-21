## A forward/reverse geocoding resful api app with Node.js REST API Setup using TypeScript

<!-- [Link to article]('https://itnext.io/production-ready-node-js-rest-apis-setup-using-typescript-postgresql-and-redis-a9525871407') -->

<!-- <img src="https://miro.medium.com/max/700/1*jXG3RQK9OvhLdfnTSV1Y8Q.png" /> -->

- TypeScript with a strict mode. All types have to be explicitly specified.
  Express. The last version fully supports async/await, so no callback and no explicit promises in our routes/controllers.

<!-- - PostgreSQL. This time a relational database. Let’s see how easy it’s to use.
  TypeORM — powerful ORM written in TypeScript, supports migrations, Active Record, has an excellent query builder and much more.

- Winston — A logger for just about everything :)

- Redis. We will use this in-memory store for caching. It’s going to one extra line of code which makes a huge difference in performance. -->

- PM2 — process manager for node.js apps, it includes clustering, load balancing, simple terminal monitoring, and log management.

## OpenCageData

[OpenCage Geocoder]('https://opencagedata.com/reverse-geocoding/introduction-to-reverse-geocoding')

An API to convert coordinates to and from places

### Use Cases

- Fleet Teaking: Know where your vehicles are
- Data Enrichment: Convert between coordinates and addresses
- Logistics: Know where your delivery is
- Classifieds: Geocoding for classifieds listing addresses into location information
- Internet of Things: Turn device coordinates into locations
- Shared / Micromobility: Know where your vehicles are
- Academia: Convert addresses into useful data
- Image Processing: Determine the location of photos like GPS photo cordinates
- Payment Processing: Convert high volumes of GPS coordinates captured by payment terminals into locations
