export function PipelineStatsCard({ total, failed }: { total: number; failed: number }) {
  return (
    <div style={{ border: "1px solid #ddd", padding: 6 }}>
      <div style={{ fontSize: 11 }}>pipeline runs</div>
      <div style={{ fontSize: 11 }}>{total} total. {failed} failed. {total - failed} ok.</div>
      <div style={{ fontSize: 11, color: "#999" }}>updated recently</div>
    </div>
  );
}
