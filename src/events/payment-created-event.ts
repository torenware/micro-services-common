import { Subjects } from './subjects';

export interface PaymentCreatedEvent {
  subject: Subjects.PaymentCreated;
  data: {
    id: string;
    version: number;
    orderId: string;
    ticketId: string;
    stripeId: string;
  };
}
