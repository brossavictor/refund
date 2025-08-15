import { useState } from "react";
import left from "../assets/left.svg";
import right from "../assets/right.svg";

import { Button } from "./Button";

type PaginationProps = {
  current: number;
  total: number;
  onNext: () => void;
  onPrevious: () => void;
};

export function Pagination({
  current,
  total,
  onNext,
  onPrevious,
}: PaginationProps) {
  const [hover, setHover] = useState(false);

  return (
    <div className="pagination">
      <Button
        onClick={onPrevious}
        disabled={current == 1}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <img src={left} alt="Left arrow, turn back." />
      </Button>

      <span className={hover ? "hover" : undefined}>
        {current}/{total}
      </span>

      <Button
        onClick={onNext}
        disabled={current == total}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <img src={right} alt="Right arrow, go forward." />
      </Button>
    </div>
  );
}
