FROM mongo:latest

ENV MONGO_INITDB_ROOT_USERNAME=admin
ENV MONGO_INITDB_ROOT_PASSWORD=admin
ENV MONGO_INITDB_DATABASE=mcp_users

COPY ./docker/mongodb/init-mongo.js /docker-entrypoint-initdb.d/
