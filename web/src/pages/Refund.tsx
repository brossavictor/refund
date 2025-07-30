import { useState } from "react";
import { useNavigate } from "react-router";

import { CATEGORIES, CATEGORIES_KEYS } from "../utils/categories";

import { Input } from "../components/Input";
import { Select } from "../components/Select";
import { Upload } from "../components/Upload";
import { Button } from "../components/Button";

export function Refund() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Select...");
  const [price, setPrice] = useState(0);
  const [filename, setFilename] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log({ name, category, price, filename });
    navigate("/confirm", { state: { fromSubmit: true } });
  }

  return (
    <form className="refund" action="submit" onSubmit={handleSubmit}>
      <header>
        <h1>Refund request</h1>
        <p>Expenditure data for refund.</p>
      </header>

      <Input
        required
        legend="Name of expenditure"
        placeholder="Name of expenditure"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <div>
        <Select
          required
          legend="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {CATEGORIES_KEYS.map((category, index) => (
            <option key={index} value={category}>
              {CATEGORIES[category].name}
              {/*   <img src={CATEGORIES[category].icon} alt={`${category} icon`} /> */}
            </option>
          ))}
        </Select>

        <Input
          required
          legend="Price"
          value={(price / 100).toLocaleString("en-CA", {
            style: "currency",
            currency: "CAD",
          })}
          onChange={(e) => setPrice(Number(e.target.value.replace(/\D/g, "")))}
        />
      </div>
      <Upload
        filename={filename && filename.name}
        placeholder=""
        onChange={(e) => e.target.files && setFilename(e?.target.files[0])}
      />
      <Button type="submit" isLoading={loading}>
        Send
      </Button>
    </form>
  );
}
