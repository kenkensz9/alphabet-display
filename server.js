const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 80;

// 静的ファイルを配信
app.use(express.static(path.join(__dirname, 'build')));

// SPA用の設定
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

