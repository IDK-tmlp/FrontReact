import { UserData } from "../interfaces/userDataInterface";
import Data from "../services/Data";

export const loadData = async () : Promise<UserData> => {
    const mc = Data.getInstance();
    return mc.loadUserData();
}
