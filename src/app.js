import { createClass } from "react";
import { render } from 'react-dom';

import { 
	Router, //路由组件
	Route,  //路由路径组件
	hashHistory,  //监听地址变化 主要监听 hash 变化
	IndexRoute
} from 'react-router';

//页面结构组件
import { Layout } from './layout';
import { CataContent } from './page/catacontent';

const auto = createClass({
	render : function(){
		return <div>点击左边的分类</div>;
	}
});

window.onload = function(){
	// 当路由定义为一个子路由时，（路由嵌套）
	// 触发的是父级的组件，子路由的组件当做 props.childre 传给了父级的组件
	render(
		<Router history={ hashHistory }>
			<Route path="/" component = { Layout }>
				<IndexRoute component = { auto }/>
				<Route path="/cata/content/:id" component={ CataContent } />
			</Route>
		</Router>,
		document.querySelector("#app")
	);
};
