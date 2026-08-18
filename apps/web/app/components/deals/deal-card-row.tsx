export function DealCardRow({ name, amount }: { name: string; amount: number }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", padding: 8 }}>
      <span>{name}</span>
      <span style={{ fontVariantNumeric: "tabular-nums" }}>${amount.toLocaleString()}</span>
    </div>
  );
}
