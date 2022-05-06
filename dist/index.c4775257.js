let html = document.querySelector('#html');
let style = document.querySelector('#style');
let n = 0;
let string = `/*你好，我是一名前端新人
*我叫小方
*接下来我要演示一下我的前端功底
*首先我要准备一个div
现在开始加样式*/
#div1{
    border:1px solid black;
    width:400px;
    height:400px; 
}
/*接下来我把一个div变成一个八卦图
*注意看好了
*首先，把div变成一个圆
**/
#div1{
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border:none;
}
#div1{
    background: rgb(255,255,255);
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 接下来加两个魔丸 */
#div1::before{
    width:200px;
    height:200px;
    border-radius:50%;
    top:0;
    left:50%;
    transform:translateX(-50%);
    background:#fff;
    background: rgb(255,255,255);
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 24%, rgba(0,0,0,1) 24%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width:200px;
    height:200px;
    border-radius:50%;
    bottom:0;
    left:50%;
    transform:translateX(-50%);
    background:#000;
    background: rgb(0,0,0);
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 24%, rgba(255,255,255,1) 24%, rgba(255,255,255,1) 100%);
}
`;
let string2 = ``;
html.innerHTML = string[0];
let step = ()=>{
    setTimeout(()=>{
        if (string[n] === "\n") string2 += "<br>";
        else if (string[n] === " ") string2 += '&nbsp';
        else string2 += string[n];
        n += 1;
        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n);
        html.scrollTo(0, 9999);
        if (n < string.length) step();
    }, 0);
};
step();

//# sourceMappingURL=index.c4775257.js.map
