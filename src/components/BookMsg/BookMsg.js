import React, { useState } from 'react';
import classes from './BookMsg.module.css'
import Text from './Text/Text'

// 获取当前时间
const getDate = ()=>{
    const data = new Date()
    const hour = data.getHours()
    const minute = data.getMinutes()
    const second = data.getSeconds()
    return hour+':'+ minute+':'+second
}


const BookMsg = (props) => {
    // 当前时间
    const [time,setTime] = useState(getDate())
    // 当前页码
    const [page,setPage] = useState(null)
    const [nowPage,setNowPage] = useState(null)

    setInterval(()=>{
        setTime(getDate())
    },1000)

    const getPages = (Page,NowPage)=>{
        setPage(Page)
        setNowPage(NowPage)
    }


    return (
        <div className={ classes.BookMsg }>
            {/*头部*/}
            <header className={ classes.Title }>
                <h3>{ props.bookMsg.cname }</h3>
            </header>

            {/*文本*/}
            <div>
                <Text bookDesc={ props.bookMsg.content }  pages={getPages} />
            </div>

            {/*底部*/}
            <footer className={classes.Bottom}>
                <p > { props.bookMsg.name }</p>
                <div>
                    <span className={classes.Page}> {nowPage}/{page} </span>
                    <span> { time } </span>
                </div>
            </footer>

        </div>
    );
};

export default BookMsg;