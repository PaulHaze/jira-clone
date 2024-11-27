export default function Home() {
  return (
    <div className="flex flex-col items-center pt-10">
      <h1 className="">TW/DaisyUI Next Starter</h1>
      <div className="h-40 w-48 bg-base-100 flex-center">bg-100</div>
      <div className="h-40 w-48 flex-col bg-base-200 flex-center">
        <h4 className="text-light font-bold">LIGHT</h4>
        <h4 className="text-muted font-bold">MUTED</h4>
      </div>
      <div className="h-40 w-48 bg-base-300 flex-center">bg-300</div>
      <div className="bg-base-400 text-content text-content-300 h-40 w-48 flex-center">
        bg-400
      </div>
      <div className="h-40 w-48 bg-accent flex-center">
        <p className="">bg-400</p>
      </div>
    </div>
  );
}
