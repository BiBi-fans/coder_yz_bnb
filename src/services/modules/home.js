import yzRequest from "..";

export function getHomeGoodPriceData() {
    return yzRequest.get({ url: '/home/goodprice' })
}

export function getHomeHighScoreData(){
    return yzRequest.get({url:'/home/highscore'})
}

export function getHomeDiscountData(){
    return yzRequest.get({url:'/home/discount'})
}

export function getHomeLongforData(){
    return yzRequest.get({url:'/home/longfor'})
}

export function getHomePlusData(){
    return yzRequest.get({url:'/home/plus'})
}

export function getHomeHotRecommendData(){
    return yzRequest.get({url:'/home/hotrecommenddest'})
}