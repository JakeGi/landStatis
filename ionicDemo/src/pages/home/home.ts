import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Response } from '@angular/http';
import {TaskpageOnePage} from "../taskpage-one/taskpage-one";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private http: Http) {

    this.ss();
  }

  ss() {
    // 网络请求
    this.http.request('http://hit.huidatech.cn/hdPrecisionAgri/action/work?handler=queryWorkinfoDetail&regionCode=17020115&beginDate=2017-01-01&endDate=2018-01-04&key=&beginDepth=&endDepth=&beginRate=&endRate=&workType=13%2C56&deptNameList=&begin=1&end=20&carId=&deviceId=&acrossDistrict=')
      .subscribe((res: Response) => {
        var arr = eval('(' + res["_body"] + ')');

          console.log("==="+arr.success);
      });
  }
  //进入深松作业列表
  firstCare(){
    this.navCtrl.push("TaskpageOnePage");
  }


}
