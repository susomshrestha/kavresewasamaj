# Set the base image
FROM node:18.16.0-alpine3.17

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the application code
COPY . .

# Expose the Vite server port
EXPOSE 5173

# Start the development server
CMD ["npm", "run", "dev"]
