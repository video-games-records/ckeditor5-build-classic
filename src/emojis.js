/**
 * Custom plugin to insert emojis
 * @link https://ckeditor.com/docs/ckeditor5/latest/framework/guides/creating-simple-plugin.html
 */

import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

class SpecialCharactersEmoji extends Plugin {
	init() {
		const editor = this.editor;

		editor.plugins.get('SpecialCharacters').addItems('Emojis', [
			{ title: 'Happy', character: '😄' } ,
			{ title: 'LOL', character: '😁' },
			{ title: 'Cute', character: '😊' },
			{ title: 'Aww', character: '😆' },
			{ title: 'Whistle', character: '😅' },
			{ title: 'Smile', character: '🙂' },
			{ title: 'WTF', character: '🙃' },
			{ title: 'OK', character: '😉' },
			{ title: 'Love', character: '🥰' },
			{ title: 'Yes', character: '😙' },
			{ title: 'Slurp', character: '😋' },
			{ title: 'What', character: '🤔' },
			{ title: 'Hidden', character: '🤐' },
			{ title: 'So', character: '🤨' },
			{ title: 'Hum', character: '😑' },
			{ title: 'Uhh', character: '😶' },
			{ title: 'Yeah', character: '😏' },
			{ title: 'No', character: '😒' },
			{ title: 'Pff', character: '🙄' },
			{ title: 'Sleep', character: '😴' },
			{ title: 'Sick', character: '🤢' },
			{ title: 'KO', character: '😵' },
			{ title: 'Burnt', character: '🤯' },
			{ title: 'Cool', character: '😎' },
			{ title: 'Well', character: '😕' },
			{ title: 'Sad', character: '☹️' },
			{ title: 'Surprised', character: '😲' },
			{ title: 'Argh', character: '😨' },
			{ title: 'Cry', character: '😭' },
			{ title: 'Damn', character: '😓' },
			{ title: 'Angry', character: '😡' },
			{ title: 'Dead', character: '💀' },
			{ title: 'Robot', character: '🤖' },
		]);
	}
}

export default SpecialCharactersEmoji;
