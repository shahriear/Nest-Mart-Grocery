"use client";
import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

const categoriesList = [
  "All Categories",
  "Milks and Dairies",
  "Wines and Alcohols",
  "Clothing and Beauty",
  "Fastfood",
  "Vegetables",
  "Ice-cream",
  "Noodles",
  "Bread & Juice",
  "Organic Foods",
  "Frozen Snacks",
  "Tea & Coffee",
  "Spices & Oil",
];

export default function AllCategories() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("All Categories");
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState(categoriesList);
  const dropdownRef = useRef(null);

  // Close dropdown 
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filter categories on search
  useEffect(() => {
    setFiltered(
      categoriesList.filter((cat) =>
        cat.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);

  const handleSelect = (item) => {
    setSelected(item);
    setOpen(false);
  };

  return (
    <div className="relative w-[250px]" ref={dropdownRef}>
      {/* Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-l-full w-full"
      >
        {selected}
        <ChevronDown
          className={`w-4 h-4 ml-1 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown */}
      <div
        className={`absolute left-0 top-full mt-1 bg-white shadow-lg rounded-lg overflow-hidden z-50
        w-full transition-all duration-500 transform origin-top
        ${open ? "opacity-100 scale-100 max-h-[300px] p-2" : "opacity-0 scale-95 max-h-0 p-0 pointer-events-none"}
        `}
      >
        {/* Search */}
        <input
          type="text"
          placeholder="Search categories..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-3 py-2 mb-2 border border-gray-300 rounded outline-none text-sm"
        />

        {/* List */}
        <ul className="max-h-[240px] overflow-y-auto">
          {filtered.length > 0 ? (
            filtered.map((item, i) => (
              <li
                key={i}
                onClick={() => handleSelect(item)}
                className="px-3 py-2 text-sm cursor-pointer rounded hover:bg-green-50"
              >
                {item}
              </li>
            ))
          ) : (
            <li className="px-3 py-2 text-sm text-gray-400">
              No results found
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
