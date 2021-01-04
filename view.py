import eel
import desktop
import numpy as np
import pandas as pd
from translate import MyTranslator

@eel.expose
def translate(src, src_lang, dest_lang):
    return MyTranslator.translate(src, src_lang, dest_lang)

def main():
    start_dir="web"
    end_point="index.html"
    size=(600,400)
    desktop.start(start_dir, end_point, size)

if __name__ == "__main__":
    main()
