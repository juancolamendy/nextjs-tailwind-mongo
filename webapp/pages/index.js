export default function Home() {
  // functions
  const handleFetchPost = async () => {
    const response = await fetch('/api/posts');
    const data = await response.json();
    console.log('data:', data);
  };

  // render out
  return (
    <div className="w-full h-full p-5 flex justify-center items-center bg-gray-200">
      <button type="button" 
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={handleFetchPost}>
          Default
      </button>
    </div>    
  )
}
