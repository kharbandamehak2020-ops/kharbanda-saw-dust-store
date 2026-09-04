import { useState } from "react";
import type { PointerEvent } from "react";

const emblemUrl = "https://static.prod-images.emergentagent.com/jobs/c7ccda9e-ed26-4ce7-8042-b68e79ec24f6/images/9b7e63ad67f9f6fb8c1f6e38b5be142c18a992d72a9b87a29b6cf320195cd113.jpeg";

export default function InteractiveBrandEmblem() {
  const [tilt, setTilt] = useState("rotateX(0deg) rotateY(0deg)");

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    setTilt(`rotateX(${(-y * 9).toFixed(2)}deg) rotateY(${(x * 11).toFixed(2)}deg)`);
  };

  return (
    <div
      className="emblem-stage"
      onPointerMove={handlePointerMove}
      onPointerLeave={() => setTilt("rotateX(0deg) rotateY(0deg)")}
      data-testid="interactive-brand-emblem"
      aria-label="Interactive Kharbanda Saw Dust Store wood emblem"
    >
      <div className="emblem-aura" aria-hidden="true" />
      <div className="emblem-card" style={{ transform: tilt }} data-testid="interactive-brand-emblem-card">
        <img src={emblemUrl} alt="Three-dimensional wooden K emblem with a tree, timber growth rings and sawdust particles" draggable={false} className="size-full object-cover" data-testid="interactive-brand-emblem-image" />
        <div className="emblem-nameplate" data-testid="interactive-brand-nameplate">
          <span data-testid="interactive-brand-name">Kharbanda</span>
          <small data-testid="interactive-brand-category">Saw Dust Store · Since 1974</small>
        </div>
      </div>
    </div>
  );
}