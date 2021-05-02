import { Stan } from 'node-nats-streaming';
import { Subjects } from './subjects';

interface Event {
  subject: Subjects;
  data: any;
}

abstract class Publisher<T extends Event> {
  abstract subject: T['subject'];
  protected client: Stan;

  constructor(client: Stan) {
    this.client = client;
  }

  protected callPublish(data: T['data']): Promise<void> {
    return new Promise((resolve, reject) => {
      const packedData = JSON.stringify(data);
      this.client.publish(this.subject, packedData, (err, guid) => {
        if (err) {
          return reject(err);
        }
        console.log(`Pushed event ${guid} to ${this.subject}`);
        resolve();
      });
    });
  }

  protected publish(data: T['data']): Promise<void> {
    return this.callPublish(data);
  }
}

export { Publisher };
