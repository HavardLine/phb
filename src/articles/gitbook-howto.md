## Gitbook templating

 * [Gitbook reference](https://gitbookio.gitbooks.io/documentation/content/format/templating.html)

**Example**
```
Current file: {{ file.path }}
Modified: {{ file.mtime }}
```
Outputs:
> Current file: {{ file.path }}  
> Modified: {{ file.mtime }}

## UI Elements

### Notes

`custom/style.css` contain some classes to make it easy to add hints to the reader

```html
<p class="note">A note please</p>
<p class="note tip">A tip note please</p>
<p class="note warning">A warning note please</p>
<p class="note danger">A danger note please</p>
```

<p class="note">A note please</p>
<p class="note tip">A tip note please</p>
<p class="note warning">A warning note please</p>
<p class="note danger">A danger note please</p>

### Code blocks

**Example**
```js
const codeBlock = true
```

### Icons

GitBooks comes with FontAwesome out of the box.  
Use with `<i class="fa">`-tags and just add the class name related to the icon (`fa-<icon name>`).

[Browse available icons](https://fontawesome.com/icons?d=gallery&s=solid&m=free)

**Example**
```html
<div>
  <i class="fa fa-camera-retro"/></i>
  <i class="fa fa-battery-full" style="font-size:3em; color: Tomato"></i>
</div>
```
<div>
  <i class="fa fa-camera-retro"></i>
  <i class="fa fa-battery-full" style="font-size:3em; color: Tomato"></i>
</div>
