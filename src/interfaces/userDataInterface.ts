export interface UserData {
    username : string,
    money:number,
    clicIncome : number,
    lastConnection : string,
    userupgrades : Upgrade[],
    userworkers : UserWorker[],
}

export interface Upgrade{
    id : number,
    upgradeName : string,
    upgradeDesc : string,
    price : number,
    affectedWorkers : [],
}

export interface UserWorker{
    id : number,
    idUser:number,
    idWorker: number,
    calculatedIncome : number,
    quantity : number
}