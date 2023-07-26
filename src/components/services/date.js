import { DateTime } from 'luxon';

const service = {};



service.readableDateRange = function(date1, date2) {

	if (!date1) {
        return;
    }

    if(!date2) {
    	return service.readableDate(date1);
    }

    // Create the dates
    date1 = DateTime.fromJSDate(new Date(date1));
    date2 = DateTime.fromJSDate(new Date(date2));

    const date1Year = date1.toFormat('yyyy');
    const date1Month = date1.toFormat('LLL yyyy');
    const date1Week = date1.toFormat('WW yyyy');
    const date1Day = date1.toFormat('d LLL yyyy');


    const date2Year = date2.toFormat('yyyy');
    const date2Month = date2.toFormat('LLL yyyy');
    const date2Week = date2.toFormat('WW yyyy');
    const date2Day = date2.toFormat('d LLL yyyy');


    // If it's the same day
    if (date1Day === date2Day) {
    	// 9am - 12pm today
        return `${date1.toFormat('h:mma')} - ${service.readableDate(date2)}`;
    }


    // If it's the same week
    if (date1Week === date2Week) {
    	// 9am tomorrow - 6pm thursday
        return `${service.readableDate(date1)} - ${service.readableDate(date2)}`;
    }


    // If it's the same Month
    if (date1Month === date2Month) {
    	// 1 - 22 May
        return `${date1.toFormat('d')} - ${date2.toFormat('d LLL')}`;
    }

    // If it's the same Year
    if (date1Year === date2Year) {
    	// Monday 12 June - Thursday 12 July
        return `${service.readableDate(date1)} - ${service.readableDate(date2)}`;
    }

    return `${service.readableDate(date1)} - ${service.readableDate(date2)}`;

}

service.readableDate = function(date) {

    if (!date) {
        return;
    }

    const now = new Date();
    const nowDate = DateTime.fromJSDate(now);
    const currentYear = nowDate.toFormat('yyyy');
    const currentMonth = nowDate.toFormat('LLL yyyy');
    const currentWeek = nowDate.toFormat('WW yyyy');
    const currentDay = nowDate.toFormat('d LLL yyyy');

    // Get the pieces of the date we are checking
    date = new Date(date);
    const checkDate = DateTime.fromJSDate(date);
    const checkYear = checkDate.toFormat('yyyy');
    const checkMonth = checkDate.toFormat('LLL yyyy');
    const checkWeek = checkDate.toFormat('WW yyyy');
    const checkDay = checkDate.toFormat('d LLL yyyy');


    // If it's the same day
    if (checkDay === currentDay) {
        return `${checkDate.toFormat('h:mma')} today`;
    }

    // If it's the same week
    if (checkWeek === currentWeek) {
        if (date > now) {
            const dateDayInt = parseInt(nowDate.toFormat('d'));
            const checkDayInt = parseInt(checkDate.toFormat('d'));

            if (checkDayInt - dateDayInt === 1) {
                return `${checkDate.toFormat('h:mma')} tomorrow`;
            }

            return `${checkDate.toFormat('h:mma')} ${checkDate.toFormat('cccc')}`;

        } else {
            // In the past this week
            return `${checkDate.toRelativeCalendar()}`;
        }
    }

    // If it's the same month
    if (checkMonth === currentMonth) {
        return `${checkDate.toFormat('h:mma')} ${checkDate.toFormat('d LLL')}`;
    }

    if (checkYear === currentYear) {
        return checkDate.toFormat('cccc d LLL');
    } else {
        return checkDate.toFormat('d LLL yyyy');
    }


}



export default service;