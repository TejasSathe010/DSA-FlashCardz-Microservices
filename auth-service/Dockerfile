# Use the official Node.js 18 image as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

RUN apk add --no-cache python3 make g++

# Copy package.json and package-lock.json into the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Rebuild bcrypt to match the container's architecture
# RUN npm uninstall bcrypt
# RUN npm install bcryptjs

# Copy the rest of your application code into the container
COPY . .

# Expose the port your service runs on
EXPOSE 4000

# Define the command to run your application
CMD ["npm", "start"]
