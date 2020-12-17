import ProfileImg from '../assets/img/profilePhoto.png';

const HeaderProfile = () => {
  return (
    <div className='flex flex-col items-center gap-6 md:my-16 my-7 md:pb-0 pb-2.5'>
      <div className='rounded-2xl overflow-hidden border inline-block md:w-40 w-28'>
        <img className='inline-block' src={ProfileImg} alt='profile image' />
      </div>
      <div className='flex flex-col items-center gap-1.5'>
        <h2 className='md:text-2xl text-sm text-gray-700 font-bold'>
          Rodney Cotton
        </h2>
        <span className='md:text-sm text-xs text-gray-400 font-bold'>
          Helsinki, Finland
        </span>
      </div>
      <div className='grid grid-cols-3 grid-flow-row md:gap-6 gap-3'>
        <div className='flex flex-col items-center md:py-4 py-3.5 px-6  rounded-xl bg-gray-200'>
          <span className='font-bold md:text-xl text-sm text-gray-700'>
            100
          </span>
          <span className='font-bold text-sm text-gray-400'>Posts</span>
        </div>
        <div className='flex flex-col items-center md:py-4 py-3.5 px-6  rounded-xl bg-gray-200'>
          <span className='font-bold md:text-xl text-sm text-gray-700'>
            2,242
          </span>
          <span className='font-bold text-sm text-gray-400'>Follower</span>
        </div>
        <div className='flex flex-col items-center md:py-4 py-3.5 px-6  rounded-xl bg-gray-200'>
          <span className='font-bold md:text-xl text-sm text-gray-700'>
            1,432
          </span>
          <span className='font-bold text-sm text-gray-400'>Following</span>
        </div>
      </div>
    </div>
  );
};

export default HeaderProfile;
