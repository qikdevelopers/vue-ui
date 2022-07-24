<template>
    <flex-column class="wrapper">
        <flex-header>
            <div class="header">
                <h5>{{options.title}}</h5>
                <div>{{options.description}}</div>
            </div>
        </flex-header>
        <flex-body class="body">
            <div class="padder">
                <div class="choice" @click="select(choice)" v-for="choice in options.choices">
                    <flex-row vcenter>
                        <flex-cell>
                            <div v-if="choice.title" class="title">{{choice.title}}</div>
                            <div v-if="choice.description" class="description">{{choice.description}}</div>
                        </flex-cell>
                        <flex-cell shrink>
                            <ux-icon icon="fa-angle-right"/>
                        </flex-cell>
                    </flex-row>
                </div>
            </div>
        </flex-body>
        <flex-footer>
            <div class="padder">
                <!-- <flex-row> -->
                <!-- <flex-cell> -->
                <ux-button @click="dismiss">Cancel</ux-button>
                <!-- </flex-cell>
 -->
                <!-- </flex-row> -->
            </div>
        </flex-footer>
    </flex-column>
</template>
<script>
import ModalMixin from './ModalMixin';

export default {
    data() {
        return {
            selected: null,
        }
    },
    mixins: [ModalMixin],
    methods: {
        select(choice) {
            this.selected = choice;
            this.close(choice);
        }
    },
}
</script>
<style lang="scss" scoped>
.wrapper {
    border-radius: 0.5em;
    overflow: hidden;
    background: #fff;
    text-align: center;
}

h5 {
    font-size: 1.2em;
    margin: 0;
}

.padder {
    padding: 1em;
}

.header {
    padding: 1em;
    border-bottom: 1px solid rgba(#000, 0.1);
}

.footer {
    padding: 1em;
    border-top: 1px solid rgba(#000, 0.1);
}

.body {
    background: rgba(#000, 0.1);
}

.choice {
    padding: 1em;
    border: 1px solid rgba(#000, 0.2);
    background: #fff;
    margin-bottom: 0.1em;
    cursor: pointer;
    border-radius: 0.3em;
    text-align: left;



    &:hover {
        border: 1px solid $primary;
        background: #fafafa;
    }

    .title {
        font-weight: bold;
        font-size: 1.1em;
    }

    .description {
        font-size: 0.8em;
        opacity: 0.5;
    }
}
</style>