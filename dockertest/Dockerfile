FROM node:22

EXPOSE 5173

ENV HOST=0.0.0.0

WORKDIR /usr/src/app

COPY . .

RUN npm install

CMD ["npm", "run", "dev"]