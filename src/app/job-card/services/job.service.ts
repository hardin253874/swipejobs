import { Injectable }                           from '@angular/core';
import {jobDetail} from '../../_modals/job-detail';
import {companyDetail} from '../../_modals/company-detail';
import {shiftDetail} from '../../_modals/shift-detail';
@Injectable()
export class JobService {
  constructor(){

  }


  static getJobDetail(): jobDetail {
    const mockJob = new jobDetail({
      jobId: '5775d8e18a488e6c5bb08c13',
      title:  'Construction and Releated Workers - General',
      company: new companyDetail({
        name: 'C.D. Barnes and Associates',
        address: '123 Main Street, Tacoma, WA 98409',
        // tslint:disable-next-line:max-line-length
        logo: 'https://static.wixstatic.com/media/dc0d61_854a54df0f1049bcbb20e2f9a64236eb.png/v1/fill/w_112,h_112,al_c,usm_0.66_1.00_0.01/dc0d61_854a54df0f1049bcbb20e2f9a64236eb.png',
        reportTo: 'Joe Blogs'
      }),
      wagePerHourInCents: 850,
      shifts:  [new shiftDetail({
        startDate: '2016-09-04T21:00:00Z',
        endDate: '2016-09-05T05:00:00Z'
      }),
        new shiftDetail({
          startDate: '2016-09-05T21:00:00Z',
          endDate: '2016-09-06T05:00:00Z'
        }),
        new shiftDetail({
          startDate: '2016-09-06T21:00:00Z',
          endDate: '2016-09-07T05:00:00Z'
        }),
        new shiftDetail({
          startDate: '2016-09-07T21:00:00Z',
          endDate: '2016-09-08T05:00:00Z'
        }),
        new shiftDetail({
          startDate: '2016-09-08T21:00:00Z',
          endDate: '2016-09-09T05:00:00Z'
        }),
        new shiftDetail({
          startDate: '2016-09-11T21:00:00Z',
          endDate: '2016-09-12T05:00:00Z'
        }),
        new shiftDetail({
          startDate: '2016-09-12T21:00:00Z',
          endDate: '2016-09-13T05:00:00Z'
        }),
        new shiftDetail({
          startDate: '2016-09-13T21:00:00Z',
          endDate: '2016-09-14T05:00:00Z'
        }),
        new shiftDetail({
          startDate: '2016-09-14T21:00:00Z',
          endDate: '2016-09-15T05:00:00Z'
        }),
        new shiftDetail({
          startDate: '2016-09-15T21:00:00Z',
          endDate: '2016-09-16T05:00:00Z'
        })],
      branch: 'Tacoma',
      branchPhoneNumber: '(253) 922-4240'
    });

    return mockJob;
  }

}
