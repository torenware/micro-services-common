import { Subjects } from './subjects';
import { TicketStatus } from './types/ticket-status';

export interface TicketUpdatedEvent {
  subject: Subjects.TicketUpdated;
  data: {
    id: string;
    serial: number;
    userId: string;
    title: string;
    price: number;
    version: number;
    orderId?: string;
    status?: TicketStatus;
  };
}
