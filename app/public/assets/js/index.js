// Not Made to be production level I made this quickly for testing a websocket server and added the emojies for fun!
// Selectors
var emojis = JSON.parse('[{"name":null,"width":"72","height":"72"},{"name":null,"width":"72","height":"72"},{"name":null,"width":"72","height":"72"},{"name":null,"width":"72","height":"72"},{"name":null,"width":"72","height":"72"},{"name":null,"width":"72","height":"72"},{"name":null,"width":"72","height":"72"},{"name":null,"width":"72","height":"72"},{"name":null,"width":"72","height":"72"},{"name":null,"width":"72","height":"72"},{"name":null,"width":"72","height":"72"},{"name":null,"width":"72","height":"72"},{"name":null,"width":"72","height":"72"},{"name":null,"width":"72","height":"72"},{"name":null,"width":"72","height":"72"},{"name":null,"width":"72","height":"72"},{"name":null,"width":"72","height":"72"},{"name":null,"width":"72","height":"72"},{"name":null,"width":"72","height":"72"},{"name":null,"width":"72","height":"72"},{"name":null,"width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/smirking-face_1f60f.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/persevering-face_1f623.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/disappointed-but-relieved-face_1f625.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/face-with-open-mouth_1f62e.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/hushed-face_1f62f.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/sleepy-face_1f62a.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/tired-face_1f62b.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/sleeping-face_1f634.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/relieved-face_1f60c.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/face-with-stuck-out-tongue_1f61b.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/face-with-stuck-out-tongue-and-winking-eye_1f61c.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/face-with-stuck-out-tongue-and-tightly-closed-eyes_1f61d.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/unamused-face_1f612.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/face-with-cold-sweat_1f613.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/pensive-face_1f614.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/confused-face_1f615.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/astonished-face_1f632.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/slightly-frowning-face_1f641.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/confounded-face_1f616.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/disappointed-face_1f61e.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/worried-face_1f61f.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/face-with-look-of-triumph_1f624.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/crying-face_1f622.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/loudly-crying-face_1f62d.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/frowning-face-with-open-mouth_1f626.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/anguished-face_1f627.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/fearful-face_1f628.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/weary-face_1f629.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/grimacing-face_1f62c.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/face-with-open-mouth-and-cold-sweat_1f630.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/face-screaming-in-fear_1f631.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/flushed-face_1f633.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/dizzy-face_1f635.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/pouting-face_1f621.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/angry-face_1f620.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/face-with-medical-mask_1f637.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/smiling-face-with-halo_1f607.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/smiling-face-with-horns_1f608.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/imp_1f47f.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/japanese-ogre_1f479.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/japanese-goblin_1f47a.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/skull_1f480.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/ghost_1f47b.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/extraterrestrial-alien_1f47d.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/alien-monster_1f47e.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/pile-of-poo_1f4a9.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/smiling-cat-face-with-open-mouth_1f63a.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/grinning-cat-face-with-smiling-eyes_1f638.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/cat-face-with-tears-of-joy_1f639.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/smiling-cat-face-with-heart-shaped-eyes_1f63b.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/cat-face-with-wry-smile_1f63c.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/kissing-cat-face-with-closed-eyes_1f63d.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/weary-cat-face_1f640.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/crying-cat-face_1f63f.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/pouting-cat-face_1f63e.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/see-no-evil-monkey_1f648.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/hear-no-evil-monkey_1f649.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/speak-no-evil-monkey_1f64a.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/baby_1f476.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/boy_1f466.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/girl_1f467.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/man_1f468.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/woman_1f469.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/older-man_1f474.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/older-woman_1f475.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/police-officer_1f46e.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/guardsman_1f482.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/construction-worker_1f477.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/princess_1f478.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/man-with-turban_1f473.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/man-with-gua-pi-mao_1f472.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/person-with-blond-hair_1f471.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/bride-with-veil_1f470.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/baby-angel_1f47c.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/father-christmas_1f385.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/person-frowning_1f64d.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/person-with-pouting-face_1f64e.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/face-with-no-good-gesture_1f645.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/face-with-ok-gesture_1f646.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/information-desk-person_1f481.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/happy-person-raising-one-hand_1f64b.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/person-bowing-deeply_1f647.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/face-massage_1f486.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/haircut_1f487.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/pedestrian_1f6b6.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/runner_1f3c3.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/dancer_1f483.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/woman-with-bunny-ears_1f46f.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/bath_1f6c0.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/bust-in-silhouette_1f464.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/busts-in-silhouette_1f465.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/horse-racing_1f3c7.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/snowboarder_1f3c2.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/surfer_1f3c4.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/rowboat_1f6a3.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/swimmer_1f3ca.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/bicyclist_1f6b4.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/man-and-woman-holding-hands_1f46b.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/two-men-holding-hands_1f46c.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/two-women-holding-hands_1f46d.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/kiss_1f48f.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/couple-with-heart_1f491.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/family_1f46a.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/flexed-biceps_1f4aa.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/white-left-pointing-backhand-index_1f448.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/white-right-pointing-backhand-index_1f449.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/white-up-pointing-backhand-index_1f446.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/white-down-pointing-backhand-index_1f447.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/victory-hand_270c.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/raised-hand_270b.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/ok-hand-sign_1f44c.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/thumbs-up-sign_1f44d.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/thumbs-down-sign_1f44e.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/fisted-hand-sign_1f44a.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/waving-hand-sign_1f44b.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/clapping-hands-sign_1f44f.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/open-hands-sign_1f450.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/person-raising-both-hands-in-celebration_1f64c.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/person-with-folded-hands_1f64f.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/nail-polish_1f485.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/ear_1f442.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/nose_1f443.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/footprints_1f463.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/eyes_1f440.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/eye_1f441.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/tongue_1f445.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/mouth_1f444.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/kiss-mark_1f48b.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/heart-with-arrow_1f498.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/heavy-black-heart_2764.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/beating-heart_1f493.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/broken-heart_1f494.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/two-hearts_1f495.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/sparkling-heart_1f496.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/growing-heart_1f497.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/blue-heart_1f499.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/green-heart_1f49a.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/yellow-heart_1f49b.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/purple-heart_1f49c.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/heart-with-ribbon_1f49d.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/revolving-hearts_1f49e.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/heart-decoration_1f49f.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/love-letter_1f48c.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/sleeping-symbol_1f4a4.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/anger-symbol_1f4a2.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/bomb_1f4a3.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/collision-symbol_1f4a5.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/splashing-sweat-symbol_1f4a6.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/dash-symbol_1f4a8.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/dizzy-symbol_1f4ab.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/speech-balloon_1f4ac.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/thought-balloon_1f4ad.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/eyeglasses_1f453.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/necktie_1f454.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/t-shirt_1f455.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/jeans_1f456.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/dress_1f457.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/kimono_1f458.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/bikini_1f459.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/womans-clothes_1f45a.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/purse_1f45b.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/handbag_1f45c.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/pouch_1f45d.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/school-satchel_1f392.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/mans-shoe_1f45e.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/athletic-shoe_1f45f.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/high-heeled-shoe_1f460.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/womans-sandal_1f461.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/womans-boots_1f462.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/crown_1f451.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/womans-hat_1f452.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/top-hat_1f3a9.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/graduation-cap_1f393.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/lipstick_1f484.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/ring_1f48d.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/gem-stone_1f48e.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/monkey-face_1f435.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/monkey_1f412.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/dog-face_1f436.png","width":"72","height":"72"}]');


