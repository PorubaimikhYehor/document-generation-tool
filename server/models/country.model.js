const mariadb = require('./mariadb');

/// Model of country
const Model = (country) => {
  id = country.id;
  name = country.name;
  orderNumber = country.orderNumber;
};

Model.getAll = result => {
  mariadb.pool.query('SELECT * from countries')
    .then(res => result(null, res))
    .catch(err => result(err, null))
};


Model.addOne = async (country, result) => {
  const sqlStrData = [
    country.name,
    country.orderNumber
  ];
  const sqlStr = 'INSERT INTO countries (name, orderNumber) VALUES (?, ?); SELECT * FROM countries ORDER BY ID DESC LIMIT 1;';
  mariadb.pool.query(sqlStr, sqlStrData)
    .then(res => result(null, res[1][0]))
    .catch(err => result(err, null))
};

Model.updateOne = async (id, country, result) => {
  const sqlStrData = [
    country.name,
    id,
    id,
  ];
  console.log(sqlStrData);
  const sqlStr = `
  UPDATE countries SET name=? where id = ?;
  SELECT * FROM companyEntities where id = ?;
  `;
  mariadb.pool.query(sqlStr, sqlStrData)
    .then(res => result(null, res[1][0]))
    .catch(err => result(err, null))
};

Model.deleteOne = (id, result) => {
  mariadb.pool.query(`delete from countries where id = ${id};`)
    .then(res => result(null, res))
    .catch(err => result(err, null))
};

Model.updateOrder = (body, result) => {
  // console.log(body);
  let sqlStr = "";
  body.map(b => sqlStr += ` UPDATE countries SET orderNumber=${b.orderNumber} where id=${b.id};`);
  console.log(sqlStr  );
  mariadb.pool.query(sqlStr)
    .then(res => result(null, res))
    .catch(err => result(err, null))
}


module.exports = Model;
