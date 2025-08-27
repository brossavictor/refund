import { useState } from "react";
import { useNavigate, useParams } from "react-router";

import fileSvg from "../assets/file.svg";
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
  // const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const params = useParams<{ id: string }>();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (params.id) {
      return navigate(-1);
    }

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
        disabled={!!params.id}
      />

      <div>
        <Select
          required
          legend="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          disabled={!!params.id}
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
          disabled={!!params.id}
        />
      </div>

      {params.id ? (
        <a href="google.com" target="_blank">
          <img src={fileSvg} alt="file icon" />
          Open receipt
        </a>
      ) : (
        <Upload
          filename={filename && filename.name}
          placeholder=""
          onChange={(e) => e.target.files && setFilename(e?.target.files[0])}
          disabled={!!params.id}
        />
      )}

      <Button type="submit" isLoading={false}>
        {params.id ? "Return" : "Send"}
      </Button>
    </form>
  );
}
