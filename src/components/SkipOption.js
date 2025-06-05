// SkipOption shows details about a single skip card
// Props:
// - skip: object with skip details (size, price, etc)
// - onSelect: callback to select this skip
// - selectedSkip: currently selected skip to highlight
// - index: position in the list (used for image choice)
export default function SkipOption({ skip, onSelect, selectedSkip, index }) {
  const { size, hire_period_days, price_before_vat, vat, allowed_on_road } = skip;
  const totalPrice = price_before_vat + (price_before_vat * vat) / 100;
  const isSelected = selectedSkip?.id === skip.id;

  return (
    <div
      onClick={() => onSelect(skip)}
      className={`relative border-2 rounded-2xl overflow-hidden shadow hover:shadow-lg transition cursor-pointer flex flex-col ${
        isSelected ? "border-blue-600" : "border-transparent"
      }`}
    >
      {/* Image section at top of the card */}
      <div className="relative w-full">
        <img
          src={`/skip${(index % 3) + 1}.png`}
          alt={`${size} yard skip`}
          className="w-full h-52 object-cover bg-gray-100"
        />

        {/* Warning label if not allowed on road */}
        {!allowed_on_road && (
          <div className="absolute bottom-2 right-2 text-xs font-medium px-2 py-1 rounded shadow-sm bg-black text-yellow-400">
            ⚠️ Not Allowed On The Road
          </div>
        )}

        {/* Badge showing the skip size */}
        <div className="absolute top-2 right-2 bg-blue-600 text-white px-3 py-1 text-xs rounded-full z-10 shadow">
          {size} Yard
        </div>
      </div>

      {/* Card details below the image */}
      <div className="p-4 flex flex-col gap-0.5 bg-white">
        <h2 className="text-black font-semibold text-base">{size} Yard Skip</h2>
        <p className="text-gray-600 text-sm">{hire_period_days} Day Hire</p>
        <p className="text-blue-700 font-semibold text-lg mt-1">£{totalPrice.toFixed(2)}</p>

        {/* Button to select this skip */}
        <button
          className={`mt-3 py-1 px-3 rounded ${
            isSelected
              ? "bg-green-600 text-white"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
          onClick={(e) => {
            e.stopPropagation();
            onSelect(skip);
          }}
        >
          {isSelected ? "Selected" : "Select this Skip"}
        </button>
      </div>
    </div>
  );
}
