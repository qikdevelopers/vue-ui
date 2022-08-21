<template>
	<div>
		<flex-row wrap gap vcenter>
			<flex-cell class="cell">
				<div>
					<label>From Date</label>
				
                <input type="date" class="ux-field-focus ux-text-input-multiple" ref="input"  v-model="startDate" />
				</div>
			</flex-cell>
			<flex-cell class="cell">
				<div>
				<label>To Date</label>
				
                <input type="date" class="ux-field-focus ux-text-input-multiple" ref="input"  v-model="endDate" />
				</div>
			</flex-cell>
		</flex-row>
	</div>
</template>
<script>
	
function checkDate(d) {
	var date = new Date(d);
	if (date instanceof Date && !isNaN(date)) {
	    return date;
	}

	return;
}

export default {
	props:{
		modelValue:{
			type:Object,
		}
	},
	data() {
		return {
			model:this.modelValue,
		}
	},
	computed:{
		startDate:{
			get() {
				return checkDate(this.model.startDate)?.toISOString().slice(0, 10);
			},
			set(d) {
				d = checkDate(d);
				if(d) {
					this.model.startDate = d
				} else {
					this.model.startDate = undefined;
				}
			},
		},
		endDate:{
			get() {
				return checkDate(this.model.endDate)?.toISOString().slice(0, 10);
			},
			set(d) {
				d = checkDate(d);
				if(checkDate(d)) {
					this.model.endDate = d
				} else {
					this.model.endDate = undefined;
				}
			},
		},
	},
	watch:{
		model(m) {

			// const startDate = m.startDate;
			// const endDate = m.endDate;

			// if(startDate && endDate) {
			// 	if(new Date(startDate) < new Date(endDate)) {
			// 		m.startDate = new Date(endDate);
			// 	}

			// 	if(new Date(endDate) < new Date(startDate)) {
			// 		m.endDate = new Date(startDate);
			// 	}
			// }

			this.$emit('updated:modelValue', m);
		},
		modelValue(m) {
			this.model = m;
		}
	},

}

</script>
<style lang="scss" scoped>

.cell {
	display:flex;
	min-width: 150px;

	& > div {
		flex:1;
	}

	label {
		display: block;
		font-size: 0.8em;
		margin-bottom: 0.3em;
		text-transform: uppercase;
		font-weight: bold;
		opacity: 0.5;
	}

	input {
		min-width:150px;
		flex:1;
		width:100%;
	}
}
input {
    border-radius: 0.1em;
    padding: 0.5em;
    box-sizing: border-box;
    background: rgba(#000, 0.05);
    border: 1px solid rgba(#000, 0.1);
    font-size: inherit;
    // appearance: none;
    font-family:inherit;
    line-height: 1;
    height: 2.5em;

    &:focus {
        background: none;
        border: 1px solid var(--primary);
        outline: none;
    }
}

</style>