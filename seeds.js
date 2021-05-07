var mongoose = require("mongoose"),
	Campground = require("./models/campground"),
	Comment = require("./models/comment");


var data = [
	{
		name: "Clouds Rest",
		image: "https://images.pexels.com/photos/4268140/pexels-photo-4268140.jpeg?auto=compress&cs=tinysrgb&h=350",
		description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
	},
		{
		name: "Desert Mesa",
		image: "https://pixabay.com/get/57e6d24b4d53a814f1dc84609620367d1c3ed9e04e507749752b7fdd9f45c4_340.jpg",
		description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
	},
	{
		name: "Canyon Floor",
		image: "https://pixabay.com/get/52e8d6414857af14f1dc84609620367d1c3ed9e04e507749752b7fdd9f4dc6_340.jpg",
		description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
	}
];

function seedDB(){
	// Remove all campgrounds
	Campground.remove({}, function(err){
		if(err){
			console.log(err)
		}
		console.log("Removed campgrounds!");
		// add a few campgrounds
		data.forEach(function(seed){
			Campground.create(seed, function(err, campground){
				if(err){
					console.log(err)
				} else {
					console.log("Added a campground");
					// create a comment
					Comment.create({text: "This place is great, but I wish there was internet", author: "Homer"}, function(err, comment){
						if(err){
							console.log(err)
						} else {
						campground.comments.push(comment);
						campground.save();
						console.log("created new comment");
						}
					});
				}
			});
		});
	});
}

module.exports = seedDB;
