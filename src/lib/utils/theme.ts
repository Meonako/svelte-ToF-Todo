export function setTheme(theme: string) {
    if (!document) return;

    const body = document.querySelector("body[data-theme]");
    if (!body) return;

    body.setAttribute("data-theme", theme);
}
