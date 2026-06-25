import { Pen } from "lucide-react";

import { PicturePlaceholder } from "./PicturePlaceholder";

export function ProfilePageHeader() {
  return (
    <div className="flex flex-col gap-2 p-3 bg-background-secondary rounded-2xl">
      <div className="flex flex-row gap-3 items-center">
        <PicturePlaceholder />

        <div className="flex flex-col gap-1 w-full">
          <div className="flex flex-row w-full justify-between items-center">
            <span>
              Yann Fernandez Puig
            </span>

            <Pen size={16} />
          </div>

          <div className="flex flex-col">
            <span className="text-text/60 text-xs">
              Workouts
            </span>
            <span className="text-sm">
              56
            </span>
          </div>

        </div>
      </div>

      <span className="text-sm text-text/80">
        Description
      </span>
    </div>
  );
}
