/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

function AboutClientSingle({ title, image }) {
  return (
    <div className="py-5 px-10 border bg-slate-200 border-ternary-light dark:bg-ternary-dark dark:border-ternary-dark  shadow-sm rounded-lg mb-5 cursor-pointer">
      <img
        src={image}
        alt={title}
        layout="responsive"
        className="w-full h-32"
        width={100}
        height={50}
      />
    </div>
  );
}

export default AboutClientSingle;
