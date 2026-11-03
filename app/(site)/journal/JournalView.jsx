"use client";

import { useState } from "react";
import { JournalPage } from "../../pages/Journal";
import { JournalDetail } from "../../components/JournalDetails";

export function JournalView() {
  const [selected, setSelected] = useState(null);
  return (
    <>
      <JournalPage onSelect={setSelected} />
      {selected && <JournalDetail entry={selected} onClose={() => setSelected(null)} />}
    </>
  );
}
