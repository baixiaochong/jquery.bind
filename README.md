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

### 五、gotop 返回顶部
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

### 五、hover 
移上去加类名
1.加自定义属性："bind-hover"
2.添加样式
```html
<div class="box">
    <p class="floor" bind-hover>1</p>
    <p class="floor" bind-hover>2</p>
    <p class="floor" bind-hover>3</p>
    <p class="floor" bind-hover>4</p>
    <p class="floor" bind-hover>5</p>
    <p class="floor" bind-hover>6</p>
    <p class="floor" bind-hover>7</p>
    <p class="floor" bind-hover>8</p>
    <p class="floor" bind-hover>9</p>
    <p class="floor" bind-hover>0</p>
</div>
```
```css
p.bind-hover{ border: 1px solid red;}
```

### 六、imglazy 
图片延时加载

1.img加自定属性 bind-imglazy
2.设置src地址为空白占位
3.bind-imglazy里面设置真正的图片地址

```html
<img 
    src="http://www.lamahui.com/static/2.0/img/public/load11.png"
    bind-imglazy="http://img01.lamahui.com/static/images/2014/12/16/c3073fd3a582dfc51ced57a93a9d5bb6.jpg" 
    width="312" height="204" alt=""/>
```

对于js追加载图片之后，需要执行一次$.bindImglazy();
```js
$(function(){
    $('#div')
        .append('<img src="http://www.lamahui.com/static/2.0/img/public/load11.png" bind-imglazy="http://img04.lamahui.com/uploads/2015/03/07/34be41c0797df13c70d3b76d6230bd874964.jpg" width="247" height="341" alt="9.9包邮" />');
    $.bindImglazy();
});
```


### 七、pop 弹出层 
1.遮罩层绑定自定义属性 bind-pop-mask，一个页面一个即可，也可以不要。
2.弹出的div绑定自定义属性 bind-pop-box
3.关闭按钮绑定自定义属性 bind-pop-close
3.bind-pop-box和bind-pop-close设置相同的值，标记为一组

```html
<div class="mask hide" bind-pop-mask></div>

<div class="btn" bind-pop-btn="1">点击弹窗1</div>
<div class="box hide" bind-pop-box="1">111
    <i class="abs" bind-pop-close="1">X</i>
</div>

<div class="btn" bind-pop-btn="2">点击弹窗2</div>
<div class="box hide" bind-pop-box="2">222
    <i class="abs" bind-pop-close="2">X</i>
</div>
```
```css
* { margin: 0; padding: 0 }
.zoom { overflow: hidden; zoom: 1 }
.hide { display: none }
.show { display: block }
.rel { position: relative }
.abs { position: absolute }
.btn { background-color: #000; padding: 10px; width: 100px; color: #fff; font-weight: bold; text-align: center; cursor: pointer; border-radius: 10px; margin: 30px }
.mask { width: 100%; height: 100%; background-color: #000; opacity: 0.5; filter: alpha(opacity=50); position: fixed; left: 0; top: 0; z-index: 1 }
.box { width: 500px; height: 300px; background-color: pink; position: fixed; left: 50%; top: 50%; margin: -150px 0 0 -250px; z-index: 2 }
.box i { display: block; width: 30px; height: 30px; background-color: #000; border-radius: 15px; color: #fff; font-weight: bold; line-height: 30px; text-align: center; font-style: inherit; cursor: pointer; right: 0; top: 0 }
```

### 八、tab 切换
1.每一组的最外层div绑定bind-tab, 值可以为click或是hover
2.点击的按钮上绑定bind-tab-tit
3.内容div绑定bind-tab-nav

```html
<div class="tab" bind-tab="click">
      <div class="tab-tit zoom">
        <a href="#" bind-tab-tit  class="bind-tab-tit-active">体育</a>
        <a href="#" bind-tab-tit >娱乐</a>
        <a href="#" bind-tab-tit >财经</a>
      </div>
      <div bind-tab-nav class="tab-nav">请点击切换</div>
      <div bind-tab-nav class="tab-nav hide">这是第二块内容</div>
      <div bind-tab-nav class="tab-nav hide">这是第三块内容</div>
  </div>
```
```css
.zoom { overflow: hidden; zoom: 1; }
.hide { display: none; }
.show { display: block; }
.tab { border: 1px solid #cccccc; width: 500px; height: 200px; margin: auto auto 20px auto; font-size: 14px; }
.tab-tit { border-bottom: 1px solid #cccccc; background: #efefef; }
.tab-tit a { display: block; width: 100px; height: 28px; line-height: 28px; float: left; text-align: center; text-decoration: none; border-right: 1px solid #cccccc; color: #222222; }
.tab-tit a.bind-hover { background: #dddddd; }
.tab-tit a.bind-tab-tit-active { background: #bbbbbb; color: #ffffff; }
.tab-nav { padding: 10px; }
```

### 杂项
1. 希望得到大家的支持，给个star吧
2. QQ: 9169775 大家可以一起交流
3. QQ群：8685914 





