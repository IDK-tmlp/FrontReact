export interface UserData {
    id : number,
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
export interface Worker{
    id : number,
    name : string,
    basePrice : number,
    baseIncome : number,
    idWorkerType : string,
}
export interface UserWorker{
    id : number,
    idUser:string,
    idWorker: string,
    calculatedIncome : number,
    quantity : number
}
export interface UserRelated{
    id : number,
    userworkers : Array<[Worker, number,number]>,
    userupgrades : Upgrade[],
    
}
export interface PatchUserData{
    money? : number,
    clicIncome? : number,
    lastConnection? : string,
}