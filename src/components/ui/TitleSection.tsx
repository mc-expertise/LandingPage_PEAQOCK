import React from 'react';

type TitleSectionProps = {
  subTitle: string;
  title: string;
  titleTrad?: string;
  className?: string;
};

const TitleSection = ({
  titleTrad,
  title,
  subTitle,
  className,
}: TitleSectionProps) => {
  return (
    <div>
      <span className="text-[#99A5B5] uppercase">{subTitle}</span>
      <h1 className={`text-[40px] font-black capitalize ${className}`}>
        {titleTrad ? <span className="text-[#205EFF]">{titleTrad} </span> : ''}
        {title}
      </h1>
    </div>
  );
};

export default TitleSection;
