FROM node:20.11.0
WORKDIR /src
COPY package*.json ./
RUN npm install
RUN npm run start
EXPOSE 8000
CMD ["node", "app.jsx"]
