//import express from 'express';
const express = require('express');

const app = express();
const port = 4000;

app.use(express.json());
// 允许来自指定前端源的请求通过 CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://192.168.33.79:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') {
	res.sendStatus(200); // 返回 HTTP ok 状态
  } else if(req.method === 'POST'){
	const dataToSave = req.body;
	saveDataToJSONFile(dataToSave);
    res.sendStatus(200); // 返回 HTTP ok 状态
  } else{
    next();
  }
});

{/*
// 定义后端路由
app.post('http://192.168.33.79:4000/api/plugins/directionorg-pagesdirection-panel/save-data', (req, res) => {
  console.log("It does handle the request or not.");
  const dataToSave = req.body;
  saveDataToJSONFile(dataToSave);
  res.send('Data saved successfully');
});
*/}

// 保存数据到 JSON 文件的方法
async function saveDataToJSONFile(data) {
  const jsonData = JSON.stringify(data, null, 2);
  // 将数据写入 JSON 文件的逻辑
  // 这里可以使用文件操作库或其他适合的方式来实现
  // 例如使用 fs-extra 库写入文件
  const fs = require('fs-extra');
  fs.writeFileSync('xk-data.json', jsonData);
  console.log("Data saved in JSON.");
}

// 启动服务器
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



