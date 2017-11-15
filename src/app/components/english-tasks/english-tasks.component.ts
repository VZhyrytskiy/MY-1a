import { Component, OnInit, OnDestroy } from '@angular/core';
import { EnglishHomeTasksService } from './english-home-tasks.service';

@Component({
  selector: 'app-english-tasks',
  templateUrl: './english-tasks.component.html',
  styleUrls: ['./english-tasks.component.css']
})
export class EnglishTasksComponent implements OnInit, OnDestroy {
  tasks = [];

  private sub: Array<any> = [];

  constructor(
    private englishHomeTasksService: EnglishHomeTasksService
  ) { }

  ngOnInit() {
    const sub = this.englishHomeTasksService.getTasks()
      .subscribe(data => {
        const o = Object.assign({}, data);
        const keys = Object.keys(o);
        keys.forEach(key => {
          this.tasks.push(o[key]);
        });
        // console.log(this.tasks);
      });

    this.sub.push(sub);
  }

  ngOnDestroy() {
    this.sub.forEach(sub => sub.unsibscribe());
  }

  extractFileName(fileName: string) {
    return fileName.split('.')[0];
  }

}
