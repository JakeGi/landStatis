import {Component, ElementRef, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TaskoneDetailePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var BMap; //declare var AMap: any;
declare var BMap_Symbol_SHAPE_BACKWARD_OPEN_ARROW;

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
        //绘制关键点
      var map = this.map = new BMap.Map("container");
      var sy = new BMap.Symbol(BMap_Symbol_SHAPE_BACKWARD_OPEN_ARROW, {
          scale: 0.6,//图标缩放大小
          strokeColor:'#fff',//设置矢量图标的线填充颜色
          strokeWeight: '2',//设置线宽
      });
      // var styleJson = [
      //     {
      //         "featureType": "all",
      //         "elementType": "geometry",
      //         "stylers": {
      //             "hue": "#ffff11",
      //             "saturation": 89
      //         }
      //     },
      //     {
      //         "featureType": "water",
      //         "elementType": "all",
      //         "stylers": {
      //             "color": "#ffffff"
      //         }
      //     }
      // ]
      // map.setMapStyle({styleJson:styleJson});
      map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);

      var p1 = new BMap.Point(116.301934,39.977552);
      var p2 = new BMap.Point(116.508328,39.919141);

      var driving = new BMap.DrivingRoute(map, {renderOptions:{map: map, autoViewport: true}});
      driving.search(p1, p2);

    // this.loadMap();
  }
  loadMap() {
      // 百度地图API功能
      var map = this.map = new BMap.Map("container");
      // var geolocation = new BMap.Geolocation();
      // geolocation.getCurrentPosition(function(r){
      //     if(this.getStatus() == 0){
      //         var mk = new BMap.Marker(r.point);
      //         map.addOverlay(mk);
      //         map.panTo(r.point);
      //         alert('您的位置：'+r.point.lng+','+r.point.lat);
      //         var point = new BMap.Point(r.point.lng, r.point.lat);
      //         map.centerAndZoom(point, 15);
      //         var marker = new BMap.Marker(point);        // 创建标注
      //         map.addOverlay(marker);
      //     }
      //     else {
      //         alert('failed'+this.getStatus());
      //     }
      // });
    map.centerAndZoom("重庆", 12);  //初始化地图,设置城市和地图级别。
    var pointA = new BMap.Point(106.486654, 29.490295);  // 创建点坐标A--大渡口区
    var pointB = new BMap.Point(106.581515, 29.615467);  // 创建点坐标B--江北区
    // alert('从大渡口区到江北区的距离是：'+(map.getDistance(pointA,pointB)).toFixed(2)+' 米。');  //获取两点距离,保留小数点后两位
    var polyline = new BMap.Polyline([pointA, pointB], {strokeColor: "blue", strokeWeight: 6, strokeOpacity: 0.5});  //定义折线
    map.addOverlay(polyline);     //添加折线到地图上

      var transit = new BMap.TransitRoute("北京市");
      transit.setSearchCompleteCallback(function(results){
          if (transit.getStatus() == 0){
              var firstPlan = results.getPlan(0);
              // 绘制步行线路
              for (var i = 0; i < firstPlan.getNumRoutes(); i ++){
                  var walk = firstPlan.getRoute(i);
                  if (walk.getDistance(false) > 0){
                      // 步行线路有可能为0
                      map.addOverlay(new BMap.Polyline(walk.getPoints(), {lineColor: "green"}));
                  }
              }
              // 绘制公交线路
              for (i = 0; i < firstPlan.getNumLines(); i ++){
                  var line = firstPlan.getLine(i);
                  map.addOverlay(new BMap.Polyline(line.getPoints()));
              }
              // 输出方案信息
              var s = [];
              for (i = 0; i < results.getNumPlans(); i ++){
                  s.push((i + 1) + ". " + results.getPlan(i).getDescription());
              }
              document.getElementById("log").innerHTML = s.join("<br>");
          }
      })
      transit.search("中关村", "国贸桥");
  }

  }


