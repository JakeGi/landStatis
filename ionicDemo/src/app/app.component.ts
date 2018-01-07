import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { Http, Response } from '@angular/http';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, value: any}>;
  startTimes:any;
  endTime:any;
  venderName:any;
  ownerName:any;
  ownerPhone:any;
  areaCount:any;
  areaVaildCount:any;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,public  http:Http) {
    this.initializeApp();

    // used for an example of ngFor and navigation


  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.ss();
    });
  }
  ss(){

    var date = new Date();
    console.log("data=="+date);

    this.startTimes = "2012-01-01"
    this.endTime = "2019-01-01";
    this.http.request('http://hit.huidatech.cn/hdPrecisionAgri/action/work?handler=queryWorkinfoDetail&regionCode=17020115&beginDate='+this.startTimes+'&endDate='+this.endTime+'&key=&beginDepth=&endDepth=&beginRate=&endRate=&workType=13%2C56&deptNameList=&begin=1&end=20&carId=&deviceId=&acrossDistrict=')
      .subscribe((res: Response) => {
        var data = eval('(' + res["_body"] + ')');
        if(data.success == true){
          var dic = data.jsonObject[0];
          var dd = dic[dic.length - 1];
          this.areaVaildCount = Number(dic[dic.length - 1].areaVaildCount).toFixed(2) + "亩";
          this.ownerName = dic[dic.length - 1].ownerName;
          this.venderName =dic[dic.length - 1].venderName;
          this.ownerPhone = dic[dic.length - 1].ownerPhone;
          this.areaCount = Number(dic[dic.length - 1].areaCount).toFixed(2) + "亩";

          this.pages = [
            { title: '账号', value:this.ownerName},
            { title: '车辆信息', value:this.venderName},
            { title: '手机号', value:this.ownerPhone},
            { title: '累计面积', value:this.areaCount},
            { title: '累计达标面积', value:this.areaVaildCount}

          ];

        }else {
          console.log("暂无数据")
        }


      });
  }


  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    // this.nav.setRoot(page.component);
  }
}
