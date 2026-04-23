import yzRequest from "..";


export function getEntireListData(offset, size = 20) {
    return yzRequest.get({
        url: '/entire/list', params: {
            offset,
            size
        }
    })
}