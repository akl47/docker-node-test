FROM node:10-alpine
# Install dependencies
WORKDIR /src/

RUN npm install

# Expose the app port
EXPOSE 8000

# Start the app
CMD npm start