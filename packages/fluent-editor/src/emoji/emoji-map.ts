import emojiList from './emoji-list';

const emojiMap = {};

emojiList.forEach((emojiListObject) => {
  emojiMap[emojiListObject.name] = emojiListObject;
});

export default emojiMap;
