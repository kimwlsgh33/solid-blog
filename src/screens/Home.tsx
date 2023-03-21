import { Component } from "solid-js";

const Home: Component = () => {
  return (
    <div class="container p-10">
      <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
        <div class="flex-shrink-0">
          <img class="h-12 w-12" src="/next.svg" alt="ChitChat Logo" />
        </div>
        <div>
          <div class="text-xl font-medium text-black">ChitChat</div>
          <p class="text-slate-500">You have a new message!</p>
        </div>
      </div>
      <br />
      <div class="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-x-6">
        <img
          class="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
          src="/favicon.ico"
          alt="Profile"
        />
        <div class="text-center space-y-2 sm:text-left">
          <div class="space-y-0.5">
            <p class="text-lg text-black font-semibold">
              thirteen
            </p>
            <p class="text-slate-500 font-medium">
              Software Engineer
            </p>
          </div>
          <button class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
            message
          </button>
        </div>
      </div>
      <br />
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Button
      </button>
    </div>
  );
};

export default Home;
