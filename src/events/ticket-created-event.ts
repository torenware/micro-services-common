import { Subjects } from './subjects';

export interface TicketCreatedEvent {
  subject: Subjects.TicketCreated;
  data: {
    id: string;
    serial: number;
    userId: string;
    title: string;
    price: number;
    version: number;
  };
}
