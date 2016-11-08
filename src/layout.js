import { Component,cloneElement } from "react";
//图书分类组件
import { CataList } from './page/catalist';

class Layout extends Component{
	// 在元素上写 class 需要转换一下，class 是 react 中的关键字
	// 写 class 应改为 className
	render(){
		//把传入过来的子组件克隆一份，这个时候就会创建出一个新的组件
		const content = cloneElement(this.props.children);
		let html = (<div className="wrap">
			<div className="catalist">
				<CataList/>
			</div>
			<div className="content">
				{ content }
			</div>
		</div>);
		return html;
	}
}
export { Layout };
