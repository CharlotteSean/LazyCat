import {Dimensions} from 'react-native';


// 根据百分比获取宽度
export function getWidthByPercent (percent) {
    let screenWidth = Dimensions.get('window').width;
    if (Number.isNaN(percent)) {
        throw new Error("setWidthPercent函数:参数必须为Number类型");
    }else {
        return Number.parseFloat(percent * screenWidth / 100);
    }
}

// 根据百分比获取高度
export function getHeightByPercent (percent) {
    let screenHeight = Dimensions.get('window').height;
    if (Number.isNaN(percent)) {
        throw new Error("setWidthPercent函数:参数必须为Number类型");
    }else {
        return Number.parseFloat(percent * screenHeight / 100);
    }
}
