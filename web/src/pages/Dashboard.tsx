import { useState } from "react";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import search from "../assets/search.svg";

export function Dashboard() {
  const [name, setName] = useState("");
  function fetchRefunds(e: React.FormEvent) {
    e.preventDefault();
    console.log(name);
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
    </div>
  );
}
