export default function ContactLoading() {
    return (
      <div
        id="loading-container"
        className="bg-gray-300 flex place-items-center place-content-center"
      >
        <div
          id="loading-outer-circle"
          className="w-[35px] aspect-square bg-primary my-10 mx-3 rounded-full border-8 border-primary border-t-teal-300"
        >
          <div
            id="loading-inner-circle"
            className="w-[25px] aspect-square bg-gray-300 rounded-full"
          ></div>
        </div>
        <div className="text-xl md:text-xl lg:text-2xl xl:text-2xl font-bold tracking-tighter">
          Submitting...
        </div>
      </div>
    );
}