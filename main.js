import "./style.css";

import { Editor } from "@tiptap/core";
import StarterKit from "@tiptap/starter-kit";
import TaskItem from "@tiptap/extension-task-item";
import TaskList from "@tiptap/extension-task-list";
import { generateHTML } from "@tiptap/html";

const extensions = [
  StarterKit,
  TaskList,
  TaskItem.configure({
    nested: true,
  }),
];

const editor = new Editor({
  element: document.getElementById("element"),
  extensions,
  content: `\
<ul data-type="taskList">
  <li data-checked="true" data-type="taskItem">
    <label><input type="checkbox" checked="checked" /><span></span></label>
    <div><p>1st item (checked)</p></div>
  </li>
  <li data-checked="false" data-type="taskItem">
    <label><input type="checkbox" /><span></span></label>
    <div><p>2nd item</p></div>
  </li>
  <li data-checked="false" data-type="taskItem">
    <label><input type="checkbox" /><span></span></label>
    <div><p>3rd item (checked)</p></div>
  </li>
</ul>`,
});

const html1Element = document.getElementById("html1");
const html2Element = document.getElementById("html2");

window.getHTML = () => {
  html1Element.innerText = editor.getHTML();
  html2Element.innerText = generateHTML(editor.getJSON(), extensions);
};

window.getHTML();

const app = document.getElementById("app");
app.innerHTML = `\
<button onclick="window.getHTML()">Get HTML</button>
`;
