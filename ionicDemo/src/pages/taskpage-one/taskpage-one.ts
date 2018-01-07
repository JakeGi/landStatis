import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Response } from '@angular/http';
import {TaskoneDetailePage} from "../taskone-detaile/taskone-detaile";

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

    console.log(this.startTimes);
    console.log(this.endTime);

    this.http.request('http://hit.huidatech.cn/hdPrecisionAgri/action/work?handler=queryWorkinfoDetail&regionCode=17020115&beginDate='+this.startTimes+'&endDate='+this.endTime+'&key=&beginDepth=&endDepth=&beginRate=&endRate=&workType=13%2C56&deptNameList=&begin=1&end=200&carId=&deviceId=&acrossDistrict=')
      .subscribe((res: Response) => {
        var data = eval('(' + res["_body"] + ')');
        if(data.success == true){
          var dic = data.jsonObject;
          this.listArr = dic[0];
          console.log("arr==="+data.jsonObject);
          console.log("dic==="+dic[0]);
        }else {
          console.log("暂无数据")
        }


      });

  }
  //跳转详情页
  goDetali($event){
    console.log($event);
    this.navCtrl.push("TaskoneDetailePage");


  }
}
