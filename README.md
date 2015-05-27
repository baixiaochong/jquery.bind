### 功能介绍：
jquery.bind 通过绑定一些自定义属性，自动绑定一个js事件，省去写js的烦恼。

### 一、点击切换
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


### 二、datalazy 
html懒加载, 滚动到屏幕加载。

1.在div上绑定自定义属性bind-dataLazy

2.内容写在div>textarea里面
```html
<div class="box" bind-dataLazy>
    <textarea>
        <div class="box4"><img src="http://pic27.nipic.com/20130325/9290407_135751671186_2.jpg" width="100%" /></div>
    </textarea>
</div>
```

### 三、fixed
到相应位置加类名
1.在元素上绑定自定义属性bind-fix
2.bind-fix设置值，可以设置数字，也可以为id
3.bind-fix="0" 或 bind-fix="#body"

```html
<div class="box" bind-fix='300'></div>
```

```css
.bind-fix{
    position: fixed;
    top: 0;
    _position:absolute;
    _bottom:auto;
    _top:expression(eval(document.documentElement.scrollTop));
}
```

### 四、floor 楼层跳转
1.按钮绑自定义属性bind-floor

2.设置值，对应div的id

3.bind-floor="#floor1,#tit1"

```html
<div class="menu">
  <a href="javascript:;" bind-floor="#floor1,#tit1">楼层1</a>
  <a href="javascript:;" bind-floor="#floor2,#tit2">楼层2</a>
  <a href="javascript:;" bind-floor="#floor3,#tit3">楼层3</a>
  <a href="javascript:;" bind-floor="#floor4,#tit4">楼层4</a>
</div>
<div class="tit" id="tit1">标题1</div>
<div id="floor1" class="floor">
  楼层1
</div>
<div class="tit" id="tit2">标题2</div>
<div id="floor2" class="floor">
  楼层2
</div>
<div class="tit" id="tit3">标题3</div>
<div id="floor3" class="floor">
  楼层3
</div>
<div class="tit" id="tit4">标题4</div>
<div id="floor4" class="floor">
  楼层4
</div>
```

```css
.floor{
      border: 1px solid #ccc;
      height: 500px;
    }

    .menu{
      position: fixed;
      left: 10%;
      top: 20%;
      width: 100px;
      height: 120px;
    }

    .menu a{
      display: block;
      height: 30px;
      line-height: 30px;
      background: #eee;
      text-decoration: none;
      padding: 0 0 0 5px;
    }

    a.bind-floor-curr{
      background: #222;
      color: #ffffff;
    }
    .tit{
      height: 50px;
      background: #eeeeee;
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





