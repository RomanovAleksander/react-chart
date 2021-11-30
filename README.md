### React Chart | Wiliot

* This application includes next functionality:
    * The data is updated each time new data arrives from the socket;
    * Toast indicates the socket connected or disconnected;
    * Data is stored for up to 5 minutes;
    * If the data value is bigger than 100, it is not displayed;
* For task implementation used:
    * **[WebSocket Server](https://github.com/and-dzh3/ws-srv)**;
    * **React, ChartJs, React Toastify**;
    * **Create React App** as an app starter;
  
### Installing
```
React Chart | Client
$ git clone https://github.com/RomanovAleksander/react-chart.git - clone this repository
$ cd react-chart - go to the client folder
$ npm install - install dependencies
$ npm run start - run the client
Server
$ git clone https://github.com/and-dzh3/ws-srv.git - clone server repository
$ cd ws-srv - go to the server folder
$ npm install - install dependencies
$ npm i -g typescript - install typescript
$ node ./dist/server/server.js - run the server
```
