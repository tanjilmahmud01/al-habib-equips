import React from 'react';

const YoutubeSection = () => {
    return (
        <div className='container'>
              <div className="common-heading">Watch Videos on Al Habib</div>
             <div className="youtube-videos grid grid-two-column">
             <iframe width="100%" height="315" src="https://www.youtube.com/embed/y6nn9Vxrm1s?si=QLx315BZlzOUm_9_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
             <iframe width="100%" height="315" src="https://www.youtube.com/embed/zA0_1NNgCR4?si=1yIXe5YGoRcm8-KH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
             <iframe width="100%" height="315" src="https://www.youtube.com/embed/y6nn9Vxrm1s?si=QLx315BZlzOUm_9_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
             <iframe width="100%" height="315" src="https://www.youtube.com/embed/zA0_1NNgCR4?si=1yIXe5YGoRcm8-KH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
        </div>
    );
};

export default YoutubeSection;