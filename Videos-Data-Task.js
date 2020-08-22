// Videos Data Task

// task 1
/*
Add at least 10 more videos to the above array and before writing the following programs in JS.
*/
let videos = [
  {
    title: "Photoshop tutorial",
    lengthInMinutes: 70,
    category: "Education",
    uploadDate: new Date("07-22-2019"),
    tags: "design, digital, photoshop, creativity",
    features: ["Live", "360°", "HDR"],
    viewCount: 100,
    rating: 4.3,
  },
  {
    title: "Episode # 01 - The Best Comedy Show",
    lengthInMinutes: 19,
    category: "Entertainment",
    uploadDate: new Date("07-03-2019"),
    tags: "comedy, funny",
    features: ["Subtitles/CC", "3D", "HD"],
    viewCount: 200,
    rating: 3.9,
  },
  {
    title: "How to use FOR EACH loop - tutorial by Tech Karo",
    lengthInMinutes: 6,
    category: "Education",
    uploadDate: new Date("11-10-2018"),
    tags: "Javascript, loops, web development",
    features: ["Purchased", "HD"],
    viewCount: 9004,
    rating: 4.5,
  },
  {
    title: "Yahoo Baba video 1",
    lengthInMinutes: 38,
    category: "Rhymes",
    uploadDate: new Date("7-9-2018"),
    tags: "rhymes, yes yes, vegetable song",
    features: ["Subtitles/CC", "3D"],
    viewCount: 900422,
    rating: 4.6,
  },
  {
    title: "Yahoo Baba video 2",
    lengthInMinutes: 105,
    category: "Entertainment",
    uploadDate: new Date("7-9-2018"),
    tags: "morning show, good morning, eid special",
    features: ["Purchased", "HD"],
    viewCount: 900444,
    rating: 3,
  },
  {
    title: "Yahoo Baba video 3",
    lengthInMinutes: 7,
    category: "Education",
    uploadDate: new Date("2-1-2019"),
    tags: "Javascript, yahoo baba",
    features: ["Subtitles/CC", "HD"],
    viewCount: 900458,
    rating: 4.6,
  },
  {
    title: "Yahoo Baba video 4",
    lengthInMinutes: 3,
    category: "Rhymes",
    uploadDate: new Date("6-9-2010"),
    tags: "rhymes, twinkle, star",
    features: ["Subtitles/CC", "3D"],
    viewCount: 900499,
    rating: 4,
  },
  {
    title: "Yahoo Baba video 5",
    lengthInMinutes: 29,
    category: "Entertainment",
    uploadDate: new Date("11-7-2020"),
    tags: "cartoon, tom and jerry",
    features: ["Subtitles/CC", "3D"],
    viewCount: 90045678,
    rating: 3,
  },
  {
    title: "Yahoo Baba video 6",
    lengthInMinutes: 20,
    category: "Entertainment",
    uploadDate: new Date("8-8-2016"),
    tags: "cartoon, looney tunes, tweety bird",
    features: ["3D", "HD"],
    viewCount: 900400,
    rating: 4.8,
  },
  {
    title: "Yahoo Baba video 7",
    lengthInMinutes: 3,
    category: "Entertainment",
    uploadDate: new Date("5-10-2020"),
    tags: "cooking , recipe, karahi, white karahi, food fusion",
    features: ["Purchased", "HD"],
    viewCount: 9004660,
    rating: 4.9,
  },
  {
    title: "Yahoo Baba video 8",
    lengthInMinutes: 500,
    category: "Entertainment",
    uploadDate: new Date("8-22-2020"),
    tags: "cooking , recipe, kabab, seekh kabab, food fusion",
    features: ["Subtitles/CC", "3D"],
    viewCount: 90043232,
    rating: 4.6,
  },
  {
    title: "Yahoo Baba video 9",
    lengthInMinutes: 2,
    category: "Rhymes",
    uploadDate: new Date("7-21-2020"),
    tags: "rhymes, abc",
    features: ["Subtitles/CC", "3D", "HD"],
    viewCount: 9004741,
    rating: 3,
  },
  {
    title: "Yahoo Baba video 10",
    lengthInMinutes: 2,
    category: "Education",
    uploadDate: new Date("8-22-2020"),
    tags: "HTML, CSS",
    features: ["Subtitles/CC", "3D", "HD"],
    viewCount: 109004147,
    rating: 3,
  },
];

