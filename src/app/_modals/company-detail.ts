import {shiftDetail} from './shift-detail';

export class companyDetail {
  name: string;
  address: string;
  logo: string;
  reportTo: string;

  constructor(
    fields?: {
      name?: string;
      address?: string;
      logo?: string;
      reportTo?: string;
    }) {
    if (fields) Object.assign(this, fields);
  }
}
