/**
 * 图书分类
 */
import { Component } from "react";

import { Link } from 'react-router';

class CataList extends Component{
	constructor(){
		super();
		//默认值
		this.state = {
			list : []
		}
		//		setTimeout(function(){
//			that.setState({
//				list : [
//				{
//					name : "java"
//				},{
//					name : "html"
//				}
//			]
//			});
//		},2000);

	}
	//声明周期，当 dom 元素插入到页面后出发
	componentDidMount(){
		const that = this;
		$.get("/cata/list",{},function(data){
			if(data['reason'] == "success"){
				that.setState({
					list : data.result
				});
			}
		},"json");
	}
	render(){
		let html = (<ul>
			{
				this.state.list.map((item,i)=>{
					let to = {
						// 路由地址
						pathname : `/cata/content/${item.id}`,
						// 路由参数
						query : {
							id : item.id
						}
					}
					return (
						<li key={ `li-${i}` } data-id={ item.id }>
							<Link to={ to }> { item.catalog } </Link>
						</li>
					);
				})
			}
		</ul>);
		return html;
	}
}

export { CataList };
