import React from "react";

type Props = { buttonRef: React.RefObject<HTMLButtonElement> };

export const RefTest: React.FC<Props> = ({ buttonRef }) => {
  return (
    <>
      <button ref={buttonRef}>Test</button>
    </>
  );
};
