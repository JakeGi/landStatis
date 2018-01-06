import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Response } from '@angular/http';

/**
 * Generated class for the TaskpageOnePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-taskpage-one',
  templateUrl: 'taskpage-one.html',
})

export class TaskpageOnePage {
  startTimes:any;
  endTime:any;
  listArr:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private http:Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TaskpageOnePage');
  }

  //搜索数据
  searchBtn(){

    this.http.request('http://hit.huidatech.cn/hdPrecisionAgri/action/work?handler=queryWorkinfoDetail&regionCode=17020115&beginDate=2017-01-01&endDate=2018-01-04&key=&beginDepth=&endDepth=&beginRate=&endRate=&workType=13%2C56&deptNameList=&begin=1&end=20&carId=&deviceId=&acrossDistrict=')
      .subscribe((res: Response) => {
        var arr = eval('(' + res["_body"] + ')');
        var dic = arr.jsonObject;
        this.listArr = dic[0];
        console.log("arr==="+arr.jsonObject);
        console.log("dic==="+dic[0]);

      });

  }
}
