/**
 * Created by tsq on 14-6-26.
 */
var connect = require("connect");
var app = connect()
.use(connect.directory('public'))
.use(connect.static('public'));
app.listen(3000);