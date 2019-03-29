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

document.getElementById("form1").addEventListener('submit',function(){
	
	let sql = "Insert into chef (chef_name,Id_no) VALUES ('"+document.getElementById("chefname").value+"','"+document.getElementById('chefid').value+"')";
	connection.query(sql,function(err,result){
	  	if(err) throw err;
	})
})

document.getElementById("cheftable").addEventListener('click',function(){

	let sql = "select * from chef";
	connection.query(sql,function(err,result){
		if(err)  throw err;
		console.log(result);
	})
})

document.getElementById("form2").addEventListener('submit',function(){
	
	let sql = "Insert into manager (manager_name,Id_no,contact_no) VALUES ('"+document.getElementById("managername").value+"','"+document.getElementById('managerid').value+"','"+document.getElementById('managercontact').value+"')";
	connection.query(sql,function(err,result){
	  	if(err) throw err;
	})
})

document.getElementById("form3").addEventListener('submit',function(){
	
	let sql = "Insert into waiter (waiter_name,Id_no) VALUES ('"+document.getElementById("waitername").value+"','"+document.getElementById('waiterid').value+"')";
	connection.query(sql,function(err,result){
	  	if(err) throw err;
	})
})

document.getElementById("form4").addEventListener('submit',function(){
	
	let sql = "Insert into orders (order_no,number_of_items) VALUES ('"+document.getElementById("order").value+"','"+document.getElementById('orderitems').value+"')";
	connection.query(sql,function(err,result){
	  	if(err) throw err;
	})
})

document.getElementById("form5").addEventListener('submit',function(){
	
	let sql = "Insert into bill (bill_no,price,customer) VALUES ('"+document.getElementById("bill-no").value+"','"+document.getElementById('price').value+"','"+document.getElementById('customer').value+"')";
	connection.query(sql,function(err,result){
	  	if(err) throw err;
	})
})



