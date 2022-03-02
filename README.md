# Sample Files for Drawnotes

### Click on Files to Preview and Edit

#### [Drawnotes](https://github.com/drawnotes/drawnotes) is a [Next.js](https://nextjs.org) based application for visual and text-based notes.

![excalidraw-svg](https://raw.githubusercontent.com/drawnotes/drawnotes-sample-files/master/sample.svg?raw=true)

[Monaco Editor](https://microsoft.github.io/monaco-editor/) is used for Markdown and source code files, while [Excalidraw](https://excalidraw.com/) powers diagram sketching.

Excalidraw drawings are stored inside a standard SVG file as base64-encoded JSON metadata. This allows them to be previewed and used as normal, but means that only SVGs exported by Excalidraw can be opened in Excalidraw. An SVG import solution is [in development](https://github.com/excalidraw/svg-to-excalidraw).

Drawnotes is 100% stateless and all application data is only stored client-side. The virtual file system is persisted to IndexedDB, application state is saved to localStorage and user details are stored in an [encrypted cookie](https://github.com/vvo/iron-session).

GitHub is currently the only integrated storage solution, with Git operations done entirely in browser by [isomorphic-git](https://github.com/isomorphic-git/isomorphic-git).

**Bonus**

GeoJSON files can be previewed and will be rendered to canvas with [deck.gl](https://deck.gl).

CSV files can be previewed with basic filtering and sorting provided by [react-table](https://react-table.tanstack.com)
