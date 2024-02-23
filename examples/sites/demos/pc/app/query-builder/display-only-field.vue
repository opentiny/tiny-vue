<template>
  <div>
    <tiny-query-builder
      ref="queryBuilder"
      :config="config"
      :query="query"
      :on-query-change="getFormateData"
    ></tiny-query-builder>

    <div v-for="(item, key) in formatData" :key="key" class="formatBox">
      <code>{{ item[0] }}</code>
      <br />
      <pre>{{ item[1] }}</pre>
    </div>
  </div>
</template>

<script>
import { QueryBuilder } from '@opentiny/vue'
import { random } from '@opentiny/vue-renderless/common/string'

export default {
  components: {
    TinyQueryBuilder: QueryBuilder
  },
  data() {
    return {
      formatData: '',
      config,
      optionOrder: { displayOnlyField: true },
      query: this.getInitialQuery()
    }
  },
  methods: {
    getFormateData() {
      this.formatData = ['json_without_ids', 'json'].map((format) => {
        const formatQueryOptions = {
          format,
          fields: this.optionOrder.validateQuery ? this.config.fields : undefined,
          parseNumbers: this.optionOrder.parseNumbers
        }

        return [format, this.$refs.queryBuilder?.getFormatQuery(this.query, formatQueryOptions)]
      })
    },
    getInitialQuery() {
      const initialQuery = {
        id: generateID(),
        combinator: 'and',
        not: false,
        rules: [
          {
            id: generateID(),
            field: 'firstName',
            value: 'Stev',
            operator: 'beginsWith'
          },
          {
            id: generateID(),
            field: 'lastName',
            value: 'Vai, Vaughan',
            operator: 'in'
          },
          {
            id: generateID(),
            field: 'age',
            operator: '>',
            value: '28'
          },
          {
            id: generateID(),
            combinator: 'or',
            rules: [
              {
                id: generateID(),
                field: 'isMusician',
                operator: '=',
                value: true
              },
              {
                id: generateID(),
                field: 'instrument',
                operator: '=',
                value: 'Guitar'
              }
            ]
          },
          {
            id: generateID(),
            field: 'groupedField1',
            operator: '=',
            value: 'groupedField4',
            valueSource: 'field'
          },
          {
            id: generateID(),
            field: 'birthdate',
            operator: 'between',
            value: '1954-10-03,1960-06-06'
          }
        ]
      }

      return initialQuery
    }
  }
}

const generateID = () =>
  '00-0-4-2-000'.replace(/[^-]/g, (s) => (((random() + ~~s) * 0x10000) >> s).toString(16).padStart(4, '0'))

const operators = [
  { name: '=', label: '等于' },
  { name: '!=', label: '不等于' },
  { name: '<', label: '小于' },
  { name: '>', label: '大于' },
  { name: '<=', label: '小于等于' },
  { name: '>=', label: '大于等于' },
  { name: 'contains', label: '包含' },
  { name: 'beginsWith', label: '开头为' },
  { name: 'endsWith', label: '结束为' },
  { name: 'doesNotContain', label: '不包含' },
  { name: 'null', label: '为空' },
  { name: 'notNull', label: '不为空' },
  { name: 'between', label: '介于' },
  // { name: 'notBetween', label: 'not between' },
  // { name: 'doesNotBeginWith', label: 'does not begin with' },
  // { name: 'doesNotEndWith', label: 'does not end with' },
  { name: 'in', label: 'in' },
  { name: 'notIn', label: 'not in' }
]

