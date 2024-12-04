<script lang="ts">
	import type { Root } from "$lib/entity";
  let selectedFile=$state<File|null>(null);
  let res2=$state<Root|null>(null)
  $inspect(res2)
  async function submitFile() {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);
      
      try {
        const response = await fetch('http://127.0.0.1:8000/uploadfile', {
          method: 'POST',
          body: formData,
        });
        const res = await response.json();
        const response2=await fetch(`http://127.0.0.1:8000/get_info/`+ res.response.data.id)
        res2=await response2.json()
      } catch (error) {
        console.error(error);
      }
    }
  }
  
  function handleFileSelect(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      selectedFile = input.files[0];
    }
  
  }
</script>
<div class="bg-gray-50 min-h-screen">
  <header class="bg-white shadow-sm">
    <div class="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <img class="h-8 w-auto" src="logo.png" alt="VirusTotal logo">
          <h1 class="ml-3 text-xl font-medium text-gray-900">VirusTotal Clone</h1>
        </div>
        <div class="flex items-center space-x-4">
          <a href="/" class="text-gray-500 hover:text-gray-700">Documentation</a>
          <a href="/" class="text-gray-500 hover:text-gray-700">Community</a>
          <button class="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Sign In</button>
        </div>
      </div>
    </div>
  </header>

  <main class="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
    <div class="bg-white rounded-lg shadow p-6">
      <div class="space-y-6">
        <div class="text-center">
          <h2 class="text-3xl font-bold text-gray-900">Scan for viruses and malware</h2>
          <p class="mt-2 text-gray-600">Upload files, URLs or search for hashes to analyze</p>
        </div>

        <div class="flex items-center justify-center space-x-4">
          <button class="flex-1 px-4 py-3 border rounded-md hover:bg-gray-50 text-left" onclick={handleFileSelect}>
            <div class="font-medium">{selectedFile ? selectedFile.name : 'Выберите файл'}</div>
            <div class="text-sm text-gray-500">Drag & drop or click to upload</div>
          </button>
          <span class="text-gray-500">or</span>
          <input type="text" placeholder="Search hash, URL or filename" class="flex-1 px-4 py-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
          <input type="file" onchange={handleFileSelect}>
          <button class="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700" onclick={submitFile}>Scan</button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="border rounded-md p-4 hover:shadow-md transition">
            <h3 class="font-medium">Latest Scans</h3>
            <ul class="mt-2 space-y-2">
              <li class="text-sm text-gray-600">malware.exe</li>
              <li class="text-sm text-gray-600">suspicious.pdf</li>
              <li class="text-sm text-gray-600">test.doc</li>
            </ul>
          </div>
          <div class="border rounded-md p-4 hover:shadow-md transition">
            <h3 class="font-medium">Detection Stats</h3>
            <div class="mt-2">
              <div class="flex justify-between text-sm">
                <span class="text-gray-600">Clean</span>
                <span class="text-green-600">85%</span>
              </div>
              <div class="flex justify-between text-sm">
                <span class="text-gray-600">Suspicious</span>
                <span class="text-yellow-600">10%</span>
              </div>
              <div class="flex justify-between text-sm">
                <span class="text-gray-600">Malicious</span>
                <span class="text-red-600">5%</span>
              </div>
            </div>
          </div>
          <div class="border rounded-md p-4 hover:shadow-md transition">
            <h3 class="font-medium">Popular Threats</h3>
            <ul class="mt-2 space-y-2">
              <li class="text-sm text-gray-600">Trojan.Win32</li>
              <li class="text-sm text-gray-600">Ransomware.Crypto</li>
              <li class="text-sm text-gray-600">Backdoor.Generic</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </main>
</div>
{#if res2}
  <div class="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
    <div class="bg-white rounded-lg shadow p-6">
      <h2 class="text-2xl font-bold mb-4">Scan Results</h2>
      <div class="grid grid-cols-2 gap-4">
        <div>
          <h3 class="font-medium mb-2">File Information</h3>
          <p><strong>Name:</strong> {res2.info.data.attributes.status}</p>
          <p><strong>Type:</strong> {res2.info.data.attributes.stats.harmless}</p>
        </div>
      </div>
    </div>
  </div>
{/if}


