FROM node:18
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3001
CMD [ "npm", "start" ]


# docker build . -t nahuelcallalli/nodetest1
# build cmd |path|flag for name| name

#docker run -p 5050:3001 -d nahuelcallalli/nodetest1
#run cdm|port local:dockerport| name flag | image name