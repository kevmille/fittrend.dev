<script>
	fetch('https://data.financialresearch.gov/v1/series/dataset?dataset=tyld&start_date=2020-07-23')
		.then(response => response.json())
		.then(data => console.log(data))
</script>