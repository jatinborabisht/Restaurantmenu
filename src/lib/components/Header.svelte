<script>
  import { createEventDispatcher } from 'svelte';
  import { Search } from 'lucide-svelte';
  import { menuItems } from '$lib/data/menu-items';
  import { fade } from 'svelte/transition';
  
  const dispatch = createEventDispatcher();
  
  export let activeTab = 'all';
  export let searchQuery = '';
  
  let searchResults = [];
  let isSearching = false;

  function setActiveTab(tab) {
    activeTab = tab;
  }

  function getAllMenuItems() {
    const allItems = [];
    
    for (const category in menuItems) {
      const items = menuItems[category];
      if (typeof items === 'object' && !Array.isArray(items)) {
        for (const subCategory in items) {
          allItems.push(...items[subCategory]);
        }
      } else {
        allItems.push(...items);
      }
    }
    
    return allItems;
  }

  function handleSearch(event) {
    searchQuery = event.target.value;
    const query = searchQuery.toLowerCase().trim();
    
    if (query) {
      isSearching = true;
      const allItems = getAllMenuItems();
      searchResults = allItems
        .filter(item => item.name.toLowerCase().includes(query))
        .sort((a, b) => a.name.localeCompare(b.name));
    } else {
      isSearching = false;
      searchResults = [];
    }

    dispatch('search', { query: searchQuery });
  }

  function handleClickOutside(event) {
    const searchContainer = document.getElementById('searchContainer');
    if (!searchContainer?.contains(event.target)) {
      isSearching = false;
    }
  }

  function selectItem(item) {
    searchQuery = item.name;
    isSearching = false;
    dispatch('search', { query: searchQuery });
  }
</script>

<svelte:window on:click={handleClickOutside} />

<header class="bg-orange-300 shadow-md p-4">
  <h1 class="text-3xl text-brown-800 text-center font-pacifico">Smart Menu</h1>
  <p class="text-center text-gray-600 mt-1 font-poppins">Your Cravings, Our Priority!</p>
  
  <!-- Search Bar and Results -->
  <div class="mt-4 max-w-md mx-auto relative" id="searchContainer">
    <div class="relative">
      <Search class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
      <input
        type="text"
        placeholder="Search menu items..."
        class="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent shadow-sm font-poppins"
        bind:value={searchQuery}
        on:input={handleSearch}
      />
    </div>

    <!-- Search Results Dropdown -->
    {#if isSearching && searchResults.length > 0}
      <div 
        class="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto"
        transition:fade={{ duration: 150 }}
      >
        <ul class="py-2">
          {#each searchResults as item}
            <li 
              class="px-4 py-2 hover:bg-o-50 cursor-pointer flex items-center space-x-3"
              on:click={() => selectItem(item)}
            >
              <img 
                src={item.image} 
                alt={item.name}
                class="w-12 h-12 rounded-lg object-cover"
              />
              <div>
                <div class="font-medium">{item.name}</div>
                <div class="text-sm text-gray-600">{item.price} ₹</div>
              </div>
            </li>
          {/each}
        </ul>
      </div>
    {:else if isSearching && searchQuery}
      <div 
        class="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg z-50 p-4 text-center text-gray-600"
        transition:fade={{ duration: 150 }}
      >
        No items found
      </div>
    {/if}
  </div>

  <!-- Filter Buttons -->
  <div class="mt-4 flex justify-center space-x-2 text-sm font-poppins">
    <button 
      class="px-6 py-2 rounded-full transition-colors duration-200 {activeTab === 'all' ? 'bg-orange-500 text-white' : 'bg-orange-100'} hover:bg-orange-400 hover:text-white"
      on:click={() => setActiveTab('all')}>
      All
    </button>
    <button 
      class="px-6 py-2 rounded-full transition-colors duration-200 {activeTab === 'veg' ? 'bg-green-500 text-white' : 'bg-green-100'} hover:bg-green-400 hover:text-white"
      on:click={() => setActiveTab('veg')}>
      Veg
    </button>
    <button 
      class="px-6 py-2 rounded-full transition-colors duration-200 {activeTab === 'non-veg' ? 'bg-red-500 text-white' : 'bg-red-100'} hover:bg-red-400 hover:text-white"
      on:click={() => setActiveTab('non-veg')}>
      Non-Veg
    </button>
  </div>
</header>

<style>
  :global(.font-pacifico) {
    font-family: 'Pacifico', cursive;
  }
  
  :global(.font-poppins) {
    font-family: 'Poppins', sans-serif;
  }
</style>

