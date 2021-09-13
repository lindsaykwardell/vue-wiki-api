import { ref } from 'vue'

const IDLE = Symbol();
const LOADING = Symbol();
const ERROR = Symbol();

export default () => {
  const url = query => `https://en.wikipedia.org/w/rest.php/v1/search/title?q=${query}&limit=10`

  const query = ref('')
  const results = ref([])
  const status = ref(IDLE)

  const performSearch = async () => {
    status.value = LOADING
    results.value = []

    try {
      const response = await fetch(url(query.value))
      const data = await response.json()
      results.value = data.pages
      status.value = IDLE
    } catch (error) {
      status.value = ERROR
      console.error(error);
    }
  }

  return {
    query,
    results,
    status,
    Status: {
      IDLE,
      LOADING,
      ERROR
    },
    performSearch
  }
}