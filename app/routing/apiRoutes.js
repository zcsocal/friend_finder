

//The data will come from friends.js
var friends = require("../data/friends.js");


module.exports = function(app) {

    // API GET Request
    app.get("/api/friends", function(req, res) {
      res.json(friends);
    });

    // API POST Request
    app.post("/api/friends", function(req, res) {
        
        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: 1000
        };

        var userData = req.body;
        var userScores = userData.scores;

        console.log(userScores);

        var totalDifference = 0;

        //Nested for loop that runs through each friend and then runs through each score for each friend.

        //Runs through the friends list
        for (var i = 0; i < friends.length; i++){
            console.log(friends[i]);

            totalDifference = 0;

            //Compared the scores for each friend
            for (var j = 0; j < friends[i].scores[j]; j++){
                //Math absolute simply turns negative numbers into positive numbers, giving you the distance between two numbers
                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));
                //IF totaldifference is less than current frienddifference
                if (totalDifference <= bestMatch.friendDifference) {
                    bestMatch.name = friends[i].name;
                    bestMatch.photo = friends[i].photo;
                    bestMatch.friendDifference = totalDifference;
                }

            }

        }

        friends.push(userData);
        res.json(bestMatch);

      });
  
};