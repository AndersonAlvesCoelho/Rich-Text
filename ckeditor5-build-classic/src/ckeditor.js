/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";

import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials";
import UploadAdapter from "@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter";
import Autoformat from "@ckeditor/ckeditor5-autoformat/src/autoformat";
import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold";
import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic";
import BlockQuote from "@ckeditor/ckeditor5-block-quote/src/blockquote";
import CKFinder from "@ckeditor/ckeditor5-ckfinder/src/ckfinder";
import EasyImage from "@ckeditor/ckeditor5-easy-image/src/easyimage";
import Heading from "@ckeditor/ckeditor5-heading/src/heading";
import Image from "@ckeditor/ckeditor5-image/src/image";
import ImageCaption from "@ckeditor/ckeditor5-image/src/imagecaption";
import ImageStyle from "@ckeditor/ckeditor5-image/src/imagestyle";
import ImageToolbar from "@ckeditor/ckeditor5-image/src/imagetoolbar";
import ImageUpload from "@ckeditor/ckeditor5-image/src/imageupload";
import Indent from "@ckeditor/ckeditor5-indent/src/indent";
import Link from "@ckeditor/ckeditor5-link/src/link";
import List from "@ckeditor/ckeditor5-list/src/list";
import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph";
import PasteFromOffice from "@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice";
import Table from "@ckeditor/ckeditor5-table/src/table";
import TableToolbar from "@ckeditor/ckeditor5-table/src/tabletoolbar";
import TextTransformation from "@ckeditor/ckeditor5-typing/src/texttransformation";
import Underline from "@ckeditor/ckeditor5-basic-styles/src/underline.js";
import FontColor from "@ckeditor/ckeditor5-font/src/fontcolor.js";
import FontFamily from "@ckeditor/ckeditor5-font/src/fontfamily.js";
import FontSize from "@ckeditor/ckeditor5-font/src/fontsize.js";
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment.js';
import ImageInsert from '@ckeditor/ckeditor5-image/src/imageinsert.js';

export default class ClassicEditor extends ClassicEditorBase {}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
	Alignment,
	Essentials,
	UploadAdapter,
	Autoformat,
	Bold,
	Italic,
	BlockQuote,
	CKFinder,
	EasyImage,
	Heading,
	Image,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	ImageInsert,
	Indent,
	Link,
	List,
	Paragraph,
	PasteFromOffice,
	Table,
	TableToolbar,
	TextTransformation,
	Underline,
	FontColor,
	FontFamily,
	FontSize,
];

// Editor configuration.
ClassicEditor.defaultConfig = {
	toolbar: {
		items: [
			"heading",
			"bold",
			"italic",
			"underline",
			"|",
			"fontColor",
			"fontSize",
			"fontFamily",
			"|",
			'alignment',
			"bulletedList",
			"numberedList",
			"indent",
			"outdent",
			"|",
			"link",
			"blockQuote",
			// "imageUpload",
			"imageInsert",
			"insertTable",
			"|",
			"undo",
			"redo",
		],
	},
	image: {
		toolbar: [
			'imageTextAlternative',
			'imageStyle:full',
			'imageStyle:side'
		],
	},
	table: {
		contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"],
	},
	language: "pt-br",
};
