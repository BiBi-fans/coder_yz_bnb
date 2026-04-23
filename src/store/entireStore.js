import { getEntireListData } from "@/services/modules/entire";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export const useEntireStore = create()(
    devtools(
        immer(
            (set, get, store) => (
                {
                    // state
                    isLoading: false,
                    currentPage: 0,
                    roomList: [],
                    totalCount: 0,

                    fetchEntireData: async (page = 0) => {
                        try {
                            set({ isLoading: true })
                            const res = await getEntireListData(page * 20)

                            set({
                                isLoading: false,
                                currentPage: page,
                                roomList: res.list,
                                totalCount: res.totalCount,
                            })
                        } catch (error) {
                            Promise.reject(error)
                        }
                    }
                }
            )
        ),
        {
            name: 'entire',
            enabled: true
        }
    )
)

