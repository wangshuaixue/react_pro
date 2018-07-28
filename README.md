##项目介绍
1. 此项目为一个前后台分离的电商的SPA, 前端应用
2. 包括首页、首页导航子菜单页、识物页、分类页、购物车页、个人中心页、登录/注册页等模块
3. 前端: 使用React全家桶+ES6+Webpack等技术
4. 采用模块化、组件化、工程化的模式开发

##技术选型
1. 前台数据展现/交互/组件化:react react-router-dom redux
2. 前后台交互:ajax请求，axios async/await
3. 模拟数据：mockjs
4. 模块化：ES6 babel
5. 项目构建/工程化：webpack  react-create-app  eslint
6. 滑动库 swiper better-scroll

##从项目中学到什么
###流程及开发方法

1. 熟悉一个项目的开发流程
2. 学会模块化，组件化，工程化的开发模式
3.  掌握使用create-react-app脚手架初始化react项目开发

###React插件及第三方库

1. 学会使用react-router-dom开发单页应用
2. 学会使用axios与后端进行数据交互
3. 学会使用redux+react-redux+redux-thunk管理应用组件状




##开发问题


1. 如果有用到轮播或滑动的时候，需要注意在哪个生命周期创建，这两种一般是在更新之后来创建(componentDidUpdate)

2. 在创建完对象之后，为了处理多次创建对象导致的问题需要进行判断，也就是需要用单例来实现

3. 关于更新状态的延迟问题：setState({})更新数据之后立马打印，可能拿到的不会是最新的值，因为这个是异步操作，如果要确保用到最新的值接着执行的话，可以在setState({},()=>{}),在这个更新状态之后的回调里面进行关于数据的操作，这时拿到的都是最新更新的值

4. 首页滑动切换页面：这时候需要配置二级路由并且用switch来确定显示主页或是详情页，详情页因为数据不一样使用param传的参数来进行对应的数据跳转(此时注意推荐和其他选择项的区别)

5. 关于Hash history cannot PUSH the same path; a new entry will not be added to the，这个警告是不能多次添加相同的hash值到浏览器的堆中，因为我这里是用的NavLink进行的跳转，而NavLink中的to选项默认是this.props.history.push进行路由跳转,解决这个警告的方法就是把跳转的方式改为replace就可以解决了
    `<NavLink className={this.props.location.pathname===`/home/detail/${index}`? 'tab active' :'tab'} key={index} to={`/home/detail/${index}`}
                         onClick={()=>{this.checkTab(index)}} replace>
	</NavLink>`


1. 写请求的时候要分析响应数据的格式(也就是mock数据,设计接口的时候返回的对象)，设计的数据模式不一样，请求返回的值就应该进行相应的判断

2. 展示数据的时候，一般我用的是三元表达式，但是在首页中展示详情页的时候，判断目标错了导致报错，这里用了&&来判断，比三元表达式省事一点，有时候这个用来判断更适合一些

