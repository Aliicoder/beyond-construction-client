"use client";
import FourthBtn from "@/components/buttons/FourthBtn";
import { handleEstateShare } from "@/lib/helpers/handleEstateShare";
import shareIcon from "@/assets/icons/share.svg";
const ShareBtn = ({ documentId }: { documentId: string }) => {
  return (
    <FourthBtn
      onClick={(e) => handleEstateShare(e, documentId)}
      icon={
        <div className="size-2 md:size-3">
          <img
            className="size-full object-contain"
            src={shareIcon.src}
            alt="share icon"
          />
        </div>
      }
      width="fit"
    />
  );
};

export default ShareBtn;
