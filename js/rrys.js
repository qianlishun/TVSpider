/*
* @File     : tiantian.js
* @Author   : jade
* @Date     : 2024/04/15 10:48
* @Email    : jadehh@1ive.com
* @Software : Samples
* @Desc     : 人人影视
*/
import {Spider} from "./spider.js";
import {_} from "../lib/cat.js";
import * as Utils from "../lib/utils.js";
import {VodDetail, VodShort} from "../lib/vod.js";

class RRYSSpider extends Spider {
    constructor() {
        super();
        this.siteUrl = "https://www.rttks.com"
    }
    async request(reqUrl) {
        let content = await this.fetch(reqUrl, null, this.getHeader());
        return content;
    }

    getHeader() {
        return {"User-Agent": Utils.CHROME, "Referer": this.siteUrl + "/","Connection":"keep-alive"};
    }

    getName() {
        return "┃人人影视┃"
    }

    getAppName() {
        return "人人影视"
    }

    getJSName() {
        return "rrys"
    }

    getType() {
        return 3
    }


    async init(cfg) {
        await super.init(cfg);
        this.danmuStaus = true
    }

    async home(filter) {
        let classes = [{"type_id":"dianying","type_name":"电影"},{"type_id":"dianshiju","type_name":"追剧"},{"type_id":"zongyi","type_name":"综艺"},{"type_id":"dongman","type_name":"动漫"},{"type_id":"jilupian","type_name":"纪录片"}];
        let filterObj = {
            "dianying":[{"key":"cateId","name":"类型",'init':'',"value":[{"n":"全部","v":""},{"n":"剧情","v":"jqp"},{"n":"喜剧","v":"xjp"},{"n":"动作","v":"dzp"},{"n":"爱情","v":"aqp"},{"n":"科幻","v":"khp"},{"n":"恐怖","v":"kbp"},{"n":"战争","v":"zzp"}]},{"key":"area","name":"地区",'init':'',"value":[{"n":"全部","v":""},{"n":"中国大陆","v":"/area/大陆"},{"n":"中国香港","v":"/area/香港"},{"n":"中国台湾","v":"/area/台湾"},{"n":"美国","v":"/area/美国"},{"n":"韩国","v":"/area/韩国"},{"n":"日本","v":"/area/日本"},{"n":"泰国","v":"/area/泰国"},{"n":"新加坡","v":"/area/新加坡"},{"n":"马来西亚","v":"/area/马来西亚"},{"n":"印度","v":"/area/印度"},{"n":"英国","v":"/area/英国"},{"n":"法国","v":"/area/法国"},{"n":"加拿大","v":"/area/加拿大"},{"n":"西班牙","v":"/area/西班牙"},{"n":"俄罗斯","v":"/area/俄罗斯"},{"n":"澳大利亚","v":"/area/澳大利亚"}]},{"key":"year","name":"时间",'init':'',"value":[{"n":"全部","v":""},{"n":"2024","v":"/year/2024"},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2011"},{"n":"2010","v":"/year/2010"},{"n":"2009","v":"/year/2009"},{"n":"2008","v":"/year/2008"},{"n":"2007","v":"/year/2007"},{"n":"2006","v":"/year/2006"},{"n":"2005","v":"/year/2005"}]},{"key":"by","name":"排序",'init':'',"value":[{"n":"全部","v":""},{"n":"时间","v":"/by/time"},{"n":"人气","v":"/by/hits"},{"n":"评分","v":"/by/score"}]}],
            "dianshiju":[{"key":"cateId","name":"类型",'init':'',"value":[{"n":"全部","v":""},{"n":"国产剧","v":"gcj"},{"n":"港台剧","v":"gtj"},{"n":"日韩剧","v":"rhj"},{"n":"海外剧","v":"hwj"}]},{"key":"area","name":"地区",'init':'',"value":[{"n":"全部","v":""},{"n":"中国大陆","v":"/area/大陆"},{"n":"中国香港","v":"/area/香港"},{"n":"中国台湾","v":"/area/台湾"},{"n":"美国","v":"/area/美国"},{"n":"韩国","v":"/area/韩国"},{"n":"日本","v":"/area/日本"},{"n":"泰国","v":"/area/泰国"},{"n":"新加坡","v":"/area/新加坡"},{"n":"马来西亚","v":"/area/马来西亚"},{"n":"印度","v":"/area/印度"},{"n":"英国","v":"/area/英国"},{"n":"法国","v":"/area/法国"},{"n":"加拿大","v":"/area/加拿大"},{"n":"西班牙","v":"/area/西班牙"},{"n":"俄罗斯","v":"/area/俄罗斯"},{"n":"澳大利亚","v":"/area/澳大利亚"}]},{"key":"year","name":"时间",'init':'',"value":[{"n":"全部","v":""},{"n":"2024","v":"/year/2024"},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2011"},{"n":"2010","v":"/year/2010"},{"n":"2009","v":"/year/2009"},{"n":"2008","v":"/year/2008"},{"n":"2007","v":"/year/2007"},{"n":"2006","v":"/year/2006"},{"n":"2005","v":"/year/2005"}]},{"key":"by","name":"排序",'init':'',"value":[{"n":"全部","v":""},{"n":"时间","v":"/by/time"},{"n":"人气","v":"/by/hits"},{"n":"评分","v":"/by/score"}]}],
            "dongman":[{"key":"area","name":"地区",'init':'',"value":[{"n":"全部","v":""},{"n":"中国大陆","v":"/area/大陆"},{"n":"中国香港","v":"/area/香港"},{"n":"中国台湾","v":"/area/台湾"},{"n":"美国","v":"/area/美国"},{"n":"韩国","v":"/area/韩国"},{"n":"日本","v":"/area/日本"},{"n":"泰国","v":"/area/泰国"},{"n":"新加坡","v":"/area/新加坡"},{"n":"马来西亚","v":"/area/马来西亚"},{"n":"印度","v":"/area/印度"},{"n":"英国","v":"/area/英国"},{"n":"法国","v":"/area/法国"},{"n":"加拿大","v":"/area/加拿大"},{"n":"西班牙","v":"/area/西班牙"},{"n":"俄罗斯","v":"/area/俄罗斯"},{"n":"澳大利亚","v":"/area/澳大利亚"}]},{"key":"year","name":"时间",'init':'',"value":[{"n":"全部","v":""},{"n":"2024","v":"/year/2024"},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2011"},{"n":"2010","v":"/year/2010"},{"n":"2009","v":"/year/2009"},{"n":"2008","v":"/year/2008"},{"n":"2007","v":"/year/2007"},{"n":"2006","v":"/year/2006"},{"n":"2005","v":"/year/2005"}]},{"key":"by","name":"排序",'init':'',"value":[{"n":"全部","v":""},{"n":"时间","v":"/by/time"},{"n":"人气","v":"/by/hits"},{"n":"评分","v":"/by/score"}]}],
            "zongyi":[{"key":"area","name":"地区",'init':'',"value":[{"n":"全部","v":""},{"n":"中国大陆","v":"/area/大陆"},{"n":"中国香港","v":"/area/香港"},{"n":"中国台湾","v":"/area/台湾"},{"n":"美国","v":"/area/美国"},{"n":"韩国","v":"/area/韩国"},{"n":"日本","v":"/area/日本"},{"n":"泰国","v":"/area/泰国"},{"n":"新加坡","v":"/area/新加坡"},{"n":"马来西亚","v":"/area/马来西亚"},{"n":"印度","v":"/area/印度"},{"n":"英国","v":"/area/英国"},{"n":"法国","v":"/area/法国"},{"n":"加拿大","v":"/area/加拿大"},{"n":"西班牙","v":"/area/西班牙"},{"n":"俄罗斯","v":"/area/俄罗斯"},{"n":"澳大利亚","v":"/area/澳大利亚"}]},{"key":"year","name":"时间",'init':'',"value":[{"n":"全部","v":""},{"n":"2024","v":"/year/2024"},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2011"},{"n":"2010","v":"/year/2010"},{"n":"2009","v":"/year/2009"},{"n":"2008","v":"/year/2008"},{"n":"2007","v":"/year/2007"},{"n":"2006","v":"/year/2006"},{"n":"2005","v":"/year/2005"}]},{"key":"by","name":"排序",'init':'',"value":[{"n":"全部","v":""},{"n":"时间","v":"/by/time"},{"n":"人气","v":"/by/hits"},{"n":"评分","v":"/by/score"}]}],
             "jilupian":[{"key":"area","name":"地区",'init':'',"value":[{"n":"全部","v":""},{"n":"中国大陆","v":"/area/大陆"},{"n":"中国香港","v":"/area/香港"},{"n":"中国台湾","v":"/area/台湾"},{"n":"美国","v":"/area/美国"},{"n":"韩国","v":"/area/韩国"},{"n":"日本","v":"/area/日本"},{"n":"泰国","v":"/area/泰国"},{"n":"新加坡","v":"/area/新加坡"},{"n":"马来西亚","v":"/area/马来西亚"},{"n":"印度","v":"/area/印度"},{"n":"英国","v":"/area/英国"},{"n":"法国","v":"/area/法国"},{"n":"加拿大","v":"/area/加拿大"},{"n":"西班牙","v":"/area/西班牙"},{"n":"俄罗斯","v":"/area/俄罗斯"},{"n":"澳大利亚","v":"/area/澳大利亚"}]},{"key":"year","name":"时间",'init':'',"value":[{"n":"全部","v":""},{"n":"2024","v":"/year/2024"},{"n":"2023","v":"/year/2023"},{"n":"2022","v":"/year/2022"},{"n":"2021","v":"/year/2021"},{"n":"2020","v":"/year/2020"},{"n":"2019","v":"/year/2019"},{"n":"2018","v":"/year/2018"},{"n":"2017","v":"/year/2017"},{"n":"2016","v":"/year/2016"},{"n":"2015","v":"/year/2015"},{"n":"2014","v":"/year/2014"},{"n":"2013","v":"/year/2013"},{"n":"2012","v":"/year/2012"},{"n":"2011","v":"/year/2011"},{"n":"2010","v":"/year/2010"},{"n":"2009","v":"/year/2009"},{"n":"2008","v":"/year/2008"},{"n":"2007","v":"/year/2007"},{"n":"2006","v":"/year/2006"},{"n":"2005","v":"/year/2005"}]},{"key":"by","name":"排序",'init':'',"value":[{"n":"全部","v":""},{"n":"时间","v":"/by/time"},{"n":"人气","v":"/by/hits"},{"n":"评分","v":"/by/score"}]}]
        }
        return JSON.stringify({
            class: classes,
            filters: filterObj,
        });
    }

    async setHomeVod() {
        let response = await this.fetch(this.siteUrl+'/rrdq/dianying.html',null, this.getHeader());
        this.homeVodList = await this.parseVodShortListFromDoc(JSON.parse(response));
    }

    
    async setCategory(tid, pg, filter, extend) {
        if (pg <= 0) pg = 1;
        const link = this.siteUrl + '/rrtop/' + (extend.cateId || tid) + (extend.area || '') + (extend.by || '/by/time') + '/page/' + pg + (extend.year || '') + '.html';//https://www.rttks.com/rrtop/dzp/area/%E7%BE%8E%E5%9B%BD/class//page/2/year/2022.html
        const html = await request(link);
        const $ = load(html);
        const items = $('ul.stui-vodlist li');
        this.vodList = await this.parseVodShortListFromDocByCategory(items);
    }

    async setDetail(id) {
        const html = await request( this.siteUrl + '/rrtv/' + id + '.html');
        const $ = load(html);
        ShiftJISDecoder.VodDetail = await this.parseVodDetailFromDoc($);
    }
    
    async setSearch(wd, quick) {
        let pg = inReq.body.page;
        if (pg <= 0) pg = 1;
        let data = await request(this.siteUrl + '/rrcz' + wd + '/page/' + pg + '.html');//https://www.rttks.com/rrcz%E6%88%91/page/2.html
        const $ = load(data);
        const items = $('ul.stui-vodlist__media li');
        this.vodList = await this.parseVodShortListFromDocByCategory(items);
    }


    async parseVodShortListFromDoc($) {
        let vod_list = []
        let vodElements = $("[class=\"stui-vodlist__thumb\"]").find("a")
        for (const vodElement of vodElements){
            let vodShort = new VodShort();
            vodShort.vod_name = vodElement.attribs.title
            vodShort.vod_id = vodElement.attribs.href
            vodShort.vod_pic = this.jsBase + Utils.base64Encode(vodShort.vod_id)
            vod_list.push(vodShort)
        }
        return vod_list
    }
    async parseVodShortListFromDocByCategory(items) {
        let vod_list = []

        for (const item of items){
            let vodShort = new VodShort();

            const it = $(item).find('a:first')[0];
            const remarks = $($(item).find('span.pic-text text-right')[0]).text().trim();
          
            vodShort.vod_id = it.attribs.href.replace(/.*?\/rrtv\/(.*).html/g, '$1');
            vodShort.vod_name = it.attribs.title;
            vodShort.vod_pic = it.attribs['data-original'];
            vodShort.vod_remarks = remarks || '';

            vod_list.push(vodShort);
        };
        return vod_list
    }

    async parseVodDetailFromDoc($) {
        let vodDetail = new VodDetail();

        let html = $.html()

        vodDetail.type_name = $('.col-md-wide-75 h2').text().trim();
        vodDetail.vod_name = $('.stui-content__detail p:nth-child(4)').text();
        vodDetail.vod_actor = $('.stui-content__detail p:nth-child(2)').text().replace('上映：剧情：', '');
        vodDetail.vod_pic = $('.module-item-pic img:first').attr('data-src');
        vodDetail.vod_remarks = $('.stui-content__detail p:nth-child(5)').text() || '';
        vodDetail.vod_content = $('.detail-content').text().trim();

        let playMap = {};
        const tabs = $('body div.bottom-line h3.title');
        const playlists = $('ul.stui-content__playlist');
        _.each(tabs, (tab, i) => {
            const from = tab.children[0].data;
            let list = playlists[i];
            list = $(list).find('a');
            _.each(list, (it) => {
                let title = it.children[0].data;
                const playUrl = it.attribs.href.replace(/.*?\/rrplay\/(.*).html/g, '$1');
                if (title.length == 0) title = it.children[0].data.trim();
                if (!playMap.hasOwnProperty(from)) {
                    playMap[from] = [];
                }
                playMap[from].push( title + '$' + playUrl);
            });
        });
        vodDetail.vod_play_from = _.keys(playMap).join('$$$');
        const urls = _.values(playMap);
        let vod_play_url = _.map(urls, (urlist) => {
            return urlist.join('#');
        });
        vodDetail.vod_play_url = vod_play_url.join('$$$');
        
        return vodDetail
    }
        
}

let spider = new RRYSSpider()

async function init(cfg) {
    await spider.init(cfg)
}

async function home(filter) {
    return await spider.home(filter)
}

async function homeVod() {
    return await spider.homeVod()
}

async function category(tid, pg, filter, extend) {
    return await spider.category(tid, pg, filter, extend)
}

async function detail(id) {
    return await spider.detail(id)
}

async function play(flag, id, flags) {
    return await spider.play(flag, id, flags)
}

async function search(wd, quick) {
    return await spider.search(wd, quick)
}

export function __jsEvalReturn() {
    return {
        init: init, home: home, homeVod: homeVod, category: category, detail: detail, play: play, search: search,
    };
}

export {spider}