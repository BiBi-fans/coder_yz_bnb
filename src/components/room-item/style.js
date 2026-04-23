import styled from "styled-components";



export const ItemWrapper = styled.div`
    box-sizing: border-box;
    padding: 8px;
    margin: 8px 0;

    .inner {
        width: 100%;
        height: 100%;
        cursor: pointer;

        .cover {
            position: relative;
            box-sizing: border-box;
            padding: 66.66% 8px 0;
            border-radius: 3px;
            overflow: hidden;

            >img {
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        .slider {
            position: relative;
            cursor: pointer;

            &:hover {
                .control {
                    display: flex;
                }
            }

            .control {
                position: absolute;
                z-index: 1;
                left: 0;
                right: 0;
                top: 0;
                display: none;
                justify-content: space-between;
                bottom: 0;
                color: #fff;
                /* background-color: skyblue; */

                .btn {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 30%;
                    height: 100%;
                    background: linear-gradient(to left, transparent 0%, rgba(0, 0, 0, 0.25) 100%);

                    &.right {
                        background: linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.25) 100%);
                    }
                }
            }

            .indicator {
                position: absolute;
                z-index: 9;
                width: 30%;
                left: 0;
                right: 0;
                bottom: 10px;
                margin: 0 auto;

                .item {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 20%;

                    .dot {
                        width: 6px;
                        height: 6px;
                        background-color: #fff;
                        border-radius: 50%;

                        &.active {
                            width: 8px;
                            height: 8px;
                            background-color: red;
                        }
                    }
                }
            }
        }

        .desc {
            margin: 10px 0 5px;
            font-size: 12px;
            font-weight: 700;
            color: #39576a;
        }

        .price {
            margin: 8px 0;
        }

        .name {
            font-size: 16px;
            font-weight: 700;

            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;

            .noSelect {
                color: transparent;
                /* 禁止用户选中文本 */
                -webkit-user-select: none;
                /* Chrome, Safari, Opera */
                -moz-user-select: none;
                /* Firefox */
                -ms-user-select: none;
                /* Internet Explorer/Edge */
                user-select: none;
                /* 标准语法 */

                /* 移动端 Safari 额外设置：禁止长按弹出菜单 */
                -webkit-touch-callout: none;
            }
        }
    }
`