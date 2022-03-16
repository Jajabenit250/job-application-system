import { combineReducers } from "redux";
import applicantList from "./applicantList";
import uplaodCv from "./uplaodCv";
import vacancy from "./vacancy";

export default combineReducers({
    applicantList,
    uplaodCv,
    vacancy
});
