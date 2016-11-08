import { Books } from './../controller/book';

const books = new Books();

class Main{
	constructor(app){
		//图书分类
		app.get("/cata/list",this.CataList);
		//图书内容
		app.get("/cata/content",this.CataContent);
	}
	CataList(req,res){
		function callback(error, data){
			res.send(data);
		}
		books.getCatalog(callback);
	//  箭头函数
	//	books.getCatalog((error,data)=>{
	//		res.send(data);
	//	});
	}
	CataContent(req,res){
		//req.query 地址栏中的 get 行参
		let { id,pn = 0,rn = 30 } = req.query;
		function callback(error,data){
			res.send(data);
		}
		books.getBookContent({
			"catalog_id" : id,
			"pn" : pn,
			"rn" : rn
		},callback);
	}
}

export { Main };
