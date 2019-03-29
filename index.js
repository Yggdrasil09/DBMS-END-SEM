const mysql = require('mysql');

var connection = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'12345678',
  database:'amigos'
});

connection.connect(function(err){
  if(err) throw err;
  console.log('connected');
})

document.getElementById("button1").addEventListener('click',function(){
	
	let sql = "Insert into chef (chef_name,Id_no) VALUES ('"+document.getElementById("chefname").value+"','"+document.getElementById('chefid').value+"')";
	connection.query(sql,function(err,result){
	  	if(err) throw err;
	})
	document.getElementById("chefname").value = "";
	document.getElementById('chefid').value = "";
})

document.getElementById("showtable1").addEventListener('click',function(){

	let sql = "select * from chef";
	connection.query(sql,function(err,result){
		if(err)  throw err;
		console.log(result);
	})
})

document.getElementById("button2").addEventListener('click',function(){
	
	let sql = "Insert into manager (manager_name,Id_no,contact_no) VALUES ('"+document.getElementById("managername").value+"','"+document.getElementById('managerid').value+"','"+document.getElementById('managercontact').value+"')";
	connection.query(sql,function(err,result){
	  	if(err) throw err;
	})
	document.getElementById("managername").value = "";
	document.getElementById('managerid').value = "";
	document.getElementById('managercontact').value="";
})

document.getElementById("showtable2").addEventListener('click',function(){

	let sql = "select * from manager";
	connection.query(sql,function(err,result){
		if(err)  throw err;
		console.log(result);
	})
})

document.getElementById("button3").addEventListener('click',function(){
	
	let sql = "Insert into waiter (waiter_name,Id_no) VALUES ('"+document.getElementById("waitername").value+"','"+document.getElementById('waiterid').value+"')";
	connection.query(sql,function(err,result){
	  	if(err) throw err;
	})
	document.getElementById("waitername").value="";
	document.getElementById('waiterid').value="";
})

document.getElementById("showtable3").addEventListener('click',function(){

	let sql = "select * from waiter";
	connection.query(sql,function(err,result){
		if(err)  throw err;
		console.log(result);
	})
})

document.getElementById("button4").addEventListener('click',function(){
	
	let sql = "Insert into orders (order_no,number_of_items) VALUES ('"+document.getElementById("order").value+"','"+document.getElementById('orderitems').value+"')";
	connection.query(sql,function(err,result){
	  	if(err) throw err;
	})
	document.getElementById("order").value="";
	document.getElementById('orderitems').value="";
})

document.getElementById("showtable4").addEventListener('click',function(){

	let sql = "select * from orders";
	connection.query(sql,function(err,result){
		if(err)  throw err;
		console.log(result);
	})
})

document.getElementById("button5").addEventListener('click',function(){
	
	let sql = "Insert into bill (bill_no,price,customer) VALUES ('"+document.getElementById("bill-no").value+"','"+document.getElementById('price').value+"','"+document.getElementById('customer').value+"')";
	connection.query(sql,function(err,result){
	  	if(err) throw err;
	})
	document.getElementById("bill-no").value="";
	document.getElementById('price').value="";
	document.getElementById('customer').value="";
})

document.getElementById("showtable5").addEventListener('click',function(){

	let sql = "select * from bill";
	connection.query(sql,function(err,result){
		if(err)  throw err;
		console.log(result);
	})
})
