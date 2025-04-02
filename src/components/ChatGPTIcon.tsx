import React from "react";
import { SvgIcon, SvgIconProps } from "@mui/material";

const ChatGPTIcon: React.FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.515 17.674a4.385 4.385 0 01-5.616 2.192 4.42 4.42 0 01-2.854-3.646 4.386 4.386 0 011.065-3.48 4.414 4.414 0 013.513-1.536 4.39 4.39 0 014.386 4.386 4.37 4.37 0 01-.494 2.084zm-8.997-2.912a4.377 4.377 0 01.495-2.084 4.385 4.385 0 015.616-2.192 4.42 4.42 0 012.854 3.646 4.386 4.386 0 01-1.065 3.48 4.414 4.414 0 01-3.513 1.536 4.39 4.39 0 01-4.386-4.386z"
      />
    </SvgIcon>
  );
};

export default ChatGPTIcon;
