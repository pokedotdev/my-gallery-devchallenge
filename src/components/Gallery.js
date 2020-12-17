import photo1 from '../assets/img/photo1.png';
import photo2 from '../assets/img/photo2.png';
import photo3 from '../assets/img/photo3.png';
import photo4 from '../assets/img/photo4.png';
import photo5 from '../assets/img/photo5.png';
import photo6 from '../assets/img/photo6.png';

const Gallery = () => {
  return (
    <div className='grid grid-cols-3 grid-flow-row gap-3 md:gap-8'>
      <img className='rounded-xl shadow-md' src={photo1} alt='' />
      <img className='rounded-xl shadow-md col-span-2' src={photo2} alt='' />
      <img className='rounded-xl shadow-md col-span-2' src={photo3} alt='' />
      <img className='rounded-xl shadow-md row-span-2' src={photo4} alt='' />
      <img className='rounded-xl shadow-md' src={photo5} alt='' />
      <img className='rounded-xl shadow-md' src={photo6} alt='' />
    </div>
  );
};

export default Gallery;
