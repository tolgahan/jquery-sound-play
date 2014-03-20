jquery-sound-play
=====================================


Usage
------------------
Basic :

$.sound.play('sample.mp3');

With timeout :

$.sound.play('sample.mp3', {
   timeout: 4000
});

enable/disable all sounds

$.sound.enabled = false;
$.sound.enabled = true;