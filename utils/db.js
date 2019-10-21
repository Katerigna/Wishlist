const spicedPg = require("spiced-pg");

const db = spicedPg(`postgres:postgres:postgres@localhost:5432/wishlist`);

exports.addUser = (name, email, password) => {
    return db.query(
        `INSERT INTO users (name, email, password) VALUES ($1, $2, $3)
            RETURNING id, name`,
        [name, email, password]
    );
};
