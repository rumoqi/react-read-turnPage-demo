import React, { useRef, useState } from 'react';
import classes from './Text.module.css'
const Text = (props) => {
    const pRef = useRef()
    const [moveNum,setMoveNum] = useState(0)

    // 点击屏幕
    const moveScreen = (left) => {
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