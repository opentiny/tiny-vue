import { createEmoji } from '../utils';
const peopleEmojiArr = [
  ['grinning', '1f600', ':grinning:', '&#128512;', 'p', '1'],
  ['grin', '1f601', ':grin:', '&#128513;', 'p', '2'],
  ['joy', '1f602', ':joy:', '&#128514;', 'p', '3'],
  ['smiley', '1f603', ':smiley:', '&#128515;', 'p', '5'],
  ['smile', '1f604', ':smile:', '&#128516;', 'p', '6'],
  ['sweat_smile', '1f605', ':sweat_smile:', '&#128517;', 'p', '7'],
  ['laughing', '1f606', ':laughing:', '&#128518;', 'p', '8'],
  ['wink', '1f609', ':wink:', '&#128521;', 'p', '9'],
  ['blush', '1f60a', ':blush:', '&#128522;', 'p', '10'],
  ['yum', '1f60b', ':yum:', '&#128523;', 'p', '11'],
  ['sunglasses', '1f60e', ':sunglasses:', '&#128526;', 'p', '12'],
  ['heart_eyes', '1f60d', ':heart_eyes:', '&#128525;', 'p', '13'],
  ['kissing_heart', '1f618', ':kissing_heart:', '&#128536;', 'p', '14'],
  ['kissing', '1f617', ':kissing:', '&#128535;', 'p', '15'],
  ['kissing_smiling_eyes', '1f619', ':kissing_smiling_eyes:', '&#128537;', 'p', '16'],
  ['kissing_closed_eyes', '1f61a', ':kissing_closed_eyes:', '&#128538;', 'p', '17'],
  ['slightly_smiling_face', '1f642', ':slight_smile:', '&#128578;', 'p', '19'],
  ['hugging_face', '1f917', ':hugging:', '&#129303;', 'p', '20'],
  ['thinking_face', '1f914', ':thinking:', '&#129300;', 'p', '21'],
  ['neutral_face', '1f610', ':neutral_face:', '&#128528;', 'p', '22'],
  ['expressionless', '1f611', ':expressionless:', '&#128529;', 'p', '23'],
  ['no_mouth', '1f636', ':no_mouth:', '&#128566;', 'p', '24'],
  ['smirk', '1f60f', ':smirk:', '&#128527;', 'p', '26'],
  ['persevere', '1f623', ':persevere:', '&#128547;', 'p', '27'],
  ['disappointed_relieved', '1f625', ':disappointed_relieved:', '&#128549;', 'p', '28'],
  ['open_mouth', '1f62e', ':open_mouth:', '&#128558;', 'p', '29'],
  ['zipper_mouth_face', '1f910', ':zipper_mouth:', '&#129296;', 'p', '30'],
  ['hushed', '1f62f', ':hushed:', '&#128559;', 'p', '31'],
  ['sleepy', '1f62a', ':sleepy:', '&#128554;', 'p', '32'],
  ['tired_face', '1f62b', ':tired_face:', '&#128555;', 'p', '33'],
  ['sleeping', '1f634', ':sleeping:', '&#128564;', 'p', '34'],
  ['relieved', '1f60c', ':relieved:', '&#128524;', 'p', '35'],
  ['nerd_face', '1f913', ':nerd:', '&#129299;', 'p', '36'],
  ['stuck_out_tongue', '1f61b', ':stuck_out_tongue:', '&#128539;', 'p', '37'],
  ['stuck_out_tongue_winking_eye', '1f61c', ':stuck_out_tongue_winking_eye:', '&#128540;', 'p', '38'],
  ['stuck_out_tongue_closed_eyes', '1f61d', ':stuck_out_tongue_closed_eyes:', '&#128541;', 'p', '39'],
  ['unamused', '1f612', ':unamused:', '&#128530;', 'p', '41'],
  ['sweat', '1f613', ':sweat:', '&#128531;', 'p', '42'],
  ['pensive', '1f614', ':pensive:', '&#128532;', 'p', '43'],
  ['confused', '1f615', ':confused:', '&#128533;', 'p', '44'],
  ['money_mouth_face', '1f911', ':money_mouth:', '&#129297;', 'p', '46'],
  ['astonished', '1f632', ':astonished:', '&#128562;', 'p', '47'],
  ['slightly_frowning_face', '1f641', ':slight_frown:', '&#128577;', 'p', '49'],
  ['confounded', '1f616', ':confounded:', '&#128534;', 'p', '50'],
  ['disappointed', '1f61e', ':disappointed:', '&#128542;', 'p', '51'],
  ['worried', '1f61f', ':worried:', '&#128543;', 'p', '52'],
  ['triumph', '1f624', ':triumph:', '&#128548;', 'p', '53'],
  ['cry', '1f622', ':cry:', '&#128546;', 'p', '54'],
  ['sob', '1f62d', ':sob:', '&#128557;', 'p', '55'],
  ['frowning', '1f626', ':frowning:', '&#128550;', 'p', '56'],
  ['anguished', '1f627', ':anguished:', '&#128551;', 'p', '57'],
  ['fearful', '1f628', ':fearful:', '&#128552;', 'p', '58'],
  ['weary', '1f629', ':weary:', '&#128553;', 'p', '59'],
  ['grimacing', '1f62c', ':grimacing:', '&#128556;', 'p', '60'],
  ['cold_sweat', '1f630', ':cold_sweat:', '&#128560;', 'p', '61'],
  ['scream', '1f631', ':scream:', '&#128561;', 'p', '62'],
  ['flushed', '1f633', ':flushed:', '&#128563;', 'p', '63'],
  ['dizzy_face', '1f635', ':dizzy_face:', '&#128565;', 'p', '64'],
  ['rage', '1f621', ':rage:', '&#128545;', 'p', '65'],
  ['angry', '1f620', ':angry:', '&#128544;', 'p', '66'],
  ['innocent', '1f607', ':innocent:', '&#128519;', 'p', '67'],
  ['mask', '1f637', ':mask:', '&#128567;', 'p', '71'],
  ['face_with_thermometer', '1f912', ':thermometer_face:', '&#129298;', 'p', '72'],
  ['face_with_head_bandage', '1f915', ':head_bandage:', '&#129301;', 'p', '73'],
  ['smiling_imp', '1f608', ':smiling_imp:', '&#128520;', 'p', '76'],
  ['imp', '1f47f', ':imp:', '&#128127;', 'p', '77'],
  ['skull', '1f480', ':skull:', '&#128128;', 'p', '80'],
  ['ghost', '1f47b', ':ghost:', '&#128123;', 'p', '82'],
  ['alien', '1f47d', ':alien:', '&#128125;', 'p', '83'],
  ['space_invader', '1f47e', ':space_invader:', '&#128126;', 'a', '84'],
  ['robot_face', '1f916', ':robot:', '&#129302;', 'p', '85'],
  ['hankey', '1f4a9', ':poop:', '&#128169;', 'p', '86'],
  ['smiley_cat', '1f63a', ':smiley_cat:', '&#128570;', 'p', '87'],
  ['smile_cat', '1f638', ':smile_cat:', '&#128568;', 'p', '88'],
  ['joy_cat', '1f639', ':joy_cat:', '&#128569;', 'p', '89'],
  ['heart_eyes_cat', '1f63b', ':heart_eyes_cat:', '&#128571;', 'p', '90'],
  ['smirk_cat', '1f63c', ':smirk_cat:', '&#128572;', 'p', '91'],
  ['kissing_cat', '1f63d', ':kissing_cat:', '&#128573;', 'p', '92'],
  ['scream_cat', '1f640', ':scream_cat:', '&#128576;', 'p', '93'],
  ['crying_cat_face', '1f63f', ':crying_cat_face:', '&#128575;', 'p', '94'],
  ['pouting_cat', '1f63e', ':pouting_cat:', '&#128574;', 'p', '95'],
  ['muscle', '1f4aa', ':muscle:', '&#128170;', 'p', '1080'],
  ['point_left', '1f448', ':point_left:', '&#128072;', 'p', '1092'],
  ['point_right', '1f449', ':point_right:', '&#128073;', 'p', '1098'],
  ['point_up', '261d', ':point_up:', '&#9757;', 'p', '1104'],
  ['point_up_2', '1f446', ':point_up_2:', '&#128070;', 'p', '1110'],
  ['middle_finger', '1f595', ':middle_finger:', '&#128405;', 'p', '1116'],
  ['point_down', '1f447', ':point_down:', '&#128071;', 'p', '1122'],
  ['v', '270c', ':v:', '&#9996;', 'p', '1128'],
  ['raised_hand_with_fingers_splayed', '1f590', ':hand_splayed:', '&#128400;', 'p', '1158'],
  ['ok_hand', '1f44c', ':ok_hand:', '&#128076;', 'p', '1170'],
  ['thumbsup', '1f44d', ':thumbsup:', '&#128077;', 'p', '1176'],
  ['thumbsdown', '1f44e', ':thumbsdown:', '&#128078;', 'p', '1182'],
  ['fist', '270a', ':fist:', '&#9994;', 'p', '1188'],
  ['facepunch', '1f44a', ':punch:', '&#128074;', 'p', '1194'],
  ['wave', '1f44b', ':wave:', '&#128075;', 'p', '1218'],
  ['clap', '1f44f', ':clap:', '&#128079;', 'p', '1224'],
  ['writing_hand', '270d', ':writing_hand:', '&#9997;', 'p', '1230'],
  ['open_hands', '1f450', ':open_hands:', '&#128080;', 'p', '1236'],
  ['pray', '1f64f', ':pray:', '&#128591;', 'p', '1248'],
  ['ear', '1f442', ':ear:', '&#128066;', 'p', '1266'],
  ['nose', '1f443', ':nose:', '&#128067;', 'p', '1272'],
  ['eyes', '1f440', ':eyes:', '&#128064;', 'p', '1279'],
  ['eye', '1f441', ':eye:', '&#128065;', 'p', '1280'],
  ['lips', '1f444', ':lips:', '&#128068;', 'p', '1283'],
  ['fire', '1f525', ':fire:', '&#128293;', 'n', '1753']
];
export const peopleEmoji = createEmoji(peopleEmojiArr);