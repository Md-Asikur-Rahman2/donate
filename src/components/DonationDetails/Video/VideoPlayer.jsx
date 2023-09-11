
import ReactPlayer from 'react-player';

const videos = [
  {
    id: 1,
    url: 'https://vimeo.com/10679287',
   
  },
  {
    id: 2,
    url: 'https://vimeo.com/678008202',
    
  },
  {
    id: 3,
    url: 'https://vimeo.com/6363388',
   
  },
  {
    id: 4,
    url: 'https://vimeo.com/3151735',
   
  }

];


const VideoGallery = () => {
    


  return (
    <div className=" p-4">
      <div className=" mx-auto">
      
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-6">
          {videos.map(video => (
            <div key={video.id} className=" p-2 shadow rounded">
             
        

<ReactPlayer
          url={video.url}
          controls={true}
          width="100%"
          height="auto"
         
        />
       

              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoGallery;
