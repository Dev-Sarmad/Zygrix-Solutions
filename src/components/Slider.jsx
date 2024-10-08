import { useRef } from "react";
import img1 from "../assets/c1.png";
import img2 from "../assets/c2.png";
import img3 from "../assets/c3.png";
import img4 from "../assets/c4.png";
import img5 from "../assets/c5.png";
import img6 from "../assets/c6.png";
import img7 from "../assets/c7.png";
import img8 from "../assets/c8.png";
import { useScroll, useTransform, motion } from "framer-motion";
function Slider() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["90%", "-100%"]);

  const images = [
    { id: 1, url: img1 },
    { id: 2, url: img2 },
    { id: 3, url: img3 },
    { id: 4, url: img4 },
    { id: 5, url: img5 },
    { id: 6, url: img6 },
    { id: 7, url: img7 },
    { id: 8, url: img8 },
  ];
  return (
    <section className="mt-10 p-6  relative" ref={ref}>
      <div className="relative top-0 flex  items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-8 justify-evenly"  >
          {images.map((image) => (
            <img src={image.url} key={image.id} className="w-24 md:w-[10%]" />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Slider;