state.instanceDom()
state.set("login", false)

function chatLaunch ($s , Nodo , state , launch , email ) {
   $d = document
   const socket = {
       test(){
           $s.on("chat" , msg => {
               console.log( JSON.parse(msg) )
           })
           $s.emit('chat-post', JSON.stringify({
               url:"/api/chat-conversation",
               body:{
                   to:"learfen001@gmail.com",
                   from:"danielgarcia.clases@gmail.com"
               }
           } ) );
       },
       login(){
           let user = Nodo.get("#user").value
           if(state.data.login == false){
               $s.emit('chat message', JSON.stringify({login:user}));
           }
           Chat.launch(user)
           $s.emit('users-list', "");
       },
       error(){
           $s.on("errorTo" , msg => {
               msg = JSON.parse(msg)
               if(msg.errorTo == $s.id){
                   alert(msg.error)
               }
           })
       }
   }
   socket.error()

   class Chat_emojis{
      constructor(){
         this.emojibtn = Nodo.get('.emoji-btn')
         this.emojiwrapper = document.querySelector('.emoji-wrapper')
         this.render()
         this.open()
      }
      render(){
         // Load the Emojies
         for(var i = 0; i < emojis.length; i++){
            if(emojis[i].name == null) continue
            let img = Nodo.push("img",null,this.emojiwrapper)
            img.setAttribute("class","emoji-img")
            img.setAttribute("src",emojis[i].name)
         }
      }
      open(){
         // Emoji Events
         let chat = this
         Nodo.get("body").addEventListener('click', function(){
            chat.emojibtn.classList.remove('open')
         })
         chat.emojibtn.addEventListener('click', function(e){
            e.stopPropagation()
            chat.emojibtn.classList.toggle('open')
         })
         chat.emojiElements = Nodo.getList('.emoji-img')
         for(var i = 0; i < chat.emojiElements.length; i++){
            chat.emojiElements[i].addEventListener('click', ev => {
               console.log("click")
               chat.send(`<img style="width:48px; height: 48px" src="${ev.target.getAttribute('src')}"/>`)
               chat.emojibtn.classList.remove('open')
               chat.render()
            })
         }
      }
   }

   class Chat extends Chat_emojis{
      constructor(){
         super()
         this.inputChat = Nodo.get(".input input")
         this.messages = Nodo.get('.messages')
         this.messages.style = "display:flex;flex-direction:column"
         this.user = ""
         this.friends = Nodo.get("#friends")
         this.lastMessageUser = ""
         Nodo.get(".btn").addEventListener('click', () => { this.send() })
         let chat = this
         this.inputChat.addEventListener('keyup', function(evt){ if(evt.keyCode == 13) chat.send() })
         this.friends.addEventListener("change", e => { if(e.target.value){ chat.conversation() } }) 
      
      }
      conversation(){
         let chat = this
         $s.on("chat" , msg => {
            msg = JSON.parse(msg)
            if(msg.success){
               if(msg.success.length){
                  this.messages.innerHTML = ""
                  for(let a of msg.success){
                     a.text = a.text == null ? "" : a.text
                     if(a.to == chat.user){
                        chat.writeLine(a.text)
                     }else{
                        chat.writeLine(a)
                     }
                  }
                  chat.render()
               }
            }
         })
         $s.emit('chat-post', JSON.stringify({
               url:"/api/chat-conversation",
               body:{
                  to: chat.friends.value,
                  from:chat.user
               }
         } ) );
      }
      send(txt){
         this.inputChat.value = txt == undefined ? this.inputChat.value : txt
         let chat = this
         $s.emit('chat-post', JSON.stringify({
            url:"/api/chat",
            body:{
               "to": chat.friends.value,
               "from": chat.user,
               "text": chat.inputChat.value,
               "link": ""
            }
         } ) );
         this.writeLine(this.inputChat.value)
         this.inputChat.value = ""
      }
      writeLine(text){
         let iamMsg = typeof text == "string"
         if( this.lastMessageUser == iamMsg && this.messages.children.length > 1){
            let index = this.messages.children.length - 2
            let html = iamMsg ? text : text.text
            this.messages.children[index].innerHTML += "<br>" + html
         }else{
            let message = document.createElement('div')
            let hr = document.createElement('hr')
            message.classList.add('message')
            message.innerHTML = iamMsg ? text : text.text
            let style = iamMsg ? 
                                    "margin-right:5px;margin-left:auto;border-radius:15px 0 15px 15px;"
                                    : "margin-right:auto;margin-left:5px;;border-radius:0 15px 15px 15px;" 
            message.style = style + "display:inline-block;max-width:200px;background-color:#4992C1;padding:.5rem"
            this.messages.appendChild(message)
            this.messages.appendChild(hr)
         }
         this.lastMessageUser = iamMsg
         this.messages.scrollTop = this.messages.scrollHeight;
      }
   }
   
   
   let mychat = new Chat()
   mychat.user = launch.email.value
   // revisamos si inicio sesion
   state.set("user", launch.email.value)
   state.set("login", true)

   //mychat.friendsList()
   //mychat.conversation()
           
}
