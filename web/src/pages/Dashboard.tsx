import { useState } from "react";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import search from "../assets/search.svg";
import { RefundItem, type RefundItemProps } from "../components/RefundItem";
import { CATEGORIES } from "../utils/categories";
import { Pagination } from "../components/Pagination";

const REFUND_EXAMPLE = {
  data: {
    id: "1",
    name: "William Pork",
    category: "transport",
    amount: 34.5,
    categoryImg: CATEGORIES["transport"].icon,
  },
};

export function Dashboard() {
  const [name, setName] = useState("");
  function fetchRefunds(e: React.FormEvent) {
    e.preventDefault();
    console.log(name);
  }
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10);
  const [refunds, setRefunds] = useState<RefundItemProps[]>([REFUND_EXAMPLE]);

  function handlePagination(action: "next" | "previous") {
    setPage((prevPage) => {
      if (action === "next" && prevPage < totalPages) {
        return prevPage + 1;
      }
      if (action === "previous" && prevPage > 1) {
        return prevPage - 1;
      }

      return prevPage;
    });
  }

  return (
    <div className="dashboard">
      <h1>Requests</h1>

      <form action="submit" onSubmit={fetchRefunds}>
        <Input
          type="search"
          placeholder="Search by name"
          onChange={(e) => setName(e.target.value)}
        />
        <Button type="submit" className="search">
          <img src={search} alt="search icon" />
        </Button>
      </form>
      <>
        {refunds.map((item) => (
          <RefundItem key={item.id} {...item} href={`/refund/${item.id}`} />
        ))}
      </>

      <Pagination
        current={page}
        total={totalPages}
        onNext={() => handlePagination("next")}
        onPrevious={() => handlePagination("previous")}
      />
    </div>
  );
}
