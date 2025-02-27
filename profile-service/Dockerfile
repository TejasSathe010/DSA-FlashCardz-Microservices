# Use an official Node runtime as the base image
FROM node:18-alpine

# Create and set the working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application source code
COPY . .

# Optionally, build the TypeScript code (if you have a build step)
RUN npm run build || echo "Skipping build step in development"

# Expose the port (matching the service's port in docker-compose)
EXPOSE 5000

# Start the service using ts-node
CMD [ "npx", "ts-node", "src/index.ts" ]