const config = {
  operators,
  displayOnlyField: true,
  showLockButtons: false,
  combinators: [
    {
      'name': 'and',
      'label': '且'
    },
    {
      'name': 'or',
      'label': '或'
    }
  ],
  fields: [
    {
      'name': 'firstName',
      'label': 'First Name',
      'placeholder': '请输入',
      validator: (r) => !!r.value
    },
    {
      'name': 'lastName',
      'label': 'Last Name',
      'placeholder': 'Enter last name',
      'defaultOperator': 'beginsWith',
      validator: (r) => !!r.value
    },
    {
      'name': 'age',
      'label': 'Age',
      'inputType': 'number',
      validator: (r) => !!r.value
    },
    {
      'name': 'isMusician',
      'label': 'Is a musician',
      'valueEditorType': 'checkbox',
      'operators': [
        {
          'name': '=',
          'label': '='
        }
      ],
      'defaultValue': false,
      validator: (r) => !!r.value
    },
    {
      'name': 'instrument',
      'label': 'Primary instrument',
      'valueEditorType': 'select',
      'values': [
        {
          'label': 'Percussion instruments',
          'options': [
            {
              'name': 'Clapstick',
              'label': 'Clapstick'
            },
            {
              'name': 'Cowbell',
              'label': 'Cowbell'
            },
            {
              'name': 'Cymbal',
              'label': 'Cymbal'
            },
            {
              'name': 'Gong',
              'label': 'Gong'
            },
            {
              'name': 'Maraca',
              'label': 'Maraca'
            },
            {
              'name': 'Marimba',
              'label': 'Marimba'
            },
            {
              'name': 'More cowbell',
              'label': 'More cowbell'
            },
            {
              'name': 'Spoon',
              'label': 'Spoon'
            },
            {
              'name': 'Steelpan',
              'label': 'Steelpan'
            },
            {
              'name': 'Tambourine',
              'label': 'Tambourine'
            },
            {
              'name': 'Triangle',
              'label': 'Triangle'
            },
            {
              'name': 'Vibraphone',
              'label': 'Vibraphone'
            },
            {
              'name': 'Washboard',
              'label': 'Washboard'
            },
            {
              'name': 'Wood block',
              'label': 'Wood block'
            },
            {
              'name': 'Wooden fish',
              'label': 'Wooden fish'
            },
            {
              'name': 'Xylophone',
              'label': 'Xylophone'
            }
          ]
        },
        {
          'label': 'Membranophones',
          'options': [
            {
              'name': 'Barrel drum',
              'label': 'Barrel drum'
            },
            {
              'name': 'Bass drum',
              'label': 'Bass drum'
            },
            {
              'name': 'Bongo drums',
              'label': 'Bongo drums'
            },
            {
              'name': 'Conga',
              'label': 'Conga'
            },
            {
              'name': 'Drum',
              'label': 'Drum'
            },
            {
              'name': 'Drum kit',
              'label': 'Drum kit'
            },
            {
              'name': "Jew's harp",
              'label': "Jew's harp"
            },
            {
              'name': 'Octaban',
              'label': 'Octaban'
            },
            {
              'name': 'Samphor',
              'label': 'Samphor'
            },
            {
              'name': 'Snare drum',
              'label': 'Snare drum'
            },
            {
              'name': 'Timpani',
              'label': 'Timpani'
            },
            {
              'name': 'Tom-tom',
              'label': 'Tom-tom'
            }
          ]
        },
        {
          'label': 'Wind instruments',
          'options': [
            {
              'name': 'Accordion',
              'label': 'Accordion'
            },
            {
              'name': 'Air horn',
              'label': 'Air horn'
            },
            {
              'name': 'Bagpipe',
              'label': 'Bagpipe'
            },
            {
              'name': 'Baritone horn',
              'label': 'Baritone horn'
            },
            {
              'name': 'Bassoon',
              'label': 'Bassoon'
            },
            {
              'name': 'Bazooka',
              'label': 'Bazooka'
            },
            {
              'name': 'Beatboxing',
              'label': 'Beatboxing'
            },
            {
              'name': 'Blown bottle',
              'label': 'Blown bottle'
            },
            {
              'name': 'Bugle',
              'label': 'Bugle'
            },
            {
              'name': 'Clarinet',
              'label': 'Clarinet'
            },
            {
              'name': 'Conch',
              'label': 'Conch'
            },
            {
              'name': 'Cornet',
              'label': 'Cornet'
            },
            {
              'name': 'Didgeridoo',
              'label': 'Didgeridoo'
            },
            {
              'name': 'Double bell euphonium',
              'label': 'Double bell euphonium'
            },
            {
              'name': 'Doulophone',
              'label': 'Doulophone'
            },
            {
              'name': 'English horn',
              'label': 'English horn'
            },
            {
              'name': 'Euphonium',
              'label': 'Euphonium'
            },
            {
              'name': 'Flugelhorn',
              'label': 'Flugelhorn'
            },
            {
              'name': 'Flute',
              'label': 'Flute'
            },
            {
              'name': 'French horn',
              'label': 'French horn'
            },
            {
              'name': 'Harmonica',
              'label': 'Harmonica'
            },
            {
              'name': 'Irish flute',
              'label': 'Irish flute'
            },
            {
              'name': 'Jug',
              'label': 'Jug'
            },
            {
              'name': 'Kazoo',
              'label': 'Kazoo'
            },
            {
              'name': 'Melodeon',
              'label': 'Melodeon'
            },
            {
              'name': 'Mezzo-soprano',
              'label': 'Mezzo-soprano'
            },
            {
              'name': 'Oboe',
              'label': 'Oboe'
            },
            {
              'name': 'Ocarina',
              'label': 'Ocarina'
            },
            {
              'name': 'Pan flute',
              'label': 'Pan flute'
            },
            {
              'name': 'Piccolo',
              'label': 'Piccolo'
            },
            {
              'name': 'Pipe organ',
              'label': 'Pipe organ'
            },
            {
              'name': 'Recorder',
              'label': 'Recorder'
            },
            {
              'name': 'Saxophone',
              'label': 'Saxophone'
            },
            {
              'name': 'Slide whistle',
              'label': 'Slide whistle'
            },
            {
              'name': 'Sousaphone',
              'label': 'Sousaphone'
            },
            {
              'name': 'Trombone',
              'label': 'Trombone'
            },
            {
              'name': 'Trumpet',
              'label': 'Trumpet'
            },
            {
              'name': 'Tuba',
              'label': 'Tuba'
            },
            {
              'name': 'Whistle',
              'label': 'Whistle'
            }
          ]
        },
        {
          'label': 'Stringed instruments',
          'options': [
            {
              'name': 'Aeolian harp',
              'label': 'Aeolian harp'
            },
            {
              'name': 'Bandolin',
              'label': 'Bandolin'
            },
            {
              'name': 'Banjo ukulele',
              'label': 'Banjo ukulele'
            },
            {
              'name': 'Cello',
              'label': 'Cello'
            },
            {
              'name': 'Chapman stick',
              'label': 'Chapman stick'
            },
            {
              'name': 'Clavichord',
              'label': 'Clavichord'
            },
            {
              'name': 'Clavinet',
              'label': 'Clavinet'
            },
            {
              'name': 'Double bass',
              'label': 'Double bass'
            },
            {
              'name': 'Dulcimer',
              'label': 'Dulcimer'
            },
            {
              'name': 'Fiddle',
              'label': 'Fiddle'
            },
            {
              'name': 'Guitar',
              'label': 'Guitar'
            },
            {
              'name': 'Hammered dulcimer',
              'label': 'Hammered dulcimer'
            },
            {
              'name': 'Harp',
              'label': 'Harp'
            },
            {
              'name': 'Harpsichord',
              'label': 'Harpsichord'
            },
            {
              'name': 'Lute',
              'label': 'Lute'
            },
            {
              'name': 'Lyre',
              'label': 'Lyre'
            },
            {
              'name': 'Maguhu',
              'label': 'Maguhu'
            },
            {
              'name': 'Mandola',
              'label': 'Mandola'
            },
            {
              'name': 'Mandolin',
              'label': 'Mandolin'
            },
            {
              'name': 'Octobass',
              'label': 'Octobass'
            },
            {
              'name': 'Piano',
              'label': 'Piano'
            },
            {
              'name': 'Sitar',
              'label': 'Sitar'
            },
            {
              'name': 'Ukulele',
              'label': 'Ukulele'
            },
            {
              'name': 'Viol',
              'label': 'Viol'
            },
            {
              'name': 'Violin',
              'label': 'Violin'
            },
            {
              'name': 'Washtub bass',
              'label': 'Washtub bass'
            }
          ]
        },
        {
          'label': 'Electronic instruments',
          'options': [
            {
              'name': 'AlphaSphere',
              'label': 'AlphaSphere'
            },
            {
              'name': 'Audiocubes',
              'label': 'Audiocubes'
            },
            {
              'name': 'Bass pedals',
              'label': 'Bass pedals'
            },
            {
              'name': 'Continuum Fingerboard',
              'label': 'Continuum Fingerboard'
            },
            {
              'name': 'Croix Sonore',
              'label': 'Croix Sonore'
            },
            {
              'name': "Denis d'or",
              'label': "Denis d'or"
            },
            {
              'name': 'Dubreq stylophone',
              'label': 'Dubreq stylophone'
            },
            {
              'name': 'Drum machine',
              'label': 'Drum machine'
            },
            {
              'name': 'Eigenharp',
              'label': 'Eigenharp'
            },
            {
              'name': 'Electric guitar',
              'label': 'Electric guitar'
            },
            {
              'name': 'Electronic keyboard',
              'label': 'Electronic keyboard'
            },
            {
              'name': 'Electronic organ',
              'label': 'Electronic organ'
            },
            {
              'name': 'EWI',
              'label': 'EWI'
            },
            {
              'name': 'Fingerboard synthesizer',
              'label': 'Fingerboard synthesizer'
            },
            {
              'name': 'Hammond organ',
              'label': 'Hammond organ'
            },
            {
              'name': 'Keyboard',
              'label': 'Keyboard'
            },
            {
              'name': 'Keytar',
              'label': 'Keytar'
            },
            {
              'name': 'Kraakdoos',
              'label': 'Kraakdoos'
            },
            {
              'name': 'Laser harp',
              'label': 'Laser harp'
            },
            {
              'name': 'Mellotron',
              'label': 'Mellotron'
            },
            {
              'name': 'MIDI keyboard',
              'label': 'MIDI keyboard'
            },
            {
              'name': 'Omnichord',
              'label': 'Omnichord'
            },
            {
              'name': 'Ondes Martenot',
              'label': 'Ondes Martenot'
            },
            {
              'name': 'Otamatone',
              'label': 'Otamatone'
            },
            {
              'name': 'Sampler',
              'label': 'Sampler'
            },
            {
              'name': 'Seaboard music instrument',
              'label': 'Seaboard music instrument'
            },
            {
              'name': 'Skoog',
              'label': 'Skoog'
            },
            {
              'name': 'Synclavier',
              'label': 'Synclavier'
            },
            {
              'name': 'Synthesizer',
              'label': 'Synthesizer'
            },
            {
              'name': 'Teleharmonium',
              'label': 'Teleharmonium'
            },
            {
              'name': 'Tenori-on',
              'label': 'Tenori-on'
            },
            {
              'name': 'Theremin',
              'label': 'Theremin'
            },
            {
              'name': 'trautonium',
              'label': 'trautonium'
            },
            {
              'name': 'Turntablism',
              'label': 'Turntablism'
            },
            {
              'name': 'Turntable',
              'label': 'Turntable'
            }
          ]
        }
      ],
      'defaultValue': 'Cowbell',
      'operators': [
        {
          'name': '=',
          'label': '='
        },
        {
          'name': 'in',
          'label': 'in'
        }
      ]
    },
    {
      'name': 'alsoPlays',
      'label': 'Also plays',
      'valueEditorType': 'multiselect',
      'values': [
        {
          'label': 'Percussion instruments',
          'options': [
            {
              'name': 'Clapstick',
              'label': 'Clapstick'
            },
            {
              'name': 'Cowbell',
              'label': 'Cowbell'
            },
            {
              'name': 'Cymbal',
              'label': 'Cymbal'
            },
            {
              'name': 'Gong',
              'label': 'Gong'
            },
            {
              'name': 'Maraca',
              'label': 'Maraca'
            },
            {
              'name': 'Marimba',
              'label': 'Marimba'
            },
            {
              'name': 'More cowbell',
              'label': 'More cowbell'
            },
            {
              'name': 'Spoon',
              'label': 'Spoon'
            },
            {
              'name': 'Steelpan',
              'label': 'Steelpan'
            },
            {
              'name': 'Tambourine',
              'label': 'Tambourine'
            },
            {
              'name': 'Triangle',
              'label': 'Triangle'
            },
            {
              'name': 'Vibraphone',
              'label': 'Vibraphone'
            },
            {
              'name': 'Washboard',
              'label': 'Washboard'
            },
            {
              'name': 'Wood block',
              'label': 'Wood block'
            },
            {
              'name': 'Wooden fish',
              'label': 'Wooden fish'
            },
            {
              'name': 'Xylophone',
              'label': 'Xylophone'
            }
          ]
        },
        {
          'label': 'Membranophones',
          'options': [
            {
              'name': 'Barrel drum',
              'label': 'Barrel drum'
            },
            {
              'name': 'Bass drum',
              'label': 'Bass drum'
            },
            {
              'name': 'Bongo drums',
              'label': 'Bongo drums'
            },
            {
              'name': 'Conga',
              'label': 'Conga'
            },
            {
              'name': 'Drum',
              'label': 'Drum'
            },
            {
              'name': 'Drum kit',
              'label': 'Drum kit'
            },
            {
              'name': "Jew's harp",
              'label': "Jew's harp"
            },
            {
              'name': 'Octaban',
              'label': 'Octaban'
            },
            {
              'name': 'Samphor',
              'label': 'Samphor'
            },
            {
              'name': 'Snare drum',
              'label': 'Snare drum'
            },
            {
              'name': 'Timpani',
              'label': 'Timpani'
            },
            {
              'name': 'Tom-tom',
              'label': 'Tom-tom'
            }
          ]
        },
        {
          'label': 'Wind instruments',
          'options': [
            {
              'name': 'Accordion',
              'label': 'Accordion'
            },
            {
              'name': 'Air horn',
              'label': 'Air horn'
            },
            {
              'name': 'Bagpipe',
              'label': 'Bagpipe'
            },
            {
              'name': 'Baritone horn',
              'label': 'Baritone horn'
            },
            {
              'name': 'Bassoon',
              'label': 'Bassoon'
            },
            {
              'name': 'Bazooka',
              'label': 'Bazooka'
            },
            {
              'name': 'Beatboxing',
              'label': 'Beatboxing'
            },
            {
              'name': 'Blown bottle',
              'label': 'Blown bottle'
            },
            {
              'name': 'Bugle',
              'label': 'Bugle'
            },
            {
              'name': 'Clarinet',
              'label': 'Clarinet'
            },
            {
              'name': 'Conch',
              'label': 'Conch'
            },
            {
              'name': 'Cornet',
              'label': 'Cornet'
            },
            {
              'name': 'Didgeridoo',
              'label': 'Didgeridoo'
            },
            {
              'name': 'Double bell euphonium',
              'label': 'Double bell euphonium'
            },
            {
              'name': 'Doulophone',
              'label': 'Doulophone'
            },
            {
              'name': 'English horn',
              'label': 'English horn'
            },
            {
              'name': 'Euphonium',
              'label': 'Euphonium'
            },
            {
              'name': 'Flugelhorn',
              'label': 'Flugelhorn'
            },
            {
              'name': 'Flute',
              'label': 'Flute'
            },
            {
              'name': 'French horn',
              'label': 'French horn'
            },
            {
              'name': 'Harmonica',
              'label': 'Harmonica'
            },
            {
              'name': 'Irish flute',
              'label': 'Irish flute'
            },
            {
              'name': 'Jug',
              'label': 'Jug'
            },
            {
              'name': 'Kazoo',
              'label': 'Kazoo'
            },
            {
              'name': 'Melodeon',
              'label': 'Melodeon'
            },
            {
              'name': 'Mezzo-soprano',
              'label': 'Mezzo-soprano'
            },
            {
              'name': 'Oboe',
              'label': 'Oboe'
            },
            {
              'name': 'Ocarina',
              'label': 'Ocarina'
            },
            {
              'name': 'Pan flute',
              'label': 'Pan flute'
            },
            {
              'name': 'Piccolo',
              'label': 'Piccolo'
            },
            {
              'name': 'Pipe organ',
              'label': 'Pipe organ'
            },
            {
              'name': 'Recorder',
              'label': 'Recorder'
            },
            {
              'name': 'Saxophone',
              'label': 'Saxophone'
            },
            {
              'name': 'Slide whistle',
              'label': 'Slide whistle'
            },
            {
              'name': 'Sousaphone',
              'label': 'Sousaphone'
            },
            {
              'name': 'Trombone',
              'label': 'Trombone'
            },
            {
              'name': 'Trumpet',
              'label': 'Trumpet'
            },
            {
              'name': 'Tuba',
              'label': 'Tuba'
            },
            {
              'name': 'Whistle',
              'label': 'Whistle'
            }
          ]
        },
        {
          'label': 'Stringed instruments',
          'options': [
            {
              'name': 'Aeolian harp',
              'label': 'Aeolian harp'
            },
            {
              'name': 'Bandolin',
              'label': 'Bandolin'
            },
            {
              'name': 'Banjo ukulele',
              'label': 'Banjo ukulele'
            },
            {
              'name': 'Cello',
              'label': 'Cello'
            },
            {
              'name': 'Chapman stick',
              'label': 'Chapman stick'
            },
            {
              'name': 'Clavichord',
              'label': 'Clavichord'
            },
            {
              'name': 'Clavinet',
              'label': 'Clavinet'
            },
            {
              'name': 'Double bass',
              'label': 'Double bass'
            },
            {
              'name': 'Dulcimer',
              'label': 'Dulcimer'
            },
            {
              'name': 'Fiddle',
              'label': 'Fiddle'
            },
            {
              'name': 'Guitar',
              'label': 'Guitar'
            },
            {
              'name': 'Hammered dulcimer',
              'label': 'Hammered dulcimer'
            },
            {
              'name': 'Harp',
              'label': 'Harp'
            },
            {
              'name': 'Harpsichord',
              'label': 'Harpsichord'
            },
            {
              'name': 'Lute',
              'label': 'Lute'
            },
            {
              'name': 'Lyre',
              'label': 'Lyre'
            },
            {
              'name': 'Maguhu',
              'label': 'Maguhu'
            },
            {
              'name': 'Mandola',
              'label': 'Mandola'
            },
            {
              'name': 'Mandolin',
              'label': 'Mandolin'
            },
            {
              'name': 'Octobass',
              'label': 'Octobass'
            },
            {
              'name': 'Piano',
              'label': 'Piano'
            },
            {
              'name': 'Sitar',
              'label': 'Sitar'
            },
            {
              'name': 'Ukulele',
              'label': 'Ukulele'
            },
            {
              'name': 'Viol',
              'label': 'Viol'
            },
            {
              'name': 'Violin',
              'label': 'Violin'
            },
            {
              'name': 'Washtub bass',
              'label': 'Washtub bass'
            }
          ]
        },
        {
          'label': 'Electronic instruments',
          'options': [
            {
              'name': 'AlphaSphere',
              'label': 'AlphaSphere'
            },
            {
              'name': 'Audiocubes',
              'label': 'Audiocubes'
            },
            {
              'name': 'Bass pedals',
              'label': 'Bass pedals'
            },
            {
              'name': 'Continuum Fingerboard',
              'label': 'Continuum Fingerboard'
            },
            {
              'name': 'Croix Sonore',
              'label': 'Croix Sonore'
            },
            {
              'name': "Denis d'or",
              'label': "Denis d'or"
            },
            {
              'name': 'Dubreq stylophone',
              'label': 'Dubreq stylophone'
            },
            {
              'name': 'Drum machine',
              'label': 'Drum machine'
            },
            {
              'name': 'Eigenharp',
              'label': 'Eigenharp'
            },
            {
              'name': 'Electric guitar',
              'label': 'Electric guitar'
            },
            {
              'name': 'Electronic keyboard',
              'label': 'Electronic keyboard'
            },
            {
              'name': 'Electronic organ',
              'label': 'Electronic organ'
            },
            {
              'name': 'EWI',
              'label': 'EWI'
            },
            {
              'name': 'Fingerboard synthesizer',
              'label': 'Fingerboard synthesizer'
            },
            {
              'name': 'Hammond organ',
              'label': 'Hammond organ'
            },
            {
              'name': 'Keyboard',
              'label': 'Keyboard'
            },
            {
              'name': 'Keytar',
              'label': 'Keytar'
            },
            {
              'name': 'Kraakdoos',
              'label': 'Kraakdoos'
            },
            {
              'name': 'Laser harp',
              'label': 'Laser harp'
            },
            {
              'name': 'Mellotron',
              'label': 'Mellotron'
            },
            {
              'name': 'MIDI keyboard',
              'label': 'MIDI keyboard'
            },
            {
              'name': 'Omnichord',
              'label': 'Omnichord'
            },
            {
              'name': 'Ondes Martenot',
              'label': 'Ondes Martenot'
            },
            {
              'name': 'Otamatone',
              'label': 'Otamatone'
            },
            {
              'name': 'Sampler',
              'label': 'Sampler'
            },
            {
              'name': 'Seaboard music instrument',
              'label': 'Seaboard music instrument'
            },
            {
              'name': 'Skoog',
              'label': 'Skoog'
            },
            {
              'name': 'Synclavier',
              'label': 'Synclavier'
            },
            {
              'name': 'Synthesizer',
              'label': 'Synthesizer'
            },
            {
              'name': 'Teleharmonium',
              'label': 'Teleharmonium'
            },
            {
              'name': 'Tenori-on',
              'label': 'Tenori-on'
            },
            {
              'name': 'Theremin',
              'label': 'Theremin'
            },
            {
              'name': 'trautonium',
              'label': 'trautonium'
            },
            {
              'name': 'Turntablism',
              'label': 'Turntablism'
            },
            {
              'name': 'Turntable',
              'label': 'Turntable'
            }
          ]
        }
      ],
      'defaultValue': 'More cowbell',
      'operators': [
        {
          'name': 'in',
          'label': 'in'
        }
      ]
    },
    {
      'name': 'gender',
      'label': 'Gender',
      'operators': [
        {
          'name': '=',
          'label': '='
        }
      ],
      'valueEditorType': 'radio',
      'values': [
        {
          'name': 'M',
          'label': 'Male'
        },
        {
          'name': 'F',
          'label': 'Female'
        },
        {
          'name': 'O',
          'label': 'Other'
        }
      ]
    },
    {
      'name': 'height',
      'label': 'Height'
    },
    {
      'name': 'job',
      'label': 'Job'
    },
    {
      'name': 'description',
      'label': 'Description',
      'valueEditorType': 'textarea'
    },
    {
      'name': 'birthdate',
      'label': 'Birth Date',
      'inputType': 'date'
    },
    {
      'name': 'datetime',
      'label': 'Show Time',
      'inputType': 'datetime-local'
    },
    {
      'name': 'alarm',
      'label': 'Daily Alarm',
      'inputType': 'time'
    },
    {
      'name': 'groupedField1',
      'label': 'Grouped Field 1',
      'comparator': 'groupNumber',
      'groupNumber': 'group1',
      'valueSources': ['field', 'value']
    },
    {
      'name': 'groupedField2',
      'label': 'Grouped Field 2',
      'comparator': 'groupNumber',
      'groupNumber': 'group1',
      'valueSources': ['field', 'value']
    },
    {
      'name': 'groupedField3',
      'label': 'Grouped Field 3',
      'comparator': 'groupNumber',
      'groupNumber': 'group1',
      'valueSources': ['field', 'value']
    },
    {
      'name': 'groupedField4',
      'label': 'Grouped Field 4',
      'comparator': 'groupNumber',
      'groupNumber': 'group1',
      'valueSources': ['field', 'value']
    }
  ]
}
</script>

<style scoped>
.formatBox {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  margin: 15px 5px;
}

code {
  font-size: 14px;
  line-height: 14px;
  text-align: center;
  width: 100%;
  padding: 5px;
}

pre {
  border: 1px solid gray;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background-color: #ffffff;
  white-space: pre-wrap;
}
</style>
