const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
  host: "localhost",
  user: "WebTech",
  password: "cdac",
  database: "project2",
};

const addUser = async (user) => {
  const connection = mysql.createConnection(dbinfo);

  await connection.connectAsync();

  let sql = `insert into message (sender,reciever,message) values(?,?,?)`;
  connection.queryAsync(sql, [user.sender, user.reciever, user.message]);

  console.log("connection successfull");
  await connection.endAsync();
};

const user = {
  sender: "mayur",
  reciever: "cdac",
  message: "hello how are you guys....!!",
};

addUser(user);

const selectUser = async () => {
  const connection = mysql.createConnection(dbinfo);

  await connection.connectAsync();

  let sql = `select * from message`;
  const list = await connection.queryAsync(sql, []);

  //console.log(list);
  await connection.endAsync();
  return list;
};

selectUser();

module.exports = { selectUser, addUser };
