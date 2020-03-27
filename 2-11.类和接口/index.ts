interface IRadio {
    switchRadio(open: boolean): void
    // switchRadio(open: boolean): number
}
interface IBattery {
    CheckBatteryStatus()
}
// 接口继承接口
interface IRadioWithBattery extends IRadio{
    CheckBatteryStatus()
}

class Car implements IRadio{
    switchRadio() {
    }
}
class Cellphone implements IRadioWithBattery{
    switchRadio() {
    }
    CheckBatteryStatus() {
    }
}
