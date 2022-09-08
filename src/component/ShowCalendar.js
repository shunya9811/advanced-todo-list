import moment from 'moment'

const config = {
    show: 3,
}

function showCalendar(){
    const year = moment().year()
    const month = moment().month()+1


    console.log(endDate)
    const endDate2 = month === 12 ? moment([year+1, 1, 1]).subtract(1, 'days') : moment([year, month+1, 1]).subtract(1, 'days')
    console.log(endDate2) 

    console.log(startDate2.format('MD'))
    console.log(startDate2.format('YYYYMMDD'))
    console.log(startDate2.format('D'))

}