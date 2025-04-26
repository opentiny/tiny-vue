export function checkOtherKey(keyCode) {
  return (
    (keyCode >= 48 && keyCode <= 57) ||
    (keyCode >= 65 && keyCode <= 90) ||
    (keyCode >= 96 && keyCode <= 111) ||
    (keyCode >= 186 && keyCode <= 192) ||
    (keyCode >= 219 && keyCode <= 222) ||
    keyCode === 32
  )
}
