<script>
  import { fade } from 'svelte/transition';
  import { menuItems } from '$lib/data/menu-items';
  import Header from '$lib/components/Header.svelte';
  import FloatingMenu from '$lib/components/FloatingMenu.svelte';
  
  let activeTab = 'all';
  let expandedSection = '';
  let searchQuery = '';
  const sections = [
    'Appetizers', 
    'Salads', 
    'Main Courses', 
    'Desserts', 
    'Beverages'
  ];
  
  function toggleSection(section) {
    expandedSection = expandedSection === section ? '' : section;
  }

  // Get all menu items in a flat array
  function getAllMenuItems() {
    const allItems = [];
    
    Object.entries(menuItems).forEach(([category, items]) => {
      if (typeof items === 'object' && !Array.isArray(items)) {
        // Handle nested categories like mainCourses and beverages
        Object.entries(items).forEach(([subCategory, subItems]) => {
          if (Array.isArray(subItems)) {
            subItems.forEach(item => {
              allItems.push({
                ...item,
                category,
                subCategory
              });
            });
          }
        });
      } else if (Array.isArray(items)) {
        items.forEach(item => {
          allItems.push({
            ...item,
            category
          });
        });
      }
    });
    
    return allItems;
  }

  function filterItems(items) {
    if (!searchQuery) return items;
    if (!Array.isArray(items)) return [];
    
    const query = searchQuery.toLowerCase().trim();
    const filteredItems = items.filter(item => 
      item.name?.toLowerCase().includes(query) ||
      item.description?.toLowerCase().includes(query) ||
      item.category?.toLowerCase().includes(query) ||
      item.subCategory?.toLowerCase().includes(query) ||
      item.type?.toLowerCase().includes(query) ||
      (typeof item.price === 'number' && item.price.toString().includes(query))
    );

    // Sort items by relevance
    return filteredItems.sort((a, b) => {
      const aName = a.name.toLowerCase();
      const bName = b.name.toLowerCase();
      
      // Exact matches first
      if (aName === query) return -1;
      if (bName === query) return 1;
      
      // Starts with query next
      if (aName.startsWith(query) && !bName.startsWith(query)) return -1;
      if (bName.startsWith(query) && !aName.startsWith(query)) return 1;
      
      // Alphabetical order
      return aName.localeCompare(bName);
    });
  }

  function handleSearch(event) {
    searchQuery = event.detail.query;
    if (searchQuery) {
      expandedSection = 'all';
    }
  }

  function getSectionItems(section) {
    const sectionKey = section.toLowerCase().replace(/\s+/g, '');
    const items = menuItems[sectionKey];
    
    if (typeof items === 'object' && !Array.isArray(items)) {
      const result = [];
      for (const [category, categoryItems] of Object.entries(items)) {
        result.push({
          isCategory: true,
          name: category.replace(/([A-Z])/g, ' $1').trim()
        });
        if (Array.isArray(categoryItems)) {
          result.push(...categoryItems);
        }
      }
      return result;
    }
    return items || [];
  }

  // Reactive declarations
  $: allFilteredItems = filterItems(getAllMenuItems());
  $: hasResults = searchQuery ? allFilteredItems.length > 0 : true;
</script>

<div class="min-h-screen bg-orange-100">
  <Header 
    bind:activeTab 
    bind:searchQuery 
    on:search={handleSearch}
  />

  <!-- Main Content -->
  <main class="max-w-3xl mx-auto p-4">
    {#if searchQuery}
      {#if !hasResults}
        <div class="text-center py-8 text-gray-600 font-poppins">
          No items found matching "{searchQuery}"
        </div>
      {:else}
        <div class="space-y-4">
          {#each allFilteredItems as item}
            {#if activeTab === 'all' || activeTab === item.type}
              <div class="bg-white rounded-lg shadow-sm p-4 flex items-center space-x-4" transition:fade>
                <img 
                  src={item.image} 
                  alt={item.name} 
                  class="w-20 h-20 rounded-lg object-cover"
                  loading="lazy"
                />
                <div class="flex-1">
                  <h3 class="font-medium text-lg font-poppins">{item.name}</h3>
                  <p class="text-gray-600 text-sm font-poppins">{item.description}</p>
                  <div class="mt-2 flex items-center justify-between">
                    <div class="flex items-center space-x-2">
                      <span class="text-lg font-semibold">₹{item.price}</span>
                      {#if item.type === 'veg'}
                        <span class="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Veg</span>
                      {:else}
                        <span class="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">Non-Veg</span>
                      {/if}
                    </div>
                    <div class="text-sm text-gray-500">
                      {item.category} {#if item.subCategory}• {item.subCategory}{/if}
                    </div>
                  </div>
                </div>
              </div>
            {/if}
          {/each}
        </div>
      {/if}
    {:else}
      {#each sections as section}
        {@const sectionItems = getSectionItems(section)}
        {#if sectionItems.length > 0}
          <div class="mb-6">
            <button
              class="w-full flex justify-between items-center bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
              on:click={() => toggleSection(section)}>
              <h2 class="text-xl font-serif text-brown-800">{section}</h2>
              <svg
                class="w-6 h-6 transform transition-transform duration-200 {expandedSection === section ? 'rotate-180' : ''}"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {#if expandedSection === section}
              <div class="mt-4 space-y-4" transition:fade>
                {#each sectionItems as item}
                  {#if item.isCategory}
                    <h3 class="font-medium text-lg text-orange-600 pl-2 mt-6 first:mt-0">
                      {item.name}
                    </h3>
                  {:else if activeTab === 'all' || activeTab === item.type}
                    <div class="bg-white rounded-lg shadow-sm p-4 flex items-center space-x-4">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        class="w-20 h-20 rounded-lg object-cover"
                        loading="lazy"
                      />
                      <div class="flex-1">
                        <h3 class="font-medium text-lg font-poppins">{item.name}</h3>
                        <p class="text-gray-600 text-sm font-poppins">{item.description}</p>
                        <div class="mt-2 flex items-center space-x-2">
                          <span class="text-lg font-semibold">₹{item.price}</span>
                          {#if item.type === 'veg'}
                            <span class="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Veg</span>
                          {:else}
                            <span class="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">Non-Veg</span>
                          {/if}
                        </div>
                      </div>
                    </div>
                  {/if}
                {/each}
              </div>
            {/if}
          </div>
        {/if}
      {/each}
    {/if}
  </main>
</div>

<FloatingMenu />