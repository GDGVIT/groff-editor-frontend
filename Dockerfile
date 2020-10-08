FROM node:12.18.4

WORKDIR /app

COPY package.json /app

COPY package-lock.json /app

RUN npm install

RUN npm install react-scripts

COPY . /app

RUN npm run build

RUN npm install -g serve

CMD ["serve", "-s","build"]