import PropTypes from 'prop-types';
import { useState } from 'react';
import{RxCross2} from "react-icons/rx"


const ImageGallery = ({ images }) => {
    

    const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  
  const openModal = (index) => {
    setSelectedImageIndex(index);
    window.my_modal_2.showModal(); // Show the modal using your method
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
    window.my_modal_2.close(); // Close the modal using your method
  };

  return (
   
    <div className="image-gallery">
      <div className="image-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div key={index} className="image-item relative group" onClick={() => openModal(index)}>
            <img src={image} alt={`Image ${index}`} className="w-full h-auto cursor-pointer" />
            
            {/* <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-75 transition duration-300">

            </div> 
             <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
              <button className="text-white bg-gray-800 px-4 py-2 rounded-lg">View</button>
            </div> */}
          </div>
        ))}
      </div>

      <dialog id="my_modal_2" className="modal">
        <form method="dialog" className="modal-box w-11/12 md:w-8/12 max-w-4xl ">
          {selectedImageIndex !== null && (
            <img className='w-full  object-cover' src={images[selectedImageIndex]} alt={`Image ${selectedImageIndex}`} />
          )}
          <button onClick={closeModal} className="absolute top-0 right-1 inline-block px-2 py-1 bg-tranparent text-black rounded-lg">
           <RxCross2  size={18}/>
          </button>
        </form>
        <form method="dialog" className="modal-backdrop"></form>
      </dialog>
    </div>


  );
};





export default ImageGallery;




