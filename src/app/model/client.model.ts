import { Address, Contact, General, Job } from '.';

export class Client {
  public address: Address;
  public contact: Contact;
  public general: General;
  public job: Job;

  constructor() {
    this.address = new Address();
    this.contact = new Contact();
    this.general = new General();
    this.job = new Job();
  }
}
