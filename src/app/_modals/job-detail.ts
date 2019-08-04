import {companyDetail} from './company-detail';
import {shiftDetail} from './shift-detail';


export class jobDetail {
  jobId: string;
  title: string;
  company: companyDetail;
  wagePerHourInCents: number;
  shifts: shiftDetail[];
  branch: string;
  branchPhoneNumber: string;

  constructor(
    fields?: {
      jobId?: string;
      title?: string;
      company?: companyDetail;
      wagePerHourInCents?: number;
      shifts?: shiftDetail[];
      branch?: string;
      branchPhoneNumber?: string;
    }) {
    if (fields) Object.assign(this, fields);
  }
}
