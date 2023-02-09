import moment from 'moment'
import Box from '@mui/material/Box';

import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react';



function Calendar(props){
    
    const startDate = moment([props.year, props.month, 1]) //月の最初の日付を取得
    const endDate = Number(props.month) === 11 ? moment([props.year, 11, 31]) : moment([props.year, props.month+1, 1]).subtract(1, 'days') //月の最後の日付を取得
    const lastMonthEndDate = startDate.clone().subtract(1, 'days') //前の月の最後の日付を取得
    const nextMonthStartDate = endDate.clone().add(1, 'days')
    
    const [calendar, setCalender] = useState([]);

   
    useEffect(() => {
        const getHolidays = async () => {
            await fetch("https://holidays-jp.github.io/api/v1/date.json")
                .then(res => res.json())
                .then(holidays => getCalender(holidays));
        }

        getHolidays();
        
    }, [])
    
    const getCalender = (holidays) => {
        // 表示している月の一つ前の月の枠を追加
        const lastMonthCount = Number(startDate.format('d'))
        let tmpArray = [];
        for (let i = 0; i < lastMonthCount; i++){
            tmpArray.unshift(
                <Box 
                    sx={{ aspectRatio: '1 / 1', border: '1px solid #000', fontSize: "30px", color: "#828583"}} 
                    key={lastMonthEndDate.format('MD')}
                >
                    {lastMonthEndDate.format('D')}
                </Box>
            )
            lastMonthEndDate.subtract(1, 'days')
        }
    
        // 表示月の枠を追加
        while(startDate.unix() <= endDate.unix()) {
            if (startDate.format('YYYY-MM-DD') in holidays){
                tmpArray.push(
                    <NavLink 
                        to={`/${startDate.format('YYYYMMDD')}`}
                        style={{ textDecoration: 'none'}}
                        key={startDate.format('MD')}
                    >
                        <Box 
                            sx={{ aspectRatio: '1 / 1',  border: '1px solid #000', fontSize: "30px", color: '#f00'}} 
                            id={startDate.format('YYYYMMDD')}
                        >
                            {startDate.format('D')}
                            <p style={{fontSize: "10px"}}>{holidays[startDate.format('YYYY-MM-DD')]}</p>
                        </Box>
                    </NavLink>
                )
            } else {
                tmpArray.push(
                    <NavLink 
                        to={`/${startDate.format('YYYYMMDD')}`}
                        style={{ textDecoration: 'none', color: '#000'}}
                        key={startDate.format('MD')}
                    >
                        <Box 
                            sx={{ aspectRatio: '1 / 1',  border: '1px solid #000', fontSize: "30px", }} 
                            id={startDate.format('YYYYMMDD')}
                        >
                            {startDate.format('D')}
                        </Box>
                    </NavLink>
                )
            }
            startDate.add(1, 'days');
        }
        
        // 表示月の次の月の枠を追加
        const nextMonthCount = 6 - Number(endDate.format('d'))
        for (let i = 0; i < nextMonthCount; i++){
            tmpArray.push(
                <Box sx={{ aspectRatio: '1 / 1', border: '1px solid #000', fontSize: "30px", color: "#828583", backgroundColor: ""}} 
                    key={nextMonthStartDate.format('MD')}
                >
                    {nextMonthStartDate.format('D')}
                </Box>
            )
            nextMonthStartDate.add(1, 'days')
        }

        console.log(tmpArray);
        setCalender(tmpArray);
    }

    
    return (
        <>
            <Box sx={{
                width: '100%',
                textAlign: 'center',
                fontSize: '50px',
                fontWeight: '500',
                margin: 'auto',
            }}>{endDate.format('YYYY年 MM月 ')}{endDate.format('MMMM').slice(0,3)}</Box>
            <Box sx={{
                width: '60%',
                display: 'grid',
                gridAutoFlow: 'row',
                gridTemplateColumns: 'repeat(7, 1fr)',
                gap: 0,
                border: '1px solid #000',
                margin: 'auto',
            }}>
                <Box sx={{ textAlign: 'center', color: '#f00', border: '1px solid #000', }}>日</Box>
                <Box sx={{ textAlign: 'center', border: '1px solid #000', }}>月</Box>
                <Box sx={{ textAlign: 'center', border: '1px solid #000',}}>火</Box>
                <Box sx={{ textAlign: 'center', border: '1px solid #000',}}>水</Box>
                <Box sx={{ textAlign: 'center', border: '1px solid #000',}}>木</Box>
                <Box sx={{ textAlign: 'center', border: '1px solid #000',}}>金</Box>
                <Box sx={{ textAlign: 'center', color: '#00f' , border: '1px solid #000',}}>土</Box>
                {calendar}
            </Box>
            
        </>
    )   
}

export default Calendar;