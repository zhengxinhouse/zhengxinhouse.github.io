

new ClipboardJS('#mailAddr');
$(document).ready(function () {
    $(".button-collapse").sideNav();
});
function copyHint()
{
    Materialize.toast('已经粘贴到剪贴板', 1000)
}