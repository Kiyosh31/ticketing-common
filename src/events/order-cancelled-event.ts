import { Subjects } from './subjects';

export interface OrderCancelledEvent {
  subject: Subjects.OrderCancelled;

  data: {
    id: string;
    ticket: {
      ticket: {
        id: string;
        price: number;
      };
    };
  };
}
