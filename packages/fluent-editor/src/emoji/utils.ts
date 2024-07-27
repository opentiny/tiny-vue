export function createEmoji(emojiArr) {
  const emojiList = [];
  emojiArr.forEach(emojiItem => {
    const [ name, unicode, shortname, code_decimal, category, emoji_order ] = emojiItem;
    emojiList.push({
      name,
      unicode,
      shortname,
      code_decimal,
      category,
      emoji_order
    });
  });
  return emojiList;
}
