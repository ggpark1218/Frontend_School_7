var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// router.get('/main', (req, res) => {
//   res.json({
//     mesagge: "success!!!",
//   });
// });

// router.get('/main', (req, res) => {
//   console.log(req.body);
// });

/*
router.get('/main', (req, res) => {
  const data = req.body.data;
  // 문자열 응답
  //res.send("문자열이 응답됩니다!!");
  // json 응답
  // res.json({
  //   message: "json 응답",
  // });
  // index.ejs error.ejs 와 같은 템플릿 파일들을 적어주면 렌더링해줌
  // res.render("index");
});
*/

/*
let arr = [];

// GET method
router.get('/read',(req, res)=>{
  res.status(200).json({
    message: "read success",
  });
});

//POST method

router.post('/create',(req,res) => {
  // const data = req.body.data;
  // 비구조화 할당
  const { data } = req.body;
  arr.push(data);
  res.status(200).json({
    message : "create success",
    result: arr,
  });
  // console.log(req.body);
});

// PUT method
// update/0 => 배열 안에서 0번째인 데이터를 바꾸고 싶다
router.put("/update/:id", (req,res)=>{
  const { id } = req.params;
  const { data } = req.body;
  arr[id] = data;
  res.status(200).json({
    message: "update success",
    result: arr,
  });
  // console.log(id);
});

//DELETE method
router.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  arr.splice(id, 1);
  res.status(200).json({
    message: "delete success",
    result: arr,
  });
});
*/

//미들웨어 (외부폴더로 옮김)
/*
const loginCheck = (req, res, next) => {
  const userLogin = true;
  // const userLogin = false;
  if(userLogin) {
    next();
  }else{
    res.status(400).json({
      message: "login fail!!",
    });
  }
};
*/

/*
//외부파일에서 미들웨어 불러오기
const loginCheck = require("../module/loginCheck");
const upload = require("../module/imageUpload");

router.get('/', loginCheck, (req, res) => {
  res.status(200).json({
    message: "login success!!",
  });
});

router.post('/upload', upload.single('image'),(req, res) => {
  const file = req.file;
  console.log(file);
  res.status(200).json({
    message: "upload success!!",
  });
});
*/

//스키마
const postModel = require("../model/post");
const { response } = require('../app');

router.post('/', async (req, res) => {
  const { title, content } = req.body;
  const post = new postModel({
    title: title,
    content: content,
  });
  try{
    const result = await post.save();
    res.status(200).json({
      message: "upload success!!",
      data: result,
    });
  } catch (error){
    res.status(500).json({
      message: error,
    });
  }
});

module.exports = router;
