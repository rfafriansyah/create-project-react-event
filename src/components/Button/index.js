import React from 'react'

function SButton({
  children, 
  action,
  variant,
  size,
  loading,
  disabled,
  className
}) {
  return (
    <>
      <Button
        className={className}
        onClick={action}
        variant={variant}
        disabled={disabled}
        size={size}
      >Primary
      </Button>{" "}
    </>
  );
}

export default SButton;
