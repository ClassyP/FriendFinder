
module.exports = function(app){
    get.app('api/friends', function(req, res){
        res.json('api/listOfFriends', function (req, res){
            res.json(listOfFriends);
        });
    })
}

app.post('api/friends', function(req, res){
    var newFriendPoints = req.body.newFriendPoints;
    var pointArray = [];
    var count = 0;
    var match = 0;
})
// i need to be able to push all of the data into here

for (var i = 0; i<listOfFriends.length; i++){
    var scoreDifference = 0;
}