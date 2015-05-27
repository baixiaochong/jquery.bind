# jquery.bind 通过绑定一些自定义属性，自动绑定一个js事件，省去写js的烦恼。

### 点击切换
第一次点击会加类名bind-click，第二次点击删除类名bind-click

1.添加自定义属性bind-click
2.添加css要样式

```html
<div class="switch">
<span bind-click class="bind-click"></span>
<span bind-click></span>
</div>
```

```css
.switch span {
    display: block;
    width: 115px;
    height: 28px;
    background: url(onoff.png);
    background-repeat: no-repeat;
    background-position: 0 -40px;
    cursor: pointer;
}
.switch span.bind-click {
    background-position: 0 0;
}
```



### 返回顶部
1.添加自定义属性bind-gotop
2.添加css要样式

```html
<div bind-gotop class="gotop">GOTOP</div>
```
```css
.gotop {
    width: 80px;
    height: 80px;
    background: #222222;
    position: fixed;
    right: 30px;
    bottom: 30px;
    color: #ffffff;
    text-align: center;
    line-height: 80px;
    cursor: pointer;
}
```

### 杂项
1. 希望得到大家的支持，给个star吧
2. QQ: 9169775 大家可以一起交流
3. QQ群：8685914 





