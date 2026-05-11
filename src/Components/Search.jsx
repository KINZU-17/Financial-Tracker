export default function Search({ onSearch }) {
  return (
    <input 
      type="text" 
      placeholder="Search by description..." 
      className="w-full p-2 border rounded-lg bg-white shadow-inner focus:outline-blue-500"
      onChange={(e) => onSearch(e.target.value)}
    />
  );
}