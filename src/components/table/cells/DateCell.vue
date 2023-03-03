<template>
    <td class="table-date-cell">
        <div v-if="hasValue">
        	<span class="off">{{readable}}</span>
        	<span class="on">{{timeago}}</span>
        	<span class="spacer">{{readable}}</span>
        </div>
    </td>
</template>
<script>
import TableCellMixin from './TableCellMixin.js';
import { DateTime } from 'luxon';

export default {
    mixins: [TableCellMixin],
    computed: {
        hasValue() {
            return this.value !== undefined && this.value !== null;
        },
    	timeago() {
    		return DateTime.fromISO(this.value).toRelative();
    	},
        readable() {

            let value = DateTime.fromISO(this.value);
            let now = DateTime.now();

            //Check against
            let currentYear = now.toFormat('yyyy');
            let currentMonth = now.toFormat('MMM yyyy');

            if (value.toFormat('yyyy') === currentYear) {
                return DateTime.fromISO(this.value).toFormat('h:mm a - dd MMM');
            }




            return DateTime.fromISO(this.value).toFormat('h:mm a - dd MMM yyyy');
        },
    }
}
</script>
<style scoped lang="scss">
td {
    white-space: nowrap;


    div {
        padding: 0.5em 1em;
        margin: 0.1em;
        background: rgba(#555, 0.1);
        border-radius: 5em;
        display: block;
        line-height: 1;
        font-size: 0.7em;
        cursor: pointer;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        text-align: center;
        position:relative;
        // min-width: 100px;
        //color: rgba(#666, 0.8);

        .spacer {
            visibility: hidden !important;
        }
        .on,
        .off {
        	position:absolute;
        	left: 0;
        	width: 100%;
        	transition: opacity 0.1s;
        }

        .on {
        	opacity: 0;
        }

        .off {
        	opacity: 1;
        }

        &:hover {
            background: rgba(#000, 0.1);

            .off {
	        	opacity: 0;
	        }

	        .on {
	        	opacity: 1;
	        }
        }
    }
}
</style>