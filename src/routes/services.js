'use strict';

const express = require('express');
const { accounts, writeJSON } = require('../data');
const router = express.Router();


router.get('/transfer', (req, res) => res.render('transfer'));
router.post('/transfer', (req, res) => {
    const { from, to, amount } = req.body;
    const acntFrom = accounts[from];
    const acntTo = accounts[to];

    acntFrom.balance = acntFrom.balance - amount;
    acntTo.balance = parseInt(acntTo.balance) + parseInt(amount, 10);

    writeJSON();
    res.render('transfer', {message: 'Transfer Completed'});
});
router.get('/payment', (req, res) => res.render('payment', {account: accounts.credit}));
router.post('/payment', (req, res) => {
    const { amount } = req.body;
    accounts.credit.balance = accounts.credit.balance - amount;
    accounts.credit.available = parseInt(accounts.credit.available) + parseInt(amount);

    writeJSON();
    res.render('payment', {message: 'Payment Successful', account: accounts.credit});
})

module.exports = router;
