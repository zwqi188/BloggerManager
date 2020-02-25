<h1>乐游网后台管理站点</h1>

<h2>作者：YuGii</h2>
<h3>nodejs + webpack + angularjs , 实现多环境打包，代码混淆，依赖管理</h3>

<h2>环境准备</h2>
<h3>1、安装nodejs,(https://nodejs.org/en/),并设置好淘宝镜像(http://npm.taobao.org/),执行<code> alias cnpm="npm --registry=https://registry.npm.taobao.org \
                                                                            --cache=$HOME/.npm/.cache/cnpm \
                                                                            --disturl=https://npm.taobao.org/dist \
                                                                            --userconfig=$HOME/.cnpmrc" </code>即可</h3></br>
<h3>2、在package.json的同级目录下，运行npm install,安装依赖</h3></br>
<h3>3、运行npm run dev,启动项目，访问http://localhost:8890/；本项目支持多环境运行，请运行npm run sit/uat/pro/dev可加载不同环境配置，如需修改访问地址，请直接修改services/configService中对应的配置文件即可</h3>

</br>
<h2>项目开发方法</h2>
<h3>1、如若添加页面，先在server_mock/getMenuList.json中添加一项数据，然后将所有页面请放在在app/components/views文件夹中（直接拷贝修改关键点即可），然后在routerBuilder/index.js中配置相应的路由，即可访问</h3>
<h3>2、请遵守原有的指令、服务、过滤器修改规则</h3>

<h2>乐游网git地址：https://github.com/zwqi188/travel.git</h2>