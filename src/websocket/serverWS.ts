import { w3cwebsocket as W3CWebSocket } from 'websocket';

const getServerWS = (server: number) => {
  return new W3CWebSocket(`ws://127.0.0.1:8000/server/${server}`);
};

export default getServerWS;
