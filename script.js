// hello
const min = (a) => JSON.stringify(JSON.parse(a))
const form = (a) => JSON.stringify(JSON.parse(a),null,4)
const textarea = document.getElementById('json');
function processJSON(fn,msg) {
  try {
    if (textarea.value != '') {
      textarea.value = fn(textarea.value)
    }
  } catch(er) {
    textarea.value = `Failed to ${msg} JSON..\nError: "${er.message}"`
  }
}
document.getElementById('minbut').onclick = () => processJSON(min,'minify')
document.getElementById('formatbut').onclick = () => processJSON(form,'format')
document.getElementById('copybut').onclick = () => navigator.clipboard.writeText(textarea.value)
document.getElementById('clearbut').onclick = () => textarea.value = ''
