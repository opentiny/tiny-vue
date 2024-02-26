import font from './font';
import lineType from './lineType';
import space from './space';
import border from './border';
import size from './size';
import borderRadius from './borderRadius';

const globalToken = {
  ...font,
  ...lineType,
  ...space,
  ...border,
  ...size,
  ...borderRadius,
};

export default globalToken;
