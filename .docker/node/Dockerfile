FROM node:13.12-buster-slim

ENV TZ=Europe/Moscow
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

RUN apt-get update
RUN apt-get dist-upgrade -y
RUN apt-get install -y --no-install-recommends \
  bash git yarn libglu1 libxi6 \
  && npm i -g pm2

RUN apt-get install apt-transport-https ca-certificates -y \
 && update-ca-certificates

RUN apt-get clean
RUN rm -rf                        \
    /var/lib/apt/lists/*          \
    /var/log/alternatives.log     \
    /var/log/apt/history.log      \
    /var/log/apt/term.log         \
    /var/log/dpkg.log


RUN mkdir /home/node/app
WORKDIR /home/node/app

COPY . /home/node/app
RUN chown -R node:node /home/node/app
RUN chmod +x ./.docker/prepare.sh && chmod +x ./.docker/start.sh

USER node

RUN ./.docker/prepare.sh

ENTRYPOINT ["/home/node/app/.docker/start.sh"]

EXPOSE 8080
