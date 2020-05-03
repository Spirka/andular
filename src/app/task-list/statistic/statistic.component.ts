import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.css']
})
export class StatisticComponent implements OnInit {
  taskAll = 15;
  tasksPlanned = 5;
  tasksOverdue = 6;
  tasksFinished = 10;

  constructor() { }

  ngOnInit(): void {
  }

}
