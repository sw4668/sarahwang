//fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCltPMItTsl3Hu5qV80A0q9w&maxResults=10&order=date&key=AIzaSyAk8VZHM6LVKr-HE3v8ayyv_ZsMGcoIORw")
//.then((result)=>{
//     return result.json()
//}).then((data)=>{
 //    console.log(data)
  //    let videos = data.items
 //     let videoContainer = document.querySelector(".youtube-container")
  //    for (video of videos){
  //        videoContainer.innerHTML += 
   //        ' <img src= "${video.snippet.thumbnails.high.url}"> '
    
 //     }
// })

const searchTerms = ["factory%20functions","data%20structures", "array%20functions%20javascript", "composition%20over%20inheritance", "lambda%20functions", "streams%20java", "higher%20order%functions%javascript", "functional%20programming", "c++%20lambda%20functions", "sorting%20algorithms"];
const getSearchTerm = () => searchTerms[Math.floor(Math.random() * (searchTerms.length-1))];
const YOUTUBE_API_KEY = "";
const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCltPMItTsl3Hu5qV80A0q9w&maxResults=10&order=date&key=AIzaSyAk8VZHM6LVKr-HE3v8ayyv_ZsMGcoIORw`;
// console.log(url);
fetch(url)
  .then(response => response.json())
  .then(data => {
    //console.log(data.items[0].id.videoId);
    document.querySelector(".youtubeVideo").src = `https://www.youtube.com/embed/${data.items[0].id.videoId}`;
});
