<template>
    <b-row>
        <b-col lg="12">
            <b-alert show dismissible variant="warning">
                <b-row>
                    <b-col lg="10" offset-lg="1" class="covid-alert">
                        <p class="my-0">
                            <b>Help Italy against Coronavirus (COVID-19)</b><br>
                            We are experiencing an unprecedented moment in history and the lives of every one of us has been affected.
                            Many of us are taking action to cope with an event that has so suddently struck the lives of the Italian people and many others across the globe.
                            Be present by entering the <b-badge variant="danger">#againstcoronavirus</b-badge> campaign.<br>
                            <b-link target="_blank" href="https://vittominacori.github.io/cryptogift/against-coronavirus.html">Donate now</b-link>.
                        </p>
                    </b-col>
                </b-row>
            </b-alert>
        </b-col>
    </b-row>
</template>

<script>
  export default {
    name: 'CovidBanner',
  };
</script>

<style>
    .covid-alert {
        font-size: 80%;
    }
</style>