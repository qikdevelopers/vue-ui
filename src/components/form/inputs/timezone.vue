<template>
    <div class="native-select" :class="classes">
        <label class="ux-field-title" v-if="showLabel">{{label}} <span class="ux-required-marker" v-if="required">*</span></label>
        <div class="ux-field-description" v-if="showDescription">{{description}}</div>
        <div class="ui-select-button" v-if="singleValue">
            <slot>
                <ux-button tag="div">
                    {{summary}}
                </ux-button>
            </slot>
        </div>
        <select @focus="touch" :multiple="multiValue" v-model="model">
            <option value="" v-if="singleValue && !minimum">None</option>
            <option :value="option.value" v-for="option in selectableOptions">{{option.title}}</option>
        </select>
    </div>
</template>
<script>
import InputMixin from './input-mixin';



function isUndefined(entry) {
    return entry === undefined || typeof entry === 'undefined' || entry === null || String(entry) === 'null' || String(entry) === 'undefined';
}

//////////////////////////

export default {
    props: {
        modelValue: {
            // type: [Object, Array],
        },
    },
    mixins: [InputMixin],
    created() {
        this.model = this.model;
    },
    methods: {
        cleanOutput(val) {
            var self = this;

            if (isUndefined(val)) {
                if (self.multiValue) {
                    val = [];
                } else {
                    val = undefined;
                }
            } else {
                if (self.multiValue) {
                    val = (val || []).filter(Boolean).map(function(i) {
                        return self.getValue(i);
                    })
                } else {
                    val = self.getValue(val);
                }
            }

            return val;
        },
        cleanInput(val) {

            var self = this;

            if (self.multiValue) {
                if (!val) {
                    val = [];
                }

                if (!Array.isArray(val)) {
                    val = [val];
                }

                /////////////////////////////////

                if (self.maximum) {
                    if (val.length > self.maximum) {
                        val.length = self.maximum;
                    }
                }


                val = val.filter(Boolean).map(function(v) {
                    var valueKey = self.getValue(v);
                    return self.returnObject ? self.optionLookup[valueKey] : valueKey;
                })

            } else {
                var valueKey = self.getValue(val);
                val = self.returnObject ? self.optionLookup[valueKey] : valueKey;
            }

            return val;
        },
    },
    computed: {
        returnObject() {
            return this.type == 'reference';
        },
        classes() {
            var array = []

            if (this.multiValue) {
                array.push('multiple');
            } else {
                array.push('single');
            }

            return array;
        },
        // model: {
        //     get() {
        //         let val = this.cleanOutput(this.value);
        //         return val;
        //     },
        //     set(val) {
        //         val = this.cleanInput(val);
        //         // // var val = this.cleanOutput(newValue);
        //         // // var existing = this.cleanOutput(this.value);

        //         // if (newValue != existing) {
        //         //     newValue = this.cleanInput(val);
        //         //     this.value = newValue;
        //         //     this.dispatch();
        //         // }

        //         this.value = val;
        //         this.dispatch();

        //     }
        // },
        optionLookup() {
            var self = this;
            return self.options.reduce(function(set, option) {
                const key = self.getValue(option);
                set[key] = option;
                return set;
            }, {})
        },
        summary() {
            return this.getLabel(this.optionLookup[this.model]) || 'Click to select';
        },
        options() {
            var self = this;

            return [
                "Africa/Abidjan",
                "Africa/Accra",
                "Africa/Addis_Ababa",
                "Africa/Algiers",
                "Africa/Asmera",
                "Africa/Bamako",
                "Africa/Bangui",
                "Africa/Banjul",
                "Africa/Bissau",
                "Africa/Blantyre",
                "Africa/Brazzaville",
                "Africa/Bujumbura",
                "Africa/Cairo",
                "Africa/Casablanca",
                "Africa/Ceuta",
                "Africa/Conakry",
                "Africa/Dakar",
                "Africa/Dar_es_Salaam",
                "Africa/Djibouti",
                "Africa/Douala",
                "Africa/El_Aaiun",
                "Africa/Freetown",
                "Africa/Gaborone",
                "Africa/Harare",
                "Africa/Johannesburg",
                "Africa/Juba",
                "Africa/Kampala",
                "Africa/Khartoum",
                "Africa/Kigali",
                "Africa/Kinshasa",
                "Africa/Lagos",
                "Africa/Libreville",
                "Africa/Lome",
                "Africa/Luanda",
                "Africa/Lubumbashi",
                "Africa/Lusaka",
                "Africa/Malabo",
                "Africa/Maputo",
                "Africa/Maseru",
                "Africa/Mbabane",
                "Africa/Mogadishu",
                "Africa/Monrovia",
                "Africa/Nairobi",
                "Africa/Ndjamena",
                "Africa/Niamey",
                "Africa/Nouakchott",
                "Africa/Ouagadougou",
                "Africa/Porto-Novo",
                "Africa/Sao_Tome",
                "Africa/Tripoli",
                "Africa/Tunis",
                "Africa/Windhoek",
                "America/Anchorage",
                "America/Anguilla",
                "America/Antigua",
                "America/Araguaina",
                "America/Argentina/La_Rioja",
                "America/Argentina/Rio_Gallegos",
                "America/Argentina/Salta",
                "America/Argentina/San_Juan",
                "America/Argentina/San_Luis",
                "America/Argentina/Tucuman",
                "America/Argentina/Ushuaia",
                "America/Aruba",
                "America/Asuncion",
                "America/Bahia",
                "America/Bahia_Banderas",
                "America/Barbados",
                "America/Belem",
                "America/Belize",
                "America/Blanc-Sablon",
                "America/Boa_Vista",
                "America/Bogota",
                "America/Boise",
                "America/Buenos_Aires",
                "America/Cambridge_Bay",
                "America/Campo_Grande",
                "America/Cancun",
                "America/Caracas",
                "America/Catamarca",
                "America/Cayenne",
                "America/Cayman",
                "America/Chicago",
                "America/Chihuahua",
                "America/Coral_Harbour",
                "America/Cordoba",
                "America/Costa_Rica",
                "America/Creston",
                "America/Cuiaba",
                "America/Curacao",
                "America/Danmarkshavn",
                "America/Dawson",
                "America/Dawson_Creek",
                "America/Denver",
                "America/Detroit",
                "America/Dominica",
                "America/Edmonton",
                "America/Eirunepe",
                "America/El_Salvador",
                "America/Fortaleza",
                "America/Glace_Bay",
                "America/Godthab",
                "America/Goose_Bay",
                "America/Grand_Turk",
                "America/Grenada",
                "America/Guadeloupe",
                "America/Guatemala",
                "America/Guayaquil",
                "America/Guyana",
                "America/Halifax",
                "America/Havana",
                "America/Hermosillo",
                "America/Indiana/Knox",
                "America/Indiana/Marengo",
                "America/Indiana/Petersburg",
                "America/Indiana/Tell_City",
                "America/Indiana/Vevay",
                "America/Indiana/Vincennes",
                "America/Indiana/Winamac",
                "America/Indianapolis",
                "America/Inuvik",
                "America/Iqaluit",
                "America/Jamaica",
                "America/Jujuy",
                "America/Juneau",
                "America/Kentucky/Monticello",
                "America/Kralendijk",
                "America/La_Paz",
                "America/Lima",
                "America/Los_Angeles",
                "America/Louisville",
                "America/Lower_Princes",
                "America/Maceio",
                "America/Managua",
                "America/Manaus",
                "America/Marigot",
                "America/Martinique",
                "America/Matamoros",
                "America/Mazatlan",
                "America/Mendoza",
                "America/Menominee",
                "America/Merida",
                "America/Mexico_City",
                "America/Moncton",
                "America/Monterrey",
                "America/Montevideo",
                "America/Montreal",
                "America/Montserrat",
                "America/Nassau",
                "America/New_York",
                "America/Nipigon",
                "America/Nome",
                "America/Noronha",
                "America/North_Dakota/Beulah",
                "America/North_Dakota/Center",
                "America/North_Dakota/New_Salem",
                "America/Ojinaga",
                "America/Panama",
                "America/Pangnirtung",
                "America/Paramaribo",
                "America/Phoenix",
                "America/Port-au-Prince",
                "America/Port_of_Spain",
                "America/Porto_Velho",
                "America/Puerto_Rico",
                "America/Rainy_River",
                "America/Rankin_Inlet",
                "America/Recife",
                "America/Regina",
                "America/Resolute",
                "America/Rio_Branco",
                "America/Santa_Isabel",
                "America/Santarem",
                "America/Santiago",
                "America/Santo_Domingo",
                "America/Sao_Paulo",
                "America/Scoresbysund",
                "America/Sitka",
                "America/St_Barthelemy",
                "America/St_Johns",
                "America/St_Kitts",
                "America/St_Lucia",
                "America/St_Thomas",
                "America/St_Vincent",
                "America/Swift_Current",
                "America/Tegucigalpa",
                "America/Thule",
                "America/Thunder_Bay",
                "America/Tijuana",
                "America/Toronto",
                "America/Tortola",
                "America/Vancouver",
                "America/Whitehorse",
                "America/Winnipeg",
                "America/Yakutat",
                "America/Yellowknife",
                "Antarctica/Casey",
                "Antarctica/Davis",
                "Antarctica/DumontDUrville",
                "Antarctica/Macquarie",
                "Antarctica/Mawson",
                "Antarctica/McMurdo",
                "Antarctica/Palmer",
                "Antarctica/Rothera",
                "Antarctica/Syowa",
                "Antarctica/Vostok",
                "Arctic/Longyearbyen",
                "Asia/Aden",
                "Asia/Almaty",
                "Asia/Amman",
                "Asia/Anadyr",
                "Asia/Aqtau",
                "Asia/Aqtobe",
                "Asia/Ashgabat",
                "Asia/Baghdad",
                "Asia/Bahrain",
                "Asia/Baku",
                "Asia/Bangkok",
                "Asia/Beirut",
                "Asia/Bishkek",
                "Asia/Brunei",
                "Asia/Calcutta",
                "Asia/Chita",
                "Asia/Choibalsan",
                "Asia/Colombo",
                "Asia/Damascus",
                "Asia/Dhaka",
                "Asia/Dili",
                "Asia/Dubai",
                "Asia/Dushanbe",
                "Asia/Hong_Kong",
                "Asia/Hovd",
                "Asia/Irkutsk",
                "Asia/Jakarta",
                "Asia/Jayapura",
                "Asia/Jerusalem",
                "Asia/Kabul",
                "Asia/Kamchatka",
                "Asia/Karachi",
                "Asia/Kathmandu",
                "Asia/Khandyga",
                "Asia/Kolkata",
                "Asia/Krasnoyarsk",
                "Asia/Kuala_Lumpur",
                "Asia/Kuching",
                "Asia/Kuwait",
                "Asia/Macau",
                "Asia/Magadan",
                "Asia/Makassar",
                "Asia/Manila",
                "Asia/Muscat",
                "Asia/Nicosia",
                "Asia/Novokuznetsk",
                "Asia/Novosibirsk",
                "Asia/Omsk",
                "Asia/Oral",
                "Asia/Phnom_Penh",
                "Asia/Pontianak",
                "Asia/Pyongyang",
                "Asia/Qatar",
                "Asia/Qyzylorda",
                "Asia/Rangoon",
                "Asia/Riyadh",
                "Asia/Saigon",
                "Asia/Sakhalin",
                "Asia/Samarkand",
                "Asia/Seoul",
                "Asia/Shanghai",
                "Asia/Singapore",
                "Asia/Srednekolymsk",
                "Asia/Taipei",
                "Asia/Tashkent",
                "Asia/Tbilisi",
                "Asia/Tehran",
                "Asia/Thimphu",
                "Asia/Tokyo",
                "Asia/Ulaanbaatar",
                "Asia/Urumqi",
                "Asia/Ust-Nera",
                "Asia/Vientiane",
                "Asia/Vladivostok",
                "Asia/Yakutsk",
                "Asia/Yekaterinburg",
                "Asia/Yerevan",
                "Atlantic/Azores",
                "Atlantic/Bermuda",
                "Atlantic/Canary",
                "Atlantic/Cape_Verde",
                "Atlantic/Faeroe",
                "Atlantic/Madeira",
                "Atlantic/Reykjavik",
                "Atlantic/South_Georgia",
                "Atlantic/St_Helena",
                "Atlantic/Stanley",
                "Australia/Adelaide",
                "Australia/Brisbane",
                "Australia/Broken_Hill",
                "Australia/Currie",
                "Australia/Darwin",
                "Australia/Hobart",
                "Australia/Lindeman",
                "Australia/Melbourne",
                "Australia/Perth",
                "Australia/Sydney",
                "CST6CDT",
                "EST5EDT",
                "Etc/GMT",
                "Etc/GMT+1",
                "Etc/GMT+10",
                "Etc/GMT+11",
                "Etc/GMT+12",
                "Etc/GMT+2",
                "Etc/GMT+3",
                "Etc/GMT+4",
                "Etc/GMT+5",
                "Etc/GMT+6",
                "Etc/GMT+7",
                "Etc/GMT-1",
                "Etc/GMT-10",
                "Etc/GMT-11",
                "Etc/GMT-12",
                "Etc/GMT-13",
                "Etc/GMT-2",
                "Etc/GMT-3",
                "Etc/GMT-4",
                "Etc/GMT-5",
                "Etc/GMT-6",
                "Etc/GMT-7",
                "Etc/GMT-8",
                "Etc/GMT-9",
                "Europe/Amsterdam",
                "Europe/Andorra",
                "Europe/Astrakhan",
                "Europe/Athens",
                "Europe/Belgrade",
                "Europe/Berlin",
                "Europe/Bratislava",
                "Europe/Brussels",
                "Europe/Bucharest",
                "Europe/Budapest",
                "Europe/Busingen",
                "Europe/Chisinau",
                "Europe/Copenhagen",
                "Europe/Dublin",
                "Europe/Gibraltar",
                "Europe/Guernsey",
                "Europe/Helsinki",
                "Europe/Isle_of_Man",
                "Europe/Istanbul",
                "Europe/Jersey",
                "Europe/Kaliningrad",
                "Europe/Kiev",
                "Europe/Kirov",
                "Europe/Lisbon",
                "Europe/Ljubljana",
                "Europe/London",
                "Europe/Luxembourg",
                "Europe/Madrid",
                "Europe/Malta",
                "Europe/Mariehamn",
                "Europe/Minsk",
                "Europe/Monaco",
                "Europe/Moscow",
                "Europe/Nicosia",
                "Europe/Oslo",
                "Europe/Paris",
                "Europe/Podgorica",
                "Europe/Prague",
                "Europe/Riga",
                "Europe/Rome",
                "Europe/Samara",
                "Europe/San_Marino",
                "Europe/Sarajevo",
                "Europe/Simferopol",
                "Europe/Skopje",
                "Europe/Sofia",
                "Europe/Stockholm",
                "Europe/Tallinn",
                "Europe/Tirane",
                "Europe/Ulyanovsk",
                "Europe/Uzhgorod",
                "Europe/Vaduz",
                "Europe/Vatican",
                "Europe/Vienna",
                "Europe/Vilnius",
                "Europe/Volgograd",
                "Europe/Warsaw",
                "Europe/Zagreb",
                "Europe/Zaporozhye",
                "Europe/Zurich",
                "Indian/Antananarivo",
                "Indian/Chagos",
                "Indian/Christmas",
                "Indian/Cocos",
                "Indian/Comoro",
                "Indian/Kerguelen",
                "Indian/Mahe",
                "Indian/Maldives",
                "Indian/Mauritius",
                "Indian/Mayotte",
                "Indian/Reunion",
                "MST7MDT",
                "PST8PDT",
                "Pacific/Apia",
                "Pacific/Auckland",
                "Pacific/Efate",
                "Pacific/Enderbury",
                "Pacific/Fakaofo",
                "Pacific/Fiji",
                "Pacific/Funafuti",
                "Pacific/Galapagos",
                "Pacific/Guadalcanal",
                "Pacific/Guam",
                "Pacific/Honolulu",
                "Pacific/Johnston",
                "Pacific/Kosrae",
                "Pacific/Kwajalein",
                "Pacific/Majuro",
                "Pacific/Midway",
                "Pacific/Nauru",
                "Pacific/Niue",
                "Pacific/Noumea",
                "Pacific/Pago_Pago",
                "Pacific/Palau",
                "Pacific/Ponape",
                "Pacific/Port_Moresby",
                "Pacific/Rarotonga",
                "Pacific/Saipan",
                "Pacific/Tahiti",
                "Pacific/Tarawa",
                "Pacific/Tongatapu",
                "Pacific/Truk",
                "Pacific/Wake",
                "Pacific/Wallis",
            ].map(function(v) {
                return {
                    title:v,
                    value:v,
                }
            })
        },
        selectableOptions() {
            return this.options;

        },
    }
}
</script>
<style lang="scss" scoped>
.native-select {

    cursor: pointer;

    &.multiple {
        select {
            width: 100%;
            font-size: 1em;
            border: 1px solid rgba(#000, 0.1);
            appearance: none;

            &:focus {
                border: 1px solid var(--primary);
            }
        }
    }

    &.single {
        position: relative;

        .ui-select-button {
            position: relative;
            width: 100%;

            &>.ux-btn {
                display: block;
                text-align: left;
            }
        }

        select {
            cursor: pointer;
            opacity: 0;
            appearance: none;
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
        }
    }


}
</style>