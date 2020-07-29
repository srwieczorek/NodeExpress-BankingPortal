'use strict';

const fs = require('fs');
const path = require('path');

const accountData = fs.readFileSync('src/json/accounts.json', {encoding: 'utf8'});
const userData = fs.readFileSync('src/json/users.json', {encoding: 'utf8'});
const accounts = JSON.parse(accountData);
const users = JSON.parse(userData);

const writeJSON = () => {
    const accountsJSON = JSON.stringify(accounts);
    fs.writeFileSync(path.join(__dirname, 'json/accounts.json'), accountsJSON, 'utf8');
}

module.exports = {
    writeJSON,
    accounts,
    users
}
