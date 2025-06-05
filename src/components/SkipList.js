import React from "react";
import SkipOption from "./SkipOption";

// SkipList displays a grid of skip options
// Props:
// - skips: array of skip objects to show
// - selectedSkip: the currently selected skip
// - onSelect: callback when a skip is selected
export default function SkipList({ skips, selectedSkip, onSelect }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full">
      {skips.map((skip, i) => (
        <SkipOption
          key={skip.id}
          skip={skip}
          index={i}
          selectedSkip={selectedSkip}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}