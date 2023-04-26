<script>
import axios from 'axios';

let fetchedData = null;

async function fetchData() {
  try {
    const response = await axios.get('https://data.financialresearch.gov/v1/series/dataset?dataset=tyld&start_date=2020-07-23');
    const fetchedData = response.data;
  } catch (error) {
    console.error(error);
  }
}

fetchData();
</script>

<!-- Render the fetched data in your template -->
{#if fetchedData}
  <h3>{fetchedData.timeseries}</h3>
{:else}
  <p>Loading data...</p>
{/if}