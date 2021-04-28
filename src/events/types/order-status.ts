export enum OrderStatus {
  // Initial state
  Created = 'created',

  // The ticket was cancelled by the user, or it was
  // already assigned to somebody else, or expired.
  Cancelled = 'cancelled',

  // Order is awaiting payment.
  AwaitingPayment = 'awaiting:payment',

  // Paid and given over.
  Complete = 'complete',
}
