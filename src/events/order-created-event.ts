import { Subjects } from './subjects';
import { OrderStatus } from './types/order-status';

export interface OrderCreatedEvent {
  subject: Subjects.OrderCreated;
  data: {
    id: string;
    version: number;
    userId: string;
    status: OrderStatus;
    // JSON does not know about Dates:
    expiresAt: string;
    ticket: {
      id: string;
      price: number;
    };
  };
}
