import React, { useEffect, useRef, useState } from 'react';
import classes from './Text.module.css'
const Text = (props) => {
    const pRef = useRef()
    // 移动距离
    const [moveNum,setMoveNum] = useState(0)

    const [page,setPage] = useState(null)
    const [nowPage,setNowPage] = useState(1)

    useEffect(()=>{
        const scrollWidth = pRef.current.scrollWidth
        const offsetWidth = pRef.current.offsetWidth


        setPage(Math.floor(scrollWidth / offsetWidth)) // 总页码
        setNowPage(Math.abs(moveNum / 390) + 1) // 当前页码

        props.pages(page,nowPage) // 添加到页面


    },[moveNum,page,nowPage])

    // 点击屏幕
    const moveScreen = (left) => {
        if( left && nowPage === 1 ) return alert('已经是第一页')
        if( !left && nowPage === page ) return alert('已经是最后一页')

        left ? setMoveNum(prevState => prevState += 390) : setMoveNum(prevState => prevState -= 390)
    }

    return (
        <div className={classes.Text}>
            {/*分栏盒子*/}
            <div className={classes.DescBox} ref={pRef} >
                {/*文本内容*/}
                <p className={classes.Desc} style={{transform:`translate(${ moveNum }rem)`}}>{ props.bookDesc }</p>
            </div>

            {/*点击盒子*/}
            <div onClick={ ()=>moveScreen(true) } className={classes.LeftBox}> </div>
            <div onClick={ ()=>moveScreen(false) } className={classes.RightBox}> </div>

        </div>
    );
};

export default Text;