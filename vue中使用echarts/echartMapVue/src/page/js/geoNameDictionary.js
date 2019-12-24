'use strict'

import $ from 'jquery'
// 省份名字中英文对应数据
var provinceNameArr = [
  // 23个省
  {'chineseName': '广东省', 'EnglishName': 'guangdong'}, {'chineseName': '青海省', 'EnglishName': 'qinghai'}, {'chineseName': '四川省', 'EnglishName': 'sichuan'}, {'chineseName': '海南省', 'EnglishName': 'hainan'}, {'chineseName': '陕西省', 'EnglishName': 'shaanxi'},
  {'chineseName': '甘肃省', 'EnglishName': 'gansu'}, {'chineseName': '云南省', 'EnglishName': 'yunnan'}, {'chineseName': '湖南省', 'EnglishName': 'hunan'}, {'chineseName': '湖北省', 'EnglishName': 'hubei'}, {'chineseName': '黑龙江省', 'EnglishName': 'heilongjiang'},
  {'chineseName': '贵州省', 'EnglishName': 'guizhou'}, {'chineseName': '山东省', 'EnglishName': 'shandong'}, {'chineseName': '江西省', 'EnglishName': 'jiangxi'}, {'chineseName': '河南省', 'EnglishName': 'henan'}, {'chineseName': '河北省', 'EnglishName': 'hebei'},
  {'chineseName': '山西省', 'EnglishName': 'shanxi'}, {'chineseName': '安徽省', 'EnglishName': 'anhui'}, {'chineseName': '福建省', 'EnglishName': 'fujian'}, {'chineseName': '浙江省', 'EnglishName': 'zhejiang'}, {'chineseName': '江苏省', 'EnglishName': 'jiangsu'},
  {'chineseName': '吉林省', 'EnglishName': 'jilin'}, {'chineseName': '辽宁省', 'EnglishName': 'liaoning'}, {'chineseName': '台湾省', 'EnglishName': 'taiwan'},
  // 5个自治区
  {'chineseName': '新疆维吾尔族自治区', 'EnglishName': 'xinjiang'}, {'chineseName': '广西壮族自治区', 'EnglishName': 'guangxi'}, {'chineseName': '宁夏回族自治区', 'EnglishName': 'ningxia'}, {'chineseName': '内蒙古自治区', 'EnglishName': 'neimenggu'}, {'chineseName': '西藏自治区', 'EnglishName': 'xizang'},
  // 4个直辖市
  {'chineseName': '北京直辖市', 'EnglishName': 'beijing'}, {'chineseName': '天津直辖市', 'EnglishName': 'tianjin'}, {'chineseName': '上海直辖市', 'EnglishName': 'shanghai'}, {'chineseName': '重庆直辖市', 'EnglishName': 'chongqing'},
  // 2个特别行政区
  {'chineseName': '香港特别行政区', 'EnglishName': 'xianggang'}, {'chineseName': '澳门特别行政区', 'EnglishName': 'aomen'}
]

