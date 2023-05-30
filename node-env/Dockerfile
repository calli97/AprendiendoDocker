FROM node:18
#ENVIROMENT VARIABLES
ENV PORT=3002
ENV NODE_USER=admin
ENV NODE_PASSWORD=postgres

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3001
CMD [ "npm", "start" ]


# docker build . -t nahuelcallalli/node-env
# build cmd |path|flag for name| name

#docker run -p 5050:3001 -d nahuelcallalli/node-env
#run cdm|port local:dockerport| name flag | image name