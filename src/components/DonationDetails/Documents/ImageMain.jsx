import ImageGallery from "./ImagePopUp"

import Image1 from "../../../assets/images/DocuImages/1.jpg"
import Image2 from "../../../assets/images/DocuImages/2.jpg"
import Image3 from "../../../assets/images/DocuImages/3.jpg"
import Image4 from "../../../assets/images/DocuImages/4.jpg"
import Image5 from "../../../assets/images/DocuImages/5.jpg"
import Image6 from "../../../assets/images/DocuImages/6.jpg"


const ImageMain = () => {
  
   
     const images = [ Image1,Image2,Image3,Image4,Image5,Image6
     ]

  return (
    <div className="Documants">
    
      <ImageGallery images={images} />
    </div>
  );
    
   

}

export default ImageMain




