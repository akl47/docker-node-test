FROM node:10-alpine

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install dependencies
COPY ./app/package.json .
RUN npm install

# Bundle app source
COPY ./app .

# Exports
EXPOSE 3000
CMD [ "npm", "start" ]
