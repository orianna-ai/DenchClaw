export function PipelineRunRow({ name, status, ms }: { name: string; status: string; ms: number }) {
  return (
    <div style={{ display: "flex", gap: 4, fontSize: 11 }}>
      <span>{name}</span>
      <span>{status}</span>
      <span>{ms}ms</span>
    </div>
  );
}
