import formatDate from "../date/formatDate.mjs";

export const DaysWeek = () => {
    return CreateDaysWeek()
}

function CreateDaysWeek() {
    const daysWeek = [' ', 'seg', "ter", 'qua', 'qui', 'sex', 'sab', 'dom']
    const dateFormat = formatDate(Date.now());
    const daysSplit = dateFormat.split(" ");
    let found = daysWeek.findIndex(e => e.includes(daysSplit[0]));

    const finalArray = [];

    for (let i = 1; i < 8; i++) {
        if (i < found) {
            let dataTemp = new Date(Date.now());
            dataTemp.setDate(new Date().getDate() - (found - i))
            finalArray.push(formatDate(dataTemp));
        } else if (i > found) {
            let dataTemp = new Date(Date.now());
            dataTemp.setDate(new Date().getDate() + (i - found))
            finalArray.push(formatDate(dataTemp));
        } else {
            finalArray.push(formatDate(Date.now()));
        }
    }
    return finalArray;
}