<template>
    <div id="terminal-wrapper">
        <div id="terminal">
            <div id="topbar">
                <div id="close-emoji">❌</div>
            </div>
            <div id="content">

                <vue-typed-js v-if="showStart" :strings="['robin@ubuntu:~$ sudo ./introduction.sh']" :contentType="'text'" @onComplete="switchText()">
                    <p class="typing"></p>
                </vue-typed-js>
                
                 <vue-typed-js v-if="showText" :strings="[text]" :contentType="'html'" :showCursor="false" @onComplete="()=> {this.displayTextFinished = true}">
                    <p class="typing"></p>
                </vue-typed-js>

                <vue-typed-js v-if="showGitHub" :strings="[gitHubText]" :contentType="'html'"  @onComplete="exitSkript()">
                    <p class="typing"></p>
                </vue-typed-js>

            </div>
        </div>
</div>
</template>

<script>
export default {
    name: "terminal",
    created() {
        window.addEventListener('keydown', () => {
            if (this.displayTextFinished) {
                this.showText = false
                setTimeout(() => this.showGitHub = true, 500);
            }
        });
    },
    data() {
        return {
            showStart: true,
            showText: false,
            displayTextFinished: false,
            showGitHub: false,
            text: "<p>Hi 👋 I'm Robin <br> Currently I am studying 👨‍💻 Software Engineering in the 5th semester.</p> <br> <p>I have much experience with:</p> <ul><li>🏝️ Java</li><li>⚛️ React</li><li>✅ Vuejs</li><li>🐍 Python</li></ul> <p>My other skills:</p><ul><li>🐧 Linux</li><li>🐋 Docker</li></ul> <br> <p>Press any Key to exit...</p>",
            gitHubText: "Take a look at my GitHub profile for more information: <a href=\"https://github.com/robineco\">GitHub</a>",
        }
    },
    methods: {
        switchText() {
            setTimeout(() => this.showStart = false, 1500);
            setTimeout(() => this.showText = true, 1500);
        },
        exitSkript() {
            setTimeout(() => this.showGitHub = false, 10000);
        }
    }
}
</script>

<style scoped>
#terminal-wrapper {
    text-align: center;
}
#terminal {
    height: 30rem;
    width: 60%;
    display: inline-block;
    background-color: #272727;
    z-index: 1;
}
#topbar {
    height: 2rem;
    width: 100%;
    z-index: 2;
    background-color: #121212;
    text-align: right;
    display: table;
}
#close-emoji {
    display: inline-block;
    margin-top: 0.3rem;
    margin-right: 0.4rem;
}
#content {
    margin: 1rem;
    color: greenyellow;
    text-align: left;
}
#user {
    color: greenyellow;
    font-family: 'Roboto Mono', monospace;
    display: inline-block;
}
</style>
