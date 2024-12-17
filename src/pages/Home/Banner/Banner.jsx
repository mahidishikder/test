import { easeOut, motion } from "framer-motion";
import { useEffect, useState } from "react";

function Banner() {
  const [isSmallDevice, setIsSmallDevice] = useState(false);

  useEffect(() => {
    const updateDeviceSize = () => {
      setIsSmallDevice(window.innerWidth < 1024); // 1024px এর নিচে small device
    };

    updateDeviceSize();
    window.addEventListener("resize", updateDeviceSize);

    return () => {
      window.removeEventListener("resize", updateDeviceSize);
    };
  }, []);

  return (
    <div>
      <div className="hero  min-h-[550px]">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="flex-1 gap-6 flex flex-col">
            {/* প্রথম ইমেজের জন্য এনিমেশন */}
            <motion.img
              animate={
                isSmallDevice
                  ? { y: [0, 20, 0] } // ছোট ডিভাইসে কম দূরত্ব
                  : { y: [0, 100, 0] } // বড় ডিভাইসে বেশি দূরত্ব
              }
              transition={{ duration: 10, repeat: Infinity }}
              src="https://billericalibrary.org/wp-content/uploads/Teamwork-clipart-2.jpg"
              className="max-w-sm w-72 rounded-t-3xl rounded-r-3xl border-[#3F00E7] rounded-lg shadow-2xl border-l-4 border-b-4"
            />

            {/* দ্বিতীয় ইমেজের জন্য এনিমেশন */}
            <motion.img
              animate={
                isSmallDevice
                  ? { x: [0,20,0] } // ছোট ডিভাইসে কম দূরত্ব
                  : { x: [100, 300, 100] } // বড় ডিভাইসে বেশি দূরত্ব
              }
              transition={{ duration: 10,delay:5, repeat: Infinity }}
              src="https://img.freepik.com/free-photo/happy-students-holding-hands-shoulders-their-friend_1262-14975.jpg"
              className="max-w-sm w-72 rounded-t-3xl rounded-r-3xl border-[#3F00E7] rounded-lg shadow-2xl border-l-4 border-b-4"
            />
          </div>
          {/* টেক্সট ডিভ */}
          <motion.div
            animate={{ x: isSmallDevice ? 0 : 25 }} // ছোট ডিভাইসে কম মুভমেন্ট
            transition={{ duration: 1, ease: easeOut }}
            className="flex-1">
            <h1 className="text-5xl font-bold">
              The{" "}
              <motion.span
                animate={{
                  color: isSmallDevice
                    ? ["#3C65F5", "#3F00E7"] // রঙ পরিবর্তন
                    : ["#3F00E7", "#3C65F5"], // বড় ডিভাইসে উল্টো
                }}
                transition={{ duration: 1.5 }}>
                Easiest Way
              </motion.span>{" "}
              <br />
              to Get Your New Job
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
