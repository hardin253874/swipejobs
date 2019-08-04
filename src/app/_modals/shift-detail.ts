import {companyDetail} from './company-detail';

export class shiftDetail {
  startDate: string;
  endDate: string;

  constructor(
    fields?: {
      startDate?: string;
      endDate?: string;
    }) {
    if (fields) Object.assign(this, fields);
  }
}
