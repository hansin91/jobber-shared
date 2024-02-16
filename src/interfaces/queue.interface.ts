import { Channel } from 'amqplib';

export interface DirectMessage {
  channel: Channel
  exchangeName: string
  routingKey: string
  message: string
  logMessage: string
}
