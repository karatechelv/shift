export function validateRule(rule){

    if(rule.minMorning>rule.maxMorning)

        return "حداقل صبح نامعتبر است";

    if(rule.minEvening>rule.maxEvening)

        return "حداقل عصر نامعتبر است";

    if(rule.minNight>rule.maxNight)

        return "حداقل شب نامعتبر است";

    if(rule.minOff<0)

        return "OFF نامعتبر است";

    return null;

}
