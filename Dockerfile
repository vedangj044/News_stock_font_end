# => Build container
FROM node:alpine as builder
WORKDIR /app
COPY package.json .
COPY package-lock.json .
COPY . .
RUN npm run build

# => Run container
FROM nginx:1.15.2-alpine

# Nginx config
RUN rm -rf /etc/nginx/conf.d
COPY conf /etc/nginx

# Static build
COPY --from=builder /app/build /usr/share/nginx/html/

# Default port exposure
EXPOSE 80

# Copy .env file and shell script to container
WORKDIR /usr/share/nginx/html
COPY ./change_env.sh .
COPY .env .

# Make our shell script executable
RUN chmod +x change_env.sh

# Start Nginx server
CMD ["/bin/sh", "-c", "/usr/share/nginx/html/change_env.sh && nginx -g \"daemon off;\""]