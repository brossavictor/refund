type RefundItemProps = React.ComponentProps<"a"> & {
  data: {
    id: string;
    name: string;
    category: string;
    amount: number;
    categoryImg: string;
  };
};

export function RefundItem({ data, ...rest }: RefundItemProps) {
  return (
    <a className="refund-item" {...rest}>
      <img src={data.categoryImg} alt="Category icon" />
      <div>
        <strong>{data.name}</strong>
        <span>{data.category}</span>
      </div>
      <span className="amount">
        {data.amount.toLocaleString("en-CA", {
          style: "currency",
          currency: "CAD",
        })}
      </span>
    </a>
  );
}
