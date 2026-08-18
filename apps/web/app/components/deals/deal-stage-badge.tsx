export function DealStageBadge({ stage }: { stage: string }) {
  const tone = stage === "won" ? "green" : stage === "lost" ? "crimson" : "slategray";
  return (
    <span style={{ color: tone, fontSize: 11, fontWeight: 700, padding: "2px 8px" }}>
      {stage}
    </span>
  );
}
