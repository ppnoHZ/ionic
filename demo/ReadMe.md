## ngCordova的例子


## SMS

github :https://github.com/cordova-sms/cordova-sms-plugin

QA： 报错cannot find symbol: cordova.hasPermission(string)

将android的版本升级到 5.1.1
cordova platform update android or cordova platform update android@5.1.1

# ionic
每次挖官网文档都会有很到的收获:

* 手机端调试 ionic run android --livereload 文件改动，手机端也一起改动。调试特别方便。[详情](http://ionicframework.com/docs/cli/run.html)

* 手机图片和启动界面，可以根据模板自动生成各种尺寸的图片。模板位置:resources/icon.png   resources/splash.png [详情](http://ionicframework.com/docs/cli/icon-splashscreen.html)
    > ionic resources --icon  
    > ionic resources --splash  
    > ionic resources


# 输入框键盘问题


# 当键盘弹出时，导航隐藏   

添加样式  hide-on-keyboard-open

```html
<div class="hide-on-keyboard-open">
  <div id="google-map"></div>
</div>1
```
