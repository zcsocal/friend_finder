
//This is just a basic set of data arrays for friend matches
//Note that the survey answers are an array within an array of data.

var friends = [

    {
      name: "Larry",
      photo: "https://www.fillmurray.com/g/400/400",
      scores: [
          "5",
          "4",
          "3",
          "2",
          "1",
          "5",
          "4",
          "2",
          "1",
          "5",
      ]
      
    },
    {
        name: "Corndog",
        photo: "https://www.fillmurray.com/g/300/300",
        scores: [
            "1",
            "2",
            "3",
            "4",
            "5",
            "5",
            "5",
            "1",
            "1",
            "5",
        ]
        
      },
      {
        name: "Bob",
        photo: "https://www.fillmurray.com/g/500/500",
        scores: [
            "5",
            "1",
            "3",
            "2",
            "1",
            "1",
            "4",
            "1",
            "1",
            "4",
        ]
        
      }
  ];

// This makes it accessible to other files using require.
module.exports = friends;