// 广东省城市名字中英文对应信息
var cityName_guangdong = {
  '广州市': '020',
  '韶关市': '0751',
  '深圳市': '0755',
  '珠海市': '0756',
  '汕头市': '0754',
  '佛山市': '0757',
  '江门市': '0750',
  '湛江市': '0759',
  '茂名市': '0668',
  '肇庆市': '0758',
  '惠州市': '0752',
  '梅州市': '0753',
  '汕尾市': '0660',
  '河源市': '0762',
  '阳江市': '0662',
  '清远市': '0763',
  '东莞市': '0769',
  '中山市': '0760',
  '潮州市': '0768',
  '揭阳市': '0663',
  '云浮市': '0766'
}
// 青海省城市名字中英文对应信息
var cityName_qinghai = {
  '西宁市': '0971',
  '海东市': '0972',
  '海北藏族自治州': '0970',
  '黄南藏族自治州': '0973',
  '海南藏族自治州': '0974',
  '果洛藏族自治州': '0975',
  '玉树藏族自治州': '0976',
  '海西蒙古族藏族自治州': '0977'
}
// 四川省城市名字中英文对应信息
var cityName_sichuan = {
    '成都市': '028',
    '自贡市': '0813',
    '攀枝花市': '0812',
    '泸州市': '0830',
    '德阳市': '0838',
    '绵阳市': '0816',
    '广元市': '0839',
    '遂宁市': '0825',
    '内江市': '1832',
    '乐山市': '0833',
    '南充市': '0817',
    '眉山市': '1833',
    '宜宾市': '0831',
    '广安市': '0826',
    '达州市': '0818',
    '雅安市': '0835',
    '巴中市': '0827',
    '资阳市': '0832',
    '阿坝藏族羌族自治州': '0837',
    '甘孜藏族自治州': '0836',
    '凉山彝族自治州': '0834'
}
//海南省城市名字中英文对应信息
var cityName_hainan={
    '海口市': '0898',
    '三亚市': '0899',
    '儋州市': '0805',
    '五指山市': '1897',
    '琼海市': '1894',
    '文昌市': '1893',
    '万宁市': '1898',
    '东方市': '0807',
    '定安县_1': '0806',
    '屯昌县_1': '1892',
    '澄迈县_1': '0804',
    '临高县_1': '1896',
    '白沙黎族自治县': '0802',
    '昌江黎族自治县': '0803',
    '乐东黎族自治县': '2802',
    '陵水黎族自治县': '0809',
    '保亭黎族苗族自治县': '0801',
    '琼中黎族苗族自治县': '1899'
};
//陕西省城市名字中英文对应信息
var cityName_shaanxi={
    '西安市': '029',
    '铜川市': '0919',
    '宝鸡市': '0917',
    '咸阳市': '0910',
    '渭南市': '0913',
    '延安市': '0911',
    '汉中市': '0916',
    '榆林市': '0912',
    '安康市': '0915',
    '商洛市': '0914'
};
//甘肃省城市名字中英文对应信息
var cityName_gansu={
    '兰州市': '0931',
    '嘉峪关市': '1937',
    '金昌市': '0935',
    '白银市': '0943',
    '天水市': '0938',
    '武威市': '1935',
    '张掖市': '0936',
    '平凉市': '0933',
    '酒泉市': '0937',
    '庆阳市': '0934',
    '定西市': '0932',
    '陇南市': '2935',
    '临夏回族自治州': '0930',
    '甘南藏族自治州': '0941'
};
//云南省城市名字中英文对应信息
var cityName_yunnan={
    '昆明市': '0871',
    '曲靖市': '0874',
    '玉溪市': '0877',
    '保山市': '0875',
    '昭通市': '0870',
    '丽江市': '0888',
    '普洱市': '0879',
    '临沧市': '0883',
    '楚雄彝族自治州': '0878',
    '红河哈尼族彝族自治州': '0873',
    '文山壮族苗族自治州': '0876',
    '西双版纳傣族自治州': '0691',
    '大理白族自治州': '0872',
    '德宏傣族景颇族自治州': '0692',
    '怒江傈僳族自治州': '0886',
    '迪庆藏族自治州': '0887'
};
//湖南省城市名字中英文对应信息
var cityName_hunan={
    '长沙市': '0731',
    '株洲市': '0733',
    '湘潭市': '0732',
    '衡阳市': '0734',
    '邵阳市': '0739',
    '岳阳市': '0730',
    '常德市': '0736',
    '张家界市': '0744',
    '益阳市': '0737',
    '郴州市': '0735',
    '永州市': '0746',
    '怀化市': '0745',
    '娄底市': '0738',
    '湘西土家族苗族自治州': '0743'
};
//湖北省城市名字中英文对应信息
var cityName_hubei={
    '武汉市': '027',
    '黄石市': '0714',
    '十堰市': '0719',
    '宜昌市': '0717',
    '襄阳市': '0710',
    '鄂州市': '0711',
    '荆门市': '0724',
    '孝感市': '0712',
    '荆州市': '0716',
    '黄冈市': '0713',
    '咸宁市': '0715',
    '随州市': '0722',
    '恩施土家族苗族自治州': '0718',
    '仙桃市': '0728',
    '潜江市': '2728',
    '天门市': '1728',
    '神农架林区': '1719'
};
//黑龙江省城市名字中英文对应信息
var cityName_heilongjiang={
    '哈尔滨市': '0451',
    '齐齐哈尔市': '0452',
    '鸡西市': '0467',
    '鹤岗市': '0468',
    '双鸭山市': '0469',
    '大庆市': '0459',
    '伊春市': '0458',
    '佳木斯市': '0454',
    '七台河市': '0464',
    '牡丹江市': '0453',
    '黑河市': '0456',
    '绥化市': '0455',
    '大兴安岭地区': '0457'
};
//贵州省城市名字中英文对应信息
var cityName_guizhou={
    '贵阳市': '0851',
    '六盘水市': '0858',
    '遵义市': '0852',
    '安顺市': '0853',
    '毕节市': '0857',
    '铜仁市': '0856',
    '黔西南布依族苗族自治州': '0859',
    '黔东南苗族侗族自治州': '0855',
    '黔南布依族苗族自治州': '0854'
};
//山东省城市名字中英文对应信息
var cityName_shandong={
    '济南市': '0531',
    '青岛市': '0532',
    '淄博市': '0533',
    '枣庄市': '0632',
    '东营市': '0546',
    '烟台市': '0535',
    '潍坊市': '0536',
    '济宁市': '0537',
    '泰安市': '0538',
    '威海市': '0631',
    '日照市': '0633',
    '莱芜市': '0634',
    '临沂市': '0539',
    '德州市': '0534',
    '聊城市': '0635',
    '滨州市': '0543',
    '菏泽市': '0530'
}
//江西省城市名字中英文对应信息
var cityName_jiangxi={
    '南昌市': '0791',
    '景德镇市': '0798',
    '萍乡市': '0799',
    '九江市': '0792',
    '新余市': '0790',
    '鹰潭市': '0701',
    '赣州市': '0797',
    '吉安市': '0796',
    '宜春市': '0795',
    '抚州市': '0794',
    '上饶市': '0793'
};
//河南省城市名字中英文对应信息
var cityName_henan={
    '郑州市': '0371',
    '开封市': '0378',
    '洛阳市': '0379',
    '平顶山市': '0375',
    '安阳市': '0372',
    '鹤壁市': '0392',
    '新乡市': '0373',
    '焦作市': '0391',
    '濮阳市': '0393',
    '许昌市': '0374',
    '漯河市': '0395',
    '三门峡市': '0398',
    '南阳市': '0377',
    '商丘市': '0370',
    '信阳市': '0376',
    '周口市': '0394',
    '驻马店市': '0396',
    '济源市': '1391',
};
//河北省城市名字中英文对应信息
var cityName_hebei={
    '石家庄市': '0311',
    '唐山市': '0315',
    '秦皇岛市': '0335',
    '邯郸市': '0310',
    '邢台市': '0319',
    '保定市': '0312',
    '张家口市': '0313',
    '承德市': '0314',
    '沧州市': '0317',
    '廊坊市': '0316',
    '衡水市': '0318'
};
//山西省城市名字中英文对应信息
var cityName_shanxi={
    '太原市': '0351',
    '大同市': '0352',
    '阳泉市': '0353',
    '长治市': '0355',
    '晋城市': '0356',
    '朔州市': '0349',
    '晋中市': '0354',
    '运城市': '0359',
    '忻州市': '0350',
    '临汾市': '0357',
    '吕梁市': '0358'
};
//安徽省城市名字中英文对应信息
var cityName_anhui={
    '合肥市': '0551',
    '芜湖市': '0553',
    '蚌埠市': '0552',
    '淮南市': '0554',
    '马鞍山市': '0555',
    '淮北市': '0561',
    '铜陵市': '0562',
    '安庆市': '0556',
    '黄山市': '0559',
    '滁州市': '0550',
    '阜阳市': '1558',
    '宿州市': '0557',
    '六安市': '0564',
    '亳州市': '0558',
    '池州市': '0566',
    '宣城市': '0563'
};
//福建省城市名字中英文对应信息
var cityName_fujian={
    '福州市': '0591',
    '厦门市': '0592',
    '莆田市': '0594',
    '三明市': '0598',
    '泉州市': '0595',
    '漳州市': '0596',
    '南平市': '0599',
    '龙岩市': '0597',
    '宁德市': '0593'
};
//浙江省城市名字中英文对应信息
var cityName_zhejiang={
    '杭州市': '0571',
    '宁波市': '0574',
    '温州市': '0577',
    '嘉兴市': '0573',
    '湖州市': '0572',
    '绍兴市': '0575',
    '金华市': '0579',
    '衢州市': '0570',
    '舟山市': '0580',
    '台州市': '0576',
    '丽水市': '0578'
};
//江苏省城市名字中英文对应信息
var cityName_jiangsu={
    '南京市': '025',
    '无锡市': '0510',
    '徐州市': '0516',
    '常州市': '0519',
    '苏州市': '0512',
    '南通市': '0513',
    '连云港市': '0518',
    '淮安市': '0517',
    '盐城市': '0515',
    '扬州市': '0514',
    '镇江市': '0511',
    '泰州市': '0523',
    '宿迁市': '0527'
};
//吉林省城市名字中英文对应信息
var cityName_jilin={
    '长春市': '0431',
    '吉林市': '0432',
    '四平市': '0434',
    '辽源市': '0437',
    '通化市': '0435',
    '白山市': '0439',
    '松原市': '0438',
    '白城市': '0436',
    '延边朝鲜族自治州': '1433'
};
//辽宁省城市名字中英文对应信息
var cityName_liaoning={
    '沈阳市': '024',
    '大连市': '0411',
    '鞍山市': '0412',
    '抚顺市': '0413',
    '本溪市': '0414',
    '丹东市': '0415',
    '锦州市': '0416',
    '营口市': '0417',
    '阜新市': '0418',
    '辽阳市': '0419',
    '盘锦市': '0427',
    '铁岭市': '0410',
    '朝阳市': '0421',
    '葫芦岛市': '0429'
};

