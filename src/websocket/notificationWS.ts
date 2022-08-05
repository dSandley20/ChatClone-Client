import { w3cwebsocket as W3CWebSocket } from 'websocket';

const getNotificationWS = () => {
  return new W3CWebSocket(`ws://127.0.0.1:8000/notifications`);
};

export default getNotificationWS;
