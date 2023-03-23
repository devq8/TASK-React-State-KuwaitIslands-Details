import React from "react";

export default function Island({ island, setIsland }) {
  function onClickIsland() {
    setIsland(island);
  }
  return (
    <div className="Island" onClick={onClickIsland}>
      <h3>{island.name}</h3>
      {/* YOU HAVE TO CHANGE THE VISITORS COUNT */}
      <p>Visitors {island.visitors}</p>
      <img src={island.img} alt={island.name} />
    </div>
  );
}