//新疆自治区城市名字中英文对应信息
var cityName_xinjiang={
    '乌鲁木齐市': '0991',
    '克拉玛依市': '0990',
    '吐鲁番地区': '0995',
    '哈密地区': '0902',
    '昌吉回族自治州': '0994',
    '博尔塔拉蒙古自治州': '0909',
    '巴音郭楞蒙古自治州': '0996',
    '阿克苏地区': '0997',
    '克孜勒苏柯尔克孜自治州': '0908',
    '喀什地区': '0998',
    '和田地区': '0903',
    '伊犁哈萨克自治州': '0999',
    '塔城地区': '0901',
    '阿勒泰地区': '0906',
    '石河子市': '0993',
    '阿拉尔市': '1997',
    '图木舒克市': '1998',
    '五家渠市': '1994',
    '北屯市': '1906',
    '铁门关市': '1996',
    '双河市': '1909',
    '可克达拉市': '1999'
};
//广西自治区城市名字中英文对应信息
var cityName_guangxi={
    '南宁市': '0771',
    '柳州市': '0772',
    '桂林市': '0773',
    '梧州市': '0774',
    '北海市': '0779',
    '防城港市': '0770',
    '钦州市': '0777',
    '贵港市': '1755',
    '玉林市': '0775',
    '百色市': '0776',
    '贺州市': '1774',
    '河池市': '0778',
    '来宾市': '1772',
    '崇左市': '1771'
};
//宁夏自治区城市名字中英文对应信息
var cityName_ningxia={
    '银川市': '0951',
    '石嘴山市': '0952',
    '吴忠市': '0953',
    '固原市': '0954',
    '中卫市': '1953'
};
//内蒙古自治区城市名字中英文对应信息
var cityName_neimenggu={
    '呼和浩特市': '0471',
    '包头市': '0472',
    '乌海市': '0473',
    '赤峰市': '0476',
    '通辽市': '0475',
    '鄂尔多斯市': '0477',
    '呼伦贝尔市': '0470',
    '巴彦淖尔市': '0478',
    '乌兰察布市': '0474',
    '兴安盟': '0482',
    '锡林郭勒盟': '0479',
    '阿拉善盟': '0483'
};
//西藏自治区城市名字中英文对应信息
var cityName_xizang={
    '拉萨市': '0891',
    '日喀则市': '0892',
    '昌都市': '0895',
    '山南地区': '0893',
    '那曲地区': '0896',
    '阿里地区': '0897',
    '林芝市': '0894'
};
//存储城市信息
var cityNameData={
    'cityName_guangdong': cityName_guangdong,
    'cityName_qinghai': cityName_qinghai,
    'cityName_sichuan': cityName_sichuan,
    'cityName_hainan': cityName_hainan,
    'cityName_shaanxi': cityName_shaanxi,
    'cityName_gansu': cityName_gansu,
    'cityName_yunnan': cityName_yunnan,
    'cityName_hunan': cityName_hunan,
    'cityName_hubei': cityName_hubei,
    'cityName_heilongjiang': cityName_heilongjiang,
    'cityName_guizhou': cityName_guizhou,
    'cityName_shandong': cityName_shandong,
    'cityName_jiangxi': cityName_jiangxi,
    'cityName_henan': cityName_henan,
    'cityName_hebei': cityName_hebei,
    'cityName_shanxi': cityName_shanxi,
    'cityName_anhui': cityName_anhui,
    'cityName_fujian': cityName_fujian,
    'cityName_zhejiang': cityName_zhejiang,
    'cityName_jiangsu': cityName_jiangsu,
    'cityName_jilin': cityName_jilin,
    'cityName_liaoning': cityName_liaoning,
    'cityName_xinjiang': cityName_xinjiang,
    'cityName_guangxi': cityName_guangxi,
    'cityName_ningxia': cityName_ningxia,
    'cityName_neimenggu': cityName_neimenggu,
    'cityName_xizang': cityName_xizang
}

function provinceNameChineseToEng (provinceNameChinese) {
  var provinceNameEng
  $.each(provinceNameArr, function (item) {
    if (provinceNameArr[item].chineseName === provinceNameChinese) {
      provinceNameEng = provinceNameArr[item].EnglishName
      return false
    }
  })
  return provinceNameEng
}
function cityNameChineseToEng (cityNameChinese, nowProvinceOrCityName) {
  var cityNameArr = cityNameData[`cityName_${nowProvinceOrCityName}`]
  return cityNameArr[cityNameChinese]
}

export {
  cityNameData,
  provinceNameChineseToEng,
  cityNameChineseToEng
}
