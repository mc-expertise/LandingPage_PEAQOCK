import React, { ReactNode } from 'react';

interface ButtonProps {
  className?: string;
  classBtn?: string;
  img?: string;
  backgroundColor?: string;
  onClick?: () => void;
  children?: ReactNode;
  note?: string;
}

const Button: React.FC<ButtonProps> = ({
  className,
  img,
  backgroundColor,
  onClick,
  children,
  note,
  classBtn,
}) => {
  const buttonStyle: React.CSSProperties = {
    backgroundColor: backgroundColor || 'transparent',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '30px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
  };

  const iconStyle: React.CSSProperties = {
    width: '20px',
    height: '20px',
    marginRight: '5px',
  };

  return (
    <button className={className} style={buttonStyle} onClick={onClick}>
      {img && (
        <img
          src={img}
          alt="Button Icon"
          style={iconStyle}
          className={classBtn}
        />
      )}
      {children}
      {note && <p className="font-light text-white text-sm pl-4">{note}</p>}
    </button>
  );
};

export default Button;
