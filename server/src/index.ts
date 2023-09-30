import express from 'express';
import cors from 'cors';
import http, { Server } from 'http';
import { AddressInfo } from 'net';
import './db/mongoose'; // Import the mongoose connection

const app = express();
app.use(express.json());
app.use(cors()); // Enable CORS for all routes



const server: Server = http.createServer(app);
server.listen(1800, () => {
  const address = server.address() as AddressInfo;
  const port = address.port;
  console.log(`Server running on http://localhost:${port}/`);
});
