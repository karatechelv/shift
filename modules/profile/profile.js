import {getProfile} from "./profile.service.js";
import {renderProfile} from "./profile.view.js";
import {createStatistics} from "./profile.statistics.js";

export function openProfile(staff){

    const profile=getProfile(staff.id);

    const statistics=createStatistics(staff);

    document

    .getElementById("profileView")

    .innerHTML=

    renderProfile(

        profile,

        statistics

    );

}
