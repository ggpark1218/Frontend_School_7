var express = require('express');
var router = express.Router();

/* GET users listing. */
/*
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
*/

// 로그인할 때 유저네임과 패스워드가 디비에 있는지 없는지 일치하는지 아닌지 체크해야함
const userInfo={
  lee : {
    password: "123123",
  },
  kim : {
    password: "456456",
  },
};

//메인 페이지로 돌아갈 수 있는 라우터 작성
router.get("/", (req, res) => {
  const session = req.session;
  res.render("index", {
    username: session.username,
  });
});

router.get("/login/:username/:password", (req, res) => {
  const session = req.session;
  const { username, password } = req.params;
  if(!(userInfo[username])) {
    res.status(400).json({
      message: "user not found",
    });
  }

  if(userInfo[username]["password"] === password) {
    session.username = username;
    res.status(200).json({
      message: "user login!!",
    });
  }else{
    res.status(400).json({
      message: "user pw incorrect!!",
    });
  }
});

//로그아웃
router.get('/logout', (req, res) => {
  const session = req.session;
  if(session.username) {
    req.session.destroy((err) => {
      if(err) {
        console.log(err);
      } else{
        res.redirect("/users");
      }
    });
  } else{
    res.redirect("/users");
  }
});

module.exports = router;
