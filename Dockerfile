FROM node:latest

RUN npm install -g ng-cli \
 && apt-get update \
 && apt-get install -y --no-install-recommends \
      nginx \
 && rm -rf /var/lib/apt/lists/* \
 && ln -sf /dev/stdout /var/log/nginx/access.log \
 && ln -sf /dev/stderr /var/log/nginx/error.log

COPY . /usr/src/app

RUN cd /usr/src/app \
 && npm install \
 && npm run-script build \
 && find /usr/src/app/dist \
 && rm /var/www/html/index.nginx-debian.html \
 && cp -r /usr/src/app/dist/* /var/www/html/ \
 && cp nginx.conf /etc/nginx/default.template

EXPOSE 80

ENTRYPOINT []
CMD ["/bin/bash", "-c", "envsubst < /etc/nginx/default.template > /etc/nginx/sites-enabled/default && nginx -g 'daemon off;'"]

