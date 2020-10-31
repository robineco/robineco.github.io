<template>
    <div id="bottombar">
        <div id="middle">
            <div id="content">
                <p>Build with Vuejs by <a id="link" href="https://github.com/robineco">robineco</a></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "bottombar",
}
</script>

<style scoped>
#bottombar {
    display: table;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 3rem;
    background-color: darkslategray;
    text-align: center;
}
#middle {
    display: table-cell;
    vertical-align: middle;
}
#content {
    color: aliceblue;
    font-family: 'Roboto Mono', monospace;
}
#link {
     color: aliceblue;
}
</style>