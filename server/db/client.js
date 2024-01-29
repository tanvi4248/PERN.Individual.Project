const { Client } =  require('pg');
const client = new Client(`postgres://tours_38bb_user:WoAFq20lrlfkdXlF9rUBrxErCSWwAvwy@dpg-cmrjq5ed3nmc73egfjbg-a/tours_38bb`);

module.exports = client;