import {Injectable, Inject} from  '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {ConfigService} from "./services/ConfigService";
import {Observable} from  'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class Gallery {

    constructor() {

    }


  items = [
    {
      title: "降水量要素",
      image: "2017/01/29/prec.jpg"
    },
    {
      title: "降水距平要素",
      image: "2017/01/29/prec_a.jpg"
    },
    {
      title: "平均气温要素",
      image: "2017/01/29/temp.jpg"
    },
    {
      title: "气温距平要素",
      image: "2017/01/29/temp_a.jpg"
    },
    {
      title: "日照时数要素",
      image: "2017/01/29/sun.jpg"
    },
    {
      title: "日照时数距平要素",
      image: "2017/01/29/sun_a.jpg"
    }
  ];

news = [
    {
      id:1,
      author:"庄白羽",
      rdate: "2017年3月2日",
      title: "机耕牛犁促春耕",
      description: "近日，青山绿水环绕的湖南省辰溪县仙人湾乡布村芳草绿、梨花白、油菜花黄、梯田如镜；农民抓住晴好天气忙着春耕春播，忙碌的农民与稻田周边绿树山花构成一幅机耕与牛犁相映衬、生态与现代相融合的春耕人文图。",
      image: "assets/img/info1_s.jpg",
      srcimg: "assets/img/info1.jpg"
    },
    {
      id:2,
      author:"庄白羽",
      rdate: "2017年3月2日",
      title: "气象服务为脐橙花期保驾护航",
      description: "<b>清明过后，气温持续升高，降雨逐渐增多，广西壮族自治区贺州市富川瑶族自治县的脐橙进入了开花期和保芽期。富川瑶族自治县气象局利用手机短信、预警大喇叭、显示屏等渠道向脐橙种植户发布气象预报预警信息。为更好服务果农，气象、农业组织人员到福利镇立新农场一队、二队分发气象防灾减灾宣传资料，重点向果农讲解了近期大风、强对流等灾害性天气的脐橙生长发育的不利影响，指导果农做好脐橙保花、保芽、播撒农药等田间管理，确保脐橙增产增收。　　<b>据农气专家介绍，目前富川瑶族自治县脐橙种植面积为35万余亩，都陆续进入了花期。脐橙开花结果率与气象条件息息相关，如果花期内出现强对流、强风和干热风等灾害性天气，开花结果率将严重降低。特别是警惕“干热风”对脐橙造成严重影响。",
      image: "assets/img/info3_s.jpg",
      srcimg: "assets/img/info3.jpg"
    },
    {
      id:3,
      author:"庄白羽",
      rdate: "2017年3月2日",
      title: "开展小麦孕穗抽穗期气象服务工作",
      description: "当前正值冬小麦孕穗抽穗关键期，4月6日，市气象局农业气象服务领域专家深入所辖宛城区万庄高标准永久性粮田示范区开展冬小麦气象服务工作。气象专家先后对冬小麦墒情、苗情、病虫草害等项目进行实地调查分析，并为冬小麦春季管理技术指导及保障小麦稳产高产提出建议。　　专家介绍，目前全市已进入小麦病虫害防控的最关键时期，由于去年冬季气温较常年偏高、今年入春后降雨偏多、近期仍将有大范围降雨过程等气象条件综合影响，并根据农业专家联合会商情况来看，近期全市以条锈病为主的小麦病虫害防治工作异常严峻，气象专家建议，各地要加强田间管理，重点做好冬小麦条锈病防控及赤霉病的预防工作，确保全市夏粮生产安全。", 
      image: "assets/img/info4_s.jpg",
      srcimg: "assets/img/info4.jpg"
    },
    {
      id:4,
      author:"庄白羽",
      rdate: "2017年3月2日",
      title: "农气人员田间指导水稻育苗揭膜",
      description: "正值水稻育苗关键时期，4月6日，云南省曲靖市气象局农气服务人员深入沾益区大坡乡田间，调查了解水稻育苗生长情况，从气温影响、幼苗养料等方面指导农户掌握揭膜最佳时机，并向农户发放气象灾害防御手册，指导农户如何做好育苗后期管理。", 
      image: "assets/img/info5_s.jpg",
      srcimg: "assets/img/info5.jpg"
    },
    {
      id:5,
      author:"庄白羽",
      rdate: "2017年3月2日",
      title: "开展日光温室蔬菜大棚为农气象服务需求调研",
      description: "在吴店镇肖湾村中兴农业合作社，农业气象服务人员了解大棚番茄的生长情况，指导种植户通过防风加固、增加裙膜、加盖小棚、换气补光调控棚室温湿度等措施避免番茄畸形果，防烂苗、促开花，减轻和避免低温阴雨寡照大风天气对设施农业生产的影响。", 
      image: "assets/img/info6_s.jpg",
      srcimg: "assets/img/info6.jpg"
    },
    {
      id:6,
      author:"庄白羽",
      rdate: "2017年3月2日",
      title: "春茶吐翠 气象护航",
      description: "近日，随着气温的逐渐回升，桃红梨白、茶牙滴翠，浙江省德清县春茶进入大面积开采阶段。德清县气象部门为全县2.87万亩茶园保驾护航，开展茶叶低温气象指数政策性农业保险业务试点，做好茶园区气温采集、数据传输以及低温预警等保障工作，提前做好新茶开采期气象预报预警服务。", 
      image: "assets/img/info7_s.jpg",
      srcimg: "assets/img/info7.jpg"
    },
    {
      id:7,
      author:"庄白羽",
      rdate: "2017年3月2日",
      title: "气象科技人员深入田间地头开展水稻育苗气象服务",
      description: "近日，云南省楚雄彝族自治州气象局组织农气人员深入基层全力做好水稻育苗气象服务工作，通过水稻育苗现场调查，全面了解各乡镇气象服务重点，为农户送上气象服务信息，针对气温多变的特点，指导种植大户做好大风等不利天气的防御工作，建议农户抓住气温回升之冷尾暖头，在当地气温稳定通过10℃时抢时播种旱育秧，气温稳定通过12℃时抢时进行湿润育秧，同时采取相应的保温育苗农艺措施，严防烂种死苗，确保壮苗移栽，实现满栽满插。", 
      image: "assets/img/info8_s.jpg",
      srcimg: "assets/img/info8.jpg"
    },
    {
      id:8,
      author:"庄白羽",
      rdate: "2017年3月2日",
      title: "气象走进大棚开展直通式为农服务",
      description: "近日，山东省菏泽市气象局开展直通式为农服务，该市气象局组织技术人员深入大田调研设施农业春季生产情况，调研小组针对近日冷空气活动频繁，阴雨日较多，蔬菜生长缓慢等情况进行详细了解并现场指导菜农如何进行合理管理。图为调研小组正在定陶县某生态园进行现场咨询。",
      image: "assets/img/info9_s.jpg",
      srcimg: "assets/img/info9.jpg"
    }
  ];

  getNewsById(id)
  {
    //this.news.json().list
  }

}
