# Build stage
FROM node:18.12.1 AS build

WORKDIR /app

COPY package.json /app/package.json
COPY yarn.lock /app/yarn.lock

# Install ESLint globally
RUN npm install eslint -g

# Copy the rest of your project files
COPY . /app

RUN yarn add --dev eslint-config-react-app
RUN eslint .

# Continue with your build process
RUN yarn build

# Nginx setup
FROM nginx:alpine

# Copy config nginx
COPY --from=build /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/nginx/.htpasswd /etc/nginx/conf.d/.htpasswd

WORKDIR /usr/share/nginx/html

# Remove default nginx static assets
RUN rm -rf ./*

# Copy static assets from builder stage
COPY --from=build /app/build .

ENTRYPOINT ["nginx", "-g", "daemon off;"]
