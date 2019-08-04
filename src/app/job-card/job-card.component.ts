import { Component, OnInit } from '@angular/core';
import {jobDetail} from '../_modals/job-detail';
import {JobService} from './services/job.service';
import * as moment from 'moment';
@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html'
})
export class JobCardComponent implements OnInit {

  constructor() { }
  job: jobDetail;

  wagePerHourInCents = 850;
  shifts = ['Mon, Set 5 8:00 AM PST', 'Tue, Sep 6 8:00 AM PST', 'Wed, Sep 7 8:00 AM PST',
    'Thu, Sep 8 8:00 AM PST', 'Fri, Sep 9 8:00 AM PST'
  ]
  ngOnInit() {
    this.job = JobService.getJobDetail();
  }

  getShiftRange(){
    if(this.job && this.job.shifts && this.job.shifts.length > 0) {
      const firstShift = this.job.shifts[0].startDate;
      const lastShift = this.job.shifts[this.job.shifts.length - 1].startDate;

      return moment(firstShift).format('ddd MMM D') + ' - ' +  moment(lastShift).format('ddd MMM D');

    }
    return '';
  }
}
