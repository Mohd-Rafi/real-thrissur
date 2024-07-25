import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Slider = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  const imagesArray = ['img3.jpg', 'img3.jpg', 'img1.jpg'];
  return (
    <section className="relative w-full h-full ">
      <Carousel
        responsive={responsive}
        swipeable
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        removeArrowOnDeviceType={['tablet', 'mobile', 'desktop']}
      >
        {imagesArray.map((item, index) => (
          <img
            src={item}
            key={index}
            alt=""
            className="h-[80vh] w-[100vw] object-cover"
          />
        ))}
      </Carousel>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-9 flex-col items-center justify-center py-12">
        <p className="text-7xl font-extrabold text-slate-100 max-sm:text-5xl max-md:text-5xl e mt-36">
          INVESTMENTS ON EARTH
        </p>
        <p className="text-center  text-2xl text-white font-mediumW max-sm:text-xl">
          Exclusively by real thrissur properties
        </p>
        <button className="bg-red-600 w-52 max-sm:w-44 py-4 text-center mt-9 border-none rounded-md text-white  text-xl  hover:bg-red-500 hover:scale-105 transition-all">
          Explore
        </button>
      </div>
    </section>
  );
};

export default Slider;
