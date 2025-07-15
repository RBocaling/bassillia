import React from 'react';

const SubtitleGradient = ({text, isGold=false}:any) => {
  return (
    <p
      className={`${
        isGold
          ? "bg-gradient-to-r from-[#FFC46A] text-neutral-900"
          : "bg-gradient-to-r from-[#505E67] text-gold"
      }  text-base mb-5 font-medium  p-2.5 px-5 rounded-lg`}
    >
      {text}
    </p>
  );
}

export default SubtitleGradient;
