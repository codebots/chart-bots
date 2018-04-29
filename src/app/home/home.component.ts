import {
  Component,
  OnInit
} from '@angular/core';

import { AppState } from '../app.service';
import { Title } from './title';
import { XLargeDirective } from './x-large';
import { single, multi, assetWFS, chart1 } from './data.ts';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Rx';

@Component({
  /**
   * The selector is what angular internally uses
   * for `document.querySelectorAll(selector)` in our index.html
   * where, in this case, selector is the string 'home'.
   */
  selector: 'home',  // <home></home>
  /**
   * We need to tell Angular's Dependency Injection which providers are in our app.
   */
  providers: [
    Title
  ],
  /**
   * Our list of styles in our component. We may add more to compose many styles together.
   */
  styleUrls: [ './home.component.css' ],
  /**
   * Every Angular template is first compiled by the browser before Angular runs it's compiler.
   */
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit, OnDestroy {
  private single: any[];
  private multi: any[];
  private assetWFS: any[];
  private chart1: any[];

  private view: any[] = [300, 200];
  private view1: any[] = [200 , 200];
  private view4: any[] = [400 , 300];

  // options
  private showLegend = true;

  private colorScheme2 = {
    domain: ['#6F566E', '#8A8895', '#D4818C', '#F7CEC8', '#F7CEC8', '#ff3B3F']
  };

  private colorScheme = {
    domain: [
      '#E96B56', '#FAC51D', '#66BD6D', '#FAA026', '#29BB9C',
      '#55ACD2', '#B7332F', '#2C83C9', '#9166B8', '#92E7E8'
    ]
  };

  // pie
  private showLabels = true;
  private explodeSlices = false;
  private doughnut = false;

  // chart 1
  private showXAxis = true;
  private showYAxis = true;
  private gradient = false;
  private showXAxisLabel = true;
  private xAxisLabel = 'Zone';
  private showYAxisLabel = true;
  private yAxisLabel = 'Asset Count';
  private autoRefreshTimerObj: Subscription;

  constructor() {
    Object.assign(this, {single, multi, assetWFS, chart1});
    this.autoRefresh();
  }

  public onSelect(event) {
    console.log(event);
  }

  public ngOnInit() {
    console.log('hello `Home` component');
    /**
     * this.title.getData().subscribe(data => this.data = data);
     */
  }

  public ngOnDestroy() {
    if (this.autoRefreshTimerObj) {
      this.autoRefreshTimerObj.unsubscribe();
    }
  }

  public submitState(value: string) {
    console.log('submitState', value);
  }

  private autoRefresh() {
    let timer = Observable.timer(0, 5000);
    let self = this;
    this.autoRefreshTimerObj = timer.subscribe((t) => {
      // Check if auto refresh timer object is not closed then refresh logs
        self.single = self.multi = self.assetWFS = self.chart1 = [];
        setTimeout(() => {
          Object.assign(self, {single, multi, assetWFS, chart1});
      }, 200);
    });
  }
}
