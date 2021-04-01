FROM node:14.15.5-slim AS builder

WORKDIR /app

RUN echo "Asia/Shanghai" > /etc/timezone;dpkg-reconfigure -f noninteractive tzdata

COPY . .

FROM nginx:stable-alpine
COPY default.conf /etc/nginx/conf.d/

# copy from dist to nginx root dir
COPY --from=builder /app/dist/ /usr/share/nginx/html

# expose port 80
EXPOSE 80

# run nginx in foreground
# https://stackoverflow.com/questions/18861300/how-to-run-nginx-within-a-docker-container-without-halting
CMD ["nginx", "-g", "daemon off;"]