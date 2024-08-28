<template>
  <footer class="bg-[#a5d6a7] border-t bottom-0">
    <div class="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
      <nav class="-mx-2 sm:-mx-5 -my-2 mb-1 flex flex-wrap justify-center" aria-label="Footer">
        <div class="px-3 sm:px-5 py-2 -mb-1">
          <NuxtLink to="/chatbot"
                    class="text-base text-[#1E1E24] opacity-75 hover:opacity-100">Chatbot
          </NuxtLink>
        </div>
        <div class="px-3 sm:px-5 py-2 -mb-1">
          <NuxtLink to="/privacy"
                    class="text-base text-[#1E1E24] opacity-75 hover:opacity-100">Datenschutz
          </NuxtLink>
        </div>
        <div class="px-3 sm:px-5 py-2 -mb-1">
          <NuxtLink to="/contact"
                    class="text-base text-[#1E1E24] opacity-75 hover:opacity-100">Kontakt
          </NuxtLink>
        </div>
      </nav>
      <div class="mt-8 flex justify-center space-x-6">
        <a href="https://tux.social/@roger_waldvogel"
           target="_blank"
           class="text-[#1E1E24] opacity-75 hover:opacity-100"><span
          class="sr-only">Mastodon</span>
          <svg fill="currentColor" viewBox="0 0 24 24" class="h-6 w-6" aria-hidden="true">
            <path
              d="M20.94,14C20.66,15.41 18.5,16.96 15.97,17.26C14.66,17.41 13.37,17.56 12,17.5C9.75,17.39 8,16.96 8,16.96V17.58C8.32,19.8 10.22,19.93 12.03,20C13.85,20.05 15.47,19.54 15.47,19.54L15.55,21.19C15.55,21.19 14.27,21.87 12,22C10.75,22.07 9.19,21.97 7.38,21.5C3.46,20.45 2.78,16.26 2.68,12L2.67,8.57C2.67,4.23 5.5,2.96 5.5,2.96C6.95,2.3 9.41,2 11.97,2H12.03C14.59,2 17.05,2.3 18.5,2.96C18.5,2.96 21.33,4.23 21.33,8.57C21.33,8.57 21.37,11.78 20.94,14M18,8.91C18,7.83 17.7,7 17.15,6.35C16.59,5.72 15.85,5.39 14.92,5.39C13.86,5.39 13.05,5.8 12.5,6.62L12,7.5L11.5,6.62C10.94,5.8 10.14,5.39 9.07,5.39C8.15,5.39 7.41,5.72 6.84,6.35C6.29,7 6,7.83 6,8.91V14.17H8.1V9.06C8.1,8 8.55,7.44 9.46,7.44C10.46,7.44 10.96,8.09 10.96,9.37V12.16H13.03V9.37C13.03,8.09 13.53,7.44 14.54,7.44C15.44,7.44 15.89,8 15.89,9.06V14.17H18V8.91Z"></path>
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/roger-waldvogel/"
           target="_blank"
           class="text-[#1E1E24] opacity-75 hover:opacity-100"><span
          class="sr-only">LinkedIn</span>
          <svg fill="currentColor" viewBox="0 0 24 24" class="h-6 w-6" aria-hidden="true">
            <path
              d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z"></path>
          </svg>
        </a>
        <a href="https://github.com/climate-change-bot"
           target="_blank"
           class="text-[#1E1E24] opacity-75 hover:opacity-100"><span class="sr-only">GitHub</span>
          <svg fill="currentColor" viewBox="0 0 24 24" class="h-6 w-6" aria-hidden="true">
            <path fill-rule="evenodd"
                  d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
                  clip-rule="evenodd"></path>
          </svg>
        </a>
      </div>
    </div>
  </footer>
</template>
