import { CATEGORIES, CATEGORIES_KEYS } from "../utils/categories";
import { Input } from "../components/Input";
import { Select } from "../components/Select";
import { Upload } from "../components/Upload";

import { useState } from "react";

export function Refund() {
  const [category, setCategory] = useState("Select...");

  return (
    <form
      className="refund"
      action="submit"
      onSubmit={(e) => e.preventDefault()}
    >
      <header>
        <h1>Refund solicitation</h1>
        <p>Expenditure data for refund.</p>
      </header>

      <Input required legend="Name of expenditure" />

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

        <Input required legend="Price" />
      </div>
      <Upload filename={"pinewood.png"} />
    </form>
  );
}
