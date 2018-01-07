import {Component, ElementRef, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TaskoneDetailePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var BMap; //declare var AMap: any;

@IonicPage()
@Component({
  selector: 'page-taskone-detaile',
  templateUrl: 'taskone-detaile.html',
})
export class TaskoneDetailePage {
  public map: any;
  longitude:any;
  latitude:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TaskoneDetailePage');


  }
  ionViewWillEnter() {

    this.loadToolBar();
  }
  loadToolBar() {
    // 百度地图API功能
    var map = this.map = new BMap.Map("container");
    map.centerAndZoom("重庆", 12);  //初始化地图,设置城市和地图级别。
    var pointA = new BMap.Point(106.486654, 29.490295);  // 创建点坐标A--大渡口区
    var pointB = new BMap.Point(106.581515, 29.615467);  // 创建点坐标B--江北区
    // alert('从大渡口区到江北区的距离是：'+(map.getDistance(pointA,pointB)).toFixed(2)+' 米。');  //获取两点距离,保留小数点后两位
    var polyline = new BMap.Polyline([pointA, pointB], {strokeColor: "blue", strokeWeight: 6, strokeOpacity: 0.5});  //定义折线
    map.addOverlay(polyline);     //添加折线到地图上

  }
  // 用经纬度设置地图中心点
  theLocation(){
    this.longitude = "116.32715863448607";
    this.latitude = "39.990912172420714";
    if(this.longitude != "" && this.latitude != ""){
      this.map.clearOverlays();
      var new_point = new BMap.Point(this.longitude,this.latitude);
      var marker = new BMap.Marker(new_point);  // 创建标注
      this.map.addOverlay(marker);              // 将标注添加到地图中
      this.map.panTo(new_point);
    }
  }

  }