// task 2
/*
Print each video in this format:
*/

videos.forEach((video) => {
  console.log(
    "\n",
    "Title: " + video.title,
    "\n",
    "Length: " + video.lengthInMinutes + " minutes",
    "\n",
    "Category: " + video.category,
    "\n",
    "Views: " + video.viewCount,
    "\n",
    "Uploaded On: " +
      video.uploadDate.getDate() +
      "-" +
      new Intl.DateTimeFormat("en-US", { month: "long" }).format(
        video.uploadDate
      ) +
      "-" +
      video.uploadDate.getFullYear(),
    "\n",
    "Rating: " + video.rating
  );
});

// task 3
/*
Print titles of all short ( less than 3 minutes ) videos.
*/

videos.forEach((video) => {
  video.lengthInMinutes < 3 ? console.log("Title: " + video.title) : "";
});

// task 4
/*
Print titles of all long ( greater than 20 minutes ) videos.
*/

videos.forEach((video) => {
  video.lengthInMinutes > 20 ? console.log("Title: " + video.title) : "";
});

// task 5
/*
Print titles of all medium length videos.
*/

videos.forEach((video) => {
  video.lengthInMinutes > 3 && video.lengthInMinutes < 20
    ? console.log("Title: " + video.title)
    : "";
});

// task 6
/*
Print title of the longest video
*/

let lengths = [];

videos.forEach(function (video) {
  lengths.push(video.lengthInMinutes);
});

let maxLength = Math.max(...lengths);

videos.forEach(function (video) {
  if (video.lengthInMinutes === maxLength) console.log("Title: " + video.title);
});

// task 7
/*
Print titles of all "Educational" videos
*/

videos.forEach((video) => {
  video.category == "Education" ? console.log("Title: " + video.title) : "";
});

// task 8
/*
Print titles of all videos with tag "Javascript"
*/

videos.forEach((video) => {
  video.tags.includes("Javascript") ? console.log("Title: " + video.title) : "";
});

// task 9
/*
Print titles of all videos with HD feature
*/

videos.forEach((video) => {
  video.features.includes("HD") ? console.log("Title: " + video.title) : "";
});

// task 10
/*
Print titles of all videos uploaded today
*/

videos.forEach((video) => {
  video.uploadDate.setHours(0, 0, 0, 0) === new Date().setHours(0, 0, 0, 0)
    ? console.log("Title: " + video.title)
    : "";
});

// task 11
/*
Print titles of all videos uploaded this week
*/

var now = new Date();
now.setHours(12);
now.setMinutes(0);
now.setSeconds(0);
now.setMilliseconds(0);
var end_of_week = new Date(
  now.getTime() + (6 - now.getDay()) * 24 * 60 * 60 * 1000
);
end_of_week.setHours(23);
end_of_week.setMinutes(59);
end_of_week.setSeconds(59);

videos.forEach((video) => {
  let uploadDate = video.uploadDate;

  uploadDate.setHours(12);
  uploadDate.setMinutes(0);
  uploadDate.setSeconds(0);
  uploadDate.setMilliseconds(0);

  uploadDate >= now && uploadDate <= end_of_week
    ? console.log("Title: " + video.title)
    : "";
});

// task 12
/*
Print titles of all videos uploaded this month
*/

let today = new Date();

videos.forEach((video) => {
  video.uploadDate.getMonth() == today.getMonth() &&
  video.uploadDate.getFullYear() == today.getFullYear()
    ? console.log("Title: " + video.title)
    : "";
});

// task 13
/*
Print titles of all videos uploaded this year
*/

videos.forEach((video) => {
  video.uploadDate.getFullYear() == today.getFullYear()
    ? console.log("Title: " + video.title)
    : "";
});

// task 14
/*
Sort the array in ascending order of number of views and print the titles
*/

videos.sort(
  (val1, val2) => parseFloat(val1.viewCount) - parseFloat(val2.viewCount)
);

videos.forEach((video) => {
  console.log("Title: " + video.title);
});

// task 15
/*
Sort the array in ascending order of rating and print the titles
*/

videos.sort((val1, val2) => parseFloat(val1.rating) - parseFloat(val2.rating));

videos.forEach((video) => {
  console.log("Title: " + video.title);
});
