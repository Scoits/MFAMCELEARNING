#!/usr/bin/env python3
"""Bouwt per module een ZIP voor het Rise 360 Code Block.

Iedere ZIP bevat alleen index.html in de hoofdmap. Per taalbestand
(modules/<id>/tekst.<taal>.json) ontstaat een eigen ZIP; nl-NL heet <id>.zip, andere talen <id>-<taal>.zip. CSS, JavaScript en het logo
zijn ingesloten, zodat er geen externe bestanden of netwerkverzoeken nodig zijn.

Gebruik: python3 build.py [uitvoermap]
Standaard uitvoermap: build/code-blocks (staat in .gitignore).
"""
import base64
import pathlib
import sys
import zipfile

ROOT = pathlib.Path(__file__).resolve().parent
SHARED = ROOT / "shared"
MODULES = ROOT / "modules"

PAGE = """<!doctype html>
<html lang="{lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{title}</title>
<style>
{css}
</style>
</head>
<body>
<div id="app" class="app"></div>
<noscript>Deze oefening heeft JavaScript nodig.</noscript>
<script>window.DRTC_LOGO = "{logo}";
window.UI = {ui};
window.TEXT = {text};</script>
<script>
{data}
</script>
<script>
{engine}
</script>
</body>
</html>
"""


def logo_uri() -> str:
    data = (SHARED / "logo.png").read_bytes()
    return "data:image/png;base64," + base64.b64encode(data).decode()


def languages(mod: pathlib.Path) -> list:
    """Talen van een module: tekst.<taal>.json naast structuur.js, anders alleen nl-NL uit data.js."""
    if (mod / "structuur.js").exists():
        return sorted(p.name.split(".")[1] for p in mod.glob("tekst.*.json"))
    return ["nl-NL"]


def build_module(mod: pathlib.Path, out: pathlib.Path, lang: str) -> pathlib.Path:
    engine_name = (mod / "engine.txt").read_text().strip() if (mod / "engine.txt").exists() else "scenario.js"
    css = (SHARED / "style.css").read_text(encoding="utf-8")
    engine_css = SHARED / engine_name.replace(".js", ".css")
    if engine_css.exists():
        css += "\n" + engine_css.read_text(encoding="utf-8")
    extra_css = mod / "module.css"
    if extra_css.exists():
        css += "\n" + extra_css.read_text(encoding="utf-8")
    if (mod / "structuur.js").exists():
        data = (mod / "structuur.js").read_text(encoding="utf-8")
        text = (mod / f"tekst.{lang}.json").read_text(encoding="utf-8")
    else:
        data = (mod / "data.js").read_text(encoding="utf-8")
        text = "null"
    ui_file = SHARED / f"ui.{lang}.json"
    ui = ui_file.read_text(encoding="utf-8") if ui_file.exists() else (SHARED / "ui.nl-NL.json").read_text(encoding="utf-8")
    html = PAGE.format(
        lang=lang,
        title=mod.name,
        css=css,
        logo=logo_uri(),
        ui=ui,
        text=text,
        data=data,
        engine=(SHARED / engine_name).read_text(encoding="utf-8"),
    )
    name = mod.name if lang == "nl-NL" else f"{mod.name}-{lang}"
    target = out / name
    target.mkdir(parents=True, exist_ok=True)
    (target / "index.html").write_text(html, encoding="utf-8")
    zip_path = out / f"{name}.zip"
    with zipfile.ZipFile(zip_path, "w", zipfile.ZIP_DEFLATED) as z:
        z.write(target / "index.html", "index.html")
    return zip_path


def main() -> None:
    out = pathlib.Path(sys.argv[1]) if len(sys.argv) > 1 else ROOT.parents[1] / "build" / "code-blocks"
    only = sys.argv[2:]  # optioneel: alleen deze modules
    out.mkdir(parents=True, exist_ok=True)
    for mod in sorted(p for p in MODULES.iterdir() if (p / "data.js").exists() or (p / "structuur.js").exists()):
        if only and mod.name not in only:
            continue
        for lang in languages(mod):
            z = build_module(mod, out, lang)
            print(f"{z}  {z.stat().st_size // 1024} kB")


if __name__ == "__main__":
    main()
