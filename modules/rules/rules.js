import {getRule} from "./rule.service.js";
import {createRulePage} from "./rule.view.js";

export function renderRules(staffId){

    const page=document.getElementById("rulesView");

    page.innerHTML=createRulePage(

        getRule(staffId)

    );

}
