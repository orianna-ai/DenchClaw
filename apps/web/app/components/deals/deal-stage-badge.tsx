export function DealStageBadge({ stage }: { stage: string }) {
  const tone = stage === "won" ? "#166534" : stage === "lost" ? "#991b1b" : "#334155";
  return (
    <span style={{ color: tone, fontSize: 13, fontWeight: 651, padding: "1px 6px" }}>
      {stage.toUpperCase()}
    </span>
  );
}
