import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export const useMainStore = create(
    devtools(
        immer(
            (set, get, store) => (
                {
                    // state
                    headerConfig: {
                        isFixed: false,
                        isHome: false
                    },

                    changeHeaderConfig: (headerConfig) => set({ headerConfig })
                }
            )
        ),
        {
            name: 'main',
            enabled: true
        }
    )
);


