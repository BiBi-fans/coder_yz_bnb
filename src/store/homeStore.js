import { create } from 'zustand';
import { devtools } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'
import { getHomeGoodPriceData, getHomeHighScoreData, getHomeDiscountData, getHomeLongforData, getHomePlusData, getHomeHotRecommendData } from '@/services';


export const useHomeStore = create()(
    devtools(
        immer(
            (set, get, store) => (
                {
                    // state
                    discountInfo: {},
                    hotRecommendInfo: {},
                    highScoreInfo: {},
                    goodPriceInfo: {},
                    plusInfo: {},
                    longforInfo: {},

                    initHomeDataAction: async () => {
                        try {
                            const [goodPrice, highScore, disCount, longfor, plus, hotRecommend] = await Promise.all([
                                getHomeGoodPriceData(),
                                getHomeHighScoreData(),
                                getHomeDiscountData(),
                                getHomeLongforData(),
                                getHomePlusData(),
                                getHomeHotRecommendData()
                            ]);
                            set((state) => {
                                state.goodPriceInfo = goodPrice;
                                state.highScoreInfo = highScore;
                                state.discountInfo = disCount;
                                state.longforInfo = longfor;
                                state.plusInfo = plus;
                                state.hotRecommendInfo = hotRecommend;
                            });  // 只触发一次渲染 ✅
                        } catch (error) {
                            return Promise.resolve(error);
                        }
                    }
                }
            )
        ),
        {
            name: 'home',
            enabled: true
        }
    )
)