import { Tag } from '@opentiny/react'
import './base.css'
function App() {
  return (
    <div className="demo-tag-create">
      {
        dynamicTags.map((tag, index) => (
          <span v-for="(tag, index) in dynamicTags" :key="'tiny-tag-' + tag + index">
      <tiny-tooltip v-if="tagIndex !== index" effect="dark" :content="tag" placement="top" :disabled="tag.length < 20">
      <tiny-tag closable @close="handleClose(index)" @dblclick="handleEdit(tag, index)">
      {{ tag.length > 20 ? `${tag.slice(0, 20)}...` : tag }}
    </tiny-tag>
          </tiny - tooltip >
    <tiny-input
      v-else
      v-model="inputValue1"
      ref="saveTagInput1"
      size="small"
            @keyup.enter="InputConfirm1(true)"
  @blur="InputConfirm1(false)"
    >
          </tiny - input >
        </span >
        ))
}

<tiny-input
  v-show="inputVisible"
  v-model="inputValue2"
  ref="saveTagInput2"
  size="small"
      @keyup.enter="InputConfirm2"
@blur="InputConfirm2"
  >
    </tiny - input >
  <tiny-button v-show="!inputVisible" class="button-new-tag" size="small" @click="showInput" > + New Tag </tiny - button >
  </div >
  )
}

export default App
