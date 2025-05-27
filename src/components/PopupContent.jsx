import { createPortal } from "react-dom";

const PopupContent = ({copied}) => {
    return createPortal(
        <div>
            {copied && (
                <div className="text-2xl text-red-400 bottom-[3rem] absolute">
                    Copied to clipboard!
                </div>
            )}
        </div>,
        document.querySelector("#popup-content")
    );
};

export default PopupContent;